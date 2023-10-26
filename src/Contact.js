import React from "react";
import "./css/contact.css";

class Contact extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      message: "",
      errors: {
        firstName: "",
        lastName: "",
        phone: "",
        email: "",
        message: "",
      },
    };
  }

  handleInputChange = (e) => {
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (this.state.firstName.trim() === "") {
      errors.firstName = "First name is required";
    }

    if (this.state.lastName.trim() === "") {
      errors.lastName = "Last name is required";
    }

    if (this.state.phone.trim() === "") {
      errors.phone = "Phone number is required";
    } else if (!/^\d{10}$/.test(this.state.phone)) {
      errors.phone =
        "Phone number should be 10 digits and contain only numbers";
    }

    if (this.state.email.trim() === "") {
      errors.email = "Email is required";
    } else if (!/^\S+@\S+\.\S+$/.test(this.state.email)) {
      errors.email = "Invalid email address";
    }

    if (this.state.message.trim() === "") {
      errors.message = "Message is required";
    }

    if (Object.keys(errors).length === 0) {
      console.log("Form submitted:", this.state);
    } else {
      this.setState({ errors });
    }
  };

  render() {
    const { errors } = this.state;

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
              <form onSubmit={this.handleSubmit}>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Enter your first name"
                    name="firstName"
                    value={this.state.firstName}
                    onChange={this.handleInputChange}
                  />
                  {errors.firstName && (
                    <div className="error-message">{errors.firstName}</div>
                  )}
                </div>
                <div className="input-box">
                  <input
                    type="text"
                    placeholder="Enter your last name"
                    name="lastName"
                    value={this.state.lastName}
                    onChange={this.handleInputChange}
                  />
                  {errors.lastName && (
                    <div className="error-message">{errors.lastName}</div>
                  )}
                </div>
                <div className="input-box">
                  <input
                    type="tel"
                    placeholder="Enter your phone no"
                    name="phone"
                    value={this.state.phone}
                    onChange={this.handleInputChange}
                  />
                  {errors.phone && (
                    <div className="error-message">{errors.phone}</div>
                  )}
                </div>
                <div className="input-box">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    name="email"
                    value={this.state.email}
                    onChange={this.handleInputChange}
                  />
                  {errors.email && (
                    <div className="error-message">{errors.email}</div>
                  )}
                </div>
                <div className="input-box message-box">
                  <textarea
                    name="message"
                    id="message"
                    cols="30"
                    rows="10"
                    placeholder="Send us a message"
                    required
                    value={this.state.message}
                    onChange={this.handleInputChange}
                  ></textarea>
                  {errors.message && (
                    <div className="error-message">{errors.message}</div>
                  )}
                </div>
                <div className="contactSubmitButton">
                  <input type="submit" value="Submit" />
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
