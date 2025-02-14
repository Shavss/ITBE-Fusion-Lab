// models/MaintenanceRequest.js
const mongoose = require('mongoose');

const MaintenanceRequestSchema = new mongoose.Schema({
  elementId: { type: String, required: true },
  elementName: { type: String, required: true },
  comment: { type: String, required: true },
  requestedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  date: { type: Date, default: Date.now },
  resolved: { type: Boolean, default: false }
});

module.exports = mongoose.model('MaintenanceRequest', MaintenanceRequestSchema);
