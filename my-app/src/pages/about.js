import React, { useState } from 'react';
import './AboutPage.css'; // Custom styles for the component

const AboutPage = () => {
    const [chatbotVisible, setChatbotVisible] = useState(false);

    const toggleChatbot = () => {
        setChatbotVisible(!chatbotVisible);
    };

    const closeChatbot = () => {
        setChatbotVisible(false);
    };

    const sendMessage = () => {
        // Placeholder function for sending messages
    };

    return (
        <div>
            {/* Spinner Start */}
            {false && (
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
            )}
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
                        <a href="about.html" className="nav-item nav-link active">About</a>
                        <a href="service.html" className="nav-item nav-link">Service</a>
                        <div className="nav-item dropdown">
                            <a href="#" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">Pages</a>
                            <div className="dropdown-menu m-0">
                                <a href="price.html" className="dropdown-item">Pricing Plan</a>
                                <a href="team.html" className="dropdown-item">Our Dentist</a>
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
                        <h1 className="display-3 text-white animated zoomIn">About Us</h1>
                        <a href="" className="h4 text-white">Home</a>
                        <i className="far fa-circle text-white px-2"></i>
                        <a href="" className="h4 text-white">About</a>
                    </div>
                </div>
            </div>
            {/* Hero End */}

            {/* About Start */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-7">
                            <div className="section-title mb-4">
                                <h5 className="position-relative d-inline-block text-primary text-uppercase">About Us</h5>
                                <h1 className="display-5 mb-0">Building the Future of Rehabilitation Together</h1>
                            </div>
                            <h4 className="text-body fst-italic mb-4">We're Mindflex, a passionate startup dedicated to providing exceptional rehabilitation services. We may be new, but we're backed by the expertise of established institutions like the Karachi Down Syndrome Program (KDSP) and Brain and Mind Diagnostics and Rehabilitation</h4>
                            <p className="mb-4">We're a new kind of rehabilitation company one built on collaboration and a commitment to your success.Our team of highly skilled professionals brings their expertise to create a personalized plan tailored to your unique needs and goals. We use cutting-edge techniques while keeping services accessible through flexible scheduling and fair pricing.  We believe in a supportive and encouraging environment, fostering your healing journey every step of the way.</p>
                            <div className="row g-3">
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.3s">
                                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>VR Therapy</h5>
                                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Professional Doctors</h5>
                                </div>
                                <div className="col-sm-6 wow zoomIn" data-wow-delay="0.6s">
                                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Advanced Equipment</h5>
                                    <h5 className="mb-3"><i className="fa fa-check-circle text-primary me-3"></i>Easy Appointment</h5>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="bg-light rounded d-flex align-items-center justify-content-center p-5">
                                <img className="img-fluid rounded w-100" src="img/about.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* About End */}

            {/* Team Start */}
            <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="section-title mb-5">
                        <h5 className="position-relative d-inline-block text-primary text-uppercase">Our Team</h5>
                        <h1 className="display-5 mb-0">Meet the Professionals Behind Mindflex</h1>
                    </div>
                    <div className="row g-4">
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item">
                                <img className="img-fluid rounded-circle" src="img/team-1.jpg" alt="" />
                                <div className="team-text">
                                    <h4 className="mb-0">Dr. Emily Johnson</h4>
                                    <small>Founder</small>
                                    <div className="team-social">
                                        <a className="btn btn-square btn-light" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-light" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-light" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item">
                                <img className="img-fluid rounded-circle" src="img/team-2.jpg" alt="" />
                                <div className="team-text">
                                    <h4 className="mb-0">Dr. Michael Smith</h4>
                                    <small>Lead Therapist</small>
                                    <div className="team-social">
                                        <a className="btn btn-square btn-light" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-light" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-light" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item">
                                <img className="img-fluid rounded-circle" src="img/team-3.jpg" alt="" />
                                <div className="team-text">
                                    <h4 className="mb-0">Dr. Sarah Lee</h4>
                                    <small>Clinical Specialist</small>
                                    <div className="team-social">
                                        <a className="btn btn-square btn-light" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-light" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-light" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <div className="team-item">
                                <img className="img-fluid rounded-circle" src="img/team-4.jpg" alt="" />
                                <div className="team-text">
                                    <h4 className="mb-0">Dr. Jessica Brown</h4>
                                    <small>Nutrition Expert</small>
                                    <div className="team-social">
                                        <a className="btn btn-square btn-light" href="#"><i className="fab fa-twitter"></i></a>
                                        <a className="btn btn-square btn-light" href="#"><i className="fab fa-facebook-f"></i></a>
                                        <a className="btn btn-square btn-light" href="#"><i className="fab fa-linkedin-in"></i></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Team End */}

            {/* Testimonials Start */}
            <div className="container-fluid py-5 bg-light wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="section-title mb-5">
                        <h5 className="position-relative d-inline-block text-primary text-uppercase">Testimonials</h5>
                        <h1 className="display-5 mb-0">What Our Patients Say</h1>
                    </div>
                    <div className="owl-carousel testimonial-carousel">
                        <div className="testimonial-item">
                            <div className="d-flex align-items-center mb-3">
                                <img className="img-fluid rounded-circle" src="img/testimonial-1.jpg" alt="" />
                                <div className="ms-3">
                                    <h4 className="mb-0">John Doe</h4>
                                    <small>Patient</small>
                                </div>
                            </div>
                            <p className="mb-0">Mindflex provided exceptional care and support throughout my rehabilitation journey. Highly recommended!</p>
                        </div>
                        <div className="testimonial-item">
                            <div className="d-flex align-items-center mb-3">
                                <img className="img-fluid rounded-circle" src="img/testimonial-2.jpg" alt="" />
                                <div className="ms-3">
                                    <h4 className="mb-0">Jane Smith</h4>
                                    <small>Patient</small>
                                </div>
                            </div>
                            <p className="mb-0">The team at Mindflex is incredibly professional and dedicated. Their personalized approach made a real difference in my recovery.</p>
                        </div>
                    </div>
                </div>
            </div>
            {/* Testimonials End */}

            {/* Footer Start */}
            <footer className="container-fluid bg-dark text-white mt-5 pt-5 wow fadeInUp" data-wow-delay="0.1s">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Get In Touch</h5>
                            <p className="mb-2"><i className="fa fa-map-marker-alt me-3"></i>Suite#213 Sumya Business Avenue, MACHS, Karachi</p>
                            <p className="mb-2"><i className="fa fa-phone-alt me-3"></i>+012 345 6789</p>
                            <p className="mb-0"><i className="fa fa-envelope me-3"></i>info@example.com</p>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Quick Links</h5>
                            <a href="index.php" className="btn btn-link text-white">Home</a>
                            <a href="about.html" className="btn btn-link text-white">About</a>
                            <a href="service.html" className="btn btn-link text-white">Services</a>
                            <a href="contact.html" className="btn btn-link text-white">Contact</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Our Services</h5>
                            <a href="service.html" className="btn btn-link text-white">Rehabilitation</a>
                            <a href="service.html" className="btn btn-link text-white">Therapy</a>
                            <a href="service.html" className="btn btn-link text-white">Counseling</a>
                            <a href="service.html" className="btn btn-link text-white">Nutrition</a>
                        </div>
                        <div className="col-lg-3 col-md-6">
                            <h5 className="text-white mb-4">Newsletter</h5>
                            <form>
                                <div className="input-group">
                                    <input type="text" className="form-control border-0 p-3" placeholder="Your Email Address" />
                                    <button className="btn btn-primary">Subscribe</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </footer>
            {/* Footer End */}

            {/* Back to Top */}
            <a href="#" className="btn btn-primary btn-lg btn-lg-square back-to-top"><i className="fa fa-arrow-up"></i></a>

            {/* Chatbot */}
            {chatbotVisible && (
                <div id="chatbot" className="chatbot">
                    <div className="chatbot-header">
                        <h4>Chat with Us</h4>
                        <button className="btn-close" onClick={toggleChatbot}>X</button>
                    </div>
                    <div className="chatbot-body">
                        {/* Chatbot content will go here */}
                    </div>
                    <div className="chatbot-footer">
                        <input type="text" placeholder="Type a message..." />
                        <button>Send</button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default App;
