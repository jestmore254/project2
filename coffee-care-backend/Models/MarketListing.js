const mongoose = require('mongoose');

const marketListingSchema = new mongoose.Schema({
  farmerName: String,
  coffeeVariety: { type: mongoose.Schema.Types.ObjectId, ref: 'CoffeeVariety' },
  quantityKg: Number,
  pricePerKg: Number,
  location: String
}, { timestamps: true });

module.exports = mongoose.model('MarketListing', marketListingSchema);
