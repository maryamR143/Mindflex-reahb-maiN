<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="utf-8">
    <title>Mindflex Rehabilitation</title>
    <meta content="width=device-width, initial-scale=1.0" name="viewport">
    <meta content="Free HTML Templates" name="keywords">
    <meta content="Free HTML Templates" name="description">

    <!-- Favicon -->
    <link href="img/favicon.ico" rel="icon">

    <!-- Addblog css -->
    <link href="style-news.css" rel="stylesheet" />

    <!-- Google Web Fonts -->
    <link rel="preconnect" href="https://fonts.gstatic.com">
    <link href="https://fonts.googleapis.com/css2?family=Jost:wght@500;600;700&family=Open+Sans:wght@400;600&display=swap" rel="stylesheet"> 

    <!-- Icon Font Stylesheet -->
    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.10.0/css/all.min.css" rel="stylesheet">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.4.1/font/bootstrap-icons.css" rel="stylesheet">

    <!-- Libraries Stylesheet -->
    <link href="lib/owlcarousel/assets/owl.carousel.min.css" rel="stylesheet">
    <link href="lib/animate/animate.min.css" rel="stylesheet">
    <link href="lib/tempusdominus/css/tempusdominus-bootstrap-4.min.css" rel="stylesheet" />
    <link href="lib/twentytwenty/twentytwenty.css" rel="stylesheet" />

    <!-- Customized Bootstrap Stylesheet -->
    <link href="css/bootstrap.min.css" rel="stylesheet">

    <!-- Template Stylesheet -->
    <link href="css/style.css" rel="stylesheet">
    <style>
        /* Basic CSS for styling */
        
        body {
            font-family: Arial, sans-serif;
            margin: 0;
            padding: 0;
            background-color: #f3f3f3;
        }
        .container {
            width: 80%;
            margin: 20px auto;
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            border-radius: 5%;
        }
        .blog-post {
            width: calc(33.33% - 10px);
            background-color: #fff;
            padding: 20px;
            margin-bottom: 20px;
            border: 1px solid #ddd;
            border-radius: 5%;
            box-shadow: 0 2px 4px rgba(0,0,0,0.1);
            display: flex;
            flex-direction: column;
        }
        .blog-post h2 {
            margin-top: 0;
        }
        .blog-post p {
            margin-top: 5px;
            line-height: 1.6;
            text-align: center;
            flex-grow: 0; /* Take remaining space */
        }
        .blog-post img {
            max-width: 100%;
            height: auto;
            border-radius: 5px;
        }
        .blog-post a {
            display: block;
            text-align: right;
            color: #007bff;
            text-decoration: none;
            margin-top: 10px;
        }
        .blog-post a:hover {
            text-decoration: underline;
        }
    </style>
</head>

<body>
    <?php
        include "config.php";
        session_start();
        $mysql = "SELECT * from blog";
        $result = mysqli_query($conn,$mysql);
        
    ?>
    <!-- Spinner Start -->
    <div id="spinner" class="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div class="spinner-grow text-primary m-1" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-dark m-1" role="status">
            <span class="sr-only">Loading...</span>
        </div>
        <div class="spinner-grow text-secondary m-1" role="status">
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    <!-- Spinner End -->


    <!-- Topbar Start -->
    <div class="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
        <div class="row gx-0">
            <div class="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
                <div class="d-inline-flex align-items-center">
                    <small class="py-2"><i class="far fa-clock text-primary me-2"></i>Opening Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed </small>
                </div>
            </div>
            <div class="col-md-6 text-center text-lg-end">
                <div class="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                    <div class="me-3 pe-3 border-end py-2">
                        <p class="m-0"><i class="fa fa-envelope-open me-2"></i>mindflex@gmail.com</p>
                    </div>
                    <div class="py-2">
                        <p class="m-0"><i class="fa fa-phone-alt me-2"></i>+92 345 6789</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Topbar End -->


    <!-- Navbar Start -->
    <nav class="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="index.php" class="navbar-brand p-0">
            <h1 class="m-0 text-primary"><i class="fa fa-brain me-2"></i>Mindflex Rehabilitation</h1>
        </a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav ms-auto py-0">
                <a href="index.php" class="nav-item nav-link">Home</a>
                <a href="blog.php" class="nav-item nav-link">Blog</a>
                <a href="about.html" class="nav-item nav-link">About</a>
                <a href="service.html" class="nav-item nav-link">Service</a>
                <div class="nav-item dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                    <div class="dropdown-menu m-0">
                        <a href="price.html" class="dropdown-item">Pricing Plan</a>
                        <a href="team.html" class="dropdown-item">Our Doctors</a>
                        <a href="testimonial.html" class="dropdown-item">Testimonial</a>
                        <a href="appointment.php" class="dropdown-item">Appointment</a>
                    </div>
                </div>
                <a href="contact.html" class="nav-item nav-link active">Contact</a>
            </div>
            <button type="button" class="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i class="fa fa-search"></i></button>
            <!-- <a href="loginform.html" class="btn btn-primary py-2 px-4 ms-3">Login</a> -->
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle py-2 px-4 ms-3" type="button" id="loginDropdown" data-bs-toggle="dropdown" aria-expanded="false">
                  Login
                </button>
                <ul class="dropdown-menu" aria-labelledby="loginDropdown">
                    <li><a class="dropdown-item" href="doctor.html">Doctor</a></li>
                  <li><a class="dropdown-item" href="loginform.html">Patient</a></li>
                  <li><a class="dropdown-item" href="adminlogin.html">Admin</a></li> 
                </ul>
              </div>
        </div>
    </nav>
    <!-- Navbar End -->


    <!-- Full Screen Search Start -->
    <div class="modal fade" id="searchModal" tabindex="-1">
        <div class="modal-dialog modal-fullscreen">
            <div class="modal-content" style="background: rgba(9, 30, 62, .7);">
                <div class="modal-header border-0">
                    <button type="button" class="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body d-flex align-items-center justify-content-center">
                    <div class="input-group" style="max-width: 600px;">
                        <input type="text" class="form-control bg-transparent border-primary p-3" placeholder="Type search keyword">
                        <button class="btn btn-primary px-4"><i class="bi bi-search"></i></button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <!-- Full Screen Search End -->


    <!-- Hero Start -->
    <div class="container-fluid bg-primary py-5 hero-header mb-5">
        <div class="row py-3">
            <div class="col-12 text-center">
                <h1 class="display-3 text-white animated zoomIn">Blogs</h1>
                <a href="" class="h4 text-white">Home</a>
                <i class="far fa-circle text-white px-2"></i>
                <a href="" class="h4 text-white">Blogs</a>
            </div>
        </div>
    </div>
    <!-- Hero End -->

<!-- blog start -->
  <div class="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s"> 

    

 <div class="news-main">
    <div class="container-fluid m-div">
        <div class="row mt-4 pb-4 pt-2  n-img-size"  >
        
 <?php
 while($row = mysqli_fetch_assoc($result)){
     $arr = explode(",",$row['n_image']);
?>
 <!-- <div class="col-5  ">
 <div class="card card-block card-5 m-img-size "> -->
 <div class="container">
    <div class="blog-post">
    
 <a href="detail.php?N_id=<?php echo $row['N_id']?>">
     <img src="uploads/<?php echo $arr[0]?>" class="card-img-top" alt="...">
     
 </a>
     
 <p class="n-text">
     <p class="card-title"><b><?php echo $row["c_name"] ?></b></p>
     <p class="card-title"><?php echo $row["c_des"] ?></p>
     
     <a href="detail.php">Read more</a>
     
     </p>
 </div>

 </div>
 <?php
     }
    ?>
</div>

</div>
</div>





