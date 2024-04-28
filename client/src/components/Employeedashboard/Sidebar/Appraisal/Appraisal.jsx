import React, { useState, useEffect, useContext } from "react";
import {
  ClassificationContext,
  useClassification,
} from "../ClassificationContext";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Appraisal.css";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { storage } from "../../../firebase";
import LoadingBar from "react-top-loading-bar";
const Appraisal = () => {
  const employeeId = localStorage.getItem("employeeid");
  const [year, setYear] = useState("2023");
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploading1, setUploading1] = useState(false);
  const [uploading2, setUploading2] = useState(false);
  const [uploading3, setUploading3] = useState(false);
  const [uploading4, setUploading4] = useState(false);
  const [uploading5, setUploading5] = useState(false);
  const [uploading6, setUploading6] = useState(false);
  const [uploading7, setUploading7] = useState(false);
  const [uploading8, setUploading8] = useState(false);
  const [uploading9, setUploading9] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [show, setShow] = useState(false);
  const [employee, setEmployee] = useState(null);
  const handleButtonClick = () => {
    setShow(true);
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const handleUpload1 = async () => {
    if (selectedFile) {
      const storageRef = ref(
        storage,
        `Appraisal 1/${employeeId}/${selectedFile.name}`
      );

      try {
        setUploading1(true);
        await uploadBytes(storageRef, selectedFile);
        console.log("Image uploaded");
        toast.success("File uploaded successfully!");

        const downloadURL1 = await getDownloadURL(storageRef);
        const updatedEmployee = { ...employee, URL1: downloadURL1 };

        try {
          const response = await axios.put(
            `http://localhost:8080/api/updateemployee/${employeeId}`,
            updatedEmployee
          );
          const data = response.data;
          if (data.error) {
            console.log(data.error);
          }
        } catch (error) {
          console.error("Failed to update employee:", error);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("File upload failed!");
      } finally {
        setUploading1(false);
      }
    } else {
      toast.error("No file selected!");
    }
  };

  const handleUpload2 = async () => {
    if (selectedFile) {
      const storageRef = ref(
        storage,
        `Appraisal 2)/${employeeId}/${selectedFile.name}`
      );

      try {
        setUploading2(true);
        await uploadBytes(storageRef, selectedFile);
        console.log("Image uploaded");
        toast.success("File uploaded successfully!");

        const downloadURL2 = await getDownloadURL(storageRef);
        const updatedEmployee = { ...employee, URL2: downloadURL2 };

        try {
          const response = await axios.put(
            `http://localhost:8080/api/updateemployee/${employeeId}`,
            updatedEmployee
          );
          const data = response.data;
          if (data.error) {
            console.log(data.error);
          }
        } catch (error) {
          console.error("Failed to update employee:", error);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("File upload failed!");
      } finally {
        setUploading2(false);
      }
    } else {
      toast.error("No file selected!");
    }
  };

  const handleUpload3 = async () => {
    if (selectedFile) {
      const storageRef = ref(
        storage,
        `Appraisal 3)/${employeeId}/${selectedFile.name}`
      );

      try {
        setUploading3(true);
        await uploadBytes(storageRef, selectedFile);
        console.log("Image uploaded");
        toast.success("File uploaded successfully!");

        const downloadURL3 = await getDownloadURL(storageRef);
        const updatedEmployee = { ...employee, URL3: downloadURL3 };

        try {
          const response = await axios.put(
            `http://localhost:8080/api/updateemployee/${employeeId}`,
            updatedEmployee
          );
          const data = response.data;
          if (data.error) {
            console.log(data.error);
          }
        } catch (error) {
          console.error("Failed to update employee:", error);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("File upload failed!");
      } finally {
        setUploading3(false);
      }
    } else {
      toast.error("No file selected!");
    }
  };

  const handleUpload4 = async () => {
    if (selectedFile) {
      const storageRef = ref(
        storage,
        `Appraisal 4)/${employeeId}/${selectedFile.name}`
      );

      try {
        setUploading4(true);
        await uploadBytes(storageRef, selectedFile);
        console.log("Image uploaded");
        toast.success("File uploaded successfully!");

        const downloadURL4 = await getDownloadURL(storageRef);
        const updatedEmployee = { ...employee, URL4: downloadURL4 };

        try {
          const response = await axios.put(
            `http://localhost:8080/api/updateemployee/${employeeId}`,
            updatedEmployee
          );
          const data = response.data;
          if (data.error) {
            console.log(data.error);
          }
        } catch (error) {
          console.error("Failed to update employee:", error);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("File upload failed!");
      } finally {
        setUploading4(false);
      }
    } else {
      toast.error("No file selected!");
    }
  };

  const handleUpload5 = async () => {
    if (selectedFile) {
      const storageRef = ref(
        storage,
        `Appraisal 5)/${employeeId}/${selectedFile.name}`
      );

      try {
        setUploading5(true);
        await uploadBytes(storageRef, selectedFile);
        console.log("Image uploaded");
        toast.success("File uploaded successfully!");

        const downloadURL5 = await getDownloadURL(storageRef);
        const updatedEmployee = { ...employee, URL5: downloadURL5 };

        try {
          const response = await axios.put(
            `http://localhost:8080/api/updateemployee/${employeeId}`,
            updatedEmployee
          );
          const data = response.data;
          if (data.error) {
            console.log(data.error);
          }
        } catch (error) {
          console.error("Failed to update employee:", error);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("File upload failed!");
      } finally {
        setUploading5(false);
      }
    } else {
      toast.error("No file selected!");
    }
  };

  const handleUpload6 = async () => {
    if (selectedFile) {
      const storageRef = ref(
        storage,
        `Appraisal 6)/${employeeId}/${selectedFile.name}`
      );

      try {
        setUploading6(true);
        await uploadBytes(storageRef, selectedFile);
        console.log("Image uploaded");
        toast.success("File uploaded successfully!");

        const downloadURL6 = await getDownloadURL(storageRef);
        const updatedEmployee = { ...employee, URL6: downloadURL6 };

        try {
          const response = await axios.put(
            `http://localhost:8080/api/updateemployee/${employeeId}`,
            updatedEmployee
          );
          const data = response.data;
          if (data.error) {
            console.log(data.error);
          }
        } catch (error) {
          console.error("Failed to update employee:", error);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("File upload failed!");
      } finally {
        setUploading6(false);
      }
    } else {
      toast.error("No file selected!");
    }
  };

  const handleUpload7 = async () => {
    if (selectedFile) {
      const storageRef = ref(
        storage,
        `Appraisal 7)/${employeeId}/${selectedFile.name}`
      );

      try {
        setUploading7(true);
        await uploadBytes(storageRef, selectedFile);
        console.log("Image uploaded");
        toast.success("File uploaded successfully!");

        const downloadURL7 = await getDownloadURL(storageRef);
        const updatedEmployee = { ...employee, URL7: downloadURL7 };

        try {
          const response = await axios.put(
            `http://localhost:8080/api/updateemployee/${employeeId}`,
            updatedEmployee
          );
          const data = response.data;
          if (data.error) {
            console.log(data.error);
          }
        } catch (error) {
          console.error("Failed to update employee:", error);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("File upload failed!");
      } finally {
        setUploading7(false);
      }
    } else {
      toast.error("No file selected!");
    }
  };

  const handleUpload8 = async () => {
    if (selectedFile) {
      const storageRef = ref(
        storage,
        `Appraisal 8)/${employeeId}/${selectedFile.name}`
      );

      try {
        setUploading8(true);
        await uploadBytes(storageRef, selectedFile);
        console.log("Image uploaded");
        toast.success("File uploaded successfully!");

        const downloadURL8 = await getDownloadURL(storageRef);
        const updatedEmployee = { ...employee, URL8: downloadURL8 };

        try {
          const response = await axios.put(
            `http://localhost:8080/api/updateemployee/${employeeId}`,
            updatedEmployee
          );
          const data = response.data;
          if (data.error) {
            console.log(data.error);
          }
        } catch (error) {
          console.error("Failed to update employee:", error);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("File upload failed!");
      } finally {
        setUploading8(false);
      }
    } else {
      toast.error("No file selected!");
    }
  };

  const handleUpload9 = async () => {
    if (selectedFile) {
      const storageRef = ref(
        storage,
        `Appraisal 9)/${employeeId}/${selectedFile.name}`
      );

      try {
        setUploading9(true);
        await uploadBytes(storageRef, selectedFile);
        console.log("Image uploaded");
        toast.success("File uploaded successfully!");

        const downloadURL9 = await getDownloadURL(storageRef);
        const updatedEmployee = { ...employee, URL9: downloadURL9 };

        try {
          const response = await axios.put(
            `http://localhost:8080/api/updateemployee/${employeeId}`,
            updatedEmployee
          );
          const data = response.data;
          if (data.error) {
            console.log(data.error);
          }
        } catch (error) {
          console.error("Failed to update employee:", error);
        }
      } catch (error) {
        console.error("Error uploading image:", error);
        toast.error("File upload failed!");
      } finally {
        setUploading9(false);
      }
    } else {
      toast.error("No file selected!");
    }
  };

  useEffect(() => {
    const fetchAppraisalData = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/fetchappraisal/${employeeId}/${year}`
        );
        const appraisalData = response.data.appraisal;
        if (appraisalData) {
          setClassesTaught(appraisalData.classesTaught);
          setTotalClasses(appraisalData.totalClasses);
          setTotalScore1(appraisalData.totalScore1);
          setPaperEval(appraisalData.paperEval);
          setStudentActivities(appraisalData.studentActivities);
          setTotalScore2(appraisalData.totalScore2);
          setAttendanceRecordFESE(appraisalData.attendanceRecordFESE);
          setMeetingsConductedFESE(appraisalData.meetingsConductedFESE);
          setCommunicationFESE(appraisalData.communicationFESE);
          setCounselingFESE(appraisalData.counselingFESE);
          setRankScore(appraisalData.rankScore);
          setCoCurricularScore(appraisalData.coCurricularScore);
          setPercentageIncreaseScore(appraisalData.percentageIncreaseScore);
          setTotalScoreFESE(appraisalData.totalScoreFESE);
          setAttendanceRecordTE(appraisalData.attendanceRecordTE);
          setMeetingsConductedTE(appraisalData.meetingsConductedTE);
          setCommunicationTE(appraisalData.communicationTE);
          setCounselingTE(appraisalData.counselingTE);
          setAdhonScore(appraisalData.adhonScore);
          setOtherScore(appraisalData.otherScore);
          setAllClearScore(appraisalData.allClearScore);
          setTotalScoreTE(appraisalData.totalScoreTE);
          setAttendanceRecordBE(appraisalData.attendanceRecordBE);
          setMeetingsConductedBE(appraisalData.meetingsConductedBE);
          setCommunicationBE(appraisalData.communicationBE);
          setCounselingBE(appraisalData.counselingBE);
          setAdhonCompleted(appraisalData.adhonCompleted);
          setPlacementPercentage(appraisalData.placementPercentage);
          setBatchEvaluation(appraisalData.batchEvaluation);
          setActionTaken(appraisalData.actionTaken);
          setTotalScoreBE(appraisalData.totalScoreBE);
          setLatestResult(appraisalData.latestResult);
          setPrevYearResult1(appraisalData.prevYearResult1);
          setPrevYearResult2(appraisalData.prevYearResult2);
          setPrevYearResult3(appraisalData.prevYearResult3);
          setTotalScore4(appraisalData.totalscore4);
          setInternalFeedback(appraisalData.internalFeedback);
          setExternalFeedback(appraisalData.externalFeedback);
          setTotalScore5(appraisalData.totalScore5);
          setHandwrittenNotes(appraisalData.handwrittenNotes);
          setOtherContents(appraisalData.otherContents);
          setCoPoPsoMapping(appraisalData.coPoPsoMapping);
          setTotalScore6(appraisalData.totalScore6);
          setShortTerm7a(appraisalData.shortTerm7a);
          setSemester7a(appraisalData.semester7a);
          setAcademicYear7a(appraisalData.academicYear7a);
          setTotalScore7a(appraisalData.totalScore7a);
          setShortTerm7b(appraisalData.shortTerm7b);
          setSemester7b(appraisalData.semester7b);
          setAcademicYear7b(appraisalData.academicYear7b);
          setTotalScore7b(appraisalData.totalScore7b);
          setShortTerm7c(appraisalData.shortTerm7c);
          setSemester7c(appraisalData.semester7c);
          setAcademicYear7c(appraisalData.academicYear7c);
          setTotalScore7c(appraisalData.totalScore7c);
          setInternationalJournal(appraisalData.internationalJournal);
          setCitation2022(appraisalData.citation2022);
          setTotalScore8a(appraisalData.totalScore8a);
          setInternational(appraisalData.international);
          setNational(appraisalData.national);
          setChapter(appraisalData.chapter);
          setEditorInternational(appraisalData.editorInternational);
          setEditorNational(appraisalData.editorNational);
          setPapers(appraisalData.researchPaper);
          setBook(appraisalData.book);
          setTotalScore8b1(appraisalData.totalScore8b1);
          setInnovativePedagogy(appraisalData.innovativePedagogy);
          setEContentDevelopment(appraisalData.eContentDevelopment);
          setTotalScore8b2(appraisalData.totalScore8b2);
          setPhdGuidance(appraisalData.phdGuidance);
          setPgDissertation(appraisalData.pgDissertation);
          setCompletedResearchProjectMoreThan10Lakhs(
            appraisalData.completedResearchProjectMoreThan10Lakhs
          );
          setCompletedResearchProjectLessThan10Lakhs(
            appraisalData.completedResearchProjectLessThan10Lakhs
          );
          setOngoingResearchProjectMoreThan10Lakhs(
            appraisalData.ongoingResearchProjectMoreThan10Lakhs
          );
          setOngoingResearchProjectLessThan10Lakhs(
            appraisalData.ongoingResearchProjectLessThan10Lakhs
          );
          setInHouseProductDevelopment(appraisalData.inHouseProductDevelopment);
          setConsultancy(appraisalData.consultancy);
          setEditorialBoardReviewer(appraisalData.editorialBoardReviewer);
          setPaperPublishedWithIndustryPerson(
            appraisalData.paperPublishedWithIndustryPerson
          );
          setTotalScore8b3(appraisalData.totalScore8b3);
          setInternationalPatents2(appraisalData.internationalPatents);
          setNationalPatents(appraisalData.nationalPatents);
          setCopyrights(appraisalData.copyrights);
          setAwards(appraisalData.awards);
          setTotalScore8b4(appraisalData.totalScore8b4);
          setIntlAbroad(appraisalData.intlAbroad);
          setIntlWithin(appraisalData.intlWithin);
          setSeminars(appraisalData.Innational);
          setStateUni(appraisalData.stateUni);
          setTotalScore8b5(appraisalData.totalScore8b5);
          setSttpOrganized(appraisalData.sttpOrganized);
          setSttpAttended(appraisalData.sttpAttended);
          setConferenceAttended(appraisalData.conferenceAttended);
          setNptelCertification(appraisalData.nptelCertification);
          setAcademicQualification(appraisalData.academicQualification);
          setMouWithIndustry(appraisalData.mouWithIndustry);
          setTotalScore9(appraisalData.totalScore9);
          setTotalScoreformA(appraisalData.totalScoreformA);
          setTotalScoreformB(appraisalData.totalScoreformB);
          setTotalScore(appraisalData.totalScore);
        } else {
          setClassesTaught("");
          setTotalClasses("");
          setTotalScore1("");
          setPaperEval("");
          setStudentActivities("");
          setTotalScore2("");
          setAttendanceRecordFESE("");
          setMeetingsConductedFESE("");
          setCommunicationFESE("");
          setCounselingFESE("");
          setRankScore("");
          setCoCurricularScore("");
          setPercentageIncreaseScore("");
          setTotalScoreFESE("");
          setAttendanceRecordTE("");
          setMeetingsConductedTE("");
          setCommunicationTE("");
          setCounselingTE("");
          setAdhonScore("");
          setOtherScore("");
          setAllClearScore("");
          setTotalScoreTE("");
          setAttendanceRecordBE("");
          setMeetingsConductedBE("");
          setCommunicationBE("");
          setCounselingBE("");
          setAdhonCompleted("");
          setPlacementPercentage("");
          setBatchEvaluation("");
          setActionTaken("");
          setTotalScoreBE("");
          setLatestResult("");
          setPrevYearResult1("");
          setPrevYearResult2("");
          setPrevYearResult3("");
          setTotalScore4("");
          setInternalFeedback("");
          setExternalFeedback("");
          setTotalScore5("");
          setHandwrittenNotes("");
          setOtherContents("");
          setCoPoPsoMapping("");
          setTotalScore6("");
          setShortTerm7a("");
          setSemester7a("");
          setAcademicYear7a("");
          setTotalScore7a("");
          setShortTerm7b("");
          setSemester7b("");
          setAcademicYear7b("");
          setTotalScore7b("");
          setShortTerm7c("");
          setSemester7c("");
          setAcademicYear7c("");
          setTotalScore7c("");
          setInternationalJournal("");
          setCitation2022("");
          setTotalScore8a("");
          setInternational("");
          setNational("");
          setChapter("");
          setEditorInternational("");
          setEditorNational("");
          setResearchPaper("");
          setBook("");
          setTotalScore8b1("");
          setInnovativePedagogy("");
          setEContentDevelopment("");
          setTotalScore8b2("");
          setPhdGuidance("");
          setPgDissertation("");
          setCompletedResearchProjectMoreThan10Lakhs("");
          setCompletedResearchProjectLessThan10Lakhs("");
          setOngoingResearchProjectMoreThan10Lakhs("");
          setOngoingResearchProjectLessThan10Lakhs("");
          setInHouseProductDevelopment("");
          setConsultancy("");
          setEditorialBoardReviewer("");
          setPaperPublishedWithIndustryPerson("");
          setTotalScore8b3("");
          // setInternationalPatents("");
          setNationalPatents("");
          setCopyrights("");
          setAwards("");
          setTotalScore8b4("");
          setIntlAbroad("");
          setIntlWithin("");
          setInNational("");
          setStateUni("");
          setTotalScore8b5("");
          setSttpOrganized("");
          setSttpAttended("");
          setConferenceAttended("");
          setNptelCertification("");
          setAcademicQualification("");
          setMouWithIndustry("");
          setTotalScore9("");
          setTotalScoreformA("");
          setTotalScoreformB("");
          setTotalScore("");
        }
      } catch (error) {
        console.log(error);
      }
    };

    fetchAppraisalData();
  }, [employeeId, year]);

  //1
  const [classesTaught, setClassesTaught] = useState();
  const [totalClasses, setTotalClasses] = useState();
  const [totalScore1, setTotalScore1] = useState(0);

  //2
  const [paperEval, setPaperEval] = useState();
  const [studentActivities, setStudentActivities] = useState();
  const [totalScore2, setTotalScore2] = useState(0);

  //3a

  const [attendanceRecordFESE, setAttendanceRecordFESE] = useState(0);
  const [meetingsConductedFESE, setMeetingsConductedFESE] = useState(0);
  const [communicationFESE, setCommunicationFESE] = useState(0);
  const [counselingFESE, setCounselingFESE] = useState(0);

  const [rankScore, setRankScore] = useState(0);
  const [coCurricularScore, setCoCurricularScore] = useState(0);
  const [percentageIncreaseScore, setPercentageIncreaseScore] = useState(0);
  const [totalScoreFESE, setTotalScoreFESE] = useState(0);

  //3b

  const [attendanceRecordTE, setAttendanceRecordTE] = useState(0);
  const [meetingsConductedTE, setMeetingsConductedTE] = useState(0);
  const [communicationTE, setCommunicationTE] = useState(0);
  const [counselingTE, setCounselingTE] = useState(0);

  const [adhonScore, setAdhonScore] = useState(0);
  const [otherScore, setOtherScore] = useState(0);
  const [allClearScore, setAllClearScore] = useState(0);
  const [totalScoreTE, setTotalScoreTE] = useState(0);

  //3c

  const [attendanceRecordBE, setAttendanceRecordBE] = useState(0);
  const [meetingsConductedBE, setMeetingsConductedBE] = useState(0);
  const [communicationBE, setCommunicationBE] = useState(0);
  const [counselingBE, setCounselingBE] = useState(0);

  const [adhonCompleted, setAdhonCompleted] = useState(0);
  const [placementPercentage, setPlacementPercentage] = useState(0);
  const [batchEvaluation, setBatchEvaluation] = useState(0);
  const [actionTaken, setActionTaken] = useState(0);
  const [totalScoreBE, setTotalScoreBE] = useState(0);

  //4

  const [latestResult, setLatestResult] = useState("");
  const [prevYearResult1, setPrevYearResult1] = useState("");
  const [prevYearResult2, setPrevYearResult2] = useState("");
  const [prevYearResult3, setPrevYearResult3] = useState("");
  const [totalscore4, setTotalScore4] = useState(0);
  //5
  const [internalFeedback, setInternalFeedback] = useState();
  const [externalFeedback, setExternalFeedback] = useState();
  const [totalScore5, setTotalScore5] = useState(0);

  //6

  const [handwrittenNotes, setHandwrittenNotes] = useState();
  const [otherContents, setOtherContents] = useState();
  const [coPoPsoMapping, setCoPoPsoMapping] = useState();
  const [totalScore6, setTotalScore6] = useState(0);

  //7a
  const [shortTerm7a, setShortTerm7a] = useState();
  const [semester7a, setSemester7a] = useState();
  const [academicYear7a, setAcademicYear7a] = useState();
  const [totalScore7a, setTotalScore7a] = useState(0);

  //7b
  const [shortTerm7b, setShortTerm7b] = useState();
  const [semester7b, setSemester7b] = useState();
  const [academicYear7b, setAcademicYear7b] = useState();
  const [totalScore7b, setTotalScore7b] = useState(0);

  //7c
  const [shortTerm7c, setShortTerm7c] = useState();
  const [semester7c, setSemester7c] = useState();
  const [academicYear7c, setAcademicYear7c] = useState();
  const [totalScore7c, setTotalScore7c] = useState(0);
  //8a

  const [internationalJournal, setInternationalJournal] = useState();
  const [citation2022, setCitation2022] = useState();
  const [totalScore8a, setTotalScore8a] = useState(0);

  //8b.1

  const [international, setInternational] = useState();
  const [national, setNational] = useState();
  const [chapter, setChapter] = useState();
  const [editorInternational, setEditorInternational] = useState();
  const [editorNational, setEditorNational] = useState();
  const [researchPaper, setResearchPaper] = useState();
  const [book, setBook] = useState();
  const [totalScore8b1, setTotalScore8b1] = useState(0);

  //8b.2

  const [innovativePedagogy, setInnovativePedagogy] = useState();
  const [eContentDevelopment, setEContentDevelopment] = useState();
  const [totalScore8b2, setTotalScore8b2] = useState(0);

  //8b.3

  const [phdGuidance, setPhdGuidance] = useState();
  const [pgDissertation, setPgDissertation] = useState();
  const [
    completedResearchProjectMoreThan10Lakhs,
    setCompletedResearchProjectMoreThan10Lakhs,
  ] = useState();
  const [
    completedResearchProjectLessThan10Lakhs,
    setCompletedResearchProjectLessThan10Lakhs,
  ] = useState();
  const [
    ongoingResearchProjectMoreThan10Lakhs,
    setOngoingResearchProjectMoreThan10Lakhs,
  ] = useState();
  const [
    ongoingResearchProjectLessThan10Lakhs,
    setOngoingResearchProjectLessThan10Lakhs,
  ] = useState();
  const [inHouseProductDevelopment, setInHouseProductDevelopment] = useState();
  const [consultancy, setConsultancy] = useState();
  const [editorialBoardReviewer, setEditorialBoardReviewer] = useState();
  const [
    paperPublishedWithIndustryPerson,
    setPaperPublishedWithIndustryPerson,
  ] = useState();
  const [totalScore8b3, setTotalScore8b3] = useState(0);

  //8b.4
  const { classificationTag, setClassificationTag } = useClassification();
  const [internationalPatents, setInternationalPatents] = useState();
  const [internationalPatents2, setInternationalPatents2] = useState(0);
  const [userInputInternationalPatents, setUserInputInternationalPatents] =
    useState("");
  const [userInputPapers, setUserInputPapers] = useState("");
  const [userInputSeminars, setUserInputSeminars] = useState("");
  const [nationalPatents, setNationalPatents] = useState();
  const [Innational, setInNational] = useState();
  const [papers, setPapers] = useState(0);
  const [seminars, setSeminars] = useState(0);

  const [copyrights, setCopyrights] = useState();
  const [awards, setAwards] = useState();
  const [totalScore8b4, setTotalScore8b4] = useState();

  useEffect(() => {
    console.log("Inside useEffect for classificationTag");
    if (classificationTag) {
      switch (classificationTag) {
        case "patent":
          setInternationalPatents(10);
          console.log("International patent value updated!!!");
          break;
        case "paper":
          setResearchPaper(15);
          console.log("Paper value updated!!!");
          break;
        case "seminar":
          setInNational(10);
          console.log("Seminar value updated!!!");
          break;
        default:
          console.warn("Unknown classification tag:", classificationTag);
      }
      setClassificationTag("");
    }
  }, [classificationTag]);

  useEffect(() => {
    console.log("International Patents:", internationalPatents);
    // Define the second useEffect inside the callback function of the first useEffect
    const updateInternationalPatents = async () => {
      try {
        console.log("Updating international patents...");
        // Make the HTTP request to update the international patents data in the database
        const response = await axios.put(
          `http://localhost:8080/api/updates/${employeeId}`,
          { internationalPatents }
        );
        const data = response.data;
        if (data.error) {
          console.log(data.error);
        } else {
          console.log("International patents updated successfully");
        }
      } catch (error) {
        console.error("Failed to update international patents:", error);
      }
    };

    // Call the function to update international patents only when internationalPatents changes
    if (internationalPatents !== undefined) {
      updateInternationalPatents();
    }
  }, [internationalPatents, employeeId]);

  useEffect(() => {
    console.log("Papers:", researchPaper);
    // Define the second useEffect inside the callback function of the first useEffect
    const updatePapers = async () => {
      try {
        console.log("Updating papers...");
        // Make the HTTP request to update the papers data in the database
        const response = await axios.put(
          `http://localhost:8080/api/updates/${employeeId}`,
          { researchPaper }
        );
        const data = response.data;
        if (data.error) {
          console.log(data.error);
        } else {
          console.log("Papers updated successfully");
        }
      } catch (error) {
        console.error("Failed to update papers:", error);
      }
    };

    // Call the function to update papers only when papers changes
    if (researchPaper !== undefined) {
      updatePapers();
    }
  }, [researchPaper, employeeId]);

  useEffect(() => {
    console.log("Seminars:", Innational);
    // Define the second useEffect inside the callback function of the first useEffect
    const updateSeminars = async () => {
      try {
        console.log("Updating seminars...");
        // Make the HTTP request to update the seminars data in the database
        const response = await axios.put(
          `http://localhost:8080/api/updates/${employeeId}`,
          { Innational }
        );
        const data = response.data;
        if (data.error) {
          console.log(data.error);
        } else {
          console.log("Seminars updated successfully");
        }
      } catch (error) {
        console.error("Failed to update seminars:", error);
      }
    };

    // Call the function to update seminars only when seminars changes
    if (Innational !== undefined) {
      updateSeminars();
    }
  }, [Innational, employeeId]);
  //8b.5
  const [intlAbroad, setIntlAbroad] = useState();
  const [intlWithin, setIntlWithin] = useState();
  const [stateUni, setStateUni] = useState();
  const [totalScore8b5, setTotalScore8b5] = useState();

  //9
  const [sttpOrganized, setSttpOrganized] = useState();
  const [sttpAttended, setSttpAttended] = useState();
  const [conferenceAttended, setConferenceAttended] = useState();
  const [nptelCertification, setNptelCertification] = useState();
  const [academicQualification, setAcademicQualification] = useState();
  const [mouWithIndustry, setMouWithIndustry] = useState();
  const [totalScore9, setTotalScore9] = useState(0);

  //total form A
  const [totalScoreformA, setTotalScoreformA] = useState(0);

  const calculateScoreA = () => {
    const scoreA =
      parseFloat(totalScore1) +
      parseFloat(totalScore2) +
      parseFloat(totalscore4) +
      parseFloat(totalScore5) +
      parseFloat(totalScore6) +
      parseFloat(totalScoreFESE) +
      parseFloat(totalScoreTE) +
      parseFloat(totalScoreBE);

    const roundedScoreA = scoreA.toFixed(2); // Round the score to 2 decimal places
    setTotalScoreformA(roundedScoreA);
  };

  //total form B
  const [totalScoreformB, setTotalScoreformB] = useState(0);

  const calculateScoreB = () => {
    const scoreB =
      parseFloat(totalScore7a) +
      parseFloat(totalScore7b) +
      parseFloat(totalScore7c) +
      parseFloat(totalScore8a) +
      parseFloat(totalScore8b1) +
      parseFloat(totalScore8b2) +
      parseFloat(totalScore8b3) +
      parseFloat(totalScore8b4) +
      parseFloat(totalScore8b5) +
      parseFloat(totalScore9);
    setTotalScoreformB(scoreB);
  };

  //grand total
  const [totalScore, setTotalScore] = useState(0);

  const calculateScore = () => {
    const score = totalScoreformA + totalScoreformB;
    setTotalScore(score);
  };

  //1
  const handleClassesTaughtChange = (event) => {
    setClassesTaught(Number(event.target.value));
  };

  const handleTotalClassesChange = (event) => {
    setTotalClasses(Number(event.target.value));
  };

  const calculateScore1 = () => {
    const percentage = (classesTaught / totalClasses) * 100;
    let score = 0;

    if (percentage >= 80) {
      score = 10;
    } else if (percentage >= 70) {
      score = 5;
    }

    setTotalScore1(score);
  };

  //2

  const handlePaperEvalChange = (event) => {
    setPaperEval(Number(event.target.value));
  };

  const handleStudentActivitiesChange = (event) => {
    setStudentActivities(Number(event.target.value));
  };

  const calculateScore2 = () => {
    const score2 = paperEval + studentActivities;
    setTotalScore2(score2);
  };

  //3a

  const handleAttendanceRecordChangeFESE = (event) => {
    setAttendanceRecordFESE(parseInt(event.target.value));
  };

  const handleMeetingsConductedChangeFESE = (event) => {
    setMeetingsConductedFESE(parseInt(event.target.value));
  };

  const handleCommunicationChangeFESE = (event) => {
    setCommunicationFESE(parseInt(event.target.value));
  };

  const handleCounselingChangeFESE = (event) => {
    setCounselingFESE(parseInt(event.target.value));
  };

  const handleCoCurricularScoreChange = (event) => {
    setCoCurricularScore(parseInt(event.target.value));
  };

  const handleRankScoreChange = (event) => {
    setRankScore(parseInt(event.target.value));
  };

  const handlePercentageIncreaseScoreChange = (event) => {
    setPercentageIncreaseScore(parseInt(event.target.value));
  };

  const calculateScoreFESE = () => {
    let score = 0;

    if (rankScore === 100) {
      score += 15;
    } else if (rankScore >= 90) {
      score += 10;
    } else if (rankScore >= 80) {
      score += 5;
    }

    if (percentageIncreaseScore >= 15) {
      score += 5;
    } else if (percentageIncreaseScore >= 10) {
      score += 3;
    } else if (percentageIncreaseScore >= 5) {
      score += 2;
    }
    score +=
      coCurricularScore +
      attendanceRecordFESE +
      meetingsConductedFESE +
      communicationFESE +
      counselingFESE;

    setTotalScoreFESE(score);
  };

  //3b
  const handleAttendanceRecordChangeTE = (event) => {
    setAttendanceRecordTE(parseInt(event.target.value));
  };

  const handleMeetingsConductedChangeTE = (event) => {
    setMeetingsConductedTE(parseInt(event.target.value));
  };

  const handleCommunicationChangeTE = (event) => {
    setCommunicationTE(parseInt(event.target.value));
  };

  const handleCounselingChangeTE = (event) => {
    setCounselingTE(parseInt(event.target.value));
  };

  const handleAdhonScoreChange = (event) => {
    setAdhonScore(parseInt(event.target.value));
  };

  const handleOtherScoreChange = (event) => {
    setOtherScore(parseInt(event.target.value));
  };

  const handleAllClearScoreChange = (event) => {
    setAllClearScore(parseInt(event.target.value));
  };

  const calculateTotalScoreTE = () => {
    let score = 0;

    if (adhonScore === 100) {
      score += 15;
    } else if (adhonScore >= 90) {
      score += 10;
    } else if (adhonScore >= 80) {
      score += 5;
    }

    if (otherScore === 80) {
      score += 15;
    } else if (otherScore >= 70) {
      score += 10;
    } else if (otherScore >= 60) {
      score += 5;
    }

    if (allClearScore === 100) {
      score += 15;
    } else if (allClearScore >= 90) {
      score += 10;
    } else if (allClearScore >= 80) {
      score += 5;
    }

    score +=
      attendanceRecordTE + meetingsConductedTE + communicationTE + counselingTE;

    setTotalScoreTE(score);
  };

  //3c
  const handleAttendanceRecordChangeBE = (event) => {
    setAttendanceRecordBE(parseInt(event.target.value));
  };

  const handleMeetingsConductedChangeBE = (event) => {
    setMeetingsConductedBE(parseInt(event.target.value));
  };

  const handleCommunicationChangeBE = (event) => {
    setCommunicationBE(parseInt(event.target.value));
  };

  const handleCounselingChangeBE = (event) => {
    setCounselingBE(parseInt(event.target.value));
  };

  const handleAdhonCompletedChange = (event) => {
    setAdhonCompleted(parseInt(event.target.value));
  };

  const handlePlacementPercentageChange = (event) => {
    setPlacementPercentage(parseInt(event.target.value));
  };

  const handleBatchEvaluationChange = (event) => {
    setBatchEvaluation(parseInt(event.target.value));
  };

  const handleActionTakenChange = (event) => {
    setActionTaken(parseInt(event.target.value));
  };

  const calculateTotalScoreBE = () => {
    let score = 0;

    if (adhonCompleted === 100) {
      score += 10;
    } else if (adhonCompleted >= 90) {
      score += 7;
    } else if (adhonCompleted >= 80) {
      score += 5;
    }

    if (placementPercentage === 100) {
      score += 15;
    } else if (placementPercentage >= 90) {
      score += 10;
    } else if (placementPercentage >= 80) {
      score += 5;
    }

    if (batchEvaluation >= 2) {
      score += 2;
    }

    if (actionTaken >= 3) {
      score += 3;
    }

    score +=
      attendanceRecordBE + meetingsConductedBE + communicationBE + counselingBE;

    setTotalScoreBE(score);
  };

  //4

  const calculateScore4 = () => {
    const lr = parseFloat(latestResult);
    const ap =
      (parseFloat(prevYearResult1) +
        parseFloat(prevYearResult2) +
        parseFloat(prevYearResult3)) /
      3;
    const calculatedPercentage = 60 + ((lr - ap) * 100) / ap;
    const calculatedScore4 = (calculatedPercentage * 0.8).toFixed(2);
    setTotalScore4(calculatedScore4);
  };

  //5

  const handleInternalFeedbackChange = (event) => {
    setInternalFeedback(parseInt(event.target.value));
  };

  const handleExternalFeedbackChange = (event) => {
    setExternalFeedback(parseInt(event.target.value));
  };

  const calculateScore5 = () => {
    let score = 0;

    if (internalFeedback >= 90) {
      score += 10;
    } else if (internalFeedback >= 81) {
      score += 8;
    } else if (internalFeedback >= 71) {
      score += 6;
    } else if (internalFeedback >= 61) {
      score += 4;
    }

    if (externalFeedback >= 90) {
      score += 20;
    } else if (externalFeedback >= 81) {
      score += 16;
    } else if (externalFeedback >= 71) {
      score += 12;
    } else if (externalFeedback >= 61) {
      score += 8;
    }

    setTotalScore5(score);
  };

  //6
  const handleHandwrittenNotesChange = (event) => {
    setHandwrittenNotes(Number(event.target.value));
  };

  const handleOtherContentsChange = (event) => {
    setOtherContents(Number(event.target.value));
  };

  const handleCoPoPsoMappingChange = (event) => {
    setCoPoPsoMapping(Number(event.target.value));
  };

  const calculateScore6 = () => {
    const score6 = handwrittenNotes + otherContents + coPoPsoMapping;
    setTotalScore6(score6);
  };

  //7
  const handleShortTermChange7a = (event) => {
    setShortTerm7a(Number(event.target.value));
  };

  const handleSemesterChange7a = (event) => {
    setSemester7a(Number(event.target.value));
  };

  const handleAcademicYearChange7a = (event) => {
    setAcademicYear7a(Number(event.target.value));
  };

  const calculateScore7a = () => {
    const score7a = shortTerm7a + semester7a + academicYear7a;
    setTotalScore7a(score7a);
  };

  const handleShortTermChange7b = (event) => {
    setShortTerm7b(Number(event.target.value));
  };

  const handleSemesterChange7b = (event) => {
    setSemester7b(Number(event.target.value));
  };

  const handleAcademicYearChange7b = (event) => {
    setAcademicYear7b(Number(event.target.value));
  };

  const calculateScore7b = () => {
    const score7b = shortTerm7b + semester7b + academicYear7b;
    setTotalScore7b(score7b);
  };

  const handleShortTermChange7c = (event) => {
    setShortTerm7c(Number(event.target.value));
  };

  const handleSemesterChange7c = (event) => {
    setSemester7c(Number(event.target.value));
  };

  const handleAcademicYearChange7c = (event) => {
    setAcademicYear7c(Number(event.target.value));
  };

  const calculateScore7c = () => {
    const score7c = shortTerm7c + semester7c + academicYear7c;
    setTotalScore7c(score7c);
  };
  //8a
  const handleInternationalJournalChange = (event) => {
    setInternationalJournal(Number(event.target.value));
  };

  const handleCitation2022Change = (event) => {
    setCitation2022(Number(event.target.value));
  };

  const calculateScore8a = () => {
    const score8a = internationalJournal + citation2022;
    setTotalScore8a(score8a);
  };

  //8b1

  const handleInternationalChange = (event) => {
    setInternational(Number(event.target.value));
  };

  const handleNationalChange = (event) => {
    setNational(Number(event.target.value));
  };

  const handleChapterChange = (event) => {
    setChapter(Number(event.target.value));
  };

  const handleEditorInternationalChange = (event) => {
    setEditorInternational(Number(event.target.value));
  };

  const handleEditorNationalChange = (event) => {
    setEditorNational(Number(event.target.value));
  };

  const handleResearchPaperChange = (event) => {
    setUserInputPapers(Number(event.target.value));
  };

  const handleBookChange = (event) => {
    setBook(Number(event.target.value));
  };

  const calculateScore8b1 = () => {
    const score8b1 =
      international +
      national +
      chapter +
      editorInternational +
      editorNational +
      userInputPapers +
      book;
    setTotalScore8b1(score8b1);
  };

  //8b2

  const handleInnovativePedagogyChange = (event) => {
    setInnovativePedagogy(Number(event.target.value));
  };

  const handleEContentDevelopmentChange = (event) => {
    setEContentDevelopment(Number(event.target.value));
  };

  const calculateScore8b2 = () => {
    const score8b2 = innovativePedagogy + eContentDevelopment;
    setTotalScore8b2(score8b2);
  };

  //8b3

  const handlePhdGuidanceChange = (event) => {
    setPhdGuidance(Number(event.target.value));
  };

  const handlePgDissertationChange = (event) => {
    setPgDissertation(Number(event.target.value));
  };

  const handleCompletedResearchProjectMoreThan10LakhsChange = (event) => {
    setCompletedResearchProjectMoreThan10Lakhs(Number(event.target.value));
  };

  const handleCompletedResearchProjectLessThan10LakhsChange = (event) => {
    setCompletedResearchProjectLessThan10Lakhs(Number(event.target.value));
  };

  const handleOngoingResearchProjectMoreThan10LakhsChange = (event) => {
    setOngoingResearchProjectMoreThan10Lakhs(Number(event.target.value));
  };

  const handleOngoingResearchProjectLessThan10LakhsChange = (event) => {
    setOngoingResearchProjectLessThan10Lakhs(Number(event.target.value));
  };

  const handleInHouseProductDevelopmentChange = (event) => {
    setInHouseProductDevelopment(Number(event.target.value));
  };

  const handleConsultancyChange = (event) => {
    setConsultancy(Number(event.target.value));
  };

  const handleEditorialBoardReviewerChange = (event) => {
    setEditorialBoardReviewer(Number(event.target.value));
  };

  const handlePaperPublishedWithIndustryPersonChange = (event) => {
    setPaperPublishedWithIndustryPerson(Number(event.target.value));
  };

  const calculateScore8b3 = () => {
    const score8b3 =
      phdGuidance +
      pgDissertation +
      completedResearchProjectMoreThan10Lakhs +
      completedResearchProjectLessThan10Lakhs +
      ongoingResearchProjectMoreThan10Lakhs +
      ongoingResearchProjectLessThan10Lakhs +
      inHouseProductDevelopment +
      consultancy +
      editorialBoardReviewer +
      paperPublishedWithIndustryPerson;
    setTotalScore8b3(score8b3);
  };

  //8b4

  // const handleInternationalPatentsChange = (event) => {
  //   setInternationalPatents(Number(event.target.value));
  // };

  const handleInternationalPatentsChange = (event) => {
    setUserInputInternationalPatents(Number(event.target.value));
  };

  const handleNationalPatentsChange = (event) => {
    setNationalPatents(Number(event.target.value));
  };

  const handleCopyrightsChange = (event) => {
    setCopyrights(Number(event.target.value));
  };

  const handleAwardsChange = (event) => {
    setAwards(Number(event.target.value));
  };

  const calculateScore8b4 = () => {
    const score8b4 =
      //  +nationalPatents
      internationalPatents + copyrights + awards;
    setTotalScore8b4(score8b4);
  };

  //8b5

  // const handleIntlAbroadChange = (event) => {
  //   setIntlAbroad(Number(event.target.value));
  // };

  // const handleIntlWithinChange = (event) => {
  //   setIntlWithin(Number(event.target.value));
  // };

  const handleInNationalChange = (event) => {
    setUserInputSeminars(Number(event.target.value));
  };

  const handleStateUniChange = (event) => {
    setStateUni(Number(event.target.value));
  };

  const calculateScore8b5 = () => {
    const score8b5 =
      // intlAbroad + intlWithin +
      userInputSeminars + stateUni;
    setTotalScore8b5(score8b5);
  };

  //9
  const handleSttpOrganizedChange = (event) => {
    setSttpOrganized(Number(event.target.value));
  };

  const handleSttpAttendedChange = (event) => {
    setSttpAttended(Number(event.target.value));
  };

  const handleConferenceAttendedChange = (event) => {
    setConferenceAttended(Number(event.target.value));
  };

  const handleNptelCertificationChange = (event) => {
    setNptelCertification(Number(event.target.value));
  };

  const handleAcademicQualificationChange = (event) => {
    setAcademicQualification(Number(event.target.value));
  };

  const handleMouWithIndustryChange = (event) => {
    setMouWithIndustry(Number(event.target.value));
  };

  const calculateScore9 = () => {
    const score9 =
      sttpOrganized +
      sttpAttended +
      conferenceAttended +
      nptelCertification +
      academicQualification +
      mouWithIndustry;
    setTotalScore9(score9);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // console.log(localStorage.getItem("employeeid"))

    const requiredFields = [
      year,
      classesTaught,
      totalClasses,

      paperEval,
      studentActivities,

      attendanceRecordFESE,
      meetingsConductedFESE,
      communicationFESE,
      counselingFESE,
      rankScore,
      coCurricularScore,
      percentageIncreaseScore,

      attendanceRecordTE,
      meetingsConductedTE,
      communicationTE,
      counselingTE,
      adhonScore,
      otherScore,
      allClearScore,

      attendanceRecordBE,
      meetingsConductedBE,
      communicationBE,
      counselingBE,
      adhonCompleted,
      placementPercentage,
      batchEvaluation,
      actionTaken,

      latestResult,
      prevYearResult1,
      prevYearResult2,
      prevYearResult3,

      internalFeedback,
      externalFeedback,

      handwrittenNotes,
      otherContents,
      coPoPsoMapping,

      shortTerm7a,
      semester7a,
      academicYear7a,

      shortTerm7b,
      semester7b,
      academicYear7b,

      shortTerm7c,
      semester7c,
      academicYear7c,

      internationalJournal,
      citation2022,

      international,
      national,
      chapter,
      editorInternational,
      editorNational,
      researchPaper,
      book,

      innovativePedagogy,
      eContentDevelopment,

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

      internationalPatents,
      // nationalPatents,
      copyrights,
      awards,
      totalScore8b4,
      // intlAbroad,
      // intlWithin,
      Innational,
      stateUni,

      sttpOrganized,
      sttpAttended,
      conferenceAttended,
      nptelCertification,
      academicQualification,
      mouWithIndustry,
    ];

    const isAnyFieldEmpty = requiredFields.some((field) => {
      if (field === null || field === undefined) {
        return true;
      }
      if (typeof field === "string" && field.trim() === "") {
        return true;
      }
      return false;
    });

    if (isAnyFieldEmpty) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    const formData = {
      employeeid: localStorage.getItem("employeeid"),
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
      researchPaper: userInputPapers,
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
      internationalPatents: userInputInternationalPatents,
      // nationalPatents,
      copyrights,
      awards,
      totalScore8b4,
      // intlAbroad,
      // intlWithin,
      Innational: userInputSeminars,
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
    };

    try {
      const response = await axios.post(
        "http://localhost:8080/api/employeeappraisal",
        formData
      );
      console.log(response.data.message);
      // Update the appraisalstatus field to true
      await axios.put(
        `http://localhost:8080/api/updateemployee/${employeeId}`,
        { appraisalStatus: true }
      );

      toast.success("Employee Appraisal Submitted successfully");
    } catch (error) {
      console.error(
        "An error occurred while saving the appraisal data:",
        error
      );

      toast.error("An error occurred while saving the appraisal data.");
    }
  };

  return (
    <>
      <LoadingBar
        color="#f11946"
        progress={isLoading ? 100 : 0} // Set progress to 100% when loading
        onLoaderFinished={() => setProgress(0)}
        height={4}
      />
      {!show ? (
        <div className="Appraisalcard">
          <label className="department-label">
            <h3>Year of Performance Appraisal:</h3>
            <select
              className="department-select"
              value={year}
              onChange={handleYearChange}>
              <option value={2023}>2023</option>
              <option value={2024}>2024</option>
              <option value={2025}>2025</option>
            </select>
          </label>
          <button
            style={{ marginTop: "10px" }}
            onClick={handleButtonClick}
            className="buttonDownload">
            Show Appraisal Form
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          {/* form A */}

          <div
            style={{
              border: "10px solid #ccc",
              padding: "20px",
              borderRadius: "10px",
              marginTop: "100px",
            }}>
            <h2 style={{ textAlign: "center" }}>
              PART-A : Teaching Learning performance
            </h2>
            <label className="department-label">
              <h3>Year of Performance Appraisal:</h3>
              <select
                className="department-select"
                value={year}
                onChange={handleYearChange}>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025}>2025</option>
              </select>
            </label>
            <br />

            <div className="form-group">
              <h3>1.Teaching load assessment : </h3>
              <p>(Max marks : 10)</p>
              <label htmlFor="file-input" className="drop-container">
                <span className="drop-title">Drop files here</span>
                or
                <input
                  type="file"
                  accept="image/*, application/pdf"
                  required
                  id="file-input"
                  onChange={handleFileChange}
                />
                <button
                  className="buttonDownload"
                  onClick={handleUpload1}
                  disabled={uploading1}>
                  Upload
                </button>
                {uploading1 && <span>Uploading...</span>}
              </label>
              <label>
                Number of classes taught:
                <input
                  type="number"
                  value={classesTaught}
                  onChange={handleClassesTaughtChange}
                />
              </label>
              <br />
              <label>
                Total classes assigned:
                <input
                  type="number"
                  value={totalClasses}
                  onChange={handleTotalClassesChange}
                />
              </label>
              <br />
              <button type="button" className="btn" onClick={calculateScore1}>
                Calculate Total Score
              </button>
              <p className="total-score">Total Score: {totalScore1}</p>
            </div>
            <div className="form-group">
              <h3>
                2. Examination and evaluation duties assigned by
                university/institute :
              </h3>
              <p>(Max marks : 2. a- 10, 2. B-20)</p>
              <label htmlFor="file-input" className="drop-container">
                <span className="drop-title">Drop files here</span>
                or
                <input
                  type="file"
                  accept="image/*, application/pdf"
                  required
                  id="file-input"
                  onChange={handleFileChange}
                />
                <button
                  className="buttonDownload"
                  onClick={handleUpload2}
                  disabled={uploading2}>
                  Upload
                </button>
                {uploading2 && <span>Uploading...</span>}
              </label>
              <label>Involvement in the student related activities :</label>
              <br />
              <label>
                2.a. Paper evaluation duties
                <input
                  type="number"
                  value={paperEval}
                  onChange={handlePaperEvalChange}
                />
              </label>
              <br />
              <label>
                2.b. Student related activities (clubs, counseling, seminars,
                etc.)
                <input
                  type="number"
                  value={studentActivities}
                  onChange={handleStudentActivitiesChange}
                />
              </label>
              <br />
              <button type="button" className="btn" onClick={calculateScore2}>
                Calculate Total Score
              </button>
              <p className="total-score">Total Score: {totalScore2}</p>
            </div>

            <div className="form-group">
              <h3>3.Teacher Guardian performance : </h3>
              <p>
                (Max marks 50 for Professor, Senior Professor, Associate
                Professor and Max marks 65 for Senior Assistant Professor,
                Assistant Professor- Refer Guideline for same)
              </p>
              <label htmlFor="file-input" className="drop-container">
                <span className="drop-title">Drop files here</span>
                or
                <input
                  type="file"
                  accept="image/*, application/pdf"
                  required
                  id="file-input"
                  onChange={handleFileChange}
                />
                <button
                  className="buttonDownload"
                  onClick={handleUpload3}
                  disabled={uploading3}>
                  Upload
                </button>
                {uploading3 && <span>Uploading...</span>}
              </label>

              <label>3a) For FE and SE faculty:</label>
              <br />
              <label>
                Attendance Record
                <input
                  type="number"
                  value={attendanceRecordFESE}
                  onChange={handleAttendanceRecordChangeFESE}
                />
              </label>
              <br />
              <label>
                Meetings Conducted
                <input
                  type="number"
                  value={meetingsConductedFESE}
                  onChange={handleMeetingsConductedChangeFESE}
                />
              </label>
              <br />
              <label>
                Phone Calls, Letter Communication and Parent Connect
                <input
                  type="number"
                  value={communicationFESE}
                  onChange={handleCommunicationChangeFESE}
                />
              </label>
              <br />
              <label>
                Counseling
                <input
                  type="number"
                  value={counselingFESE}
                  onChange={handleCounselingChangeFESE}
                />
              </label>
              <br />

              <label>
                All clear with first class(%) :
                <input
                  type="number"
                  value={rankScore}
                  onChange={handleRankScoreChange}
                />
              </label>
              <br />
              <label>
                Percentage increase in overall results(%) :
                <input
                  type="number"
                  value={percentageIncreaseScore}
                  onChange={handlePercentageIncreaseScoreChange}
                />
              </label>
              <br />
              <label>
                Co-curricular activity score :
                <input
                  type="number"
                  value={coCurricularScore}
                  onChange={handleCoCurricularScoreChange}
                />
              </label>
              <button
                type="button"
                className="btn"
                onClick={calculateScoreFESE}>
                Calculate Score
              </button>
              <p className="total-score">Total Score: {totalScoreFESE}</p>
              <br />
              <label>3b) For TE faculty:</label>
              <br />
              <label>
                Attendance Record
                <input
                  type="number"
                  value={attendanceRecordTE}
                  onChange={handleAttendanceRecordChangeTE}
                />
              </label>
              <br />
              <label>
                Meetings Conducted
                <input
                  type="number"
                  value={meetingsConductedTE}
                  onChange={handleMeetingsConductedChangeTE}
                />
              </label>
              <br />
              <label>
                Phone Calls, Letter Communication and Parent Connect
                <input
                  type="number"
                  value={communicationTE}
                  onChange={handleCommunicationChangeTE}
                />
              </label>
              <br />
              <label>
                Counseling
                <input
                  type="number"
                  value={counselingTE}
                  onChange={handleCounselingChangeTE}
                />
              </label>
              <br />
              <label>
                Percentage of Adhon courses completed as per guidelines of
                central/institute T and P department (%) :
                <input
                  type="number"
                  value={adhonScore}
                  onChange={handleAdhonScoreChange}
                />
              </label>
              <br />
              <label>
                Other courses completed/efforts taken as per T.G observation (%)
                :
                <input
                  type="number"
                  value={otherScore}
                  onChange={handleOtherScoreChange}
                />
              </label>
              <label>
                All clear with first class (%) :
                <input
                  type="number"
                  value={allClearScore}
                  onChange={handleAllClearScoreChange}
                />
              </label>
              <button
                type="button"
                className="btn"
                onClick={calculateTotalScoreTE}>
                Calculate Score
              </button>
              <p className="total-score">Total Score: {totalScoreTE}</p>
              <br />
              <label>3c) For BE faculty:</label>
              <br />
              <label>
                Attendance Record
                <input
                  type="number"
                  value={attendanceRecordBE}
                  onChange={handleAttendanceRecordChangeBE}
                />
              </label>
              <br />
              <label>
                Meetings Conducted
                <input
                  type="number"
                  value={meetingsConductedBE}
                  onChange={handleMeetingsConductedChangeBE}
                />
              </label>
              <br />
              <label>
                Phone Calls, Letter Communication and Parent Connect
                <input
                  type="number"
                  value={communicationBE}
                  onChange={handleCommunicationChangeBE}
                />
              </label>
              <br />
              <label>
                Counseling
                <input
                  type="number"
                  value={counselingBE}
                  onChange={handleCounselingChangeBE}
                />
              </label>
              <br />
              <label>
                Percentage of Adhon courses completed as per guidelines (%):
                <input
                  type="number"
                  value={adhonCompleted}
                  onChange={handleAdhonCompletedChange}
                />
              </label>
              <br />
              <label>
                Percentage of students placed (%):
                <input
                  type="number"
                  value={placementPercentage}
                  onChange={handlePlacementPercentageChange}
                />
              </label>
              <br />
              <label>
                Batch wise evaluation by institute and department T and P
                coordinator:
                <input
                  type="number"
                  value={batchEvaluation}
                  onChange={handleBatchEvaluationChange}
                />
              </label>
              <br />
              <label>
                Action taken based on evaluation report:
                <input
                  type="number"
                  value={actionTaken}
                  onChange={handleActionTakenChange}
                />
              </label>
              <br />
              <button
                type="button"
                className="btn"
                onClick={calculateTotalScoreBE}>
                Calculate Score
              </button>
              <p className="total-score">Total Score: {totalScoreBE}</p>
            </div>

            <div className="form-group">
              <h3> 4. University result analysis: </h3>
              <p>(Max marks 80)</p>
              <label htmlFor="file-input" className="drop-container">
                <span className="drop-title">Drop files here</span>
                or
                <input
                  type="file"
                  accept="image/*, application/pdf"
                  required
                  id="file-input"
                  onChange={handleFileChange}
                />
                <button
                  className="buttonDownload"
                  onClick={handleUpload4}
                  disabled={uploading4}>
                  Upload
                </button>
                {uploading4 && <span>Uploading...</span>}
              </label>
              <label>
                Latest Result:
                <input
                  type="number"
                  step="0.01"
                  value={latestResult}
                  onChange={(e) => setLatestResult(e.target.value)}
                />
              </label>
              <br />
              <label>
                Previous Year Result 1:
                <input
                  type="number"
                  step="0.01"
                  value={prevYearResult1}
                  onChange={(e) => setPrevYearResult1(e.target.value)}
                />
              </label>
              <br />
              <label>
                Previous Year Result 2:
                <input
                  type="number"
                  step="0.01"
                  value={prevYearResult2}
                  onChange={(e) => setPrevYearResult2(e.target.value)}
                />
              </label>
              <br />
              <label>
                Previous Year Result 3:
                <input
                  type="number"
                  step="0.01"
                  value={prevYearResult3}
                  onChange={(e) => setPrevYearResult3(e.target.value)}
                />
              </label>
              <br />
              <button className="btn" type="button" onClick={calculateScore4}>
                Calculate Score
              </button>

              <p className="total-score">Score: {totalscore4}</p>
            </div>

            <div className="form-group">
              <h3>5. Feedback Analysis : </h3>
              <p>(Max marks : 30)</p>
              <label htmlFor="file-input" className="drop-container">
                <span className="drop-title">Drop files here</span>
                or
                <input
                  type="file"
                  accept="image/*, application/pdf"
                  required
                  id="file-input"
                  onChange={handleFileChange}
                />
                <button
                  className="buttonDownload"
                  onClick={handleUpload5}
                  disabled={uploading5}>
                  Upload
                </button>
                {uploading5 && <span>Uploading...</span>}
              </label>
              <div>
                <table class="employee-table">
                  <thead>
                    <tr>
                      <th>Grade</th>
                      <th>Score (Internal Feedback)</th>
                      <th>Score (External Feedback)</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>A+ (90 & above)</td>
                      <td>10</td>
                      <td>20</td>
                    </tr>
                    <tr>
                      <td>A (81 to 89)</td>
                      <td>8</td>
                      <td>16</td>
                    </tr>
                    <tr>
                      <td>B+ (71 to 80)</td>
                      <td>6</td>
                      <td>12</td>
                    </tr>
                    <tr>
                      <td>B (61 to 70)</td>
                      <td>4</td>
                      <td>8</td>
                    </tr>
                    <tr>
                      <td>C (less than 60)</td>
                      <td>0</td>
                      <td>0</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <br />
              <label>
                Internal Feedback Grade Score(%) :
                <input
                  type="number"
                  value={internalFeedback}
                  onChange={handleInternalFeedbackChange}
                />
              </label>
              <br />
              <label>
                External Feedback Grade Score(%) :
                <input
                  type="number"
                  value={externalFeedback}
                  onChange={handleExternalFeedbackChange}
                />
              </label>
              <br />
              <button type="button" className="btn" onClick={calculateScore5}>
                Calculate Score
              </button>
              <p className="total-score">Total Score: {totalScore5}</p>
            </div>
            <div className="form-group">
              <h3>6. Course file and Remedial classes assessment :</h3>
              <p>(Max marks :30)</p>
              <label htmlFor="file-input" className="drop-container">
                <span className="drop-title">Drop files here</span>
                or
                <input
                  type="file"
                  accept="image/*, application/pdf"
                  required
                  id="file-input"
                  onChange={handleFileChange}
                />
                <button
                  className="buttonDownload"
                  onClick={handleUpload6}
                  disabled={uploading6}>
                  Upload
                </button>
                {uploading6 && <span>Uploading...</span>}
              </label>
              <label>
                6.a.Handwritten Notes of 03 (three) units*
                <input
                  type="number"
                  value={handwrittenNotes}
                  onChange={handleHandwrittenNotesChange}
                  className="form-control"
                />
              </label>
              <br />
              <label>
                6.b.Other contents as Accreditation Board
                <input
                  type="number"
                  value={otherContents}
                  onChange={handleOtherContentsChange}
                  className="form-control"
                />
              </label>
              <br />
              <label>
                6.c.CO-PO-PSO Mapping and Attainment
                <input
                  type="number"
                  value={coPoPsoMapping}
                  onChange={handleCoPoPsoMappingChange}
                  className="form-control"
                />
              </label>
              <br />
              <button type="button" className="btn" onClick={calculateScore6}>
                Calculate Total Score
              </button>
              <p className="total-score">Total Score: {totalScore6}</p>
            </div>

            <br />
            <button type="button" className="btnAB" onClick={calculateScoreA}>
              Calculate Form A Score
            </button>

            <span style={{ marginLeft: "25px" }} className="total-scoreAB">
              Total Score Form A: {totalScoreformA}
            </span>
          </div>

          {/* form B */}

          <div
            style={{
              border: "10px solid #ccc",
              padding: "20px",
              borderRadius: "10px",
              marginTop: "100px",
            }}>
            <h2 style={{ textAlign: "center" }}>
              PART-B : Research & Publication
            </h2>

            <div className="form-group">
              <h3>
                7. Faculty Contribution to Department, Institute and
                organization:
              </h3>
              <p>
                (Max marks 30 for Professor, Senior Associate Professor,
                Associate Professor and Max Marks 40 for Senior Assistant
                Professor and Assistant Professor - Refer Guideline for same)
              </p>
              <label htmlFor="file-input" className="drop-container">
                <span className="drop-title">Drop files here</span>
                or
                <input
                  type="file"
                  accept="image/*, application/pdf"
                  required
                  id="file-input"
                  onChange={handleFileChange}
                />
                <button
                  className="buttonDownload"
                  onClick={handleUpload7}
                  disabled={uploading7}>
                  Upload
                </button>
                {uploading7 && <span>Uploading...</span>}
              </label>
              <label>7a) Faculty contribution at department level</label>
              <br />
              <label>
                Short Term based one time Activity:
                <input
                  type="number"
                  value={shortTerm7a}
                  onChange={handleShortTermChange7a}
                />
              </label>
              <br />
              <label>
                Semester/ Term based (3 to 6 months):
                <input
                  type="number"
                  value={semester7a}
                  onChange={handleSemesterChange7a}
                />
              </label>
              <br />
              <label>
                Academic Year Activity (more than 6 months to one year):
                <input
                  type="number"
                  value={academicYear7a}
                  onChange={handleAcademicYearChange7a}
                />
              </label>
              <br />
              <button type="button" className="btn" onClick={calculateScore7a}>
                Calculate Score
              </button>
              <br />
              <p className="total-score">Total Score: {totalScore7a}</p>
            </div>
            <div className="form-group">
              <label>7b) Faculty contribution at institute level</label>
              <br />
              <label>
                Short Term based one time Activity:
                <input
                  type="number"
                  value={shortTerm7b}
                  onChange={handleShortTermChange7b}
                />
              </label>
              <br />
              <label>
                Semester/ Term based (3 to 6 months):
                <input
                  type="number"
                  value={semester7b}
                  onChange={handleSemesterChange7b}
                />
              </label>
              <br />
              <label>
                Academic Year Activity (more than 6 months to one year):
                <input
                  type="number"
                  value={academicYear7b}
                  onChange={handleAcademicYearChange7b}
                />
              </label>
              <br />
              <button type="button" className="btn" onClick={calculateScore7b}>
                Calculate Score
              </button>
              <br />
              <p className="total-score">Total Score: {totalScore7b}</p>
            </div>
            <div className="form-group">
              <label>7c) Faculty contribution at Campus Level </label>
              <br />
              <label>
                Short Term based one time Activity:
                <input
                  type="number"
                  value={shortTerm7c}
                  onChange={handleShortTermChange7c}
                />
              </label>
              <br />
              <label>
                Semester/ Term based (3 to 6 months):
                <input
                  type="number"
                  value={semester7c}
                  onChange={handleSemesterChange7c}
                />
              </label>
              <br />
              <label>
                Academic Year Activity (more than 6 months to one year):
                <input
                  type="number"
                  value={academicYear7c}
                  onChange={handleAcademicYearChange7c}
                />
              </label>
              <br />
              <button type="button" className="btn" onClick={calculateScore7c}>
                Calculate Score
              </button>
              <br />
              <p className="total-score">Total Score: {totalScore7c}</p>
            </div>
            <div className="form-group">
              <h3>8. Faculty contribution in research and publication:</h3>
              <p></p>
              <label htmlFor="file-input" className="drop-container">
                <span className="drop-title">Drop files here</span>
                or
                <input
                  type="file"
                  accept="image/*, application/pdf"
                  required
                  id="file-input"
                  onChange={handleFileChange}
                />
                <button
                  className="buttonDownload"
                  onClick={handleUpload8}
                  disabled={uploading8}>
                  Upload
                </button>
                {uploading8 && <span>Uploading...</span>}
              </label>
              <br />
              <label>8a) Publication</label>
              <p>(Max marks 60 - Refer Guideline for same)</p>
              <label>
                International Journal : Scopus, Web of Science, Thomson Router,
                Clarivate Analytics etc
                <input
                  type="number"
                  value={internationalJournal}
                  onChange={handleInternationalJournalChange}
                />
              </label>
              <br />
              <label>
                Citation in year :
                <input
                  type="number"
                  value={citation2022}
                  onChange={handleCitation2022Change}
                />
              </label>

              <br />
              <button type="button" className="btn" onClick={calculateScore8a}>
                Calculate Total Score
              </button>
              <p className="total-score">Total Score: {totalScore8a}</p>
            </div>
            <div className="form-group">
              <label>
                8b) E-Learning, Books Published and Research Activity
              </label>
              <p>
                ( Refer Guidelines for Max Marks allotted as per faculty cadre)
              </p>

              <h2>
                8.b.1 Books authored which are published by International
                publishers National Publishers Chapter in Edited Book Editor of
                Book by International Publisher Editor of Book by National
                Publisher Chapter or Research paper Book
              </h2>
              <br />
              <label>
                International Publishers
                <input
                  type="number"
                  value={international}
                  onChange={handleInternationalChange}
                />
              </label>
              <br />
              <label>
                National Publishers
                <input
                  type="number"
                  value={national}
                  onChange={handleNationalChange}
                />
              </label>
              <br />
              <label>
                Chapter in Edited Book
                <input
                  type="number"
                  value={chapter}
                  onChange={handleChapterChange}
                />
              </label>
              <br />
              <label>
                Editor of Book by International Publisher
                <input
                  type="number"
                  value={editorInternational}
                  onChange={handleEditorInternationalChange}
                />
              </label>

              <br />
              <label>
                Editor of Book by National Publisher
                <input
                  type="number"
                  value={editorNational}
                  onChange={handleEditorNationalChange}
                />
              </label>
              <br />
              <label>
                Translation works in Indian and Foreign Languages by qualified
                faculties:
              </label>
              <br />
              <label>
                Chapter or Research Paper
                {/* <input
                  type="number"
                  value={researchPaper}
                  onChange={handleResearchPaperChange}
                /> */}
                <input
                  type="number"
                  value={userInputPapers !== "" ? userInputPapers : papers}
                  onChange={handleResearchPaperChange}
                />
              </label>
              <br />
              <label>
                Book
                <input type="number" value={book} onChange={handleBookChange} />
              </label>
              <br />
              <button type="button" className="btn" onClick={calculateScore8b1}>
                Calculate Total Score
              </button>
              <p className="total-score">Total Score: {totalScore8b1}</p>
              <br />
              <h2>
                8.b.2 Creation of ICT mediated Teaching Learning pedagogy and
                content and development of new and innovative course and
                curricula
              </h2>
              <br />
              <label>
                Development of innovative pedagogy
                <input
                  type="number"
                  value={innovativePedagogy}
                  onChange={handleInnovativePedagogyChange}
                />
              </label>
              <br />
              <label>
                Development of E-Content
                <input
                  type="number"
                  value={eContentDevelopment}
                  onChange={handleEContentDevelopmentChange}
                />
              </label>
              <br />
              <button type="button" className="btn" onClick={calculateScore8b2}>
                Calculate Total Score
              </button>
              <p className="total-score">Total Score: {totalScore8b2}</p>
              <br />

              <h2>8.b.3 Research and Consultancy</h2>
              <label>
                Research guidance Ph.D. (if applicable)
                <input
                  type="number"
                  value={phdGuidance}
                  onChange={handlePhdGuidanceChange}
                />
              </label>
              <br />
              <label>
                P.G. dissertation/ BE project
                <input
                  type="number"
                  value={pgDissertation}
                  onChange={handlePgDissertationChange}
                />
              </label>
              <br />
              <label>
                Research Projects Completed ( Not Less than 50,000):
              </label>
              <br />
              <label>
                More than 10 lakhs
                <input
                  type="number"
                  value={completedResearchProjectMoreThan10Lakhs}
                  onChange={handleCompletedResearchProjectMoreThan10LakhsChange}
                />
              </label>
              <br />
              <label>
                Less than 10 lakhs
                <input
                  type="number"
                  value={completedResearchProjectLessThan10Lakhs}
                  onChange={handleCompletedResearchProjectLessThan10LakhsChange}
                />
              </label>
              <br />
              <label>Research Projects Ongoing ( Not Less than 50,000):</label>
              <br />
              <label>
                More than 10 lakhs
                <input
                  type="number"
                  value={ongoingResearchProjectMoreThan10Lakhs}
                  onChange={handleOngoingResearchProjectMoreThan10LakhsChange}
                />
              </label>
              <br />
              <label>
                Less than 10 lakhs
                <input
                  type="number"
                  value={ongoingResearchProjectLessThan10Lakhs}
                  onChange={handleOngoingResearchProjectLessThan10LakhsChange}
                />
              </label>
              <br />
              <label>
                In-house Product Development
                <input
                  type="number"
                  value={inHouseProductDevelopment}
                  onChange={handleInHouseProductDevelopmentChange}
                />
              </label>
              <br />
              <label>
                Consultancy ( Any Amount)
                <input
                  type="number"
                  value={consultancy}
                  onChange={handleConsultancyChange}
                />
              </label>
              <br />
              <label>
                Editorial Board/Reviewer of Indexed Journals/Solicited Articles
                <input
                  type="number"
                  value={editorialBoardReviewer}
                  onChange={handleEditorialBoardReviewerChange}
                />
              </label>
              <br />
              <label>
                Paper Published with Industry person
                <input
                  type="number"
                  value={paperPublishedWithIndustryPerson}
                  onChange={handlePaperPublishedWithIndustryPersonChange}
                />
              </label>
              <br />
              <button
                type="button"
                onClick={calculateScore8b3}
                className="btn btn-primary">
                Calculate Total Score
              </button>
              <p className="total-score">Total Score: {totalScore8b3}</p>
              <br />
              <h2>8.b.4 Patents, Copyrights etc</h2>
              <label>
                Patents
                <input
                  type="number"
                  value={
                    userInputInternationalPatents !== ""
                      ? userInputInternationalPatents
                      : internationalPatents2
                  }
                  onChange={handleInternationalPatentsChange}
                />
              </label>
              <br />
              {/* <label>
                Patents */}
              {/* (National) */}
              {/* <input
                  type="number"
                  value={nationalPatents}
                  onChange={handleNationalPatentsChange}
                />
              </label> */}
              <br />
              <label>
                Copyrights
                <input
                  type="number"
                  value={copyrights}
                  onChange={handleCopyrightsChange}
                />
              </label>
              <br />
              <label>
                Awards/Fellowship
                <input
                  type="number"
                  value={awards}
                  onChange={handleAwardsChange}
                />
              </label>
              <br />
              <button type="button" className="btn" onClick={calculateScore8b4}>
                Calculate Total Score
              </button>
              <p className="total-score">Total Score: {totalScore8b4}</p>
              <br />
              <h2>
                {" "}
                8.b.5 Invited as Resource Persons for conference, seminar,
                workshop.
              </h2>

              {/* <label>
                International (abroad)
                <input
                  type="number"
                  value={intlAbroad}
                  onChange={handleIntlAbroadChange}
                />
              </label>
              <br /> */}
              {/* <label>
                International (within country)
                <input
                  type="number"
                  value={intlWithin}
                  onChange={handleIntlWithinChange}
                />
              </label> */}
              <br />
              <label>
                National
                {/* <input
                  type="number"
                  value={Innational}
                  onChange={handleInNationalChange}
                /> */}
                <input
                  type="number"
                  value={
                    userInputSeminars !== "" ? userInputSeminars : seminars
                  }
                  onChange={handleInNationalChange}
                />
              </label>
              <br />
              <label>
                State/ University
                <input
                  type="number"
                  value={stateUni}
                  onChange={handleStateUniChange}
                />
              </label>
              <br />
              <button type="button" className="btn" onClick={calculateScore8b5}>
                Calculate Total Score
              </button>
              <p className="total-score">Total Score: {totalScore8b5}</p>
            </div>

            <div className="form-group">
              <h3> 9. Faculty value added courses:</h3>
              <h1></h1>
              <label htmlFor="file-input" className="drop-container">
                <span className="drop-title">Drop files here</span>
                or
                <input
                  type="file"
                  accept="image/*, application/pdf"
                  required
                  id="file-input"
                  onChange={handleFileChange}
                />
                <button
                  className="buttonDownload"
                  onClick={handleUpload9}
                  disabled={uploading9}>
                  Upload
                </button>
                {uploading9 && <span>Uploading...</span>}
              </label>
              <p>
                ( Refer Guidelines for Max Marks allotted as per faculty cadre)
              </p>
              <br />
              <label>
                9.a. STTP/ QIP/TTTI/Refresher Courses/ Skill Development
                Programs/ Faculty Development Programs, etc organized (one
                week/two weeks)
                <input
                  type="number"
                  value={sttpOrganized}
                  onChange={handleSttpOrganizedChange}
                />
              </label>
              <br />
              <label>
                9.b. STTP/ QIP/TTTI/Refresher Courses/ Skill Development
                Programs/ Faculty Development Programs, etc attended (one
                week/two weeks)
                <input
                  type="number"
                  value={sttpAttended}
                  onChange={handleSttpAttendedChange}
                />
              </label>
              <br />
              <label>
                9.c. Conferences/ Workshops/Symposium/Seminar attended (min. 5
                days)
                <input
                  type="number"
                  value={conferenceAttended}
                  onChange={handleConferenceAttendedChange}
                />
              </label>
              <br />
              <label>
                9.d. NPTEL or Equivalent Certification or Technical Graded
                Certification or ATAL FDP or Mooc's Courses
                <input
                  type="number"
                  value={nptelCertification}
                  onChange={handleNptelCertificationChange}
                />
              </label>
              <br />
              <label>
                9.e. Improvement/Enhanced Academic Qualification (e.g. GATE
                Qualified, Ph.D registration/ Completion)
                <input
                  type="number"
                  value={academicQualification}
                  onChange={handleAcademicQualificationChange}
                />
              </label>
              <br />
              <label>
                9.f. Active MoU with Industry/ Recognized Institution /
                University
                <input
                  type="number"
                  value={mouWithIndustry}
                  onChange={handleMouWithIndustryChange}
                />
              </label>
              <br />
              <button type="button" className="btn" onClick={calculateScore9}>
                Calculate Total Score
              </button>
              <p className="total-score">Total Score: {totalScore9}</p>
            </div>

            <br />
            <button type="button" className="btnAB" onClick={calculateScoreB}>
              Calculate Form B Score
            </button>
            <span style={{ marginLeft: "25px" }} className="total-scoreAB">
              Total Score Form B: {totalScoreformB}
            </span>
          </div>
          <br />

          <button type="button" className="btnAB" onClick={calculateScore}>
            Calculate Form Score
          </button>

          <span style={{ marginLeft: "25px" }} className="total-scoreAB">
            Total Score : {totalScore}
          </span>

          {/* <br /> */}
          <button
            className="btnAB"
            style={{ marginLeft: "25px" }}
            type="submit">
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default Appraisal;
