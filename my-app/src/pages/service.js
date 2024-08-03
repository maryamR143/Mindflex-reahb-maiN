import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'; // Add your custom styles here

const App = () => {
  const [isChatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = () => setChatbotVisible(!isChatbotVisible);

  const closeChatbot = () => setChatbotVisible(false);

  const sendMessage = () => {
    const messageInput = document.getElementById('chatbot-input').value.trim();
    if (messageInput !== '') {
      appendMessage('self', messageInput);
      document.getElementById('chatbot-input').value = '';
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
    <div>
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
                <p className="m-0"><i className="fa fa-envelope-open me-2"></i>mindflex@gmail.com</p>
              </div>
              <div className="py-2">
                <p className="m-0"><i className="fa fa-phone-alt me-2"></i>+92 345 6789</p>
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
            <a href="service.html" className="nav-item nav-link active">Service</a>
            <div className="nav-item dropdown">
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu m-0">
                <a href="price.html" className="dropdown-item">Pricing Plan</a>
                <a href="team.html" className="dropdown-item">Our Doctors</a>
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

      {/* Hero Start */}
      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">Services</h1>
            <a href="" className="h4 text-white">Home</a>
            <i className="far fa-circle text-white px-2"></i>
            <a href="" className="h4 text-white">Services</a>
          </div>
        </div>
      </div>
      {/* Hero End */}

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
              <div className="row g-4">
                <div className="col-sm-6 wow fadeInUp" data-wow-delay="0.3s">
                  <div className="d-flex align-items-center border-bottom py-3">
                    <i className="fa fa-check-circle fa-2x text-primary me-3"></i>
                    <h5 className="mb-0">Expert Medical Staff</h5>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeInUp" data-wow-delay="0.5s">
                  <div className="d-flex align-items-center border-bottom py-3">
                    <i className="fa fa-check-circle fa-2x text-primary me-3"></i>
                    <h5 className="mb-0">Advanced VR Technology</h5>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeInUp" data-wow-delay="0.7s">
                  <div className="d-flex align-items-center border-bottom py-3">
                    <i className="fa fa-check-circle fa-2x text-primary me-3"></i>
                    <h5 className="mb-0">Customized Therapy Plans</h5>
                  </div>
                </div>
                <div className="col-sm-6 wow fadeInUp" data-wow-delay="0.9s">
                  <div className="d-flex align-items-center border-bottom py-3">
                    <i className="fa fa-check-circle fa-2x text-primary me-3"></i>
                    <h5 className="mb-0">24/7 Patient Support</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Service End */}

      {/* Chatbot Start */}
      <div id="chatbot" className={`position-fixed bottom-0 end-0 me-3 mb-3 ${isChatbotVisible ? '' : 'd-none'}`} style={{ width: '300px', zIndex: 9999 }}>
        <div className="card">
          <div className="card-header bg-primary text-white">
            <h5 className="mb-0">Chatbot</h5>
            <button type="button" className="btn-close btn-close-white" onClick={closeChatbot}></button>
          </div>
          <div id="chatbot-body" className="card-body overflow-auto" style={{ height: '300px' }}>
            {/* Messages will be appended here */}
          </div>
          <div className="card-footer">
            <div className="input-group">
              <input type="text" id="chatbot-input" className="form-control" placeholder="Type a message..." />
              <button className="btn btn-primary" onClick={sendMessage}>Send</button>
            </div>
          </div>
        </div>
        <button className="btn btn-primary rounded-circle position-fixed bottom-0 end-0 m-3" onClick={toggleChatbot}>
          <i className="fa fa-comments"></i>
        </button>
      </div>
      {/* Chatbot End */}
    </div>
  );
};

export default App;
