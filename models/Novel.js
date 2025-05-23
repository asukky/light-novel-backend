const mongoose = require('mongoose');

const novelSchema = new mongoose.Schema({
  title: { type: String, required: true },
  author: { type: String, required: true },
  description: { type: String },
  coverImage: { type: String },
  chapters: [{
    title: { type: String, required: true },
    content: { type: String, required: true },
    createdAt: { type: Date, default: Date.now }
  }],
  genres: [{ type: String }],
  status: { type: String, enum: ['ongoing', 'completed', 'hiatus'], default: 'ongoing' },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Novel', novelSchema);