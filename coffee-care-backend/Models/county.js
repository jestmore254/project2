const mongoose = require('mongoose');

const countySchema = new mongoose.Schema({
  name: String,
  coffeeVarieties: [{ type: mongoose.Schema.Types.ObjectId, ref: 'CoffeeVariety' }]
}, { timestamps: true });

module.exports = mongoose.model('County', countySchema);
