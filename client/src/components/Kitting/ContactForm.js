import React, { Component } from "react";
import axios from "axios";
import "../../styles/Kitting.css";
import "../../styles/animate.css";

class ContactForm extends Component {
  state = {
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    form: true,
  };

  handleChange = (e) => {
    switch (e.target.name) {
      case "name":
        this.setState({ name: e.target.value });
        break;
      case "company":
        this.setState({ company: e.target.value });
        break;
      case "email":
        this.setState({ email: e.target.value });
        break;
      case "phone":
        this.setState({ phone: e.target.value });
        break;
      case "message":
        this.setState({ message: e.target.value });
        break;
      default:
        break;
    }
  };

  handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/kitting", {
        name: this.state.name,
        company: this.state.company,
        email: this.state.email,
        phone: this.state.phone,
        message: this.state.message,
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    this.setState({
      name: "",
      company: "",
      email: "",
      phone: "",
      message: "",
      form: false,
    });
  };

  render() {
    return (
      <div className="kitting-contact-form">
        <div className="container">
          <h4 className="long-kitting-green" style={{ textAlign: "center" }}>
            Ready to create something extraordinary? Get in touch!
          </h4>
          {this.state.form === false ? (
            <div className="col-md-8 col-md-offset-2">
              <div className="confirm-box">
                <h4 className="confirm-title">
                  You have questions, we have answers!
                </h4>
                <p className="confirm-p">
                  In fact, we'll have your answers within one business day! We
                  look forward to speaking with you then!
                </p>
              </div>
            </div>
          ) : (
            <div className="col-md-8 col-md-offset-2">
              <form onSubmit={this.handleSubmit} className="contact-form row">
                <div className="col-xs-12 col-md-6 contact-inputs-box">
                  <input
                    className="contact-inputs"
                    type="text"
                    name="name"
                    placeholder="Name*"
                    required
                    value={this.state.name}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-xs-12 col-md-6 contact-inputs-box">
                  <input
                    className="contact-inputs"
                    type="text"
                    name="company"
                    placeholder="Company"
                    value={this.state.company}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-xs-12 col-md-6 contact-inputs-box">
                  <input
                    className="contact-inputs"
                    type="email"
                    name="email"
                    placeholder="Email*"
                    required
                    value={this.state.email}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-xs-12 col-md-6 contact-inputs-box">
                  <input
                    className="contact-inputs"
                    type="text"
                    name="phone"
                    placeholder="Phone"
                    value={this.state.phone}
                    onChange={this.handleChange}
                  />
                </div>
                <div className="col-xs-12 contact-inputs-box">
                  <textarea
                    className="contact-inputs text-area-contact"
                    type="text"
                    name="message"
                    required
                    placeholder="Briefly describe how we can help with your kitting needs*"
                    value={this.state.message}
                    onChange={this.handleChange}
                  />
                </div>
                {/* <ReCaptchaV2 sitekey='6LevO_scAAAAAFRhm0LW5TKW7SLzsJmTouS5_7W9' /> */}
                <div className="col-xs-12" style={{ textAlign: "center" }}>
                  <button className="contact-button-send">SUBMIT</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default ContactForm;
