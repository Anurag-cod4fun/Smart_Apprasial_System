const express = require('express');
const router = express.Router();
const {Employee} = require('../models/employee');

router.get('/', async (req, res) => {
  try {
    const employees = await Employee.find();
    res.json(employees);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});


module.exports = router;
