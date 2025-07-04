import React from 'react';
import '../App.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-overlay"></div>
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title fade-in">Building Your Vision, Crafting Your Future</h1>
          <p className="hero-subtitle fade-in">Premium construction services with unmatched quality and reliability</p>
          <div className="hero-buttons slide-up">
            <a href="#contact" className="btn btn-primary">Get a Quote</a>
            <a href="#projects" className="btn btn-outline">Our Projects</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;