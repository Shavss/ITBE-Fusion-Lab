// routes/maintenance.js
const express = require('express');
const MaintenanceRequest = require('../models/MaintenanceRequest');
const { authenticateToken } = require('./auth');

const router = express.Router();

// 📝 Create a Maintenance Request (POST /api/maintenance)
router.post('/create', authenticateToken, async (req, res) => {
  const { elementId, elementName, comment } = req.body;
  try {
    const newRequest = new MaintenanceRequest({
      requestedBy: req.user.id, // User ID from token
      elementId,
      elementName,
      comment,
    });
    await newRequest.save();
    res.status(201).json({ message: 'Maintenance request submitted successfully!' });
  } catch (error) {
    console.error('Error creating maintenance request:', error);
    res.status(500).json({ message: 'Error creating maintenance request', error });
  }
});

// 📜 Get All Unresolved Maintenance Requests (GET /api/maintenance/unresolved)
router.get('/unresolved', authenticateToken, async (req, res) => {
  try {
    // Show only unresolved requests
    const requests = await MaintenanceRequest.find({ resolved: false })
      .populate('requestedBy', 'email') // Populate user email
      .sort({ date: -1 }); // Show latest first
    res.status(200).json(requests);
  } catch (error) {
    console.error('Error fetching unresolved requests:', error);
    res.status(500).json({ message: 'Error fetching unresolved requests', error });
  }
});

// 📜 Get User’s Maintenance Requests (GET /api/maintenance/my-requests)
router.get('/my-requests', authenticateToken, async (req, res) => {
  try {
    // Show only current user's requests
    const requests = await MaintenanceRequest.find({ requestedBy: req.user.id })
      .sort({ date: -1 });
    res.status(200).json(requests);
  } catch (error) {
    console.error('Error fetching user requests:', error);
    res.status(500).json({ message: 'Error fetching user requests', error });
  }
});

module.exports = router;
