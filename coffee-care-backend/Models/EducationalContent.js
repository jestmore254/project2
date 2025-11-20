const mongoose = require('mongoose');

const educationalSchema = new mongoose.Schema({
  title: String,
  content: String,
  type: { type: String, enum: ['video', 'article', 'tip'], default: 'tip' }
}, { timestamps: true });

module.exports = mongoose.model('EducationalContent', educationalSchema);
