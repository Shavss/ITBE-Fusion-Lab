// backend/routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Import the contact model

// Handle contact form submissions
router.post('/contact', async (req, res) => {
  const { name, email, message } = req.body;

  // Create a new contact document and save it to MongoDB
  const newContact = new Contact({ name, email, message });
  try {
    await newContact.save();
    res.status(200).json({ message: 'Your message has been sent successfully' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving message', error });
  }
});

module.exports = router;
