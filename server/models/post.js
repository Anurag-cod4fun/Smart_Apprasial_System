const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  _id: {
    type: String,
    required: true,
  },
  employeeid: {
    type: String,
    required: true,
  },
  employeeName: {
    type: String,
  },
  designation: {
    type: String,
  },
  description: {
    type: String,
    required: true,
  },
  picturePath: {
    type: String,
  },
  profilePhotoURL: {
    type: String,
  },
  likes: {
    type: Object,
    default: {},
  },
  classification_tag: {
    type: String,
  },
  postedAt: {
    type: String, // Change type to String
    default: new Date().toISOString(), // Set default value to current date and time in ISO 8601 format
  },
});

const Post = mongoose.model("post", postSchema);

module.exports = { Post };
