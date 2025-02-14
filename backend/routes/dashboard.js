// backend/routes/dashboard.js
const express = require('express');
const router = express.Router();
const User = require('../models/User');
const { authenticateToken } = require('./auth'); // Import middleware from auth.js

// 🖥️ Dashboard Route (GET /api/dashboard)
router.get('/dashboard', authenticateToken, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password'); // Exclude password
    res.status(200).json(user);
  } catch (error) {
    res.status(500).json({ message: 'Error retrieving user data', error });
  }
});

module.exports = router;
