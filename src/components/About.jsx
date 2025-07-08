import React from 'react';

const About = () => {
  return (
    <section id="about" className="section about-section">
      <div className="container">
        <div className="about-content">
          <div className="about-image">
            <img src="./images/about.jpg" alt="About BuildMaster" />
          </div>
          <div className="about-text">
            <h2 className="section-title">About Us</h2>
            <p className="about-description">
              BuildMaster Construction has been a trusted name in the industry for over 20 years. 
              We specialize in residential, commercial, and industrial construction projects, 
              delivering excellence in every detail.
            </p>
            <div className="about-features">
              <div className="feature">
                <h3>20+ Years Experience</h3>
                <p>Decades of expertise in construction and project management</p>
              </div>
              <div className="feature">
                <h3>500+ Projects</h3>
                <p>Successfully completed projects across the region</p>
              </div>
              <div className="feature">
                <h3>Certified Professionals</h3>
                <p>Our team consists of highly trained and certified experts</p>
              </div>
              <div className="feature">
                <h3>Quality Materials</h3>
                <p>We use only the highest quality materials from trusted suppliers</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;