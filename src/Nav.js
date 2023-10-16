import React from 'react';
import './Home.css';

function Navbar() {
  return (
    <nav className='navbar'>
      <input type="checkbox" id="check" />
      <ul className="links">
        <li className='onnav'><a className='innav' href="home.html">Home</a></li>
        <li className='onnav'><a className='innav' href="aboutUs.html">About</a></li>
        <li className='onnav'><a className='innav' href="services.html">Services</a></li>
        <li className='onnav'><a className='innav' href="contact.html">Contact</a></li>
      </ul>
      <label htmlFor="check" className="checkbtn">
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </label>
      <Hero />
    </nav>
  );
}
function Hero() {
    return(
        <div className="hero">
        <h1 className='heading'>Welcome to MSC<br />Academic Program<br />(SOFTWARE ENGINEERING)</h1>
        <div className="button">
          <a href="login.html" className="btn login">Login</a>
          <a href="registration.html" className="btn register">Register</a>
        </div>
      </div>
    );
}
export default Navbar;
