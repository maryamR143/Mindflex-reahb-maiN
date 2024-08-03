import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css';
import './App.css'; // Assuming you put your custom CSS here

const App = () => {
  const [doctors, setDoctors] = useState([]);

  useEffect(() => {
    // Fetch doctors data when the component mounts
    const fetchDoctors = async () => {
      try {
        const response = await fetch('fetch_doctors.php');
        const data = await response.json();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <>
      {/* Spinner Start */}
      <div
        id="spinner"
        className="show bg-white position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center"
      >
        <div className="spinner-grow text-primary m-1" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-dark m-1" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <div className="spinner-grow text-secondary m-1" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
      {/* Spinner End */}

      {/* Navbar Start */}
      <nav className="navbar navbar-expand-lg bg-white navbar-light shadow-sm px-5 py-3 py-lg-0">
        <a href="index.php" className="navbar-brand p-0">
          <h1 className="m-0 text-primary">
            <i className="fa fa-brain me-2"></i>Mindflex Rehabilitation
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
              All users
            </a>
            <a href="doctorslist.html" className="nav-item nav-link">
              Doctors
            </a>
            <a href="about.html" className="nav-item nav-link">
              Requests
            </a>
            <a href="service.html" className="nav-item nav-link">
              Appointment List
            </a>
            <a href="service.html" className="nav-item nav-link">
              Logout
            </a>
          </div>
        </div>
      </nav>
      {/* Navbar End */}

      <header>
        <br />
        <center>
          <h1>Doctors List</h1>
        </center>
      </header>

      <main>
        <ul id="doctorList" className="list-unstyled">
          {doctors.map((doctor, index) => (
            <li key={index} className="border-bottom py-3">
              <strong>{doctor.name}</strong>
              <br />
              Specialization: {doctor.specialization}
              <br />
              Email: {doctor.email}
              <br />
              Phone: {doctor.phone}
            </li>
          ))}
        </ul>
      </main>
    </>
  );
};

export default App;
