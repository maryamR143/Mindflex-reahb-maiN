// src/pages/TeamPage.js

import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Import custom styles if you have them

const TeamPage = () => {
  const [chatbotVisible, setChatbotVisible] = useState(false);

  const toggleChatbot = () => {
    setChatbotVisible(!chatbotVisible);
  };

  const closeChatbot = () => {
    setChatbotVisible(false);
  };

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
    <>
      <div id="spinner" className={`show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center ${chatbotVisible ? 'd-none' : ''}`}>
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
                <p className="m-0"><i className="fa fa-envelope-open me-2"></i>Mindfelx@gmail.com</p>
              </div>
              <div className="py-2">
                <p className="m-0"><i className="fa fa-phone-alt me-2"></i>+92 345 6789</p>
              </div>
            </div>
          </div>
        </div>
      </div>

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
                <a href="team.html" className="dropdown-item active">Our Doctors</a>
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

      <div className={`modal fade ${chatbotVisible ? 'show' : ''}`} id="searchModal" tabIndex="-1" style={{ display: chatbotVisible ? 'block' : 'none' }}>
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

      <div className="container-fluid bg-primary py-5 hero-header mb-5">
        <div className="row py-3">
          <div className="col-12 text-center">
            <h1 className="display-3 text-white animated zoomIn">Doctor</h1>
            <a href="" className="h4 text-white">Home</a>
            <i className="far fa-circle text-white px-2"></i>
            <a href="" className="h4 text-white">doctors</a>
          </div>
        </div>
      </div>

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
            <div className="col-lg-4 wow slideInUp" data-wow-delay="0.3s">
              <div className="team-item bg-light rounded d-flex flex-column align-items-center text-center">
                <div className="position-relative overflow-hidden rounded-circle mb-4">
                  <img className="img-fluid" src="img/team-1.jpg" alt="Team Image" />
                </div>
                <h4 className="mb-0">Doctor Name</h4>
                <small>Specialist</small>
                <p className="mb-3">Dr. John Doe is a renowned specialist with over 10 years of experience...</p>
                <div className="social-icons">
                  <a className="btn btn-primary btn-square mx-1" href="#"><i className="fab fa-twitter"></i></a>
                  <a className="btn btn-primary btn-square mx-1" href="#"><i className="fab fa-facebook-f"></i></a>
                  <a className="btn btn-primary btn-square mx-1" href="#"><i className="fab fa-linkedin-in"></i></a>
                </div>
              </div>
            </div>
            {/* Add more team items as needed */}
          </div>
        </div>
      </div>

      {chatbotVisible && (
        <div id="chatbot" className="chatbot-container">
          <div className="chatbot-header">
            <h5>Chatbot</h5>
            <button className="close-btn" onClick={closeChatbot}>×</button>
          </div>
          <div id="chatbot-body" className="chatbot-body"></div>
          <div className="chatbot-footer">
            <input id="chatbot-input" type="text" placeholder="Type your message..." />
            <button onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}
      <button onClick={toggleChatbot} className="chatbot-toggle-btn">Chat</button>
    </>
  );
};

export default TeamPage;
