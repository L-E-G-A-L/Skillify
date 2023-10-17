import React from "react";
import "./UserActivity.css";

function UserActivity() {
  return (
    <div className="user-activity-page">
      <div className="user-activity-navbar">
        <a href="profile" className="user-activity-a">
          My Profile
        </a>
        <a href="login" className="user-activity-a">
          Sign Out
        </a>
      </div>
      <div className="user-activity-content">
        <button className="dashboard-button">Dashboard</button>
      </div>
      <div className="report-container">
        <h1 className="user-activity-h1">User Activity</h1>
        <table className="activity-table">
          <thead>
            <tr>
              <th className="user-activity-th">Name</th>
              <th className="user-activity-th">Last Activity</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="user-activity-td">User 1</td>
              <td className="user-activity-td">Aug 02 12:20</td>
            </tr>
            <tr>
              <td className="user-activity-td">User 2</td>
              <td className="user-activity-td">Aug 24 18:34</td>
            </tr>
            <tr>
              <td className="user-activity-td">User 3</td>
              <td className="user-activity-td">Sep 09 6:40</td>
            </tr>
            <tr>
              <td className="user-activity-td">User 4</td>
              <td className="user-activity-td">Sep 10 2:55</td>
            </tr>
          </tbody>
        </table>
      </div>
      <footer className="user-activity-footer">
        <p>&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
      </footer>
    </div>
  );
}

export default UserActivity;
