// server.js (backend)
require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');
const contactRoutes = require('./routes/contact');  // Import the contact routes
const dashboardRoutes = require('./routes/dashboard');
const { authRouter } = require('./routes/auth');
const maintenanceRoutes = require('./routes/maintenance');


const app = express();
const PORT = process.env.PORT || 5001;



// Middleware
app.use(cors());
app.use(bodyParser.json()); // Parse JSON request bodies

// MongoDB connection using MongoDB Atlas
const mongoURI = process.env.MONGO_URI;

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch((err) => console.error('Error connecting to MongoDB Atlas:', err));

// Register Routes
app.use('/api', contactRoutes);  // Contact form submissions
app.use('/api/auth', authRouter);  // User authentication
app.use('/api/', dashboardRoutes);
app.use('/api/maintenance', maintenanceRoutes);

// Start the server
// Start the server
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});