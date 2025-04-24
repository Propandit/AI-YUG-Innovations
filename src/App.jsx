import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import PriceCards from './components/PriceCards';
import RESUME from "/assets/RESUME.png";
import health from "/assets/health.png";
import chatbot from "/assets/chatbot.png";
import './App.css';

const App = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);



  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
  
    const url =
      "https://script.google.com/macros/s/AKfycbwnjsORxowSofHmNXXtONqSPkntx6ebr3SYvDu7PkpJSuUme49YjwrtMXLen1JyYz--/exec";
  
    const formData = new URLSearchParams();
    formData.append("Name", e.target.querySelector('input[placeholder="Name"]').value.trim());
    formData.append("Email", e.target.querySelector('input[placeholder="Email"]').value.trim());
    formData.append("Message", e.target.querySelector('textarea[placeholder="Message"]').value.trim());
  
    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: formData.toString(),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          alert(data.message);
          setSuccess(true);
          e.target.reset(); // Clear the form
        } else {
          alert(`Error: ${data.message}`);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
        alert("Something went wrong! Please try again.");
      })
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="app">
      {/* Navigation */}
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : 'hidden'}`}
        initial={{ y: -100 }}
        animate={{ y: scrolled ? 0 : -100 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <motion.div 
          className="logo"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
        >
          <span className="logo-text">AI-Yug</span>
          <span className="logo-highlight">Innovations</span>
        </motion.div>
        
        {/* Mobile Menu Button */}
        <div className="mobile-menu-btn" onClick={toggleMobileMenu}>
          <div className={`hamburger ${isMobileMenuOpen ? 'open' : ''}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="nav-links desktop-nav">
          {['Home', 'Services', 'Projects', 'Contact'].map((item, index) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="nav-link"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              {item}
            </motion.a>
          ))}
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div 
              className="mobile-nav"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {['Home', 'Services', 'Projects', 'Contact'].map((item, index) => (
                <motion.a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="mobile-nav-link"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ duration: 0.2 }}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                </motion.a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>

      {/* Hero Section */}
      <section id="home" className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h1 
            className="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="gradient-text">AI-Yug</span> Innovations
          </motion.h1>
          <motion.p 
            className="hero-subtitle"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Transforming Ideas into Intelligent Solutions
          </motion.p>
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button 
              className="cta-button primary"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Get Started
            </motion.button>
            <motion.button 
              className="cta-button secondary"
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(0,0,0,0.2)" }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              Learn More
            </motion.button>
          </motion.div>
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.div 
              className="stat"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="stat-number">50+</span>
              <span className="stat-label">Projects Completed</span>
            </motion.div>
            <motion.div 
              className="stat"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="stat-number">100+</span>
              <span className="stat-label">Happy Clients</span>
            </motion.div>
          </motion.div>
        </motion.div>
        <div className="hero-shapes">
          <div className="shape shape-1"></div>
          <div className="shape shape-2"></div>
          <div className="shape shape-3"></div>
        </div>
      </section>

        {/* Services Section */}
        <section id="services" className="services">
          <div className="section-header">
            <h2 className="section-title">Our Services</h2>
            <p className="section-subtitle">Comprehensive solutions for your digital needs</p>
          </div>
          <div className="services-grid">
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-code"></i>
              </div>
              <h3>Full Stack Development</h3>
              <p>Modern web applications using React, Node.js, and more</p>
              <ul className="service-features">
                <li>Custom Web Applications</li>
                <li>API Development</li>
                <li>Database Management</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-brain"></i>
              </div>
              <h3>AI & Machine Learning</h3>
              <p >Custom AI solutions and predictive models</p>
              <ul className="service-features">
                <li>Machine Learning Models</li>
                <li>Natural Language Processing</li>
                <li>Computer Vision</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-chart-line"></i>
              </div>
              <h3>Data Analytics</h3>
              <p>Data-driven insights and visualizations</p>
              <ul className="service-features">
                <li>Business Intelligence</li>
                <li>Data Visualization</li>
                <li>Predictive Analytics</li>
              </ul>
            </div>
            <div className="service-card">
              <div className="service-icon">
                <i className="fas fa-microchip"></i>
              </div>
              <h3>IoT Solutions</h3>
              <p>Smart devices and connected systems</p>
              <ul className="service-features">
                <li>IoT Device Development</li>
                <li>Sensor Integration</li>
                <li>Real-time Monitoring</li>
              </ul>
            </div>
          </div>
        </section>

      {/* Price Cards Section */}
      <section id="pricing" className="pricing">
        <PriceCards />
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects">
        <div className="section-header">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Our latest and greatest work</p>
        </div>
        <div className="projects-grid">
          <div className="project-card">
            <div className="project-image">
            <img src={RESUME} alt="Smart Resume Screening" />
            </div>
            <div className="project-content">
              <h3>Smart Resume Screening</h3>
              <p>AI-powered resume analysis and ranking system</p>
              <div className="project-tags">
                <span>AI</span>
                <span>NLP</span>
                <span>Web App</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src={health} alt="Health Monitoring System" />
            </div>
            <div className="project-content">
              <h3>Health Monitoring System</h3>
              <p>IoT-based health tracking with ML predictions</p>
              <div className="project-tags">
                <span>IoT</span>
                <span>ML</span>
                <span>Healthcare</span>
              </div>
            </div>
          </div>
          <div className="project-card">
            <div className="project-image">
              <img src={chatbot} alt="E-commerce Chatbot" />
            </div>
            <div className="project-content">
              <h3>E-commerce Chatbot</h3>
              <p>NLP-powered shopping assistant</p>
              <div className="project-tags">
                <span>Chatbot</span>
                <span>NLP</span>
                <span>E-commerce</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="section-header">
          <h2 className="section-title">Get in Touch</h2>
          <p className="section-subtitle">Let's discuss your project</p>
        </div>
        <div className="contact-container">
          <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <input type="text" placeholder="Name" required />
      </div>
      <div className="form-group">
        <input type="email" placeholder="Email" required />
      </div>
      <div className="form-group">
        <textarea placeholder="Message" required></textarea>
      </div>
      <button type="submit" className="submit-button" disabled={loading}>
        {loading ? "Sending..." : "Send Message"}
        <i className="fas fa-paper-plane"></i>
      </button>
      {success && <div className="success-message">Message sent successfully!</div>}
    </form>
          <div className="contact-info">
            <div className="info-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>123 Innovation Street, Tech City</p>
            </div>
            <div className="info-item">
              <i className="fas fa-envelope"></i>
              <p>contact@aiyug.com</p>
            </div>
            <div className="info-item">
              <i className="fas fa-phone"></i>
              <p>+1 (123) 456-7890</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section">
            <h3>AI-Yug Innovations</h3>
            <p>Transforming ideas into intelligent solutions through cutting-edge technology.</p>
          </div>
          <div className="footer-section">
            <h3>Quick Links</h3>
            <a href="#home">Home</a>
            <a href="#services">Services</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
          <div className="footer-section">
            <h3>Connect With Us</h3>
            <div className="social-links">
              <a href="#" className="social-link"><i className="fab fa-linkedin"></i></a>
              <a href="#" className="social-link"><i className="fab fa-github"></i></a>
              <a href="#" className="social-link"><i className="fab fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fab fa-instagram"></i></a>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 AI-Yug Innovations. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default App;