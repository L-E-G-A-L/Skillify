import React from "react";
import "./Reports.css";
import { Footer, QANav } from "./QADash";
import { Link } from "react-router-dom";

function QAreports() {
  return (
    <html lang="en">
      <body className="repbody">
        <QANav title="Reports" />
        <Dashboard />
        <ReportTable />
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
function ReportTable() {
  return (
    <div className="report-container">
      <h1 className="reph1">Report</h1>
      <div className="course-label">
        <label className="replable" for="course">
          Course:
        </label>
        <select className="repselect" id="course" name="course">
          <option value="5335-01">SE 5335 001</option>
          <option value="5335-02">SE 5335 002</option>
          <option value="5335-03">SE 5335 003</option>
        </select>
      </div>
      <table className="grade-table">
        <thead className="repthread">
          <tr className="reptr">
            <th className="repth">Name</th>
            <th className="repth">Due</th>
            <th className="repth">Score</th>
          </tr>
        </thead>
        <tbody className="reptbody">
          <tr className="reptr1">
            <td className="reptd1">Assignment 1</td>
            <td className="reptd1">Sep 18 by 11:59pm</td>
            <td className="reptd1">45 / 50</td>
          </tr>
          <tr className="reptr1">
            <td className="reptd1">Assignment 2</td>
            <td className="reptd1">Sep 25 by 11:59pm</td>
            <td className="reptd1">48 / 50</td>
          </tr>
          <tr className="reptr1">
            <td className="reptd1">Assignment 3</td>
            <td className="reptd1">Oct 09 by 11:59pm</td>
            <td className="reptd1">/ 50</td>
          </tr>
          <tr className="reptr1">
            <td className="reptd1">Assignment 4</td>
            <td className="reptd1">Oct 02 by 11:59pm</td>
            <td className="reptd1">/ 50</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default QAreports;
