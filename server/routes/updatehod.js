const express = require('express');
const router = express.Router();
const {Admin} = require('../models/admin');

router.put('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const updatedhod = await Admin.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedhod);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
