const express = require("express");
const router = new express.Router();
const { Admin } = require('../models/admin');
const authenticate2 = require("../middleware/authenticate2");



router.get("/validadmin", authenticate2, async (req, res) => {
  try {
    const admin = await Admin.findOne({ _id: req.userId });
    res.status(200).send({
      admin: {
        Adminid: req.userId,
        name: admin.name,
        email: admin.email,
        department: admin.department,
        college: admin.college,
        role: admin.role,
        mobile: admin.mobile,
        profilePhotoURL: admin.profilePhotoURL,
      },
      message: "logged in successfully"
    });
    //   console.log(admin)

  } catch (error) {
    res.status(401).json({ status: 401, error });
  }
});


module.exports = router;