<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Add Blogs</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">

</head>
<body>
    <?php
        include "config.php";
        $mysql = "SELECT * from blog";
        $result = mysqli_query($conn,$mysql);

    ?>
    <form method="post" class="w-50 bg-dark p-3 mx-auto" enctype="multipart/form-data">
        <h1 class="text-light text-center mb-5">ADD A Blog </h1>
        <input type="text" placeholder="Enter name of the Blog" name="c_name" class="form-control"><br>
        <input type="text" placeholder="Enter short description" name="c_des" class="form-control"><br>

        <input type="file" placeholder="Enter product name" name="files[]" multiple="multiple" class="form-control"><br>
        <br>
        <div class="text-center"><button name="submit" class="btn btn-warning w-50" >Submit</button></div>
    </form>
    <?php
        if(isset($_POST['submit'])){
            $uploaddir = "uploads/";
            for ($i=0; $i < count($_FILES['files']['tmp_name']) ; $i++) { 
                $fileupload = $uploaddir.basename($_FILES['files']['name'][$i]);
                $images[] = basename($_FILES['files']['name'][$i]);
                $filetype = strtolower(pathinfo($fileupload,PATHINFO_EXTENSION));
                if($filetype == 'jpg' || $filetype == "jpeg" || $filetype == "png" || $filetype == "jfif"){
                    if(move_uploaded_file($_FILES['files']['tmp_name'][$i],$fileupload)){
                    }
                }
            }
            $n_image = implode(",",$images);
            print_r($n_image);
        
            $carname = $_POST['c_name'];
            $cardes = $_POST['c_des'];

            $insert = "INSERT INTO `blog`(`c_name`,`c_des`, `n_image`) VALUES ('$c_name','$c_des','$n_image')";
            mysqli_query($conn,$insert);
            header("location:blog.php");
        }

    ?>
</body>
</html>