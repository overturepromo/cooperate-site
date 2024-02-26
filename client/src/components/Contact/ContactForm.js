import React, { Component } from "react";
import axios from "axios";
import "../../styles/Contact.css";

class ContactForm extends Component {
  componentDidMount() {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    const formLocation = document.querySelector("#hubform");
    document.body.appendChild(script);

    var hubBody = script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "20650520",
          formId: "451f7941-0f99-4375-9b83-5c23cf961226",
          target: "#hubform",
        });
      }
    });
  }

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
      .post("/contact", {
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
      <div className="container contact-form-div">
        <div className="row">
          <div className="col-md-4">
            <div className="address">
              <h4 className="overture-contact-address">Address</h4>
              <h5 className="info-contact">800 S. Northpoint Blvd.</h5>
              <h5 className="infoBreak-contact">Waukegan, IL 60085</h5>
            </div>
            <div className="phone">
              <h4 className="overture-contact-address">Contact</h4>
              <h5 className="info-contact">P. 888.456.9564</h5>
              <h5 className="info-contact">F. 847.680.0114</h5>
            </div>
            <div className="socials-contact">
              <a
                href="https://www.facebook.com/OverturePromotions/"
                target="blank"
              >
                <i className="fa fa-facebook" style={icons}></i>
              </a>
              <a
                href="https://twitter.com/overturepromo?lang=en"
                target="blank"
              >
                <i className="fa fa-twitter" style={icons}></i>
              </a>
            </div>
          </div>
          <div
            id="hubform"
            className="col-md-8"
            style={{ marginTop: "25px" }}
          ></div>
        </div>
      </div>
    );
  }
}

//this is because font awesome can only take on one style. Must override it
const icons = {
  color: "#7a7a7a",
  marginRight: "20px",
  fontSize: "2.2em",
};

export default ContactForm;
