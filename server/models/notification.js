const mongoose = require('mongoose');

const notificationSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  employeeid: {
    type: String,
    required: true,
  },
  message: {
    type: String,
    required: true,
  },
  timestamp: {
    type: Date,
    required: true,
    default: Date.now, // Set the default value to the current date and time
  },
});

const Notification = mongoose.model('notification', notificationSchema);

module.exports = { Notification };
