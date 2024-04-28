const express = require('express');
const router = express.Router();
const { Notification } = require('../models/notification');
const { v4: uuidv4 } = require('uuid');

router.post('/', async (req, res) => {
  try {
    const { employeeid, message } = req.body;

    const newNotification = new Notification({
      _id: uuidv4(),
      employeeid,
      message,
      timestamp: new Date(), // Add the timestamp field with the current date and time
    });

    const savedNotification = await newNotification.save();

    res.status(201).json(savedNotification);
  } catch (error) {
    console.error('Error creating notification:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

module.exports = router;
