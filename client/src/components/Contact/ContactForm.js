import React, { Component } from 'react';
import axios from 'axios';

import '../../styles/Contact.css'
import { IncomingMessage } from 'http';

class ContactForm extends Component {

    state = {
        name: '',
        company: '',
        email: '',
        phone: '',
        message: ''
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
        alert('Your message has been sent. :-)')
        this.setState({name: '', company: '', email: '', phone: '', message: ''})
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    render(){
        return (
            <div className="container" style={{marginTop: '60px', marginBottom: '60px'}}>
                <div className="row">
                    <div className="col-md-4">
                    <div className="address">
                            <h4 className="overture-contact-address">Address</h4>
                            <h5 className="info-contact">595 Lakeview Parkway</h5>
                            <h5 className="infoBreak-contact">Vernon Hills, IL 60061</h5>
                        </div>
                        <div className="phone">
                            <h4 className="overture-contact-address" >Phone</h4>
                            <h5 className="info-contact">P. 888.756.9564</h5>
                            <h5 className="info-contact">F. 847.680.0114</h5>
                        </div>
                        <div className="socials-contact">
                            <a href="" target="blank"><i className="fa fa-facebook" style={icons}></i></a>
                            <a href="" target="blank"><i className="fa fa-instagram" style={icons}></i></a>
                            <a href="" target="blank"><i className="fa fa-twitter" style={icons}></i></a>
                            <a href="" target="blank"><i className="fa fa-youtube" style={icons}></i></a>
                        </div>
                    </div>
                    <div className="col-md-8">
                        <form onSubmit={this.handleSubmit} className="contact-form row">
                            <div className="col-xs-6 contact-inputs-box">
                                <input className="contact-inputs" type='text' name="name" placeholder="Name*" required value={this.state.name} onChange={this.handleChange} />
                            </div>
                            <div className="col-xs-6 contact-inputs-box">
                                <input className="contact-inputs" type='text' name="company" placeholder="Company" value={this.state.company} onChange={this.handleChange} />
                            </div> 
                            <div className="col-xs-6 contact-inputs-box">
                                <input className="contact-inputs" type='email' name="email" placeholder="Email*" required value={this.state.email} onChange={this.handleChange} />
                            </div> 
                            <div className="col-xs-6 contact-inputs-box">
                                <input className="contact-inputs" type='text' name="phone" placeholder="Phone" value={this.state.phone} onChange={this.handleChange} />
                            </div>  
                            <div className="col-xs-12 contact-inputs-box">
                                <textarea className="contact-inputs text-area-contact" type='text' name="message" required placeholder="Message*" value={this.state.message} onChange={this.handleChange} />
                            </div>
                            <div className="col-xs-12" style={{textAlign: 'right'}}>
                                <button className="contact-button-send">Send</button>
                            </div>
                        </form>
                    </div>
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