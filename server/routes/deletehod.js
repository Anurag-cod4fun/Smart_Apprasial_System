const express = require('express');
const router = express.Router();
const {Admin} = require('../models/admin');


router.delete('/:id', async (req, res) => {
    try {
      const hod = await Admin.findByIdAndDelete(req.params.id);
      if (!hod) {
        return res.status(404).send();
      }
      res.send(hod);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  module.exports = router;