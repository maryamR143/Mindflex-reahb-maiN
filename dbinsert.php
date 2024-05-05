<?php

    include "config.php";
    $firstname=$_POST['firstname'];
    $lastname=$_POST['lastname'];
    $age=$_POST['age'];
    $username=$_POST['$username'];
    $email=$_POST['email'];
    $password=$_POST['password'];
    

    $mysql="INSERT INTO users (firstname,lastname,age,username,email,password) VALUES ('$firstname','$lastname','$age','$username','$email','$pasword')";
    
    if($conn->query($mysql)){
       
            header("location:appointment.php");
    }
    else{
        echo"some error occured";
    }

    

    
    ?>