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
        <p>+49 157 33352473</p>
        <p>info@paketpostaeral.de</p>
        <p> Georg-Lindau-Strasse 12</p>
        <p>80634 Munich</p>
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
