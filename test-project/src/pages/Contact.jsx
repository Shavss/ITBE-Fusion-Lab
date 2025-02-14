// src/pages/Contact.jsx
import React from 'react';
import ContactForm from '../components/ContactForm';
import '../styles/Contact.css';

const Contact = () => {
  return (
    <div className="contact-page">
      {/* Left Section */}
      <div className="contact-info">
        <h2>We are here for you</h2>
        <p><strong>+48 503 333 914</strong></p>
        <p><strong>info@amazinghouse.eu</strong></p>
        <p>Jagiellońska 88</p>
        <p>00-992 Warsaw</p>
        <p>NIP 524 277 96 33</p>
        <div className="social-icons">
          <i className="fab fa-facebook-f"></i>
          <i className="fab fa-instagram"></i>
        </div>
      </div>

      {/* Right Section */}
      <div className="contact-form-wrapper">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
