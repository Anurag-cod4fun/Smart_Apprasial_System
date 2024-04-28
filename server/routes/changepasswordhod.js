// Import necessary modules and configure your Express app
const express = require('express');
const router = express.Router();
const { Admin } = require('../models/admin');

router.post('/', async (req, res) => {
  try {
    const { email, currentPassword, newPassword } = req.body;

    const admin = await Admin.findOne({ email });

    if (!admin) {
      return res.status(404).json({ success: false, message: 'Hod not found' });
    }

    if (admin.password !== currentPassword) {
      return res.status(401).json({ success: false, message: 'Incorrect current password' });
    }

    admin.password = newPassword;
    await admin.save();

    res.json({ success: true, message: 'Password changed successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'An error occurred while changing the password' });
  }
});

module.exports = router;
