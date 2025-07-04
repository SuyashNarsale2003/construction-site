import React from 'react';
import { Link } from 'react-router-dom';

const ThankYou = () => {
  return (
    <section className="thank-you-page">
      <div className="container">
        <div className="thank-you-content">
          <h1>Thank You!</h1>
          <p>Your message has been sent successfully. We'll get back to you soon.</p>
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default ThankYou;