import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Ensure Bootstrap CSS is included
import './App.css'; // Assuming you have custom styles
import React, { useState } from 'react';

const App = () => {
  return (
    <>
      {/* Spinner Start */}
      <div id="spinner" className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-grow text-primary m-1" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-dark m-1" role="status">
          <span className="sr-only">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary m-1" role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
      {/* Spinner End */}

      {/* Topbar Start */}
      <div className="container-fluid bg-light ps-5 pe-0 d-none d-lg-block">
        <div className="row gx-0">
          <div className="col-md-6 text-center text-lg-start mb-2 mb-lg-0">
            <div className="d-inline-flex align-items-center">
              <small className="py-2"><i className="far fa-clock text-primary me-2"></i>Opening Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed</small>
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-end">
            <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
              <div className="me-3 pe-3 border-end py-2">
                <p className="m-0"><i className="fa fa-envelope-open me-2"></i>Mindlex@gmail.com</p>
              </div>
              <div className="py-2">
                <p className="m-0"><i className="fa fa-phone-alt me-2"></i>+012 345 6789</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Topbar End */}

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="index.html" className="navbar-brand p-0">
          <h1 className="m-0 text-primary"><i className="fa fa-brain me-2"></i>Mindflex Rehabilitation</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="index.php" className="nav-item nav-link active">Home</a>
            <a href="blog.php" className="nav-item nav-link">Blog</a>
            <a href="about.html" className="nav-item nav-link">About</a>
            <a href="service.html" className="nav-item nav-link">Service</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu m-0">
                <a href="price.html" className="dropdown-item">Pricing Plan</a>
                <a href="team.html" className="dropdown-item">Our Therapists</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                <a href="appointment.php" className="dropdown-item">Appointment</a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link">Contact</a>
          </div>
          <button type="button" className="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
          <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle py-2 px-4 ms-3" type="button" id="loginDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              Login
            </button>
            <ul className="dropdown-menu" aria-labelledby="loginDropdown">
              <li><a className="dropdown-item" href="doctor.html">Doctor</a></li>
              <li><a className="dropdown-item" href="loginform.html">Patient</a></li>
              <li><a className="dropdown-item" href="adminlogin.html">Admin</a></li>
            </ul>
          </div>
        </div>
      </nav>
      {/* Navbar End */}

      {/* Full Screen Search Start */}
      <div className="modal fade" id="searchModal" tabindex="-1">
        <div className="modal-dialog modal-fullscreen">
          <div className="modal-content" style={{ background: 'rgba(9, 30, 62, .7)' }}>
            <div className="modal-header border-0">
              <button type="button" className="btn bg-white btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body d-flex align-items-center justify-content-center">
              <div className="input-group" style={{ maxWidth: '600px' }}>
                <input type="text" className="form-control bg-transparent border-primary p-3" placeholder="Type search keyword" />
                <button className="btn btn-primary px-4"><i className="bi bi-search"></i></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Full Screen Search End */}

      {/* Carousel Start */}
      <div className="container-fluid p-0">
        <div id="header-carousel" className="carousel slide carousel-fade" data-bs-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src="img/carousel-1.jpeg" alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <div className="p-3" style={{ maxWidth: '900px' }}>
                  <h5 className="text-white text-uppercase mb-3 animated slideInDown">Welcome To Mindflex</h5>
                  <h1 className="display-1 text-white mb-md-4 animated zoomIn">Your Trusted Partner In Rehabilitation</h1>
                  <a href="appointment.html" className="btn btn-primary py-md-3 px-md-5 me-3 animated slideInLeft">Appointment</a>
                  <a href="#" className="btn btn-secondary py-md-3 px-md-5 animated slideInRight">Contact Us</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Carousel End */}

      {/* Banner Start */}
      <div className="container-fluid banner mb-5">
        <div className="container">
          <div className="row gx-0">
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.1s">
              <div className="bg-primary d-flex flex-column p-5" style={{ height: '300px' }}>
                <center><h3 className="text-white mb-3">Virtual Therapy</h3></center>
                <div className="d-flex justify-content-between text-white mb-3">
                  Explore a new dimension of therapy with VRTherapy—where recovery meets technology
                </div>
                <br />
                <a href="loginform.html" className="btn btn-primary py-2 px-4 ms-3 custom-button">Join Now</a>
                <style>
                  {`
                    .custom-button {
                      background-color: #091E3E;
                      color: white;
                    }
                    .custom-button:hover {
                      background-color: #F57E57;
                      color: white;
                    }
                  `}
                </style>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.3s">
              <div className="bg-dark d-flex flex-column p-5" style={{ height: '300px' }}>
                <center><h3 className="text-white mb-3">Search A Doctor</h3></center>
                <div className="date mb-3" id="date" data-target-input="nearest">
                  <input type="text" className="form-control bg-light border-0 datetimepicker-input" placeholder="Appointment Date" data-target="#date" data-toggle="datetimepicker" style={{ height: '40px' }} />
                </div>
                <select className="form-select bg-light border-0 mb-3" style={{ height: '40px' }}>
                  <option selected>Choose A Doctor</option>
                  <option value="1">Doctor 1</option>
                  <option value="2">Doctor 2</option>
                </select>
                <a href="appointment.html" className="btn btn-primary py-2 px-4 custom-button">Search</a>
                <style>
                  {`
                    .custom-button {
                      background-color: #091E3E;
                      color: white;
                    }
                    .custom-button:hover {
                      background-color: #F57E57;
                      color: white;
                    }
                  `}
                </style>
              </div>
            </div>
            <div className="col-lg-4 wow zoomIn" data-wow-delay="0.5s">
              <div className="bg-secondary d-flex flex-column p-5" style={{ height: '300px' }}>
                <center><h3 className="text-white mb-3">Professional Team</h3></center>
                <div className="d-flex justify-content-between text-white mb-3">
                  Our team of certified specialists provides exceptional care and personalized rehabilitation solutions.
                </div>
                <a href="team.html" className="btn btn-primary py-2 px-4 ms-3 custom-button">Meet Our Team</a>
                <style>
                  {`
                    .custom-button {
                      background-color: #091E3E;
                      color: white;
                    }
                    .custom-button:hover {
                      background-color: #F57E57;
                      color: white;
                    }
                  `}
                </style>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}
       {/* Banner Start */}
       <div className="container-fluid py-5">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <h1 className="display-5 mb-4">Start Your Path to Recovery Today</h1>
              <a href="appointment.php" className="btn btn-primary py-2 px-4 ms-3">Book Now</a>
            </div>
          </div>
        </div>
      </div>
      {/* Banner End */}

      {/* About Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title mb-4">
                <h5 className="position-relative d-inline-block text-primary text-uppercase">About Us</h5>
                <h1 className="display-5 mb-0">Building the Future of Rehabilitation Together</h1>
              </div>
              <h4 className="text-body fst-italic mb-4">
                We're Mindflex, a passionate startup dedicated to providing exceptional rehabilitation services. We may be new, but we're backed by the expertise of established institutions like the Karachi Down Syndrome Program (KDSP) and Brain and Mind Diagnostics and Rehabilitation.
              </h4>
              <p className="mb-4">
                We're a new kind of rehabilitation company one built on collaboration and a commitment to your success. Our team of highly skilled professionals brings their expertise to create a personalized plan tailored to your unique needs and goals. We use cutting-edge techniques while keeping services accessible through flexible scheduling and fair pricing. We believe in a supportive and encouraging environment, fostering your healing journey every step of the way.
              </p>
              <div className="row g-3">
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                  <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>VR Therapy</h5>
                  <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Professional Doctors</h5>
                </div>
                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                  <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>24/7 Opened</h5>
                  <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Fair Prices</h5>
                </div>
              </div>
            </div>
            <div className="col-lg-5" style={{ minHeight: '500px' }}>
              <div className="position-relative h-100">
                <img className="position-absolute w-100 h-100 rounded wow zoomIn" data-wow-delay="0.9s" src="img/pilates-vr.jpg" style={{ objectFit: 'cover' }} alt="About Us" />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* About End */}

      {/* Service Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5 mb-5">
            <div className="col-lg-5 wow zoomIn" data-wow-delay="0.3s" style={{ minHeight: '400px' }}>
              <div className="twentytwenty-container position-relative h-100 rounded overflow-hidden">
                <img className="position-absolute w-100 h-100" src="img/sad.jpg" style={{ objectFit: 'cover' }} alt="Before" />
                <img className="position-absolute w-100 h-100" src="img/happy.jpg" style={{ objectFit: 'cover' }} alt="After" />
              </div>
            </div>
            <div className="col-lg-7">
              <div className="section-title mb-5">
                <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Services</h5>
                <h1 className="display-5 mb-0">Reclaim Your Wellbeing: We Offer Top-Tier Rehab with Cutting-Edge VR Technology</h1>
              </div>
              <div className="row g-5">
                <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                  <div className="rounded-top overflow-hidden">
                    <img className="img-fluid" src="img/A5.jpg" alt="Cognitive Behavioral Therapy" />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Cognitive Behavioral Therapy</h5>
                  </div>
                </div>
                <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.9s">
                  <div className="rounded-top overflow-hidden">
                    <img className="img-fluid" src="img/A1.jpg" alt="Dialectical Behavior Therapy (DBT)" />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Dialectical Behavior Therapy (DBT)</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="row g-5 wow fadeInUp" data-wow-delay="0.1s">
            <div className="col-lg-7">
              <div className="row g-5">
                <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.3s">
                  <div className="rounded-top overflow-hidden">
                    <img className="img-fluid" src="img/A2.jpg" alt="Neurological Physiotherapy" />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Neurological Physiotherapy</h5>
                  </div>
                </div>
                <div className="col-md-6 service-item wow zoomIn" data-wow-delay="0.6s">
                  <div className="rounded-top overflow-hidden">
                    <img className="img-fluid" src="img/A3.jpg" alt="Orthopedic Physiotherapy" />
                  </div>
                  <div className="position-relative bg-light rounded-bottom text-center p-4">
                    <h5 className="m-0">Orthopedic Physiotherapy</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Offer Start */}
      <div className="container-fluid bg-offer my-5 py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-7 wow zoomIn" data-wow-delay="0.6s">
              <div className="offer-text text-center rounded p-5">
                <h1 className="display-5 text-white">Save 50% On Your First Virtual Checkup</h1>
                <p className="text-white mb-4">
                  Experience the convenience and effectiveness of online consultations with our top-rated therapists. Don't miss this chance to connect with our expert therapists and explore personalized VR therapy options. Call today to book your appointment!
                </p>
                <a href="appointment.html" className="btn btn-dark py-3 px-5 me-3">Appointment</a>
                <a href="" className="btn btn-light py-3 px-5">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Offer End */}

      {/* Pricing Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-5">
              <div className="section-title mb-4">
                <h5 className="position-relative d-inline-block text-primary text-uppercase">Pricing Plan</h5>
                <h1 className="display-5 mb-0">We Offer Fair Prices for Our Treatment</h1>
              </div>
              <p className="mb-4">
                We prioritize fair and transparent pricing for our rehab plans. During your consultation, we'll create a personalized plan outlining services and costs so you can make informed decisions. We offer flexible payment options like self-pay, card payment, and payment plans. Our goal is to ensure you get the treatment you need without financial stress.
              </p>
            </div>
            <div className="col-lg-7">
              <div className="row g-4">
                <div className="col-md-6">
                  <div className="pricing-item bg-light rounded p-4">
                    <h5 className="mb-3">Standard Plan</h5>
                    <h1 className="mb-4">$99 <span className="text-body fs-6">/Session</span></h1>
                    <ul className="list-unstyled mb-0">
                      <li className="d-flex align-items-center mb-3"><i className="fa fa-check-circle text-primary me-3"></i> 60-Minute Session</li>
                      <li className="d-flex align-items-center mb-3"><i className="fa fa-check-circle text-primary me-3"></i> VR Therapy</li>
                      <li className="d-flex align-items-center mb-3"><i className="fa fa-check-circle text-primary me-3"></i> Personalized Plan</li>
                      <li className="d-flex align-items-center mb-3"><i className="fa fa-check-circle text-primary me-3"></i> Flexible Scheduling</li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="pricing-item bg-light rounded p-4">
                    <h5 className="mb-3">Premium Plan</h5>
                    <h1 className="mb-4">$149 <span className="text-body fs-6">/Session</span></h1>
                    <ul className="list-unstyled mb-0">
                      <li className="d-flex align-items-center mb-3"><i className="fa fa-check-circle text-primary me-3"></i> 90-Minute Session</li>
                      <li className="d-flex align-items-center mb-3"><i className="fa fa-check-circle text-primary me-3"></i> Advanced VR Therapy</li>
                      <li className="d-flex align-items-center mb-3"><i className="fa fa-check-circle text-primary me-3"></i> Extended Support</li>
                      <li className="d-flex align-items-center mb-3"><i className="fa fa-check-circle text-primary me-3"></i> Priority Scheduling</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Pricing End */}

      {/* Contact Start */}
      <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container">
          <div className="row g-5">
            <div className="col-lg-7">
              <div className="section-title mb-4">
                <h5 className="position-relative d-inline-block text-primary text-uppercase">Contact Us</h5>
                <h1 className="display-5 mb-0">Get in Touch for Personalized Assistance</h1>
              </div>
              <form>
                <div className="row g-3">
                  <div className="col-12 col-sm-6">
                    <input type="text" className="form-control border-0 py-3" placeholder="Your Name" required />
                  </div>
                  <div className="col-12 col-sm-6">
                    <input type="email" className="form-control border-0 py-3" placeholder="Your Email" required />
                  </div>
                  <div className="col-12">
                    <input type="text" className="form-control border-0 py-3" placeholder="Your Phone" required />
                  </div>
                  <div className="col-12">
                    <textarea className="form-control border-0 py-3" rows="5" placeholder="Your Message" required></textarea>
                  </div>
                  <div className="col-12 text-center">
                    <button type="submit" className="btn btn-primary py-3 px-5">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-lg-5">
              <div className="bg-light rounded p-4">
                <h5 className="mb-4">Contact Information</h5>
                <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i> Suite#213 Sumya Business Avenue, MACHS, Karachi</p>
                <p className="mb-2"><i className="fa fa-phone-alt me-3"></i> +92 123 456789</p>
                <p className="mb-2"><i className="fa fa-envelope me-3"></i> info@mindlex.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      /* Contact End */
      const TeamMember = ({ image, name, role }) => (
  <div className="col-lg-4 wow slideInUp">
    <div className="team-item">
      <div className="position-relative rounded-top" style={{ zIndex: 1 }}>
        <img className="img-fluid rounded-top w-100" src={image} alt="" />
        <div className="position-absolute top-100 start-50 translate-middle bg-light rounded p-2 d-flex">
          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-twitter fw-normal"></i></a>
          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
          <a className="btn btn-primary btn-square m-1" href="#"><i className="fab fa-instagram fw-normal"></i></a>
        </div>
      </div>
      <div className="team-text position-relative bg-light text-center rounded-bottom p-4 pt-5">
        <h4 className="mb-2">{name}</h4>
        <p className="text-primary mb-0">{role}</p>
      </div>
    </div>
  </div>
);

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="chatbot-button" onClick={toggleChatbot}>
        <img className="chatbot-icon" src="chatbot-icon.png" alt="Chatbot" />
      </button>
      {isOpen && (
        <div className="chatbot-container">
          <div className="chatbot-header">
            <span>Chatbot</span>
            <button className="close-button" onClick={toggleChatbot}>X</button>
          </div>
          <div className="chatbot-body" id="chatbot-body">
            <div className="message other">
              <div className="message-content">Hello! How can I assist you?</div>
            </div>
          </div>
          <div className="chatbot-input">
            <input type="text" id="chatbot-input" placeholder="Type your message..." />
            <button onClick={() => {
              const messageInput = document.getElementById('chatbot-input').value.trim();
              if (messageInput !== '') {
                // Simulate a response
                setTimeout(() => {
                  const response = "This is a placeholder response from the bot.";
                  document.getElementById('chatbot-body').innerHTML += `
                    <div class="message other">
                      <div class="message-content">${response}</div>
                    </div>
                  `;
                }, 1000);
              }
            }}>Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

const App = () => (
  <div>
    <div className="container-fluid py-5">
      <div className="container">
        <div className="row g-5">
          <div className="col-lg-4 wow slideInUp" data-wow-delay="0.1s">
            <div className="section-title bg-light rounded h-100 p-5">
              <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Dentist</h5>
              <h1 className="display-6 mb-4">Meet Our Certified & Experienced Doctors</h1>
              <a href="appointment.php" className="btn btn-primary py-3 px-5">Appointment</a>
            </div>
          </div>
          <TeamMember image="img/team-1.jpg" name="Dr. Zara" role="Industrial Psychologist" />
          <TeamMember image="img/team-2.jpg" name="Dr. Maryam Naeem" role="Clinical Psychologist" />
          {/* Add more TeamMember components as needed */}
        </div>
      </div>
    </div>

    <div className="container-fluid position-relative pt-5 wow fadeInUp" data-wow-delay="0.1s" style={{ zIndex: 1 }}>
      <div className="container">
        <div className="bg-primary p-5">
          <form className="mx-auto" style={{ maxWidth: '600px' }}>
            <h3>Subscribe to our Newsletter</h3>
            <div className="input-group">
              <input type="text" className="form-control border-white p-3" placeholder="Your Email" />
              <button className="btn btn-dark px-4">Sign Up</button>
            </div>
          </form>
        </div>
      </div>
    </div>

    <Chatbot />

    <div className="container-fluid bg-dark text-light py-5 wow fadeInUp" data-wow-delay="0.3s" style={{ marginTop: '-75px' }}>
      <div className="container pt-5">
        <div className="row g-5 pt-4">
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Quick Links</h3>
            <div className="d-flex flex-column justify-content-start">
              <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Home</a>
              <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>About Us</a>
              <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Our Services</a>
              <a className="text-light mb-2" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Latest Blog</a>
              <a className="text-light" href="#"><i className="bi bi-arrow-right text-primary me-2"></i>Contact Us</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Get In Touch</h3>
            <p className="mb-2"><i className="bi bi-geo-alt text-primary me-2"></i>123 Street, New York, USA</p>
            <p className="mb-2"><i className="bi bi-envelope-open text-primary me-2"></i>info@example.com</p>
            <p className="mb-0"><i className="bi bi-telephone text-primary me-2"></i>+012 345 67890</p>
          </div>
          <div className="col-lg-3 col-md-6">
            <h3 className="text-white mb-4">Follow Us</h3>
            <div className="d-flex">
              <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-twitter fw-normal"></i></a>
              <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-facebook-f fw-normal"></i></a>
              <a className="btn btn-lg btn-primary btn-lg-square rounded me-2" href="#"><i className="fab fa-linkedin-in fw-normal"></i></a>
              <a className="btn btn-lg btn-primary btn-lg-square rounded" href="#"><i className="fab fa-instagram fw-normal"></i></a>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <div className="container-fluid text-light py-4" style={{ background: '#051225' }}>
      <div className="container">
        <div className="row g-0">
          <div className="col-md-6 text-center text-md-start">
            <p className="mb-md-0">&copy; <a className="text-white border-bottom" href="#">Mindflex Rehabilitation</a>. All Rights Reserved.</p>
          </div>
          <div className="col-md-6 text-center text-md-end">
            <p className="mb-0">Designed by <a className="text-white border-bottom" href="https://htmlcodex.com">Nameera Bushra Hiba Maryam</a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default App;
