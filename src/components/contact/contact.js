import React, { Component } from "react";
import "./contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      name: "",
      message: "",
      fieldEmpty: { name: false, email: false, message: false },
      emailValid: true,
    };
  }

  errors = { nameError: "", emailError: "", msgError: "" };
  componentDidUpdate() {
    if (this.state.fieldEmpty.email) {
      this.errors.emailError = "Email cannot be empty";
    } else {
      this.errors.emailError = "";
    }
    if (this.state.fieldEmpty.message) {
      this.errors.msgError = "Message cannot be empty";
    } else {
      this.errors.msgError = "";
    }
    if (this.state.fieldEmpty.name) {
      this.errors.nameError = "Name cannot be empty";
    } else {
      this.errors.nameError = "";
    }
    if (!this.state.emailValid) {
      // console.log(this.state.emailValid)
      this.errors.emailError = "Email not valid";
    } else {
      this.errors.emailError = "";
    }
  }

  validateField = (e) => {
    let validEmail = this.state.emailValid;
    let emptyField = this.state.fieldEmpty;
    if (e.target.value === "") {
      emptyField = { ...emptyField, [e.target.name]: true };
    } else {
      emptyField = { ...emptyField, [e.target.name]: false };
    }
    if (e.target.name === "email") {
      const regexEmail = new RegExp(
        /^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
      );
      validEmail = regexEmail.test(e.target.value);
      //console.log("this is", validEmail)
    }

    this.setState({
      emailValid: validEmail,
      fieldEmpty: emptyField,
    });

    // check emailValid from state to show the errros
  };

  handleUserInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    this.setState(
      {
        [name]: value,
      },
      () => {
        this.validateField(e);
      }
    );
  };

  render() {
    return (
      <div>
        <h1>Contact me</h1>
        <form className="contactForm">
          <input
            placeholder="Name*"
            value={this.state.name}
            onChange={this.handleUserInput}
            className="inputField"
            name="name"
            onBlur={this.validateField}
          />
          <p className="contectError">{this.errors.nameError}</p>
          <input
            placeholder="Email*"
            value={this.state.email}
            className="inputField"
            onChange={this.handleUserInput}
            name="email"
            onBlur={this.validateField}
          />
          <p className="contectError">{this.errors.emailError}</p>
          <textarea
            placeholder="Message*"
            value={this.state.message}
            rows="10"
            onBlur={this.validateField}
            onChange={this.handleUserInput}
            name="message"
            className="inputField"
          />
          <p className="contectError">{this.errors.msgError}</p>
          <div className="submitButton">Submit</div>
        </form>
      </div>
    );
  }
}
export default Contact;
