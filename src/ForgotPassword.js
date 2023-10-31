import React , { useState } from 'react';
import axios from 'axios'; 
import './Registration';
import './LRFStyles.css';

function ForgotPassword() {
  const [error, setError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  
  const onForgotPwdHandler = (email) => {
    setError(false);

    if (email) {
      axios
        .post('http://localhost/LRFAuth.php', {
          action: "forgotPassword",
          email: email,
        })
        .then((response) => {
          if (response.data.success) {
            setError(true);
            setErrorMessage(response.data.message)
          } else {
            setError(true);
            setErrorMessage(response.data.message)
          }
        })
        .catch((error) => {
          console.log(error);
        });
    } else {
      setError(true);
      setErrorMessage("Email field is required")
    }
  };
  return (
    <div className="forgot-password-page">
      <div className="lrf-navbar">
        <a href="home"><button className="navbar-button">Home</button></a>
        <a href="contact"><button className="navbar-button">Contact</button></a>
        <a href="about"><button className="navbar-button">About</button></a>
      </div>
      <div className="forgot-password-container">
        <h1 className='lrf-h1'>Forgot Password</h1>
        <p className='fp-p'>Enter your email address below to reset your password.</p>
        <div className="input-group">
          <label htmlFor="email" className='lrf-label'>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="lrf-input"
            placeholder="Enter your email"
          />
        </div>
        {error && <h5 className="login-error-message">{errorMessage}</h5>}
        <button className="reset-password-button" onClick={() => onForgotPwdHandler(document.getElementById("email").value)}>Reset Password</button>
        <div className="lrf-links">
          <a href="login" className='lrf-a'>Back to Login</a>
        </div>
      </div>
      <footer className='lrf-footer'>
        <p className='lrf-footer-p'>&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
      </footer>
    </div>
  );
}

export default ForgotPassword;