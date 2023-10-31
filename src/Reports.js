import React, { useState, useEffect } from 'react';
import "./Reports.css";
// import './GradeReport.css'; 
import { Footer, QANav } from "./QADash";
import { Link } from "react-router-dom";
import Chart from 'react-apexcharts';

function QAreports() {
  return (
    <html lang="en">
      <body className="repbody">
        <QANav title="Reports" />
        <Dashboard />
        <GradesReport />
        <Footer />
      </body>
    </html>
  );
}

function Dashboard() {
  return (
    <div className="content">
      <button className="dashboard-button">
        <Link class="link" to="/qadashboard">
          Dashboard
        </Link>
      </button>
    </div>
  );
}
function GradesReport() {
  const [gradesReport, setGradesReport] = useState([]);

  useEffect(() => {
    const getGradesReport=async()=>{
    const reqData= await fetch('http://localhost/Reports.php');
    const resData = await reqData.json();
    setGradesReport(resData);
    console.log(resData); 
    }
    getGradesReport();
  }, []);


  // Preprocessing data to count how many users got grades A, B, C for each exam
  const processedData = gradesReport.reduce((acc, report) => {
    const existingExam = acc.find((item) => item.exam_name === report.exam_name);
    if (existingExam) {
      // If exam_name already exists, update the grade counts
      existingExam[report.grade] = (existingExam[report.grade] || 0) + 1;
    } else {
      // If exam_name doesn't exist, add a new entry with initial grade counts
      acc.push({
        exam_name: report.exam_name,
        A: report.grade === 'A' ? 1 : null,
        B: report.grade === 'B' ? 1 : null,
        C: report.grade === 'C' ? 1 : null,
      });
    }
    return acc;
  }, []);

  // Extracting data for ApexCharts
  const categories = processedData.map((item) => item.exam_name);
  const series = [
    {
      name: 'Grade A',
      data: processedData.map((item) => item.A),
    },
    {
      name: 'Grade B',
      data: processedData.map((item) => item.B),
    },
    {
      name: 'Grade C',
      data: processedData.map((item) => item.C),
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
    <div className='repgradediv'>
      <h2 className='repgradeh2'>Student Grades Report</h2>
      <table className="grades-table">
        <thead className='repgradethead'>
          <tr className='repgradetr'>
            <th className='repgradeth'>User Name</th>
            <th className='repgradeth'>Course Name</th>
            <th className='repgradeth'>Exam Name</th>
            <th className='repgradeth'>Grade</th>
          </tr>
        </thead>
        <tbody className='repgradetbody'>
          {gradesReport.map((gradesReport, index) => (
            <tr className='repgradetr1' key={index}>
              <td className='repgradetd'>{gradesReport.user_name}</td>
              <td className='repgradetd'>{gradesReport.course_name}</td>
              <td className='repgradetd'>{gradesReport.exam_name}</td>
              <td className='repgradetd'>{gradesReport.grade}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className="chart-container">
        <Chart options={options} series={series} type="bar" height={350} />
      </div>
    </div>
  );
}

export default QAreports;
