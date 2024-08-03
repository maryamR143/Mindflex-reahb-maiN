import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css'; // Assuming your CSS file is in the same directory

// Example images
import A6Image from './img/A6.jpg';
import A9Image from './img/A9.jpg';
import A10Image from './img/A10.jpeg';
import ChatbotIcon from './img/chatbot-.png';

class PricingPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = { showChatbot: false };
    }

    toggleChatbot = () => {
        this.setState({ showChatbot: !this.state.showChatbot });
    };

    closeChatbot = () => {
        this.setState({ showChatbot: false });
    };

    sendMessage = () => {
        // Placeholder for sending a message
        const messageInput = document.getElementById('chatbot-input').value.trim();
        if (messageInput !== '') {
            this.appendMessage('self', messageInput);
            document.getElementById('chatbot-input').value = '';

            setTimeout(() => {
                const response = "This is a placeholder response from the bot.";
                this.appendMessage('other', response);
            }, 1000);
        }
    };

    appendMessage = (sender, message) => {
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

    render() {
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
                                <small className="py-2"><i className="far fa-clock text-primary me-2"></i>Opening Hours: Mon - Tues : 6.00 am - 10.00 pm, Sunday Closed </small>
                            </div>
                        </div>
                        <div className="col-md-6 text-center text-lg-end">
                            <div className="position-relative d-inline-flex align-items-center bg-primary text-white top-shape px-5">
                                <div className="me-3 pe-3 border-end py-2">
                                    <p className="m-0"><i className="fa fa-envelope-open me-2"></i>Mindflex@gmail.com</p>
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
                    <a href="index.html" className="navbar-brand p-0">
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
                                    <a href="price.html" className="dropdown-item active">Pricing Plan</a>
                                    <a href="team.html" className="dropdown-item">Our doctors</a>
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
                                <li><a className="dropdown-item" href="loginform.php?type=patient">Patient</a></li>
                                <li><a className="dropdown-item" href="adminlogin.html">Admin</a></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                {/* Navbar End */}

                {/* Full Screen Search Start */}
                <div className="modal fade" id="searchModal" tabIndex="-1">
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
                            <h1 className="display-3 text-white animated zoomIn">Pricing</h1>
                            <a href="" className="h4 text-white">Home</a>
                            <i className="far fa-circle text-white px-2"></i>
                            <a href="" className="h4 text-white">Pricing</a>
                        </div>
                    </div>
                </div>
                {/* Hero End */}

                {/* Pricing Start */}
                <div className="container-fluid py-5 wow fadeInUp" data-wow-delay="0.1s">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-5">
                                <div className="section-title mb-4">
                                    <h5 className="position-relative d-inline-block text-primary text-uppercase">Pricing Plan</h5>
                                    <h1 className="display-5 mb-0">Choose A Pricing Plan</h1>
                                </div>
                                <p className="mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue. Curabitur blandit tempus porttitor.</p>
                                <a href="" className="btn btn-primary py-3 px-4">Get Started</a>
                            </div>
                            <div className="col-lg-7">
                                <div className="owl-carousel pricing-carousel">
                                    <div className="pricing-item bg-light rounded overflow-hidden">
                                        <div className="pricing-header p-4">
                                            <h3 className="text-primary">Basic</h3>
                                        </div>
                                        <div className="pricing-body p-4">
                                            <div className="d-flex align-items-center">
                                                <h1 className="display-4 mb-0 me-2">$19</h1>
                                                <span className="fs-5 text-primary">/month</span>
                                            </div>
                                            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.</p>
                                        </div>
                                        <div className="pricing-footer p-4">
                                            <a href="#" className="btn btn-primary w-100">Sign Up</a>
                                        </div>
                                    </div>
                                    <div className="pricing-item bg-light rounded overflow-hidden">
                                        <div className="pricing-header p-4">
                                            <h3 className="text-primary">Standard</h3>
                                        </div>
                                        <div className="pricing-body p-4">
                                            <div className="d-flex align-items-center">
                                                <h1 className="display-4 mb-0 me-2">$39</h1>
                                                <span className="fs-5 text-primary">/month</span>
                                            </div>
                                            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.</p>
                                        </div>
                                        <div className="pricing-footer p-4">
                                            <a href="#" className="btn btn-primary w-100">Sign Up</a>
                                        </div>
                                    </div>
                                    <div className="pricing-item bg-light rounded overflow-hidden">
                                        <div className="pricing-header p-4">
                                            <h3 className="text-primary">Premium</h3>
                                        </div>
                                        <div className="pricing-body p-4">
                                            <div className="d-flex align-items-center">
                                                <h1 className="display-4 mb-0 me-2">$59</h1>
                                                <span className="fs-5 text-primary">/month</span>
                                            </div>
                                            <p className="mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae elit libero, a pharetra augue.</p>
                                        </div>
                                        <div className="pricing-footer p-4">
                                            <a href="#" className="btn btn-primary w-100">Sign Up</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Pricing End */}

                {/* Newsletter Start */}
                <div className="container-fluid bg-light py-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-md-8 text-center">
                                <div className="section-title mb-5">
                                    <h5 className="position-relative d-inline-block text-primary text-uppercase">Newsletter</h5>
                                    <h1 className="display-5 mb-0">Subscribe To Our Newsletter</h1>
                                </div>
                                <form>
                                    <div className="input-group">
                                        <input type="email" className="form-control border-0 py-3 ps-4 pe-3" placeholder="Your Email" />
                                        <button className="btn btn-primary px-4">Subscribe</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Newsletter End */}

                {/* Chatbot Start */}
                {this.state.showChatbot && (
                    <div id="chatbot-container" className="chatbot-container">
                        <div id="chatbot-body" className="chatbot-body">
                            {/* Placeholder for chat messages */}
                        </div>
                        <div className="chatbot-footer">
                            <input id="chatbot-input" type="text" className="chatbot-input" placeholder="Type a message..." />
                            <button className="btn btn-primary" onClick={this.sendMessage}>Send</button>
                            <button className="btn btn-secondary" onClick={this.closeChatbot}>Close</button>
                        </div>
                    </div>
                )}
                <button id="chatbot-toggle" className="btn btn-primary" onClick={this.toggleChatbot}>
                    <img src={ChatbotIcon} alt="Chatbot Icon" />
                </button>
                {/* Chatbot End */}

                {/* Footer Start */}
                <footer className="bg-dark text-white pt-5">
                    <div className="container">
                        <div className="row g-5">
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget">
                                    <h5 className="text-uppercase mb-4">Quick Links</h5>
                                    <ul className="list-unstyled">
                                        <li><a href="index.php" className="text-white">Home</a></li>
                                        <li><a href="about.html" className="text-white">About</a></li>
                                        <li><a href="service.html" className="text-white">Service</a></li>
                                        <li><a href="pricing.html" className="text-white">Pricing</a></li>
                                        <li><a href="contact.html" className="text-white">Contact</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget">
                                    <h5 className="text-uppercase mb-4">Contact</h5>
                                    <ul className="list-unstyled">
                                        <li><i className="fa fa-map-marker-alt me-2"></i>Suite#213 Sumya Business Avenue, MACHS, Karachi</li>
                                        <li><i className="fa fa-phone-alt me-2"></i>+92 345 6789</li>
                                        <li><i className="fa fa-envelope me-2"></i>info@mindflex.com</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget">
                                    <h5 className="text-uppercase mb-4">Follow Us</h5>
                                    <div className="d-flex">
                                        <a href="#" className="btn btn-primary btn-social me-2"><i className="fab fa-facebook-f"></i></a>
                                        <a href="#" className="btn btn-primary btn-social me-2"><i className="fab fa-twitter"></i></a>
                                        <a href="#" className="btn btn-primary btn-social me-2"><i className="fab fa-linkedin-in"></i></a>
                                        <a href="#" className="btn btn-primary btn-social me-2"><i className="fab fa-instagram"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="footer-widget">
                                    <h5 className="text-uppercase mb-4">Newsletter</h5>
                                    <form>
                                        <div className="input-group">
                                            <input type="email" className="form-control border-0 py-3 ps-4 pe-3" placeholder="Your Email" />
                                            <button className="btn btn-primary px-4">Subscribe</button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
                {/* Footer End */}
            </div>
        );
    }
}

export default PricingPage;
