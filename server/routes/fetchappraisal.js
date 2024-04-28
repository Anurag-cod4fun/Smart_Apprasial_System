// const express = require('express');
// const router = express.Router();
// const { Appraisal } = require('../models/appraisal');

// router.get('/', async (req, res) => {
//   try {
//     // Fetch the appraisal data from the database
//     const appraisal = await Appraisal.findOne({  });

//     if (!appraisal) {
//       return res.status(404).json({ error: 'Appraisal data not found.' });
//     }

//     // Return the appraisal data in the response
//     res.status(200).json({ appraisal });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: 'An error occurred while fetching the appraisal data.' });
//   }
// });

// module.exports = router;



// const express = require('express');
// const router = express.Router();
// const { Appraisal } = require('../models/appraisal');

// router.get('/:employeeId', async (req, res) => {
//   try {
//     const employeeId = req.params.employeeId;
// console.log(employeeId)

//     const appraisal = await Appraisal.findOne({ employeeid:employeeId });
// console.log(appraisal)

//     if (!appraisal) {
//       return res.status(404).json({ error: 'Appraisal data not found.' });
//     }

//     res.status(200).json({ appraisal });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ error: 'An error occurred while fetching the appraisal data.' });
//   }
// });

// module.exports = router;


const express = require('express');
const router = express.Router();
const { Appraisal } = require('../models/appraisal');

router.get('/:employeeId/:year', async (req, res) => {
    try {
        const employeeId = req.params.employeeId;
        const year = req.params.year;

        const appraisal = await Appraisal.findOne({ employeeid: employeeId, year: year });
        // console.log(appraisal)
        if (!appraisal) {
            return res.status(404).json({ error: 'Appraisal data not found.' });
        }

        res.status(200).json({ appraisal });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'An error occurred while fetching the appraisal data.' });
    }
});

module.exports = router;
