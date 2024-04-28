const express = require("express");
const router = express.Router();
const { hodAppraisal } = require("../models/hodAppraisal");

router.get("/:employeeId/:year", async (req, res) => {
  try {
    const employeeId = req.params.employeeId;
    const year = req.params.year;

    // console.log(
    //   "Fetching HOD appraisal data for employeeId:",
    //   employeeId,
    //   "year:",
    //   year
    // );

    const appraisal = await hodAppraisal.findOne({
      employeeid: employeeId,
      year: year,
    });

    // console.log("HOD appraisal data:", appraisal);


    if (!appraisal) {
      console.log("HOD Appraisal data not found.");
      return res.status(404).json({ error: "HOD Appraisal data not found." });
    }

    res.status(200).json({ appraisal });
  } catch (error) {
    console.error(
      "An error occurred while fetching the HOD appraisal data:",
      error
    );
    res.status(500).json({
      error: "An error occurred while fetching the HOD appraisal data.",
    });
  }
});

module.exports = router;
