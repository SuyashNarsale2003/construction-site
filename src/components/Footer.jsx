import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-about">
            <Link to="/" className="footer-logo">
              <img src="/images/logo.png" alt="Integrity Constructions" />
            </Link>
            <p className="footer-description">
              Premium construction services with unmatched quality and reliability.
            </p>
          </div>
          
          <div className="footer-links">
            <h3 className="footer-title">Quick Links</h3>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/services">Services</Link></li>
              <li><Link to="/projects">Projects</Link></li>
              <li><Link to="/team">Team</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-contact">
            <h3 className="footer-title">Contact Us</h3>
            <ul>
              <li><i className="fas fa-map-marker-alt"></i> B-408, Shivsai Residency, Palegaon, Ambernath (East), 421501</li>
              <li><i className="fas fa-phone"></i> +91 7263948405, +91 9967227652</li>
              <li><i className="fas fa-envelope"></i> Integrityconst24@gmail.com</li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Integrity Constructions</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;