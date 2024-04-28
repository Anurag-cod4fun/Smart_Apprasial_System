// Import necessary modules and configure your Express app
const express = require('express');
const router = express.Router();
const { Employee } = require('../models/employee');

// Define a route for changing the employee's password
router.post('/', async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;

    // Find the employee by email
    const employee = await Employee.findOne({ email });

    // Check if the employee exists
    if (!employee) {
      return res.status(404).json({ success: false, message: 'Employee not found' });
    }

    // Verify the current password (assuming you have stored plain text passwords)
    if (employee.password !== currentPassword) {
      return res.status(401).json({ success: false, message: 'Incorrect current password' });
    }

    // Update the employee's password
    employee.password = newPassword;
    await employee.save();

    res.json({ success: true, message: 'Password changed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred while changing the password' });
  }
});

module.exports = router;
