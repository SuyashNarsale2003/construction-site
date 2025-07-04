import React from 'react';
import { testimonialsData } from '../data/testimonialsData';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <h2 className="section-title">Client Testimonials</h2>
        <p className="section-subtitle">Hear what our clients say about our work</p>
        
        <div className="testimonials-grid">
          {testimonialsData.map((testimonial) => (
            <div key={testimonial.id} className="testimonial-card">
              <div className="testimonial-header">
                <div className="testimonial-image">
                  <img src={testimonial.image} alt={testimonial.name} />
                </div>
                <div className="testimonial-author">
                  <h3>{testimonial.name}</h3>
                  <p className="role">{testimonial.role}</p>
                  <p className="project">{testimonial.project}</p>
                </div>
              </div>
              <div className="testimonial-content">
                <FaQuoteLeft className="quote-icon" />
                <p>{testimonial.content}</p>
              </div>
              <div className="testimonial-rating">
                {[...Array(5)].map((_, i) => (
                  <FaStar 
                    key={i} 
                    className={i < testimonial.rating ? "star filled" : "star"} 
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;