const express = require("express");
const router = express.Router();
const { Appraisal } = require("../models/appraisal");

// Route to handle updating internationalPatents, papers, and seminars for an employee
router.put("/:employeeId", async (req, res) => {
  const { employeeId } = req.params;
  const { internationalPatents, researchPaper, Innational } = req.body;

  try {
    // Find the appraisal document for the employee
    const appraisal = await Appraisal.findOne({ employeeid: employeeId });

    if (!appraisal) {
      console.error(`Appraisal not found for employeeId: ${employeeId}`);
      return res.status(404).json({ error: "Appraisal not found" });
    }

    // Update the fields if they are provided in the request body
    if (internationalPatents !== undefined) {
      appraisal.internationalPatents = internationalPatents;
    }

    if (researchPaper !== undefined) {
      appraisal.researchPaper = researchPaper;
    }

    if (Innational !== undefined) {
      appraisal.Innational = Innational;
    }

    // Save the updated appraisal document
    await appraisal.save();

    console.log(`Data updated for employeeId: ${employeeId}`);
    return res.status(200).json({
      message: "Data updated successfully",
      appraisal: appraisal,
    });
  } catch (error) {
    console.error("Error updating data:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
