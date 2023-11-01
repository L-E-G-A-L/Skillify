import React from "react";
import "./AccessDenied.css";
import { useNavigate } from "react-router-dom";

function AccessDenied() {
  const navigation = useNavigate();
  const userRole = sessionStorage.getItem("userRole");
  const goBack = () => {
    if (userRole === "admin") {
      navigation("/admin");
    } else if (userRole === "student") {
      navigation("/student");
    } else if (userRole === "pc") {
      navigation("/pc");
    } else if (userRole === "instructor") {
      navigation("/instructor");
    } else if (userRole === "qa") {
      navigation("/qahome");
    } else {
      navigation("/");
    }
  };
  return (
    <>
      <div className="access-denied">
        <main className="access-denied-body">
          <div className="access-denied-content">
            <h1 className="access-denied-heading">
              You do not have access to this page.
            </h1>
            <p className="access-denied-message">Please go back.</p>
            <button className="access-denied-button" onClick={() => goBack()}>
              Go Back
            </button>
          </div>
        </main>
      </div>
      <footer className="access-denied-footer">
        <p className="access-denied-footer-p">
          &copy; 2023 SOFTWARE ENGINEERING WEBSITE
        </p>
      </footer>
    </>
  );
}

export default AccessDenied;
