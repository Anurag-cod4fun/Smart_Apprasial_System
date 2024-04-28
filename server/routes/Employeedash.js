const express = require("express");
const router = new express.Router();
const { Employee } = require('../models/employee');
const authenticate = require("../middleware/authenticate");



// user valid
router.get("/validuser", authenticate, async (req, res) => {
  try {
    const employee = await Employee.findOne({ _id: req.userId });
    res.status(200).send({

      employee: {
        employeeid: req.userId,
        name: employee.name,
        email: employee.email,
        department: employee.department,
        college: employee.college,
        designation: employee.designation,
        profilePhotoURL: employee.profilePhotoURL,
        mobile: employee.mobile,
        URL1: employee.URL1 ,
        URL2: employee.URL2 ,
        URL3: employee.URL3 ,
        URL4: employee.URL4 ,
        URL5: employee.URL5 ,
        URL6: employee.URL6 ,
        URL7: employee.URL7 ,
        URL8: employee.URL8 ,
        URL9: employee.URL9 ,
      },
      message: "logged in successfully"
    });
  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});


module.exports = router;