<script
src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js"
integrity="sha384-w76AqPfDkMBDXo30jS1Sgez6pr3x5MlQ1ZAGC+nuZB+EYdgRZgiwxhTBTkF7CXvN"
crossorigin="anonymous"
></script>

 <div class="container">
    <div class="blog-post">
        <img src="img/A1.jpg" alt="Mental Health Image">
        <h2>Mental Health: Understanding Anxiety Disorders</h2>
        <p>Anxiety disorders are a common mental health issue...</p>
        <a href="mental-health-anxiety.html">Read more</a>
    </div>
    <div class="blog-post">
        <img src="img/A3.jpg" alt="Physical Therapy Image">
        <h2>Physical Therapy: Benefits of Regular Exercise</h2>
        <p>Exercise is crucial for maintaining physical health...</p>
        <a href="physical-therapy-exercise.html">Read more</a>
    </div>
    <div class="blog-post">
        <img src="img/A12.jpeg" alt="Occupational Therapy Image">
        <h2>Occupational Therapy: Coping Strategies for Stress</h2>
        <p>Stress is a common problem in today's society...</p>
        <a href="occupational-therapy-stress.html">Read more</a>
    </div>
    <div class="blog-post">
        <img src="img/A2.jpg" alt="Mental Health Image">
        <h2>Mental Health: Understanding Anxiety Disorders</h2>
        <p>Anxiety disorders are a common mental health issue...</p>
        <a href="mental-health-anxiety.html">Read more</a>
    </div>
    <div class="blog-post">
        <img src="img/A1.jpg" alt="Mental Health Image">
        <h2>Mental Health: Understanding Anxiety Disorders</h2>
        <p>Anxiety disorders are a common mental health issue...</p>
        <a href="mental-health-anxiety.html">Read more</a>
    </div>
    <div class="blog-post">
        <img src="img/A3.jpg" alt="Physical Therapy Image">
        <h2>Physical Therapy: Benefits of Regular Exercise</h2>
        <p>Exercise is crucial for maintaining physical health...</p>
        <a href="physical-therapy-exercise.html">Read more</a>
    </div>
    <div class="blog-post">
        <img src="img/A12.jpeg" alt="Occupational Therapy Image">
        <h2>Occupational Therapy: Coping Strategies for Stress</h2>
        <p>Stress is a common problem in today's society...</p>
        <a href="occupational-therapy-stress.html">Read more</a>
    </div>
    <div class="blog-post">
        <img src="img/A2.jpg" alt="Mental Health Image">
        <h2>Mental Health: Understanding Anxiety Disorders</h2>
        <p>Anxiety disorders are a common mental health issue...</p>
        <a href="mental-health-anxiety.html">Read more</a>
    </div>
   
    <!-- Add more blog posts as needed -->
</div>
</div>























    <!-- Chatbot button -->
<button class="chatbot-button" id="chatbot-button" onclick="toggleChatbot()">
    <img class="chatbot-icon" src="img/chatbot-.png" alt="Chatbot">
</button>

<!-- Chatbot container -->
<div class="chatbot-container" id="chatbot-container">
    <div class="chatbot-header">
        <span>Chatbot</span>
        <button class="close-button" onclick="closeChatbot()">X</button>
    </div>
    <div class="chatbot-body" id="chatbot-body">
        <div class="message other">
            <div class="message-content">
                Hello! How can I assist you?
            </div>
        </div>
    </div>
    <div class="chatbot-input">
        <input type="text" id="chatbot-input" placeholder="Type your message...">
        <button onclick="sendMessage()">Send</button>
    </div>
</div>

<script>
    function toggleChatbot() {
        var chatbotContainer = document.getElementById('chatbot-container');
        var chatbotButton = document.getElementById('chatbot-button');
        if (chatbotContainer.style.display === 'none' || chatbotContainer.style.display === '') {
            chatbotContainer.style.display = 'block';
            chatbotButton.style.display = 'none';
        } else {
            chatbotContainer.style.display = 'none';
            chatbotButton.style.display = 'block';
        }
    }

    function closeChatbot() {
        var chatbotContainer = document.getElementById('chatbot-container');
        var chatbotButton = document.getElementById('chatbot-button');
        chatbotContainer.style.display = 'none';
        chatbotButton.style.display = 'block';
    }

    function sendMessage() {
        var messageInput = document.getElementById('chatbot-input').value.trim();
        if (messageInput !== '') {
            appendMessage('self', messageInput);
            document.getElementById('chatbot-input').value = '';
            // Here you would typically send the message to your backend or process it
            // with your chatbot and receive a response.
            // For demonstration purposes, I'll simulate a response after a delay.
            setTimeout(function() {
                var response = "This is a placeholder response from the bot.";
                appendMessage('other', response);
            }, 1000);
        }
    }

    function appendMessage(sender, message) {
        var chatBody = document.getElementById('chatbot-body');
        var messageClass = sender === 'self' ? 'self' : 'other';
        var messageDiv = document.createElement('div');
        messageDiv.classList.add('message', messageClass);
        var messageContent = document.createElement('div');
        messageContent.classList.add('message-content');
        messageContent.textContent = message;
        messageDiv.appendChild(messageContent);
        chatBody.appendChild(messageDiv);
        chatBody.scrollTop = chatBody.scrollHeight; // Scroll to bottom
    }
