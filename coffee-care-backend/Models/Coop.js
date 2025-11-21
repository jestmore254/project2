const mongoose = require('mongoose');

// Define Coop schema
const coopSchema = new mongoose.Schema({
  name: { 
    type: String, 
    required: true 
  },
  location: { 
    type: String 
  },
  members: { 
    type: Number, 
    default: 0 
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
}, { timestamps: true });

// Export the model
module.exports = mongoose.model('Coop', coopSchema);s