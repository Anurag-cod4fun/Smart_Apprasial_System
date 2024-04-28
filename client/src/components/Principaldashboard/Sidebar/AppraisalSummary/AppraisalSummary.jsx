import React, { useEffect, useState } from 'react';
import axios from 'axios';
import "./AppraisalSummary.css"
import { AiOutlineEye } from "react-icons/ai";
import Feedback from '../../../Employeedashboard/Sidebar/Feedback/Feedback';

const EmployeeTable = () => {
  const [employees, setEmployees] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [appraisals, setAppraisals] = useState([]);
  const [appraisalshod, setAppraisalshod] = useState([]);
  const [selectedDepartment, setSelectedDepartment] = useState('');
  const [selectedCollege, setSelectedCollege] = useState('');

  useEffect(() => {
    const fetchEmployees = async () => {
      try {
        const token = localStorage.getItem('token');
        const response = await axios.get('http://localhost:8080/validadmin', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        const admin = response.data.admin;
        const department = admin.department;
        const college = admin.college;

        setSelectedDepartment(department);
        setSelectedCollege(college);

        const employeesResponse = await axios.get('http://localhost:8080/api/fetchemployeehod', {
          params: {
            department,
            college,
          },
        });

        setEmployees(employeesResponse.data);
        setIsLoading(false);
      } catch (error) {
        setError(error.response.data.message);
        setIsLoading(false);
      }
    };

    fetchEmployees();
  }, []);

  const handleFilter = async () => {
    setIsLoading(true);
    try {
      const employeesResponse = await axios.get('http://localhost:8080/api/fetchemployeehod', {
        params: {
          department: selectedDepartment,
          college: selectedCollege,
        },
      });

      setEmployees(employeesResponse.data);
      setIsLoading(false);
    } catch (error) {
      setError(error.response.data.message);
      setIsLoading(false);
    }
  };

  const handleViewDetails = async (employee, year) => {
    setSelectedEmployee(employee);

    try {
      const appraisalResponse = await axios.get(`http://localhost:8080/api/hodfetchappraisal/${employee._id}`);
      const filter = appraisalResponse.data.appraisals.find((data) => data.year === year);
      setAppraisals(filter);

      const appraisalResponseHod = await axios.get(`http://localhost:8080/api/fetchhodappraisal/${employee._id}`);
      const filterHod = appraisalResponseHod.data.appraisals.find((data) => data.year === year);
      setAppraisalshod(filterHod);
    } catch (error) {
      setError(error.response.data.message);
    }
  };




  const handleGoBack = () => {
    setSelectedEmployee(null);
    setAppraisals([]);
  };
  return (
    <div>
      {error && <div className="error">{error}</div>}

      {!selectedEmployee ? (
        <>
          {isLoading ? (
            <div className="loader-container">
              <div className="loaderEmp"></div>
            </div>
          ) : (
            <>
              <h1 style={{color:'brown' , marginTop:"90px" ,marginBottom:"30px"}}>Employee Appraisals</h1>

              <div className="department-wrapper">
                <label htmlFor="department" className="department-label">Department:</label>
                <select id="department" value={selectedDepartment} onChange={(e) => setSelectedDepartment(e.target.value)} className="department-select">
                  <option value="">Select Department</option>
                  <option value="Artificial Intelligence & Data Science">Artificial Intelligence & Data Science</option>
                  <option value="Computer Engineering">Computer Engineering</option>
                  <option value="Information Technology">Information Technology</option>
                  <option value="Electronics & Telecommunication Engineering">Electronics & Telecommunication Engineering</option>
                  <option value="Instrumentation and Control Engineering">Instrumentation and Control Engineering</option>
                  <option value="Robotics and Automation">Robotics and Automation</option>
                  <option value="Mechanical Engineering">Mechanical Engineering</option>
                  <option value="Civil Engineering">Civil Engineering</option>
                </select>

              </div>

              <div className="department-wrapper">
                <label htmlFor="college" className="department-label">College:</label>
                <select id="college" value={selectedCollege} onChange={(e) => setSelectedCollege(e.target.value)} className="department-select">
                  <option value="">Select college</option>
                  <option value="DYPCOE">DYPCOE</option>
                  <option value="DYPIMER">DYPIMER</option>
                </select>
              </div>

              <button className='buttonX' onClick={handleFilter}>Apply Filter</button>
              {employees.length > 0 ? (
              <div className='cardEmp'>
                <table class="employee-table">
                  <thead>
                    <tr>
                      <th>Employee Name</th>
                      <th>Employee Email</th>
                      <th>Appraisal Status</th>
                      <th>View Appraisal</th>
                    </tr>
                  </thead>
                  <tbody>
                    {employees.map((employee) => (
                      <tr key={employee._id}>
                        <td>{employee.name}</td>
                        <td>{employee.email}</td>
                        <td>
                          {employee.appraisalStatus ? (
                            <>
                              {/* <span style={{ color: 'green' }}>🟢</span> */}
                              <div className="progress-barx" style={{ width: "100px" }}>
                                <div
                                  className={"progress-bar-fillx animated fadeIn"}
                                  style={{ width: "100%" }}
                                ></div>
                              </div>
                            </>
                          ) : (
                            <>
                              {/* <span style={{ color: 'red' }}>🔴</span> */}
                              <div className="progress-barx" style={{ width: "100px" }}>
                                <div
                                  className='progress-bar-notfill'
                                  style={{ width: "100%" }}
                                ></div>
                              </div>
                            </>
                          )}
                        </td>
                        <td>
                          {employee.appraisalStatus ?
                            (<button style={{ marginRight: "10px", color: "#e63900", backgroundColor: "white", border: '2px solid #ccc', borderRadius: "10px" }} onClick={() => handleViewDetails(employee)} >  <AiOutlineEye /> </button>
                            )
                            :
                            ("")}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
               ) : (
                <>
                <div className='cardEmp'>
                <h3>No employees found.</h3>

                </div>
               
                </>
               
              )}
            </>
          )}
          
        </>
      ) : (
        <div className="containerEmpl">
          <div className="profile1">
          <button className='btnZ' onClick={handleGoBack}>Go Back</button>

            <div className="cover-photo">
              {/* <img src={coverPhoto} alt="Cover" /> */}
            </div>
            <div className="profile-details">
              <div className="profile-photo">
                {/* <img src={profilePhoto} alt="Profile" /> */}
              </div>
              <h1>{selectedEmployee.name}</h1>
              <h3>{selectedEmployee.designation}</h3>
              <hr />
              <div className="info">
                <div className="info-item">
                  <h4>College</h4>
                  <p>{selectedEmployee.college}</p>
                </div>
                <div className="info-item">
                  <h4>Department</h4>
                  <p>{selectedEmployee.department}</p>
                </div>
                <div className="info-item">
                  <h4>Email</h4>
                  <p>{selectedEmployee.email}</p>
                </div>
                <div className="info-item">
                  <h4>Mobile</h4>
                  <p>{selectedEmployee.mobile}</p>
                </div>
              </div>
            </div>
            {/* <button className='btnZ' onClick={handleGoBack}>Go Back</button> */}
            <label className="department-label">
              <select className="department-select" onChange={(e) => handleViewDetails(selectedEmployee, parseInt(e.target.value))}>
                <option >Select Year</option>
                <option value={2023}>2023</option>
                <option value={2024}>2024</option>
                <option value={2025}>2025</option>
              </select>

            </label>



            <div className="appraisal-details">
              {appraisals && appraisals.year && appraisalshod && appraisalshod.year ? (
                 <>
              <h3>Appraisal Details</h3>
              <Feedback />
                <div className="appraisal-details">
                  <table >
                    <thead>
                      <tr>
                        <th>Title</th>
                        <th>Score claimed by Employee </th>
                        <th>Score claimed by Hod</th>
                      </tr>
                    </thead>
                    <tbody>

                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Number of classes taught</th>
                        <td>{appraisals.classesTaught}</td>
                        <td>{appraisalshod.classesTaught}</td>
                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Total classes assigned</th>
                        <td>{appraisals.totalClasses}</td>
                        <td>{appraisalshod.totalClasses}</td>
                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Teaching load assessment Teaching Engagement</th>
                        <td>{appraisals.totalScore1}</td>
                        <td>{appraisalshod.totalScore1}</td>
                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}> Paper evaluation duties</th>
                        <td>{appraisals.paperEval}</td>
                        <td>{appraisalshod.paperEval}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}> Student related activities (clubs, counseling, seminars, etc.)</th>
                        <td>{appraisals.studentActivities}</td>
                        <td>{appraisalshod.studentActivities}</td>

                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Examination and evaluation duties assigned by university/institute</th>
                        <td>{appraisals.totalScore2}</td>
                        <td>{appraisalshod.totalScore2}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}><th style={{ backgroundColor: '#ffffff' }}>a) For FE and SE faculty:</th><td></td><td></td></tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Attendance Record</th>
                        <td>{appraisals.attendanceRecordFESE}</td>
                        <td>{appraisalshod.attendanceRecordFESE}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Meetings Conducted </th>
                        <td>{appraisals.meetingsConductedFESE}</td>
                        <td>{appraisalshod.meetingsConductedFESE}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Phone Calls, Letter Communication and Parent Connect</th>
                        <td>{appraisals.communicationFESE}</td>
                        <td>{appraisalshod.communicationFESE}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Counseling </th>
                        <td>{appraisals.counselingFESE}</td>
                        <td>{appraisalshod.counselingFESE}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>All clear with first class(%) </th>
                        <td>{appraisals.rankScore}</td>
                        <td>{appraisalshod.rankScore}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Appraisal coCurricularScore </th>
                        <td>{appraisals.coCurricularScore}</td>
                        <td>{appraisalshod.coCurricularScore}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Percentage increase in overall results(%)  </th>
                        <td>{appraisals.percentageIncreaseScore}</td>
                        <td>{appraisalshod.percentageIncreaseScore}</td>

                      </tr>

                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Teacher Guardian performance for FE and SE faculty: </th>
                        <td>{appraisals.totalScoreFESE}</td>
                        <td>{appraisalshod.totalScoreFESE}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}><th style={{ backgroundColor: '#ffffff' }}>b) For TE faculty:</th><td></td><td></td></tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Attendance Record</th>
                        <td>{appraisals.attendanceRecordTE}</td>
                        <td>{appraisalshod.attendanceRecordTE}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Meetings Conducted </th>
                        <td>{appraisals.meetingsConductedTE}</td>
                        <td>{appraisalshod.meetingsConductedTE}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Phone Calls, Letter Communication and Parent Connect</th>
                        <td>{appraisals.communicationTE}</td>
                        <td>{appraisalshod.communicationTE}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Counseling </th>
                        <td>{appraisals.counselingTE}</td>
                        <td>{appraisalshod.counselingTE}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Percentage of Adhon courses completed as per guidelines of central/institute T and P department (%)</th>
                        <td>{appraisals.adhonScore}</td>
                        <td>{appraisalshod.adhonScore}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Other courses completed/efforts taken as per T.G observation (%)</th>
                        <td>{appraisals.otherScore}</td>
                        <td>{appraisalshod.otherScore}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>All clear with first class (%)  </th>
                        <td>{appraisals.allClearScore}</td>
                        <td>{appraisalshod.allClearScore}</td>

                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Teacher Guardian Performance for TE faculty : </th>
                        <td>{appraisals.totalScoreTE}</td>
                        <td>{appraisalshod.totalScoreTE}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}><th style={{ backgroundColor: '#ffffff' }}>c) For BE faculty</th><td></td><td></td></tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}> Attendance Record</th>
                        <td>{appraisals.attendanceRecordBE}</td>
                        <td>{appraisalshod.attendanceRecordBE}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Meetings Conducted</th>
                        <td>{appraisals.meetingsConductedBE}</td>
                        <td>{appraisalshod.meetingsConductedBE}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Phone Calls, Letter Communication and Parent Connect</th>
                        <td>{appraisals.communicationBE}</td>
                        <td>{appraisalshod.communicationBE}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Counseling </th>
                        <td>{appraisals.counselingBE}</td>
                        <td>{appraisalshod.counselingBE}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Percentage of Add-on courses completed as per guidelines of central / institute T and P department</th>
                        <td>{appraisals.adhonCompleted}</td>
                        <td>{appraisalshod.adhonCompleted}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Percentage of students placed </th>
                        <td>{appraisals.placementPercentage}</td>
                        <td>{appraisalshod.placementPercentage}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Batch wise evaluation by institute and department T and P coordinator</th>
                        <td>{appraisals.batchEvaluation}</td>
                        <td>{appraisalshod.batchEvaluation}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Action taken based on evaluation report:</th>
                        <td>{appraisals.actionTaken}</td>
                        <td>{appraisalshod.actionTaken}</td>

                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Teacher Guardian Performance for BE faculty : </th>
                        <td>{appraisals.totalScoreBE}</td>
                        <td>{appraisalshod.totalScoreBE}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>  LatestResult </th>
                        <td>{appraisals.latestResult}</td>
                        <td>{appraisalshod.latestResult}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}> Previous Year Result 1</th>
                        <td>{appraisals.prevYearResult1}</td>
                        <td>{appraisalshod.prevYearResult1}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Previous Year Result 2</th>
                        <td>{appraisals.prevYearResult2}</td>
                        <td>{appraisalshod.prevYearResult2}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Previous Year Result 3</th>
                        <td>{appraisals.prevYearResult3}</td>
                        <td>{appraisalshod.prevYearResult3}</td>

                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>University result analysis</th>
                        <td>{appraisals.totalscore4}</td>
                        <td>{appraisalshod.totalscore4}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Internal Feedback Grade Score(%)  </th>
                        <td>{appraisals.internalFeedback}</td>
                        <td>{appraisalshod.internalFeedback}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>External Feedback Grade Score(%) </th>
                        <td>{appraisals.externalFeedback}</td>
                        <td>{appraisalshod.externalFeedback}</td>

                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Feedback Analysis  </th>
                        <td>{appraisals.totalScore5}</td>
                        <td>{appraisalshod.totalScore5}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Handwritten Notes of 03 (three) units*</th>
                        <td>{appraisals.handwrittenNotes}</td>
                        <td>{appraisalshod.handwrittenNotes}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Other contents as Accreditation Board</th>
                        <td>{appraisals.otherContents}</td>
                        <td>{appraisalshod.otherContents}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>CO-PO-PSO Mapping and Attainment </th>
                        <td>{appraisals.coPoPsoMapping}</td>
                        <td>{appraisalshod.coPoPsoMapping}</td>

                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Course file and Remedial classes assessment</th>
                        <td>{appraisals.totalScore6}</td>
                        <td>{appraisalshod.totalScore6}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Short Term based one time Activity</th>
                        <td>{appraisals.shortTerm7a}</td>
                        <td>{appraisalshod.shortTerm7a}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Semester/ Term based (3 to 6 months)</th>
                        <td>{appraisals.semester7a}</td>
                        <td>{appraisalshod.semester7a}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Academic Year Activity (more than 6 months to one year) </th>
                        <td>{appraisals.academicYear7a}</td>
                        <td>{appraisalshod.academicYear7a}</td>

                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Faculty contribution at department level</th>
                        <td>{appraisals.totalScore7a}</td>
                        <td>{appraisalshod.totalScore7a}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Short Term based one time Activity</th>
                        <td>{appraisals.shortTerm7b}</td>
                        <td>{appraisalshod.shortTerm7b}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Semester/ Term based (3 to 6 months)</th>
                        <td>{appraisals.semester7b}</td>
                        <td>{appraisalshod.semester7b}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Academic Year Activity (more than 6 months to one year)</th>
                        <td>{appraisals.academicYear7b}</td>
                        <td>{appraisalshod.academicYear7b}</td>

                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Faculty contribution at institute level</th>
                        <td>{appraisals.totalScore7b}</td>
                        <td>{appraisalshod.totalScore7b}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Short Term based one time Activity</th>
                        <td>{appraisals.shortTerm7c}</td>
                        <td>{appraisalshod.shortTerm7c}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Semester/ Term based (3 to 6 months)</th>
                        <td>{appraisals.semester7c}</td>
                        <td>{appraisalshod.semester7c}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Academic Year Activity (more than 6 months to one year)</th>
                        <td>{appraisals.academicYear7c}</td>
                        <td>{appraisalshod.academicYear7c}</td>

                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Faculty contribution at Campus Level </th>
                        <td>{appraisals.totalScore7c}</td>
                        <td>{appraisalshod.totalScore7c}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}><th style={{ backgroundColor: '#ffffff' }}> Faculty contribution in research and publication:</th><td></td><td></td></tr>
                      <tr style={{ backgroundColor: '#ffffff' }}><th style={{ backgroundColor: '#ffffff' }}> Publication :</th><td></td><td></td></tr>

                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>International Journal : Scopus, Web of Science, Thomson Router, Clarivate Analytics etc</th>
                        <td>{appraisals.internationalJournal}</td>
                        <td>{appraisalshod.internationalJournal}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Citation in year </th>
                        <td>{appraisals.citation2022}</td>
                        <td>{appraisalshod.citation2022}</td>

                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Publication</th>
                        <td>{appraisals.totalScore8a}</td>
                        <td>{appraisalshod.totalScore8a}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}><th style={{ backgroundColor: '#ffffff' }}> E-Learning, Books Published and Research Activity :</th><td></td><td></td></tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>International Publishers </th>
                        <td>{appraisals.international}</td>
                        <td>{appraisalshod.international}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>National Publishers </th>
                        <td>{appraisals.national}</td>
                        <td>{appraisalshod.national}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Chapter in Edited Book</th>
                        <td>{appraisals.chapter}</td>
                        <td>{appraisalshod.chapter}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Editor of Book by International Publisher</th>
                        <td>{appraisals.editorInternational}</td>
                        <td>{appraisalshod.editorInternational}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Editor of Book by National Publisher</th>
                        <td>{appraisals.editorNational}</td>
                        <td>{appraisalshod.editorNational}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}><th style={{ backgroundColor: '#ffffff' }}>Translation works in Indian and Foreign Languages by qualified faculties:</th><td></td><td></td></tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Chapter or Research Paper </th>
                        <td>{appraisals.researchPaper}</td>
                        <td>{appraisalshod.researchPaper}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Book </th>
                        <td>{appraisals.book}</td>
                        <td>{appraisalshod.book}</td>

                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Books authored which are published by International publishers National Publishers Chapter in Edited Book Editor of Book by International Publisher Editor of Book by National Publisher Chapter or Research paper Book</th>
                        <td>{appraisals.totalScore8b1}</td>
                        <td>{appraisalshod.totalScore8b1}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Development of innovative pedagogy</th>
                        <td>{appraisals.innovativePedagogy}</td>
                        <td>{appraisalshod.innovativePedagogy}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Development of E-Content</th>
                        <td>{appraisals.eContentDevelopment}</td>
                        <td>{appraisalshod.eContentDevelopment}</td>

                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Creation of ICT mediated Teaching Learning pedagogy and content and development of new and innovative course and curricula</th>
                        <td>{appraisals.totalScore8b2}</td>
                        <td>{appraisalshod.totalScore8b2}</td>

                      </tr>

                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Research guidance Ph.D. (if applicable) </th>
                        <td>{appraisals.phdGuidance}</td>
                        <td>{appraisalshod.phdGuidance}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>P.G. dissertation/ BE project</th>
                        <td>{appraisals.pgDissertation}</td>
                        <td>{appraisalshod.pgDissertation}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}><th style={{ backgroundColor: '#ffffff' }}>Research Projects Completed ( Not Less than 50,000):</th><td></td><td></td></tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>More than 10 lakhs</th>
                        <td>{appraisals.completedResearchProjectMoreThan10Lakhs}</td>
                        <td>{appraisalshod.completedResearchProjectMoreThan10Lakhs}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Less than 10 lakhs</th>
                        <td>{appraisals.completedResearchProjectLessThan10Lakhs}</td>
                        <td>{appraisalshod.completedResearchProjectLessThan10Lakhs}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}><th style={{ backgroundColor: '#ffffff' }}>Research Projects Ongoing ( Not Less than 50,000):</th><td></td><td></td></tr>

                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>More than 10 lakhs</th>
                        <td>{appraisals.ongoingResearchProjectMoreThan10Lakhs}</td>
                        <td>{appraisalshod.ongoingResearchProjectMoreThan10Lakhs}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Less than 10 lakhs </th>
                        <td>{appraisals.ongoingResearchProjectLessThan10Lakhs}</td>
                        <td>{appraisalshod.ongoingResearchProjectLessThan10Lakhs}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>In-house Product Development</th>
                        <td>{appraisals.inHouseProductDevelopment}</td>
                        <td>{appraisalshod.inHouseProductDevelopment}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Consultancy ( Any Amount) </th>
                        <td>{appraisals.consultancy}</td>
                        <td>{appraisalshod.consultancy}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Editorial Board/Reviewer of Indexed Journals/Solicited Articles </th>
                        <td>{appraisals.editorialBoardReviewer}</td>
                        <td>{appraisalshod.editorialBoardReviewer}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Paper Published with Industry person</th>
                        <td>{appraisals.paperPublishedWithIndustryPerson}</td>
                        <td>{appraisalshod.paperPublishedWithIndustryPerson}</td>

                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Research and Consultancy</th>
                        <td>{appraisals.totalScore8b3}</td>
                        <td>{appraisalshod.totalScore8b3}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Patents (International) </th>
                        <td>{appraisals.internationalPatents}</td>
                        <td>{appraisalshod.internationalPatents}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Patents (National)</th>
                        <td>{appraisals.nationalPatents}</td>
                        <td>{appraisalshod.nationalPatents}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Copyrights</th>
                        <td>{appraisals.copyrights}</td>
                        <td>{appraisalshod.copyrights}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Awards/Fellowship</th>
                        <td>{appraisals.awards}</td>
                        <td>{appraisalshod.awards}</td>

                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}> Patents, Copyrights etc.</th>
                        <td>{appraisals.totalScore8b4}</td>
                        <td>{appraisalshod.totalScore8b4}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>International (abroad)</th>
                        <td>{appraisals.intlAbroad}</td>
                        <td>{appraisalshod.intlAbroad}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>International (within country) </th>
                        <td>{appraisals.intlWithin}</td>
                        <td>{appraisalshod.intlWithin}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>National </th>
                        <td>{appraisals.Innational}</td>
                        <td>{appraisalshod.Innational}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>State/ University </th>
                        <td>{appraisals.stateUni}</td>
                        <td>{appraisalshod.stateUni}</td>

                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Invited as Resource Persons for conference, seminar, workshop.</th>
                        <td>{appraisals.totalScore8b5}</td>
                        <td>{appraisalshod.totalScore8b5}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>STTP/ QIP/TTTI/Refresher Courses/ Skill Development Programs/ Faculty Development Programs, etc organized (one week/two weeks)</th>
                        <td>{appraisals.sttpOrganized}</td>
                        <td>{appraisalshod.sttpOrganized}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}> STTP/ QIP/TTTI/Refresher Courses/ Skill Development Programs/ Faculty Development Programs, etc attended (one week/two weeks)</th>
                        <td>{appraisals.sttpAttended}</td>
                        <td>{appraisalshod.sttpAttended}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}>Conferences/ Workshops/Symposium/Seminar attended (min. 5 days) </th>
                        <td>{appraisals.conferenceAttended}</td>
                        <td>{appraisalshod.conferenceAttended}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}> NPTEL or Equivalent Certification or Technical Graded Certification or ATAL FDP or Mooc's Courses </th>
                        <td>{appraisals.nptelCertification}</td>
                        <td>{appraisalshod.nptelCertification}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}> Improvement/Enhanced Academic Qualification (e.g. GATE Qualified, Ph.D registration/ Completion) </th>
                        <td>{appraisals.academicQualification}</td>
                        <td>{appraisalshod.academicQualification}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffffff' }}>
                        <th style={{ backgroundColor: '#ffffff' }}> Active MoU with Industry/ Recognized Institution / University </th>
                        <td>{appraisals.mouWithIndustry}</td>
                        <td>{appraisalshod.mouWithIndustry}</td>

                      </tr>
                      <tr style={{ backgroundColor: 'lightgreen' }}>
                        <th style={{ backgroundColor: 'lightgreen' }}>Faculty value added courses </th>
                        <td>{appraisals.totalScore9}</td>
                        <td>{appraisalshod.totalScore9}</td>

                      </tr>
                      <tr style={{ backgroundColor: ' #bf80ff' }} >
                        <th style={{ backgroundColor: ' #bf80ff' }}>Appraisal  Total Score Form A </th>
                        <td>{appraisals.totalScoreformA}</td>
                        <td>{appraisalshod.totalScoreformA}</td>

                      </tr>
                      <tr style={{ backgroundColor: ' #bf80ff' }}>
                        <th style={{ backgroundColor: ' #bf80ff' }}>Appraisal  Total Score Form B </th>
                        <td>{appraisals.totalScoreformB}</td>
                        <td>{appraisalshod.totalScoreformB}</td>

                      </tr>
                      <tr style={{ backgroundColor: '#ffb84d' }}>
                        <th style={{ backgroundColor: '#ffb84d' }}>Appraisal  Total Score </th>
                        <td>{appraisals.totalScore}</td>
                        <td>{appraisalshod.totalScore}</td>

                      </tr>
                    </tbody>
                  </table>
                </div>
                </>
              ) : (
                <>
                  <h2>No appraisal details available for this employee for this Year.  </h2>
                </>
              )}
             
            </div>
          </div>
        </div>
      )}

    </div>

  );
};

export default EmployeeTable;
