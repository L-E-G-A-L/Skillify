import React , { useState } from 'react';
import { useNavigate  } from 'react-router-dom';
import axios from 'axios'; 
import './LRFStyles.css';
import { useUser } from './UserContext'; 

function Login() {
  const navigation = useNavigate();
  const [error, setError] = useState(false);
  const { setUserRole } = useUser(); 

  const onLoginHandler = (username, password) => {
    setError(false);
    axios
      .post('http://localhost/LRFAuth.php', {
        action: "login",
        username: username,
        password: password,
      })
      .then((response) => {
        if (response.data.success) {
          const user = response.data.user;
          sessionStorage.setItem('userRole', user.role);
          setUserRole(user.role); 
          if (user.role === 'admin') {
            navigation('/admin');
          } else if (user.role === 'student') {
            navigation('/student');
          } else if (user.role === 'pc') {
            navigation('/pc');
          } else if (user.role === 'instructor') {
            navigation('/instructor');
          } else if (user.role === 'qa') {
            navigation('/qahome');
          }
        } else {
          setError(true);
          console.error('Login failed');
        }
      })
      .catch((error) => {
        console.error(error);
      });
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
