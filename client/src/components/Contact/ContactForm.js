import React, { Component } from 'react';
import axios from 'axios';

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
        return null;
    }

    render(){
        console.log(this.state)
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        address
                    </div>
                    <div className="col-md-8">
                        <form onSubmit={this.handleSubmit}> 
                            <input type='text' name="name" placeholder="Name" value={this.state.name} onChange={this.handleChange} />
                            <input type='text' name="company" placeholder="Company" value={this.state.company} onChange={this.handleChange} />
                            <input type='text' name="email" placeholder="Email" value={this.state.email} onChange={this.handleChange} />
                            <input type='text' name="phone" placeholder="Phone" value={this.state.phone} onChange={this.handleChange} />
                            <input type='text' name="message" placeholder="Message" value={this.state.message} onChange={this.handleChange} />
                            <button>Send</button>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
}

export default ContactForm;