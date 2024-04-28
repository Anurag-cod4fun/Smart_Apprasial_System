import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import "./Feedback.css";
import axios from "axios";

const Feedback = () => {
  const [comparisonData, setComparisonData] = useState(null);
  const [selectedYear, setSelectedYear] = useState("2023");
  const [loading, setLoading] = useState(false);

  const employeeId = localStorage.getItem("employeeid");

  useEffect(() => {
    const fetchAppraisalData = async () => {
      setLoading(true);
      try {
        const employeeAppraisalData = await fetchEmployeeAppraisalData(
          employeeId,
          selectedYear
        );
        const hodAppraisalData = await fetchHodAppraisalData(employeeId, selectedYear);

        let positive = 0;
        let negative = 0;
        let neutral = 0;

        Object.keys(employeeAppraisalData).forEach((field) => {
          if (employeeAppraisalData[field] === hodAppraisalData[field]) {
            neutral++;
          } else if (hodAppraisalData[field] > employeeAppraisalData[field]) {
            positive++;
          } else {
            negative++;
          }
        });

        setComparisonData({
          positive,
          negative,
          neutral,
        });
      } catch (error) {
        console.error("Error fetching and comparing appraisal data:", error);
        setComparisonData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchAppraisalData();
  }, [employeeId, selectedYear]);

  const handleYearChange = (event) => {
    setSelectedYear(event.target.value);
  };

  const feedbackData = {
    labels: ["Positive", "Negative", "Neutral"],
    datasets: [
      {
        data: [
          comparisonData ? comparisonData.positive : 0,
          comparisonData ? comparisonData.negative : 0,
          comparisonData ? comparisonData.neutral : 0,
        ],
        backgroundColor: ["#14F33D", "#F38714", "#1468F3"],
      },
    ],
  };

  return (
    <div className="fc">
      <div className="dropdown">
        <select value={selectedYear} onChange={handleYearChange}>
          <option value="2023">2023</option>
          <option value="2024">2024</option>
          <option value="2025">2025</option>
        </select>
      </div>
      <div className="chart">
        {loading ? (
          <div className="loader"></div>
        ) : comparisonData ? (
          <>
            <div className="first">
              <h2>Feedback Received</h2>
              <div className="graph-container">
              <Doughnut data={feedbackData} className="graph" />
            </div>
            </div>
            <div className="second">
              <h2>Feedback Submitted</h2>
              <div className="graph-container">
              <Doughnut data={feedbackData} className="graph" />
            </div>
            </div>
          </>
        ) : (
          <p>No appraisal data found for {selectedYear}.</p>
        )}
      </div>
    </div>
  );
};

export default Feedback;

async function fetchEmployeeAppraisalData(employeeId, selectedYear) {
  try {
    const response = await axios.get(
      `http://localhost:8080/api/fetchappraisal/${employeeId}/${selectedYear}`
    );
    return response.data.appraisal;
  } catch (error) {
    console.error("Error fetching employee appraisal data:", error);
    throw error;
  }
}

async function fetchHodAppraisalData(employeeId, selectedYear) {
  try {
    const url = `http://localhost:8080/api/fetchhodappraisalnew/${employeeId}/${selectedYear}`;
    const response = await axios.get(url);
    return response.data.appraisal;
  } catch (error) {
    console.error("Error fetching HOD appraisal data:", error);
    throw error;
  }
}
