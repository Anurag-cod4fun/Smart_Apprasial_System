const { string } = require("joi");
const mongoose = require("mongoose");

const hodappraisalSchema = new mongoose.Schema({
  employeeid: {
    type: String,
    required: true,
  },
  year: {
    type: Number,
    required: true,
  },
  classesTaught: {
    type: Number,
    required: true,
  },
  totalClasses: {
    type: Number,
    required: true,
  },
  totalScore1: {
    type: Number,
    default: 0,
  },
  paperEval: {
    type: Number,
    required: true,
  },
  studentActivities: {
    type: Number,
    required: true,
  },
  totalScore2: {
    type: Number,
    default: 0,
  },
  attendanceRecordFESE: {
    type: Number,
    required: true,
  },
  meetingsConductedFESE: {
    type: Number,
    required: true,
  },
  communicationFESE: {
    type: Number,
    required: true,
  },
  counselingFESE: {
    type: Number,
    required: true,
  },
  rankScore: {
    type: Number,
    required: true,
  },
  coCurricularScore: {
    type: Number,
    required: true,
  },
  percentageIncreaseScore: {
    type: Number,
    required: true,
  },
  totalScoreFESE: {
    type: Number,
    default: 0,
  },
  attendanceRecordTE: {
    type: Number,
    required: true,
  },
  meetingsConductedTE: {
    type: Number,
    required: true,
  },
  communicationTE: {
    type: Number,
    required: true,
  },
  counselingTE: {
    type: Number,
    required: true,
  },
  adhonScore: {
    type: Number,
    required: true,
  },
  otherScore: {
    type: Number,
    required: true,
  },
  allClearScore: {
    type: Number,
    required: true,
  },
  totalScoreTE: {
    type: Number,
    default: 0,
  },
  attendanceRecordBE: {
    type: Number,
    required: true,
  },
  meetingsConductedBE: {
    type: Number,
    required: true,
  },
  communicationBE: {
    type: Number,
    required: true,
  },
  counselingBE: {
    type: Number,
    required: true,
  },
  adhonCompleted: {
    type: Number,
    required: true,
  },
  placementPercentage: {
    type: Number,
    required: true,
  },
  batchEvaluation: {
    type: Number,
    required: true,
  },
  actionTaken: {
    type: Number,
    required: true,
  },
  totalScoreBE: {
    type: Number,
    default: 0,
  },
  latestResult: {
    type: Number,
    required: true,
  },
  prevYearResult1: {
    type: Number,
    required: true,
  },
  prevYearResult2: {
    type: Number,
    required: true,
  },
  prevYearResult3: {
    type: Number,
    required: true,
  },
  totalscore4: {
    type: Number,
    default: 0,
  },
  internalFeedback: {
    type: Number,
    required: true,
  },
  externalFeedback: {
    type: Number,
    required: true,
  },
  totalScore5: {
    type: Number,
    default: 0,
  },
  handwrittenNotes: {
    type: Number,
    required: true,
  },
  otherContents: {
    type: Number,
    required: true,
  },
  coPoPsoMapping: {
    type: Number,
    required: true,
  },
  totalScore6: {
    type: Number,
    default: 0,
  },
  shortTerm7a: {
    type: Number,
    required: true,
  },
  semester7a: {
    type: Number,
    required: true,
  },
  academicYear7a: {
    type: Number,
    required: true,
  },
  totalScore7a: {
    type: Number,
    default: 0,
  },
  shortTerm7b: {
    type: Number,
    required: true,
  },
  semester7b: {
    type: Number,
    required: true,
  },
  academicYear7b: {
    type: Number,
    required: true,
  },
  totalScore7b: {
    type: Number,
    default: 0,
  },
  shortTerm7c: {
    type: Number,
    required: true,
  },
  semester7c: {
    type: Number,
    required: true,
  },
  academicYear7c: {
    type: Number,
    required: true,
  },
  totalScore7c: {
    type: Number,
    default: 0,
  },
  internationalJournal: {
    type: Number,
    required: true,
  },
  citation2022: {
    type: Number,
    required: true,
  },
  totalScore8a: {
    type: Number,
    default: 0,
  },
  international: {
    type: Number,
    required: true,
  },
  national: {
    type: Number,
    required: true,
  },
  chapter: {
    type: Number,
    required: true,
  },
  editorInternational: {
    type: Number,
    required: true,
  },
  editorNational: {
    type: Number,
    required: true,
  },
  researchPaper: {
    type: Number,
    required: true,
  },
  book: {
    type: Number,
    required: true,
  },
  totalScore8b1: {
    type: Number,
    default: 0,
  },
  innovativePedagogy: {
    type: Number,
    required: true,
  },
  eContentDevelopment: {
    type: Number,
    required: true,
  },
  totalScore8b2: {
    type: Number,
    default: 0,
  },
  phdGuidance: {
    type: Number,
    required: true,
  },
  pgDissertation: {
    type: Number,
    required: true,
  },
  completedResearchProjectMoreThan10Lakhs: {
    type: Number,
    required: true,
  },
  completedResearchProjectLessThan10Lakhs: {
    type: Number,
    required: true,
  },
  ongoingResearchProjectMoreThan10Lakhs: {
    type: Number,
    required: true,
  },
  ongoingResearchProjectLessThan10Lakhs: {
    type: Number,
    required: true,
  },
  inHouseProductDevelopment: {
    type: Number,
    required: true,
  },
  consultancy: {
    type: Number,
    required: true,
  },
  editorialBoardReviewer: {
    type: Number,
    required: true,
  },
  paperPublishedWithIndustryPerson: {
    type: Number,
    required: true,
  },
  totalScore8b3: {
    type: Number,
    default: 0,
  },
  internationalPatents: {
    type: Number,
    required: true,
  },
  nationalPatents: {
    type: Number,
    required: true,
  },
  copyrights: {
    type: Number,
    required: true,
  },
  awards: {
    type: Number,
    required: true,
  },
  totalScore8b4: {
    type: Number,
    default: 0,
  },
  intlAbroad: {
    type: Number,
    required: true,
  },
  intlWithin: {
    type: Number,
    required: true,
  },
  Innational: {
    type: Number,
    required: true,
  },
  stateUni: {
    type: Number,
    required: true,
  },
  totalScore8b5: {
    type: Number,
    default: 0,
  },
  sttpOrganized: {
    type: Number,
    required: true,
  },
  sttpAttended: {
    type: Number,
    required: true,
  },
  conferenceAttended: {
    type: Number,
    required: true,
  },
  nptelCertification: {
    type: Number,
    required: true,
  },
  academicQualification: {
    type: Number,
    required: true,
  },
  mouWithIndustry: {
    type: Number,
    required: true,
  },
  totalScore9: {
    type: Number,
    default: 0,
  },
  totalScoreformA: {
    type: Number,
    default: 0,
  },
  totalScoreformB: {
    type: Number,
    default: 0,
  },
  totalScore: {
    type: Number,
    default: 0,
  },
});

const hodAppraisal = mongoose.model("hodappraisals", hodappraisalSchema);

module.exports = { hodAppraisal };
