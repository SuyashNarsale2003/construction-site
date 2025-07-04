import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import emailjs from '@emailjs/browser';
import { emailConfig } from '../config/emailConfig';


const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Replace with your EmailJS service ID, template ID, and public key
      await emailjs.send(
  emailConfig.serviceId,
  emailConfig.templateId,
  formData,
  emailConfig.publicKey
);
      
      setSubmitStatus({ success: true, message: 'Message sent successfully!' });
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Optional: Redirect after 3 seconds
      setTimeout(() => navigate('/thank-you'), 3000);
    } catch (error) {
      console.error('Failed to send message:', error);
      setSubmitStatus({ success: false, message: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="contact-page">
      <div className="container">
        <br />
        <h1 className="page-title">Contact Us</h1>
        
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get In Touch</h2>
            <div className="contact-item">
              <i className="fas fa-map-marker-alt"></i>
              <p>Shiv sai residency</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-phone"></i>
              <p>+917499896192</p>
            </div>
            <div className="contact-item">
              <i className="fas fa-envelope"></i>
              <p>suyash84729@gmail.com</p>
            </div>
          </div>
          
          <div className="contact-form">
            {submitStatus && (
              <div className={`alert ${submitStatus.success ? 'alert-success' : 'alert-error'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <input
                  type="tel"
                  name="phone"
                  placeholder="Your Phone"
                  value={formData.phone}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <textarea
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPage;