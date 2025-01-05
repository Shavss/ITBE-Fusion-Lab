// server.js (backend)
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contact');  // Import the contact routes

const app = express();
const PORT = process.env.PORT || 5001;

// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON request bodies
app.use(express.static(path.join(__dirname, 'uploads'))); // Serve uploaded files

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/3d_city_models', { 
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

// Register the contact route for handling the form submissions
app.use('/api', contactRoutes); // This will handle the /api/contact POST request

// Other routes for your models (if any)
const modelRoutes = require('./routes/models');
app.use('/api', modelRoutes);  // Register model routes

// Start the server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
