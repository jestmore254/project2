const mongoose = require('mongoose');

const coffeeFactorySchema = new mongoose.Schema({
  name: String,
  location: String,
  contact: String
}, { timestamps: true });

module.exports = mongoose.model('CoffeeFactory', coffeeFactorySchema);
