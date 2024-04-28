const express = require('express');
const router = express.Router();
const {Admin} = require('../models/admin');

router.get('/', async (req, res) => {
  try {
    const principle = await Admin.find({ role: 'principle' });
    res.json(principle);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
