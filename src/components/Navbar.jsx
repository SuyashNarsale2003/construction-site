import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('');

  // Close mobile menu when a link is clicked
  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false);
  };

  // Toggle mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      const navbar = document.querySelector('.navbar');
      if (navbar && !navbar.contains(event.target)) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Add scroll effect
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
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isMenuOpen ? 'menu-open' : ''}`}>
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" className="logo">
            <img src="/images/logo.png" alt="BuildMaster Construction" />
          </Link>
          <button 
            className="navbar-toggler" 
            onClick={toggleMenu}
            aria-label="Toggle navigation"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        <div className={`navbar-collapse ${isMenuOpen ? 'show' : ''}`}>
          <ul className="navbar-nav">
            {[
              { path: '/', name: 'Home' },
              { path: '/about', name: 'About' },
              { path: '/services', name: 'Services' },
              { path: '/projects', name: 'Projects' },
              { path: '/team', name: 'Team' },
              { path: '/contact', name: 'Contact' }
            ].map((item) => (
              <li key={item.path} className="nav-item">
                <Link 
                  to={item.path} 
                  className={`nav-link ${activeLink === item.path ? 'active' : ''}`}
                  onClick={() => handleLinkClick(item.path)}
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>

          <div className="navbar-cta">
            <a href="tel:+917499896192" className="btn btn-primary">
              <i className="fas fa-phone"></i> Call Us
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;