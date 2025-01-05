// backend/routes/models.js
const express = require('express');
const router = express.Router();

// Example route for handling model-related requests
router.get('/models', (req, res) => {
  res.json({ message: 'This is the models route' });
});

module.exports = router;
