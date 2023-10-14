import React from 'react';
import './LRFStyles.css';

function Login() {
  return (
    <div className="login-page">
      <div className="navbar">
        <a href="home"><button className="navbar-button">Home</button></a>
        <a href="contact"><button className="navbar-button">Contact</button></a>
        <a href="about"><button className="navbar-button">About</button></a>
      </div>
      <div className="login-container">
        <h1 className='lrf-h1'>Login</h1>
        <div className="input-group">
          <label htmlFor="username" className='lrf-label'>Username</label>
          <input type="text" className="lrf-input" id="username" name="username" placeholder="Enter your username" />
        </div>
        <div className="input-group">
          <label htmlFor="password" className='lrf-label'>Password</label>
          <input type="password" className="lrf-input" id="password" name="password" placeholder="Enter your password" />
        </div>
        <button className="login-button">Login</button>
        <div className="links">
          <a href="forgotpassword" className='lrf-a'><button className="login-button">Forgot Password?</button></a>
          <a href="registration" className='lrf-a'><button className="login-button">Sign Up</button></a>
        </div>
      </div>
      <footer className='lrf-footer'>
        <p className='lrf-footer-p'>&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
      </footer>
    </div>
  );
}

export default Login;
