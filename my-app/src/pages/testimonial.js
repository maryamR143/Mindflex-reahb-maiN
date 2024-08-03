import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Make sure this path is correct based on your project structure

const App = () => {
  const [chatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  const closeChatbot = () => {
    setChatbotVisible(false);
  };

  const sendMessage = () => {
    const input = document.getElementById('chatbot-input');
    const messageInput = input.value.trim();
    if (messageInput !== '') {
      appendMessage('self', messageInput);
      input.value = '';
      // Simulate a response
      setTimeout(() => {
        const response = "This is a placeholder response from the bot.";
        appendMessage('other', response);
      }, 1000);
    }
  };

  const appendMessage = (sender, message) => {
    const chatBody = document.getElementById('chatbot-body');
    const messageClass = sender === 'self' ? 'self' : 'other';
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', messageClass);
    const messageContent = document.createElement('div');
    messageContent.classList.add('message-content');
    messageContent.textContent = message;
    messageDiv.appendChild(messageContent);
    chatBody.appendChild(messageDiv);
    chatBody.scrollTop = chatBody.scrollHeight; // Scroll to bottom
  };

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
              <small className="py-2"><i className="far fa-clock text-primary me-2"></i>Opening Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed </small>
            </div>
          </div>
          <div className="col-md-6 text-center text-lg-end">
            <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
              <div className="me-3 pe-3 border-end py-2">
                <p className="m-0"><i className="fa fa-envelope-open me-2"></i>info@example.com</p>
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
        <a href="index.php" className="navbar-brand p-0">
          <h1 className="m-0 text-primary"><i className="fa fa-brain me-2"></i>Mindflex Rehabilitation</h1>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="index.php" className="nav-item nav-link">Home</a>
            <a href="blog.php" className="nav-item nav-link">Blog</a>
            <a href="about.html" className="nav-item nav-link">About</a>
            <a href="service.html" className="nav-item nav-link">Service</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu m-0">
                <a href="price.html" className="dropdown-item">Pricing Plan</a>
                <a href="team.html" className="dropdown-item">Our Dentist</a>
                <a href="testimonial.html" className="dropdown-item active">Testimonial</a>
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

      {/* Hero Start */}
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">Testimonial</h1>
            <a href="" className="h4 text-white">Home</a>
            <i className="far fa-circle text-white px-2"></i>
            <a href="" className="h4 text-white">Testimonial</a>
          </div>
        </div>
      </div>
      {/* Hero End */}

      {/* Testimonial Start */}
      <div className="container-fluid bg-primary bg-testimonial py-5 mb-5 wow fadeInUp" data-wow-delay="0.1s" style={{ marginTop: '90px' }}>
        <div className="container py-5">
          <div className="row justify-content-center">
            <div className="col-lg-7">
              <div className="owl-carousel testimonial-carousel rounded p-5 wow zoomIn" data-wow-delay="0.6s">
                <div className="testimonial-item text-center text-white">
                  <img className="img-fluid mx-auto rounded mb-4" src="img/testimonial-1.jpg" alt="" />
                  <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                  <hr className="mx-auto w-25" />
                  <h4 className="text-white mb-0">Client Name</h4>
                </div>
                <div className="testimonial-item text-center text-white">
                  <img className="img-fluid mx-auto rounded mb-4" src="img/testimonial-2.jpg" alt="" />
                  <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                  <hr className="mx-auto w-25" />
                  <h4 className="text-white mb-0">Client Name</h4>
                </div>
                <div className="testimonial-item text-center text-white">
                  <img className="img-fluid mx-auto rounded mb-4" src="img/testimonial-3.jpg" alt="" />
                  <p className="fs-5">Dolores sed duo clita justo dolor et stet lorem kasd dolore lorem ipsum. At lorem lorem magna ut et, nonumy labore diam erat. Erat dolor rebum sit ipsum.</p>
                  <hr className="mx-auto w-25" />
                  <h4 className="text-white mb-0">Client Name</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Testimonial End */}

      {/* Footer Start */}
      <footer className="container-fluid bg-light text-dark mt-5 pt-5 wow fadeInUp" data-wow-delay="0.1s">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-3 col-md-6">
              <h5 className="section-title ff-secondary mb-4">Get In Touch</h5>
              <p><i className="fa fa-map-marker-alt me-3"></i>123 Street, New York, USA</p>
              <p><i className="fa fa-envelope me-3"></i>info@example.com</p>
              <p><i className="fa fa-phone-alt me-3"></i>+012 345 6789</p>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="section-title ff-secondary mb-4">Quick Links</h5>
              <a className="btn btn-link" href="">About Us</a>
              <a className="btn btn-link" href="">Contact Us</a>
              <a className="btn btn-link" href="">Privacy Policy</a>
              <a className="btn btn-link" href="">Terms & Conditions</a>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="section-title ff-secondary mb-4">Follow Us</h5>
              <div className="d-flex">
                <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-linkedin-in"></i></a>
                <a className="btn btn-primary btn-square me-2" href="#"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <h5 className="section-title ff-secondary mb-4">Newsletter</h5>
              <p>Sign up for our newsletter to get the latest updates and offers.</p>
              <div className="position-relative mx-auto" style={{ maxWidth: '400px' }}>
                <input className="form-control border-primary w-100 py-3 ps-4 pe-5" type="text" placeholder="Your email address" />
                <button type="button" className="btn btn-primary py-2 px-4 position-absolute top-0 end-0 mt-2 me-2">Sign Up</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      {/* Footer End */}

      {/* Back to Top Button */}
      <a href="#" className="btn btn-primary py-2 px-3 back-to-top"><i className="fa fa-chevron-up"></i></a>

      {/* Chatbot Start */}
      <div id="chatbot" className={`chatbot ${chatbotVisible ? 'active' : ''}`}>
        <div className="chatbot-header">
          <button className="btn btn-primary" onClick={closeChatbot}>Close</button>
        </div>
        <div id="chatbot-body" className="chatbot-body">
          {/* Messages will be appended here */}
        </div>
        <div className="chatbot-footer">
          <input id="chatbot-input" type="text" className="form-control" placeholder="Type your message here" />
          <button className="btn btn-primary" onClick={sendMessage}>Send</button>
        </div>
      </div>
      <button className="btn btn-primary" onClick={toggleChatbot}>Chat</button>
      {/* Chatbot End */}

      {/* Script for Bootstrap */}
      <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js" integrity="sha384-oBqDVmMz4fnFO5Gy7Pp2KNm4yVcVfdTTdA3e3D5l1leWX+zpE77jR0I5J69Ok51s7" crossorigin="anonymous"></script>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/js/bootstrap.min.js" integrity="sha384-cuUo8cXyLPY4gF1LLl0gQ2x0NMS3I5wX4hQ+Q3a1bDFH5V+2F8g1hdBoO4BOVS+Y0" crossorigin="anonymous"></script>
    </>
  );
};

export default App;
