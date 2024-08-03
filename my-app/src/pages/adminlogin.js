import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Your custom styles
import './loginform.css'; // Your custom styles for the login form

// Import necessary Bootstrap and custom JavaScript files
import 'bootstrap/dist/js/bootstrap.bundle.min';

const App = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Reset previous errors
    document.getElementById('usernameError').textContent = '';
    document.getElementById('passwordError').textContent = '';

    // Get form inputs
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate username
    if (username.trim() === '') {
      document.getElementById('usernameError').textContent = 'Username is required';
      return;
    }

    // Validate password
    if (password.trim() === '') {
      document.getElementById('passwordError').textContent = 'Password is required';
      return;
    }

    // If both fields are filled, you can proceed with the login process
    alert('Login successful!');
  };

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  const closeChatbot = () => {
    setShowChatbot(false);
  };

  const sendMessage = () => {
    const messageInput = document.getElementById('chatbot-input').value.trim();
    if (messageInput !== '') {
      appendMessage('self', messageInput);
      document.getElementById('chatbot-input').value = '';
      // Simulate a response after a delay
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
      {/* Spinner */}
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

      {/* Topbar */}
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

      {/* Navbar */}
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
              <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
              <div className="dropdown-menu m-0">
                <a href="price.html" className="dropdown-item">Pricing Plan</a>
                <a href="team.html" className="dropdown-item">Our Doctors</a>
                <a href="testimonial.html" className="dropdown-item">Testimonial</a>
                <a href="appointment.php" className="dropdown-item">Appointment</a>
              </div>
            </div>
            <a href="contact.html" className="nav-item nav-link active">Contact</a>
          </div>
          <button type="button" className="btn text-dark" data-bs-toggle="modal" data-bs-target="#searchModal"><i className="fa fa-search"></i></button>
          <div className="dropdown">
            <button className="btn btn-primary dropdown-toggle py-2 px-4 ms-3" type="button" id="loginDropdown" data-bs-toggle="dropdown" aria-expanded="false">
              Login
            </button>
            <ul className="dropdown-menu" aria-labelledby="loginDropdown">
              <li><a className="dropdown-item" href="loginform.php?type=doctor">Doctor</a></li>
              <li><a className="dropdown-item" href="loginform.php?type=patient">Patient</a></li>
              <li><a className="dropdown-item" href="adminlogin.html">Admin</a></li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Full Screen Search */}
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

      {/* Login Form */}
      <div className="container">
        <form id="loginForm" onSubmit={handleLoginSubmit}>
          <h2><center>Admin Login</center></h2>
          <div className="input-group">
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
            <small className="error" id="usernameError"></small>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
            <small className="error" id="passwordError"></small>
          </div>
          <button type="submit">Login</button>
          <br />
          <br />
          <a style={{ textAlign: 'center' }} href="index.php"><strong style={{ color: '#000000' }}> <center>Back To Home Page</center></strong></a>
        </form>
      </div>

      {/* Chatbot */}
      {showChatbot && (
        <div id="chatbot" className="chatbot">
          <div className="chatbot-header">
            <button className="chatbot-close" onClick={closeChatbot}>&times;</button>
            <h5>Chatbot</h5>
          </div>
          <div id="chatbot-body" className="chatbot-body">
            {/* Messages will be appended here */}
          </div>
          <div className="chatbot-footer">
            <input type="text" id="chatbot-input" className="form-control" placeholder="Type a message..." />
            <button className="btn btn-primary" onClick={sendMessage}>Send</button>
          </div>
        </div>
      )}

      {/* Button to toggle chatbot */}
      <button className="btn btn-primary chatbot-toggle" onClick={toggleChatbot}>
        Chat with us
      </button>
    </div>
  );
};

export default App;
