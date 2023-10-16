import React , { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import './LRFStyles.css';

function Login() {
  const navigation = useNavigate();
  const [error, setError] = useState(false);

  const onLoginHandler = (username, password) => {
    setError(false)
    if (username === "student@skillify.com" && password === "student") {
      navigation("/student");
    } else if (username === "admin@skillify.com" && password === "admin") {
      navigation("/admin");
    } else if (username === "pc@skillify.com" && password === "pc") {
      navigation("/pc");
    } else if (
      username === "instructor@skillify.com" &&
      password === "instructor"
    ) {
      navigation("/instructor");
    } else if (username === "qa@skillify.com" && password === "qa") {
      navigation("/qahome");
    } else {
      setError(true)
    }
  };

  return (
    <div className="login-page">
      <div className="lrf-navbar">
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
        {error && <h5 className="login-error-message">Wrong username/password provided</h5>}
        <button className="login-button" onClick={() => onLoginHandler(document.getElementById("username").value, document.getElementById("password").value)}>Login</button>
        <div className="lrf-links">
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
