import React from 'react';
import './LRFStyles.css';

function Registration() {
  return (
    <div className="registration-page">
      <div className="navbar">
        <button className="navbar-button">Home</button>
        <button className="navbar-button">Contact</button>
        <button className="navbar-button">About</button>
      </div>
      <div className="registration-container">
        <h1 className='lrf-h1'>Registration</h1>
        <div className="input-group-2">
          <label htmlFor="first-name" className='lrf-label'>First Name</label>
          <input
            type="text"
            id="first-name"
            name="first-name"
            className="lrf-input"
            placeholder="Enter your first name"
          />
        </div>
        <div className="input-group-2">
          <label htmlFor="last-name" className='lrf-label'>Last Name</label>
          <input
            type="text"
            id="last-name"
            name="last-name"
            className="lrf-input"
            placeholder="Enter your last name"
          />
        </div>
        <div className="input-group-2">
          <label htmlFor="email" className='lrf-label'>Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="lrf-input"
            placeholder="Enter your email"
          />
        </div>
        <div className="input-group-2">
          <label htmlFor="password" className='lrf-label'>Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="lrf-input"
            placeholder="Enter your password"
          />
        </div>
        <div className="input-group-2">
          <label htmlFor="confirm-password" className='lrf-label'>Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            name="confirm-password"
            className="lrf-input"
            placeholder="Confirm your password"
          />
        </div>
        <div className="input-group-2">
          <label htmlFor="date-of-birth" className='lrf-label'>Date of Birth</label>
          <input type="date" className="lrf-input" id="date-of-birth" name="date-of-birth" />
        </div>
        <a href="login"><button className="register-button">Register</button></a>
        <div className="links">
          <a href="login" className='lrf-a'>Already registered? Login</a>
        </div>
      </div>
      <footer className='lrf-footer'>
        <p className='lrf-footer-p'>&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
      </footer>
    </div>
  );
}

export default Registration;