</script>

<!-- Footer Start -->
<div class="container-fluid bg-dark text-light py-5 wow fadeInUp" data-wow-delay="0.3s" style="margin-top: -75px;">
    <div class="container pt-5">
        <div class="row g-5 pt-4">
            <div class="col-lg-3 col-md-6">
                <h3 class="text-white mb-4">Quick Links</h3>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                    <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                    <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                    <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                    <a class="text-light" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                </div>
            </div>
            <!-- <div class="col-lg-3 col-md-6">
                <h3 class="text-white mb-4">Popular Links</h3>
                <div class="d-flex flex-column justify-content-start">
                    <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Home</a>
                    <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>About Us</a>
                    <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
                    <a class="text-light mb-2" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
                    <a class="text-light" href="#"><i class="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
                </div>
            </div> -->
            <div class="col-lg-3 col-md-6">
                <h3 class="text-white mb-4">Get In Touch</h3>
                <p class="mb-2"><i class="bi bi-geo-alt text-primary me-2"></i>123 Street, New York, USA</p>
                <p class="mb-2"><i class="bi bi-envelope-open text-primary me-2"></i>info@example.com</p>
                <p class="mb-0"><i class="bi bi-telephone text-primary me-2"></i>+012 345 67890</p>
            </div>
            <div class="col-lg-3 col-md-6">
                <h3 class="text-white mb-4">Follow Us</h3>
                <div class="d-flex">
                    <a class="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i class="fab fa-twitter fw-normal"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i class="fab fa-facebook-f fw-normal"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i class="fab fa-linkedin-in fw-normal"></i></a>
                    <a class="btn btn-lg btn-primary btn-lg-square rounded" href="#"><i class="fab fa-instagram fw-normal"></i></a>
                </div>
            </div>
        </div>
    </div>
</div>
<div class="container-fluid text-light py-4" style="background: #051225;">
    <div class="container">
        <div class="row g-0">
            <div class="col-md-6 text-center text-md-start">
                <p class="mb-md-0">&copy; <a class="text-white border-bottom" href="#">Mindflex Rehabilitation</a>. All Rights Reserved.</p>
            </div>
            <div class="col-md-6 text-center text-md-end">
                <p class="mb-0">Designed by <a class="text-white border-bottom" href="https://htmlcodex.com">Nameera Bushra Hiba Maryam </a></p>
            </div>
        </div>
    </div>
</div>
<!-- Footer End -->


<!-- Back to Top -->
<!-- <a href="#" class="btn btn-lg btn-primary btn-lg-square rounded back-to-top"><i class="bi bi-arrow-up"></i></a> -->


<!-- JavaScript Libraries -->
<script src="https://code.jquery.com/jquery-3.4.1.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0/dist/js/bootstrap.bundle.min.js"></script>
<script src="lib/wow/wow.min.js"></script>
<script src="lib/easing/easing.min.js"></script>
<script src="lib/waypoints/waypoints.min.js"></script>
<script src="lib/owlcarousel/owl.carousel.min.js"></script>
<script src="lib/tempusdominus/js/moment.min.js"></script>
<script src="lib/tempusdominus/js/moment-timezone.min.js"></script>
<script src="lib/tempusdominus/js/tempusdominus-bootstrap-4.min.js"></script>
<script src="lib/twentytwenty/jquery.event.move.js"></script>
<script src="lib/twentytwenty/jquery.twentytwenty.js"></script>

<!-- Template Javascript -->
<script src="js/main.js"></script>
</body>

</html>