<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>details</title>
 
<style>
  .detail-main-div{
    width: 90%;
    margin: auto;

  }
  .details-pera{
    width: 100%;
    margin: auto;
    /* background-color:red; */

}
.imgs-div{
  width: 100%;
  height: 500px;
display: flex;

/* background-color:black; */
}
.detail-img {

  width: 90%;
    height: 300px;
    border-style: hidden;
    display:flex;
}
.piclist{
  margin-left:10%;
  display:flex;

}
.deatil-top-heading {
    position: absolute;
    top: 200px;
    left: 20%;
    text-align: center;
    font-size: 4rem;
    color: white;
    font-family: muli, sans-serif, Helvetica, Arial, sans-serif;
}
</style>

<link href="style-news.css" rel="stylesheet" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-GLhlTQ8iRABdZLl6O3oVMWSktQOp6b7In1Zl3/Jr59b6EGGoI1aFkw7cmDA6j6gD" crossorigin="anonymous" />
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
    integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css">
</head>

<body>

 
  <?php
    include "config.php";
    $id = $_GET['N_id'];
    $mysql = "SELECT * from blog where N_id = '$id'";
    $result = mysqli_query($conn,$mysql);
    $row = mysqli_fetch_assoc($result);
    $images = explode(",",$row['n_image']);
?>
  <header class="main-header">
  
    <img class="head-img" src="uploads/<?php echo $images[0]?>"  />
    <div class="deatil-top-heading">
      <p class="card-title"><b><?php echo $row["c_name"] ?></b></p>
    </div>
  </header>
  
  <div class="detail-main-div">
    <div class="details-pera">
      <section>
        <p><span style="font-weight: 400;"><?php echo $row["p1"] ?></span></p>   
        <p><span style="font-weight: 400;"><?php echo $row["p2"] ?></span></p>
        <p><span style="font-weight: 400;"><?php echo $row["p3"] ?></span></p>
        <p><span style="font-weight: 400;"><?php echo $row["p4"] ?></span></p>
        <p><span style="font-weight: 400;"><?php echo $row["p5"] ?></span></p>
        <p><span style="font-weight: 400;"><?php echo $row["p6"] ?></span></p>
        <p><span style="font-weight: 400;"><?php echo $row["p7"] ?></span></p>
        <p><span style="font-weight: 400;"><?php echo $row["p8"] ?></span></p>

      </section>
</div>
    </div>
    <!-- <div class="imgs-div">
        <div style="border-style: hidden;" class="detail-img"><img style="border-style: hidden;"
  src="uploads/" ></div>
        <div class="detail-img" ><img  src="" ></div>
        <div class="detail-img"><img  ></div>
    </div>
  </div> -->
  <div class="imgs-div">
               <div class="piclist">
                   <?php
                        for ($i=0; $i <  count($images); $i++) { 
                    ?>
                    <div><img class="detail-img" src="uploads/<?php echo $images[$i]?>" alt=""></div>
                    <?php
                        }
                   ?>
               </div>
            </div>



  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
    integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
    crossorigin="anonymous"></script>
</body>

</html>