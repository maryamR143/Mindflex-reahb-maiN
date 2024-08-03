import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css'; // Assuming you put your custom CSS here

const App = () => {
  useEffect(() => {
    // Initialize WOW.js or other libraries if needed
    // Example: new WOW().init(); // Uncomment if you use WOW.js
  }, []);

  return (
    <>
      {/* Spinner Start */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
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

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="index.php" className="navbar-brand p-0">
          <h1 className="m-0 text-primary">
            <i className="fa fa-brain me-2"></i>
            Mindflex Rehabilitation
          </h1>
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarCollapse"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <div className="navbar-nav ms-auto py-0">
            <a href="adminhomepage.html" className="nav-item nav-link">
              Profile
            </a>
            <a href="doctorslist.html" className="nav-item nav-link">
              Schedule
            </a>
            <a href="about.html" className="nav-item nav-link">
              Appointment Requests
            </a>
            <a href="service.html" className="nav-item nav-link">
              <i className="fa fa-bell"></i>
            </a>
            <a href="service.html" className="nav-item nav-link">
              <i className="fa fa-envelope me"></i>
            </a>
            <a href="service.html" className="nav-item nav-link">
              <i className="fa fa-power-off"></i>
            </a>
          </div>
        </div>
      </nav>
      {/* Navbar End */}
    </>
  );
};

export default App;
