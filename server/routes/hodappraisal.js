

const express = require('express');
const router = express.Router();
const { hodAppraisal } = require('../models/hodAppraisal');
const { Employee } = require('../models/employee');

router.post('/', async (req, res) => {
   
    const {
        employeeid,
        year,
        classesTaught,
        totalClasses,
        totalScore1,
        paperEval,
        studentActivities,
        totalScore2,
        attendanceRecordFESE,
        meetingsConductedFESE,
        communicationFESE,
        counselingFESE,
        rankScore,
        coCurricularScore,
        percentageIncreaseScore,
        totalScoreFESE,
        attendanceRecordTE,
        meetingsConductedTE,
        communicationTE,
        counselingTE,
        adhonScore,
        otherScore,
        allClearScore,
        totalScoreTE,
        attendanceRecordBE,
        meetingsConductedBE,
        communicationBE,
        counselingBE,
        adhonCompleted,
        placementPercentage,
        batchEvaluation,
        actionTaken,
        totalScoreBE,
        latestResult,
        prevYearResult1,
        prevYearResult2,
        prevYearResult3,
        totalscore4,
        internalFeedback,
        externalFeedback,
        totalScore5,
        handwrittenNotes,
        otherContents,
        coPoPsoMapping,
        totalScore6,
        shortTerm7a,
        semester7a,
        academicYear7a,
        totalScore7a,
        shortTerm7b,
        semester7b,
        academicYear7b,
        totalScore7b,
        shortTerm7c,
        semester7c,
        academicYear7c,
        totalScore7c,
        internationalJournal,
        citation2022,
        totalScore8a,
        international,
        national,
        chapter,
        editorInternational,
        editorNational,
        researchPaper,
        book,
        totalScore8b1,
        innovativePedagogy,
        eContentDevelopment,
        totalScore8b2,
        phdGuidance,
        pgDissertation,
        completedResearchProjectMoreThan10Lakhs,
        completedResearchProjectLessThan10Lakhs,
        ongoingResearchProjectMoreThan10Lakhs,
        ongoingResearchProjectLessThan10Lakhs,
        inHouseProductDevelopment,
        consultancy,
        editorialBoardReviewer,
        paperPublishedWithIndustryPerson,
        totalScore8b3,
        internationalPatents,
        nationalPatents,
        copyrights,
        awards,
        totalScore8b4,
        intlAbroad,
        intlWithin,
        Innational,
        stateUni,
        totalScore8b5,
        sttpOrganized,
        sttpAttended,
        conferenceAttended,
        nptelCertification,
        academicQualification,
        mouWithIndustry,
        totalScore9,
        totalScoreformA,
        totalScoreformB,
        totalScore,
    } = req.body;



    try {
        // Find the employee by employeeId
        // console.log(employeeid)

        const employee = await Employee.findById(employeeid);

        if (!employee) {
            return res.status(404).json({ error: 'Employee not found.' });
        }
        let appraisal = await hodAppraisal.findOne({ employeeid, year });
        // console.log(existingAppraisal)
        if (!appraisal) {
            // If no existing appraisal found, create a new one
            appraisal = new hodAppraisal({
                employeeid,
                year,
                classesTaught,
                totalClasses,
                totalScore1,
                paperEval,
                studentActivities,
                totalScore2,
                attendanceRecordFESE,
                meetingsConductedFESE,
                communicationFESE,
                counselingFESE,
                rankScore,
                coCurricularScore,
                percentageIncreaseScore,
                totalScoreFESE,
                attendanceRecordTE,
                meetingsConductedTE,
                communicationTE,
                counselingTE,
                adhonScore,
                otherScore,
                allClearScore,
                totalScoreTE,
                attendanceRecordBE,
                meetingsConductedBE,
                communicationBE,
                counselingBE,
                adhonCompleted,
                placementPercentage,
                batchEvaluation,
                actionTaken,
                totalScoreBE,
                latestResult,
                prevYearResult1,
                prevYearResult2,
                prevYearResult3,
                totalscore4,
                internalFeedback,
                externalFeedback,
                totalScore5,
                handwrittenNotes,
                otherContents,
                coPoPsoMapping,
                totalScore6,
                shortTerm7a,
                semester7a,
                academicYear7a,
                totalScore7a,
                shortTerm7b,
                semester7b,
                academicYear7b,
                totalScore7b,
                shortTerm7c,
                semester7c,
                academicYear7c,
                totalScore7c,
                internationalJournal,
                citation2022,
                totalScore8a,
                international,
                national,
                chapter,
                editorInternational,
                editorNational,
                researchPaper,
                book,
                totalScore8b1,
                innovativePedagogy,
                eContentDevelopment,
                totalScore8b2,
                phdGuidance,
                pgDissertation,
                completedResearchProjectMoreThan10Lakhs,
                completedResearchProjectLessThan10Lakhs,
                ongoingResearchProjectMoreThan10Lakhs,
                ongoingResearchProjectLessThan10Lakhs,
                inHouseProductDevelopment,
                consultancy,
                editorialBoardReviewer,
                paperPublishedWithIndustryPerson,
                totalScore8b3,
                internationalPatents,
                nationalPatents,
                copyrights,
                awards,
                totalScore8b4,
                intlAbroad,
                intlWithin,
                Innational,
                stateUni,
                totalScore8b5,
                sttpOrganized,
                sttpAttended,
                conferenceAttended,
                nptelCertification,
                academicQualification,
                mouWithIndustry,
                totalScore9,
                totalScoreformA,
                totalScoreformB,
                totalScore
            });
        } else {
            // If an existing appraisal found, update its fields
            appraisal.classesTaught = classesTaught;
            appraisal.totalClasses = totalClasses;
            appraisal.totalScore1 = totalScore1;
            appraisal.paperEval = paperEval;
            appraisal.studentActivities = studentActivities;
            appraisal.totalScore2 = totalScore2;
            appraisal.attendanceRecordFESE = attendanceRecordFESE;
            appraisal.meetingsConductedFESE = meetingsConductedFESE;
            appraisal.communicationFESE = communicationFESE;
            appraisal.counselingFESE = counselingFESE;
            appraisal.rankScore = rankScore;
            appraisal.coCurricularScore = coCurricularScore;
            appraisal.percentageIncreaseScore = percentageIncreaseScore;
            appraisal.totalScoreFESE = totalScoreFESE;
            appraisal.attendanceRecordTE = attendanceRecordTE;
            appraisal.meetingsConductedTE = meetingsConductedTE;
            appraisal.communicationTE = communicationTE;
            appraisal.counselingTE = counselingTE;
            appraisal.adhonScore = adhonScore;
            appraisal.otherScore = otherScore;
            appraisal.allClearScore = allClearScore;
            appraisal.totalScoreTE = totalScoreTE;
            appraisal.attendanceRecordBE = attendanceRecordBE;
            appraisal.meetingsConductedBE = meetingsConductedBE;
            appraisal.communicationBE = communicationBE;
            appraisal.counselingBE = counselingBE;
            appraisal.adhonCompleted = adhonCompleted;
            appraisal.placementPercentage = placementPercentage;
            appraisal.batchEvaluation = batchEvaluation;
            appraisal.actionTaken = actionTaken;
            appraisal.totalScoreBE = totalScoreBE;
            appraisal.latestResult = latestResult;
            appraisal.prevYearResult1 = prevYearResult1;
            appraisal.prevYearResult2 = prevYearResult2;
            appraisal.prevYearResult3 = prevYearResult3;
            appraisal.totalscore4 = totalscore4;
            appraisal.internalFeedback = internalFeedback;
            appraisal.externalFeedback = externalFeedback;
            appraisal.totalScore5 = totalScore5;
            appraisal.handwrittenNotes = handwrittenNotes;
            appraisal.otherContents = otherContents;
            appraisal.coPoPsoMapping = coPoPsoMapping;
            appraisal.totalScore6 = totalScore6;
            appraisal.shortTerm7a = shortTerm7a;
            appraisal.semester7a = semester7a;
            appraisal.academicYear7a = academicYear7a;
            appraisal.totalScore7a = totalScore7a;
            appraisal.shortTerm7b = shortTerm7b;
            appraisal.semester7b = semester7b;
            appraisal.academicYear7b = academicYear7b;
            appraisal.totalScore7b = totalScore7b;
            appraisal.shortTerm7c = shortTerm7c;
            appraisal.semester7c = semester7c;
            appraisal.academicYear7c = academicYear7c;
            appraisal.totalScore7c = totalScore7c;
            appraisal.internationalJournal = internationalJournal;
            appraisal.citation2022 = citation2022;
            appraisal.totalScore8a = totalScore8a;
            appraisal.international = international;
            appraisal.national = national;
            appraisal.chapter = chapter;
            appraisal.editorInternational = editorInternational;
            appraisal.editorNational = editorNational;
            appraisal.researchPaper = researchPaper;
            appraisal.book = book;
            appraisal.totalScore8b1=totalScore8b1,
            appraisal.innovativePedagogy = innovativePedagogy;
            appraisal.eContentDevelopment = eContentDevelopment;
            appraisal.totalScore8b2 = totalScore8b2;
            appraisal.phdGuidance = phdGuidance;
            appraisal.pgDissertation = pgDissertation;
            appraisal.completedResearchProjectMoreThan10Lakhs = completedResearchProjectMoreThan10Lakhs;
            appraisal.completedResearchProjectLessThan10Lakhs = completedResearchProjectLessThan10Lakhs;
            appraisal.ongoingResearchProjectMoreThan10Lakhs = ongoingResearchProjectMoreThan10Lakhs;
            appraisal.ongoingResearchProjectLessThan10Lakhs = ongoingResearchProjectLessThan10Lakhs;
            appraisal.inHouseProductDevelopment = inHouseProductDevelopment;
            appraisal.consultancy = consultancy;
            appraisal.editorialBoardReviewer = editorialBoardReviewer;
            appraisal.paperPublishedWithIndustryPerson = paperPublishedWithIndustryPerson;
            appraisal.totalScore8b3 = totalScore8b3;
            appraisal.internationalPatents = internationalPatents;
            appraisal.nationalPatents = nationalPatents;
            appraisal.copyrights = copyrights;
            appraisal.awards = awards;
            appraisal.totalScore8b4 = totalScore8b4;
            appraisal.intlAbroad = intlAbroad;
            appraisal.intlWithin = intlWithin;
            appraisal.Innational = Innational;
            appraisal.stateUni = stateUni;
            appraisal.totalScore8b5 = totalScore8b5;
            appraisal.sttpOrganized = sttpOrganized;
            appraisal.sttpAttended = sttpAttended;
            appraisal.conferenceAttended = conferenceAttended;
            appraisal.nptelCertification = nptelCertification;
            appraisal.academicQualification = academicQualification;
            appraisal.mouWithIndustry = mouWithIndustry;
            appraisal.totalScore9 = totalScore9;
            appraisal.totalScoreformA = totalScoreformA;
            appraisal.totalScoreformB = totalScoreformB;
            appraisal.totalScore = totalScore;

           
        }
        await appraisal.save();
        res.status(201).json({ message: 'Appraisal data saved successfully.' });
    } catch (error) {
        console.log(error)
        res.status(500).json({ error: 'An error occurred while saving the appraisal data.' });

    }
});

module.exports = router;
