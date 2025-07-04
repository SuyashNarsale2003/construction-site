import React from 'react';
import { Link } from 'react-router-dom';

const AboutPage = () => {
  return (
    <section className="about-page">
      <div className="container">
        <br />
        <h1 className="page-title">About Our Company</h1>
        <div className="about-content">
          <div className="about-text">
            <h2>Our Story</h2>
            <p>Founded in 2005, BuildMaster Construction has grown from a small local contractor to a regional leader in construction services.</p>
            
            <h2>Our Mission</h2>
            <p>To deliver exceptional construction services through innovation, quality craftsmanship, and unwavering commitment to client satisfaction.</p>
            
            <h2>Our Values</h2>
            <ul className="values-list">
              <li>Integrity in all our dealings</li>
              <li>Quality that stands the test of time</li>
              <li>Safety as our top priority</li>
              <li>Sustainability in every project</li>
            </ul>
          </div>
          <div className="about-image">
            <img src="./images/about.jpg" alt="Our Team" />
          </div>
        </div>
        <br />
        <div className="text-center mt-5">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default AboutPage;