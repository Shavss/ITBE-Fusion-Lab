// backend/routes/contact.js
const express = require('express');
const router = express.Router();
const Contact = require('../models/Contact'); // Import Contact model

// Handle contact form submissions (POST)
router.post('/contact', async (req, res) => {
  const { firstName, lastName, email, phone, subject, message } = req.body;

  // Validate required fields
  if (!firstName || !lastName || !email || !phone || !subject || !message) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  try {
    // Save to database
    const newContact = new Contact({ firstName, lastName, email, phone, subject, message });
    await newContact.save();
    res.status(201).json({ message: 'Your message has been sent successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving message', error });
  }
});

// Retrieve all contact messages (GET)
router.get('/contact', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.status(200).json(contacts);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving messages', error });
  }
});

module.exports = router;
