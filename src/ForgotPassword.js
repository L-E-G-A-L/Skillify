import React from 'react';
import './Registration';
import './LRFStyles.css';

function ForgotPassword() {
  return (
    <div className="forgot-password-page">
      <div className="navbar">
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
        <button className="reset-password-button">Reset Password</button>
        <div className="links">
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