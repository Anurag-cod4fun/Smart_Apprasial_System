const express = require('express');
const router = express.Router();
const { Post } = require('../models/post');

router.get('/:employeeid', async (req, res) => {
  try {
    
    const employeeid = req.params.employeeid;
    // console.log(employeeid)
    const userPosts = await Post.find({ employeeid }); 
    // console.log(userPosts)

    res.json(userPosts);
  } catch (error) {
    console.error('Error fetching user feed:', error);
    res.status(500).json({ error: 'Unable to fetch user feed' });
  }
});






module.exports = router;
