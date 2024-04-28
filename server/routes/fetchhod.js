const express = require('express');
const router = express.Router();
const {Admin} = require('../models/admin');

router.get('/', async (req, res) => {
  try {
    const hod = await Admin.find({ role: 'hod' });
    res.json(hod);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
