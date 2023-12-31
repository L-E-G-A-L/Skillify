import React, { useState, useEffect } from "react";
import "./css/Reports.css";

import Chart from "react-apexcharts";

function GradesReport() {
  const [gradesReport, setGradesReport] = useState([]);

  useEffect(() => {
    const getGradesReport = async () => {
      const reqData = await fetch("https://sxt7404.uta.cloud/php/Reports.php");
      const resData = await reqData.json();
      setGradesReport(resData);
      console.log(resData);
    };
    getGradesReport();
  }, []);

  // Preprocessing data to count how many users got grades A, B, C for each exam
  const processedData = gradesReport.reduce((acc, report) => {
    const existingExam = acc.find(
      (item) => item.exam_name === report.exam_name
    );
    if (existingExam) {
      // If exam_name already exists, update the grade counts
      existingExam[report.grade] = (existingExam[report.grade] || 0) + 1;
    } else {
      // If exam_name doesn't exist, add a new entry with initial grade counts
      acc.push({
        exam_name: report.exam_name,
        A: report.grade === "A" ? 1 : null,
        B: report.grade === "B" ? 1 : null,
        C: report.grade === "C" ? 1 : null,
        F: report.grade === "F" ? 1 : null,
      });
    }
    return acc;
  }, []);

  // Extracting data for ApexCharts
  const categories = processedData.map((item) => item.exam_name);
  const series = [
    {
      name: "Grade A",
      data: processedData.map((item) => item.A),
    },
    {
      name: "Grade B",
      data: processedData.map((item) => item.B),
    },
    {
      name: "Grade C",
      data: processedData.map((item) => item.C),
    },
    {
      name: "Grade F",
      data: processedData.map((item) => item.F),
    },
  ];

  // ApexCharts options
  const options = {
    xaxis: {
      categories: categories,
    },
    yaxis: {
      labels: {
        formatter: function (val) {
          return parseInt(val);
        },
      },
    },
  };
  return (
    <div className="repgradediv">
      <nav className="pc-nav">
        <h6 className="pc-h6">DASHBOARD</h6>
        <ul className="pc-nav-list pc-ul">
          <li className="pc-li">
            <a href="pc" className="pc-a">
              Home
            </a>
          </li>
        </ul>
      </nav>
      <h2 className="repgradeh2">Student Grades Report</h2>
      <table className="grades-table">
        <thead className="repgradethead">
          <tr className="repgradetr">
            <th className="repgradeth">User Name</th>
            <th className="repgradeth">Course Name</th>
            <th className="repgradeth">Exam Name</th>
            <th className="repgradeth">Grade</th>
          </tr>
        </thead>
        <tbody className="repgradetbody">
          {gradesReport.map((gradesReport, index) => (
            <tr className="repgradetr1" key={index}>
              <td className="repgradetd">{gradesReport.user_name}</td>
              <td className="repgradetd">{gradesReport.course_name}</td>
              <td className="repgradetd">{gradesReport.exam_name}</td>
              <td className="repgradetd">{gradesReport.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="chart-container">
        <Chart options={options} series={series} type="bar" height={350} />
      </div>
      <footer className="pc-footer">
        <p>&copy; 2023 Program Coordinator Website</p>
      </footer>
    </div>
  );
}

export default GradesReport;
