const express = require('express');
const router = express.Router();
const {Admin} = require('../models/admin');


router.delete('/:id', async (req, res) => {
    try {
      const principle = await Admin.findByIdAndDelete(req.params.id);
      if (!principle) {
        return res.status(404).send();
      }
      res.send(principle);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  module.exports = router;