import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import "./css/LRFStyles.css";

function Registration() {
  const navigation = useNavigate();
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("Fill all details");
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  });

  const generateRandomToken = (length) => {
    const charset =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let token = "";
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      token += charset[randomIndex];
    }
    return token;
  };

  const isEmailValid = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(email);
  };

  const isPhoneNumberValid = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleInputChange = (e) => {
    setUserData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onRegisterHandler = (data) => {
    const user_email = data.email;
    const user_token = generateRandomToken(32);

    setError(false);
    setErrorMessage("Fill all details");
    if (
      data.firstName &&
      data.lastName &&
      isEmailValid(data.email) &&
      data.password.length >= 8 &&
      data.password &&
      data.confirmPassword &&
      data.password === data.confirmPassword &&
      isPhoneNumberValid(data.phoneNumber)
    ) {
      axios
        .post("https://sxt7404.uta.cloud/php/LRFAuth.php", {
          action: "register",
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          password: data.password,
          phoneNumber: data.phoneNumber,
          token: user_token,
        })
        .then((response) => {
          if (response.status === 200) {
            alert("Registration successful! Please Verify your email to login");
            navigation("/login");
          } else {
            setError(true);
            setErrorMessage("Registration failed");
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else if (data.password !== data.confirmPassword) {
      setError(true);
      setErrorMessage("Passwords do not match");
    } else {
      setError(true);
      if (!isEmailValid(data.email)) setErrorMessage("Enter a valid email");
      else if (data.password.length < 8)
        setErrorMessage("Password must be at least 8 characters");
      else if (!isPhoneNumberValid(data.phoneNumber))
        setErrorMessage("Enter a valid phone number");
      else setErrorMessage("Fill all details");
    }
  };

  return (
    <div className="registration-page">
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
      <div className="registration-container">
        <h1 className="lrf-h1">Registration</h1>
        <div className="input-group-2">
          <label htmlFor="first-name" className="lrf-label">
            First Name
          </label>
          <input
            type="text"
            id="first-name"
            name="firstName"
            className="lrf-input"
            placeholder="Enter your first name"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group-2">
          <label htmlFor="last-name" className="lrf-label">
            Last Name
          </label>
          <input
            type="text"
            id="last-name"
            name="lastName"
            className="lrf-input"
            placeholder="Enter your last name"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group-2">
          <label htmlFor="email" className="lrf-label">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="lrf-input"
            placeholder="Enter your email"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group-2">
          <label htmlFor="password" className="lrf-label">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="lrf-input"
            placeholder="Enter your password"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group-2">
          <label htmlFor="confirm-password" className="lrf-label">
            Confirm Password
          </label>
          <input
            type="password"
            id="confirm-password"
            name="confirmPassword"
            className="lrf-input"
            placeholder="Confirm your password"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        <div className="input-group-2">
          <label htmlFor="phoneNumber" className="lrf-label">
            Mobile Number
          </label>
          <input
            type="number"
            className="lrf-input"
            id="phoneNumber"
            name="phoneNumber"
            onChange={(e) => handleInputChange(e)}
          />
        </div>
        {error && <h5 className="login-error-message">{errorMessage}</h5>}
        <button
          className="register-button"
          onClick={() => onRegisterHandler(userData)}
        >
          Register
        </button>
        <div className="lrf-links">
          <a href="login" className="lrf-a">
            Already registered? Login
          </a>
        </div>
      </div>
      <footer className="lrf-footer">
        <p className="lrf-footer-p">&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
      </footer>
    </div>
  );
}

export default Registration;
