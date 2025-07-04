import React from 'react';
import { Link } from 'react-router-dom';
import { servicesData } from '../data/servicesData';

const ServicesPage = () => {
  return (
    <section className="services-page">
      <div className="container">
        <br />
        <h1 className="page-title">Our Services</h1>
        <div className="services-grid">
          {servicesData.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <Link to="/contact" className="btn btn-outline">Get a Quote</Link>
            </div>
          ))}
        </div>
        <br />
        <div className="text-center mt-5">
          <Link to="/" className="btn btn-primary">Back to Home</Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesPage;