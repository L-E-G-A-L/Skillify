import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate  } from 'react-router-dom';
import "./Registration";
import "./LRFStyles.css";

function ResetPassword() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [email, setEmail] = useState("");
  const navigation = useNavigate();

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    setEmail(urlParams.get("email"));
  }, []);

  const onResetPasswordHandler = () => {
    setError(false);
    if (password.length >= 8 && password === confirmPassword) {
      axios
        .post("https://sxt7404.uta.cloud/php/LRFAuth.php", {
          action: "resetPassword",
          user_email: email,
          password: password,
        })
        .then((response) => {
          if (response.data.success) {
            navigation("/login");
          } else {
            setError(true);
            setErrorMessage(response.data.message);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setError(true);
      setErrorMessage("Passwords do not match");
    }
  };

  return (
    <div className="reset-password-page">
      <div className="lrf-navbar">
        <a href="home">
          <button className="navbar-button">Home</button>
        </a>
        <a href="contact">
          <button className="navbar-button">Contact</button>
        </a>
        <a href="about">
          <button className="navbar-button">About</button>
        </a>
      </div>
      <div className="reset-password-container">
        <h1 className="lrf-h1">Reset Password</h1>
        <div className="input-group">
          <label htmlFor="password" className="lrf-label">
            New Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="lrf-input"
            placeholder="Enter your new password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="input-group">
          <label htmlFor="confirmPassword" className="lrf-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            className="lrf-input"
            placeholder="Confirm your new password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        {error && <h5 className="login-error-message">{errorMessage}</h5>}
        <button
          className="reset-password-button"
          onClick={onResetPasswordHandler}
        >
          Reset Password
        </button>
        <div className="lrf-links">
          <a href="login" className="lrf-a">
            Back to Login
          </a>
        </div>
      </div>
      <footer className="lrf-footer">
        <p className="lrf-footer-p">&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
      </footer>
    </div>
  );
}

export default ResetPassword;
