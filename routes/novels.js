const express = require('express');
const router = express.Router();
const Novel = require('../models/Novel');

// Get all novels
router.get('/', async (req, res) => {
  try {
    const novels = await Novel.find();
    res.json(novels);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get single novel
router.get('/:id', async (req, res) => {
  try {
    const novel = await Novel.findById(req.params.id);
    if (!novel) return res.status(404).json({ message: 'Novel not found' });
    res.json(novel);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Add more routes for creating, updating, deleting novels...

module.exports = router;