import React, { Component } from 'react';
import axios from 'axios';

import '../../styles/Contact.css'

class ContactForm extends Component {

    state = {
        name: '',
        company: '',
        email: '',
        phone: '',
        message: '',
        form: true
    }

    handleChange = (e) => {
        switch (e.target.name){
            case 'name':
                this.setState({name: e.target.value})
                break;
            case 'company':
                this.setState({company: e.target.value})
                break;
            case 'email':
                this.setState({email: e.target.value})
                break;
            case 'phone':
                this.setState({phone: e.target.value})
                break;
            case 'message':
                this.setState({message: e.target.value})
                break;
            default:
                break;
       }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        axios.post('/contact', {
            name: this.state.name,
            company: this.state.company,
            email: this.state.email,
            phone: this.state.phone,
            message: this.state.message
        })
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.setState({name: '', company: '', email: '', phone: '', message: '', form: false})
    }

    render(){
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
                            <h4 className="overture-contact-address" >Contact</h4>
                            <h5 className="info-contact">P. 888.456.9564</h5>
                            <h5 className="info-contact">F. 847.680.0114</h5>
                            {/* <a href="mailto: info@overturepromo.com" className="info-contact">info@overturepromo.com</a> */}
                        </div>
                        <div className="socials-contact">
                            <a href="https://www.facebook.com/OverturePromotions/" target="blank"><i className="fa fa-facebook" style={icons}></i></a>
                            <a href="https://twitter.com/overturepromo?lang=en" target="blank"><i className="fa fa-twitter" style={icons}></i></a>
                        </div>
                    </div>
                    {this.state.form === false
                        ? <div className="col-md-8">
                            <div className="confirm-box">
                                <h4 className="confirm-title">You have questions, we have answers!</h4>
                                <p className="confirm-p">In fact, we'll have your answers within one business day! We look forward to speaking with you then!</p>
                            </div>
                          </div>
                        :
                    <div className="col-md-8">
                        <form onSubmit={this.handleSubmit} className="contact-form row">
                            <div className="col-xs-12 col-md-6 contact-inputs-box">
                                <input className="contact-inputs" type='text' name="name" placeholder="Name*" required value={this.state.name} onChange={this.handleChange} />
                            </div>
                            <div className="col-xs-12 col-md-6 contact-inputs-box">
                                <input className="contact-inputs" type='text' name="company" placeholder="Company" value={this.state.company} onChange={this.handleChange} />
                            </div> 
                            <div className="col-xs-12 col-md-6 contact-inputs-box">
                                <input className="contact-inputs" type='email' name="email" placeholder="Email*" required value={this.state.email} onChange={this.handleChange} />
                            </div> 
                            <div className="col-xs-12 col-md-6 contact-inputs-box">
                                <input className="contact-inputs" type='text' name="phone" placeholder="Phone" value={this.state.phone} onChange={this.handleChange} />
                            </div>  
                            <div className="col-xs-12 contact-inputs-box">
                                <textarea className="contact-inputs text-area-contact" type='text' name="message" required placeholder="Message*" value={this.state.message} onChange={this.handleChange} />
                            </div>
                            <div className="col-xs-12" style={{textAlign: 'right'}}>
                                <button className="contact-button-send">SEND</button>
                            </div>
                        </form>
                    </div>
                    }
                </div>
            </div>
        )
    }
}

//this is because font awesome can only take on one style. Must override it 
const icons = {
    color: "#7a7a7a",
    marginRight: "20px",
    fontSize: '2.2em'
}


export default ContactForm;