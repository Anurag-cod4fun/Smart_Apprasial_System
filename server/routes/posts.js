const express = require("express");
const router = express.Router();
const { Post } = require("../models/post");
const { v4: uuidv4 } = require("uuid");

router.post("/", async (req, res) => {
  try {
    const {
      employeeid,
      description,
      picturePath,
      profilePhotoURL,
      designation,
      employeeName,
      classification_tag,
    } = req.body;

    const currentDate = new Date();
    const formattedDate = `${currentDate.getFullYear()}-${String(
      currentDate.getMonth() + 1
    ).padStart(2, "0")}-${String(currentDate.getDate()).padStart(
      2,
      "0"
    )} ${String(currentDate.getHours()).padStart(2, "0")}:${String(
      currentDate.getMinutes()
    ).padStart(2, "0")}:${String(currentDate.getSeconds()).padStart(2, "0")}`;

    const newPost = new Post({
      _id: uuidv4(),
      employeeid,
      profilePhotoURL,
      description,
      picturePath,
      designation,
      employeeName,
      classification_tag,
      postedAt: formattedDate, // Set postedAt field to formatted date and time string
    });

    const savedPost = await newPost.save();

    res.status(201).json(savedPost);
  } catch (error) {
    console.error("Error creating post:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router;
