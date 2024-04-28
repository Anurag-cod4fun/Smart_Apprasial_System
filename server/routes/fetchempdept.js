const express = require('express');
const router = express.Router();
const { Employee } = require('../models/employee');

// This route will fetch employees based on the selected department
router.get("/", async (req, res) => {
  try {
    const selectedDepartment = req.query.department;
    
    // If a department is specified, filter employees by that department; otherwise, return all employees
    const query = selectedDepartment ? { department: selectedDepartment } : {};
    
    const employees = await Employee.find(query);
    res.json(employees);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to fetch employees" });
  }
});

module.exports = router;
