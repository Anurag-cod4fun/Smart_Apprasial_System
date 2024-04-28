const express = require('express');
const router = express.Router();
const { Employee} = require('../models/employee');

// Update an employee
router.put('/:id', async (req, res) => {
  const { id } = req.params;

  try {
    const updatedEmployee = await Employee.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).json(updatedEmployee);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

module.exports = router;
