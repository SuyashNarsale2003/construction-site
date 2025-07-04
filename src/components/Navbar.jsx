import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-brand">
          <Link to="/">
            <img src="./images/logo.png" alt="Thange" className="logo" />
          </Link>
          <button 
            className="navbar-toggler" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
        </div>
        <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
<ul className="navbar-nav">
  <li className="nav-item">
    <Link to="/" className="nav-link">Home</Link>
  </li>
  <li className="nav-item">
    <Link to="/about" className="nav-link">About</Link>
  </li>
  <li className="nav-item">
    <Link to="/services" className="nav-link">Services</Link>
  </li>
  <li className="nav-item">
    <Link to="/projects" className="nav-link">Projects</Link>
  </li>
  <li className="nav-item">
    <Link to="/team" className="nav-link">Team</Link>
  </li>
  <li className="nav-item">
    <Link to="/contact" className="nav-link">Contact</Link>
  </li>
</ul>
          <div className="navbar-cta">
            <a href="tel:+917499896192" className="btn btn-primary">Call Us</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;