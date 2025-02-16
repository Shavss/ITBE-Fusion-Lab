// server.js (backend)
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

// MongoDB connection using Railway's provided URL
const mongoURI = process.env.MONGO_URI || 'mongodb://mongo:fEmmCXyvsFxysCTJNKIAqlFoaadwqkch@mongodb.railway.internal:27017';

mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Error connecting to MongoDB:', err));

// Register Routes
app.use('/api', contactRoutes);  // Contact form submissions
app.use('/api/auth', authRouter);  // User authentication
app.use('/api/', dashboardRoutes);
app.use('/api/maintenance', maintenanceRoutes);

// Start the server
app.listen(PORT, '::', () => {
  console.log(`Server running on [::]:${PORT}`);
});
