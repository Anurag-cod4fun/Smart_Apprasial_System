import React, { useState, useEffect ,useRef} from "react";
import "./Dashboard.css";
import axios from "axios";
import BarChart from "./barchart";
import LoadingBar from 'react-top-loading-bar'

const API_BASE_URL = "http://localhost:8080/api";

const Dashboard = () => {
  const [hods, setHods] = useState([]);
  const [employees, setEmployees] = useState([]);
  const [principles, setPrinciples] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const ref = useRef(null)
  const [progress, setProgress] = useState(0)
  const fetchData = async () => {
    try {
      const [employeeResponse, hodResponse, principleResponse] =
        await Promise.all([
          axios.get(`${API_BASE_URL}/fetchemployee`),
          axios.get(`${API_BASE_URL}/fetchhod`),
          axios.get(`${API_BASE_URL}/fetchprinciple`),
        ]);

      setEmployees(employeeResponse.data);
      setHods(hodResponse.data);
      setPrinciples(principleResponse.data);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const employeesData = {
    labels: [],
    datasets: [
      {
        label: "Total Employees by Department",
        data: [],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
        borderRadius: 15,
      },
    ],
  };


  const employeesByDepartment = {};
  employees.forEach((employee) => {
    if (employee.department in employeesByDepartment) {
      employeesByDepartment[employee.department]++;
    } else {
      employeesByDepartment[employee.department] = 1;
    }
  });

  for (const department in employeesByDepartment) {
    employeesData.labels.push(department);
    employeesData.datasets[0].data.push(employeesByDepartment[department]);
  }

  return (
    <>
      <div className="dashboard">
      <LoadingBar
        color="#f11946"
        progress={isLoading ? 100 : 0} 
        onLoaderFinished={() => setProgress(0)}
        height={4}
      />
     
        {isLoading ? (
          <div className="loaderEmp">
          
          </div>
          
        ) : (
          
          <div className="dashboard-container">
           
            <div className="dashboard-section">
          
              <div className="dashboard-header">Departments</div>
              <ul className="dashboard-list">
                {[...new Set(hods.map((hod) => hod.department))].map(
                  (department) => (
                    <li key={department}>{department}</li>
                  )
                )}
              </ul>
            </div>

            <div className="dashboard-section1">
              <div className="dashboard-header">HODs</div>
              <ul className="dashboard-list">
                {hods.map((hod) => (
                  <li key={hod.id}>
                    {hod.name} ({hod.department})
                  </li>
                ))}
              </ul>
            </div>
            <div className="dashboard-section2">
              <div className="dashboard-header">Employees </div>
              <div className="employee-icon">
                <i className="fas fa-users"></i>
              </div>
              <div style={{ fontSize: '80px' }}>
                {employees.length}
              </div>

              <ul className="dashboard-list">

                {/* {Array.from(
                  new Set(employees.map((employee) => employee.department))
                ).map((department) => (
                  <li key={department}>
                    {department}:{" "}
                    {
                      employees.filter(
                        (employee) => employee.department === department
                      ).length
                    }
                  </li>
                ))} */}
              </ul>
            </div>



            <div className="dashboard-section3">
              <div className="dashboard-header">Colleges</div>
              <ul className="dashboard-list">
                {hods
                  .filter(
                    (hod, index, self) =>
                      self.findIndex((h) => h.college === hod.college) === index
                  )
                  .map((hod) => (
                    <li key={hod.college}>{hod.college}</li>
                  ))}
              </ul>
            </div>
            <div className="dashboard-section4">
              <div className="dashboard-header">Principles</div>
              <ul className="dashboard-list">
                {principles.map((principle) => (
                  <li key={principle.id}>
                    {principle.name} ({principle.college}){" "}
                  </li>
                ))}
              </ul>
            </div>
            <div className="dashboard-section5">
              <div style={{ width: 700, height: 290, }}>
                <BarChart chartData={employeesData} />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Dashboard;
