import React from "react";
import "./css/contact.css";

class Contact extends React.Component {
  render() {
    return (
      <div className="contactClass">
        <header className="contactHeaderClass">
          <a href="home" className="logo">
            Group15
          </a>
          <div className="menu-toggle"></div>
          <nav className="contactNav">
            <input type="checkbox" id="check" />
            <ul className="contactLinks">
              <li className="contactli">
                <a href="home" className="contactLia">
                  Home
                </a>
              </li>
              <li className="contactli">
                <a href="about" className="contactLia">
                  About
                </a>
              </li>
              <li className="contactli">
                <a href="services" className="contactLia">
                  Services
                </a>
              </li>
              <li className="contactli">
                <a href="contact" className="contactLia">
                  Contact
                </a>
              </li>
            </ul>
            <label htmlFor="check" className="checkbtn">
              <div className="line"></div>
              <div className="line"></div>
              <div className="line"></div>
            </label>
          </nav>
          <div className="clearfix"></div>
        </header>
        <div className="contactContainer">
          <div className="content">
            <div className="form-content">
              <div className="topic-text">Get In Touch With Us</div>
              <form action="#">
                <div className="input-box">
                  <input type="text" placeholder="Enter your first name" />
                </div>
                <div className="input-box">
                  <input type="text" placeholder="Enter your last name" />
                </div>
                <div className="input-box">
                  <input type="tel" placeholder="Enter your phone no" />
                </div>
                <div className="input-box">
                  <input type="email" placeholder="Enter your email" />
                </div>
                <div className="input-box message-box">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Send us a message"
                    required
                  ></textarea>
                </div>
                <div className="contactSubmitButton">
                  <input type="button" value="Submit" />
                </div>
              </form>
            </div>
          </div>
        </div>
        <footer className="contactFooterClass">
          <p>&copy; 2023 SOFTWARE ENGINEERING WEBSITE</p>
        </footer>
      </div>
    );
  }
}

export default Contact;
