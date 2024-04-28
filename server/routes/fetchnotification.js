const express = require('express');
const router = express.Router();
const {Notification} = require('../models/notification');

router.get('/:employeeid', async (req, res) => {
  try {
    const employeeid = req.params.employeeid;
    const notification = await Notification.find({ employeeid });
    res.json(notification);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});



module.exports = router;
