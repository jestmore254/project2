// models/Farmer.js
const mongoose = require('mongoose');

const farmerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  location: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    unique: true
  },
  farmSize: {
    type: Number,
    default: 0
  },
  crops: {
    type: [String],
    default: []
  }
}, { timestamps: true });

module.exports = mongoose.model('Farmer', farmerSchema);
