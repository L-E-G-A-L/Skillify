import React, { useState, useEffect } from "react";
import "./css/QADash.css";
import { Link } from "react-router-dom";
import ChatComponent from "./Chatbot";
import axios from "axios";

function QADashboard() {
  return (
    <body className="qabody">
      <QANav title="Dashboard" />
      <MainContent />
      <QAChart />
      <Footer />
    </body>
  );
}

export function QANav({ title, toggleInnerNav }) {
  const [userName, setUserName] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  const handleDarkModeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  useEffect(() => {
    const userRole = sessionStorage.getItem("userRole");
    const user_id = sessionStorage.getItem("userId");
    const body = document.body;
    if (isDarkMode) {
      body.classList.add("dark-theme");
    } else {
      body.classList.remove("dark-theme");
    }

    axios
      .get(
        `https://sxt7404.uta.cloud/php/qausernamefetch.php?user_id=${user_id}&role=${userRole}`
      )
      .then((response) => {
        console.log(response.data);
        if (response.data.users && response.data.users.user_name) {
          const fetchedUserName = response.data.users.user_name;
          setUserName(fetchedUserName);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, [isDarkMode]);
  return (
    <nav className="qanav">
      <h1 className="qah1">{title}</h1>
      <ul className="qaul">
        <li className="qali">
          <Link
            className="link"
            to={
              sessionStorage.getItem("userRole") === "admin"
                ? "/admin"
                : "/qadashboard"
            }
          >
            <a className="qaa">Home</a>
          </Link>
        </li>
      </ul>
      <input
        onClick={toggleInnerNav}
        type="checkbox"
        id="toggle-menu-checkbox"
      />
      <label for="toggle-menu-checkbox" id="toggle-menu-label"></label>
      <div className="sub-menu-wrap" id="submenu">
        <div id="dark-btn" onClick={handleDarkModeToggle}>
          <span className={`qaspan ${isDarkMode ? "dark-btn-on" : ""}`}></span>
        </div>
        <div className="sub-menu">
          <div className="user-info">
            <img src="Profile.png" alt="Profile" className="user-pic" />
            <h3 className="qah3">{userName || "User Name"}</h3>
          </div>
          <hr className="qahr" />
          <a href="profile" className="sub-menu-link">
            <img src="profile logo.png" alt="Profile Logo" />
            <p className="qap">Edit Profile</p>
            <span className="qaspan">&gt;</span>
          </a>
          <a href="#" className="sub-menu-link">
            <img className="qaimg" src="setting.png" alt="Setting" />
            <p className="qap">Settings & Privacy</p>
            <span className="qaspan">&gt;</span>
          </a>
          <a href="#" className="sub-menu-link">
            <img src="help.png" alt="Help" />
            <p className="qap">Help & Support</p>
            <span className="qaspan">&gt;</span>
          </a>
          <a href="login" className="sub-menu-link">
            <img src="logout.png" alt="Logout" />
            <p className="qap">Logout</p>
            <span className="qaspan">&gt;</span>
          </a>
        </div>
      </div>
    </nav>
  );
}
function MainContent() {
  return (
    <main className="qamain">
      <section className="functionality">
        <h2 className="qah2">Review and Validate Program and courses</h2>
        <Link className="link" to="/qacoursecontentdisplay">
          <button className="toggle-button">Course Content</button>
        </Link>
      </section>
      <section className="functionality">
        <h2 className="qah2">Audits or Evaluations of courses and exams</h2>
        <Link className="link" to="/audit">
          <button className="toggle-button">Audit</button>
        </Link>
      </section>
      <section className="functionality">
        <h2 className="qah2">
          Discussion with Students, Instructors, Administrators, and Program
          Coordinator
        </h2>
        <Link className="link" to="/discussion">
          <button className="toggle-button">Discussion</button>
        </Link>
      </section>
      <section className="functionality">
        <h2 className="qah2">Create New Policy / View Existing Policies</h2>
        <Link className="link" to="/newpolicy">
          <button className="toggle-button">New Policy</button>
        </Link>
        <Link className="link" to="/existingpolicy">
          <button className="toggle-button1">View Policy</button>
        </Link>
      </section>
      <section className="functionality">
        <h2 className="qah2">Monitor and Analyze Student Performance Data</h2>
        <Link className="link" to="/reports">
          <button className="toggle-button">Reports</button>
        </Link>
      </section>
    </main>
  );
}
function QAChart() {
  return (
    <div className="chat">
      <ChatComponent />
    </div>
  );
}
export function Footer() {
  return (
    <footer className="qafooter">
      <p>&copy; 2023 Quality Assurance Website</p>
    </footer>
  );
}

export default QADashboard;
