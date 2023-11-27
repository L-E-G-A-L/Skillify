import React from "react";
import "./css/Home.css";

function Navbar() {
  return (
    <nav className="navbar">
      <input type="checkbox" id="check" />
      <ul className="links">
        <li className="onnav">
          <a className="innav" href="home">
            Home
          </a>
        </li>
        <li className="onnav">
          <a className="innav" href="about">
            About
          </a>
        </li>
        <li className="onnav">
          <a
            className="innav"
            href="https://sxt2726.uta.cloud/WDM_Group15/Blog/"
          >
            Blog
          </a>
        </li>
        <li className="onnav">
          <a className="innav" href="services">
            Services
          </a>
        </li>
        <li className="onnav">
          <a className="innav" href="contact">
            Contact
          </a>
        </li>
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
  return (
    <div className="hero">
      <h1 className="heading">
        Welcome to MSC
        <br />
        Academic Program
        <br />
        (SOFTWARE ENGINEERING)
      </h1>
      <div className="button">
        <a href="login" className="btn login">
          Login
        </a>
        <a href="registration" className="btn register">
          Register
        </a>
      </div>
    </div>
  );
}
export default Navbar;
