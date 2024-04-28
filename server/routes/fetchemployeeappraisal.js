const express = require('express');
const router = express.Router();
const { Employee } = require('../models/employee');
const {Appraisal} = require('../models/appraisal')

router.get('/:id', async (req, res) => {
    try {
      const employeeId = req.params.id;
  
      const employee = await Employee.findById(employeeId);
      if (!employee) {
        return res.status(404).json({ message: 'Employee not found' });
      }
//   console.log(employeeId)
      const appraisals = await Appraisal.find({ employeeid:employeeId });
    //   console.log(appraisals)

      res.json({ appraisals });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  });



  
  module.exports = router;