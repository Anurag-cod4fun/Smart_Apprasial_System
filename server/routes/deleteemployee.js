const express = require('express');
const router = express.Router();
const {Employee} = require('../models/employee');


router.delete('/:id', async (req, res) => {
    try {
      const employee = await Employee.findByIdAndDelete(req.params.id);
      if (!employee) {
        return res.status(404).send();
      }
      res.send(employee);
    } catch (error) {
      res.status(500).send(error);
    }
  });
  
  module.exports = router;