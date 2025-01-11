import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
  return (
    <div className="contact-page">
      <h1>Contact Us</h1>
      <p>Feel free to reach out to us via email or phone!</p>
      {/* You can add a contact form or other details here */}
      <ContactForm />
    </div>
  );
};

export default Contact;
