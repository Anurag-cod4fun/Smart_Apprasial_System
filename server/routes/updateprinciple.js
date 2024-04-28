const express = require('express');
const router = express.Router();
const {Admin} = require('../models/admin');

router.put('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const updatedprinciple = await Admin.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedprinciple);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
