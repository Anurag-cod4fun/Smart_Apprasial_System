const express = require('express');
const router = express.Router();
const { Post } = require('../models/post'); 


router.get('/', async (req, res) => {
    try {
      const feedPosts = await Post.find().sort({ _id: -1 }); // Sort by most recent first
      res.status(200).json(feedPosts);
    } catch (error) {
      res.status(500).json({ error: 'Could not fetch feed posts' });
    }
  });
  
  module.exports = router;
