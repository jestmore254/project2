const mongoose = require('mongoose');

const coffeeVarietySchema = new mongoose.Schema({
  name: String,
  description: String,
  growthDurationMonths: Number,
  suitableClimate: String,
  recommendedFertilizers: [String]
}, { timestamps: true });

module.exports = mongoose.model('CoffeeVariety', coffeeVarietySchema);
