import React, { Component } from 'react';
import axios from 'axios';
import Close from '../../images/home/close.svg'

class ContactModal extends Component {

    state = {
        first: '',
        last: '',
        email: '',
        phone: '',
        date: '',
        applied: false
    }

    handleChange = (e) => {
        switch (e.target.name){
            case 'first':
                this.setState({first: e.target.value})
                break;
            case 'last':
                this.setState({last: e.target.value})
                break;
            case 'email':
                this.setState({email: e.target.value})
                break;
            case 'phone':
                this.setState({phone: e.target.value})
                break;
            case 'date':
                this.setState({date: e.target.value})
                break;
            default:
                break;
       }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const { first, last, email, phone, date } = this.state;

        let formData = new FormData();
        formData.append('sku', this.props.title)
        formData.append('first', first );
        formData.append('last', last);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('date', date);

        axios.post('/quote', formData)
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.setState({first: '', last: '', email: '', phone: '', date: '', applied: true})
    }

    render(){
        console.log(this.state.resume)
        return (
            <div>
                <div className='row'>
                    <div className="col-xs-6">
                        <h3 style={{lineHeight: 0}}>Request quote for</h3>
                        <h3 style={{fontFamily: 'Proxima-bold'}}>{this.props.title}</h3>
                    <div className="orange-bar-apply"></div>
                    </div>
                    <div className="col-xs-6" style={{textAlign: 'right'}}>
                        <img src={Close} alt="" className="close-img-team" onClick={this.props.close} /><br />
                    </div>
                </div>
                {this.state.applied === true
                        ? <div style={{fontSize: '20px'}}>Thank you for your interest! We'll have your quote within one business day! We look forward to speaking with you then!</div>
                        :
                <form onSubmit={this.handleSubmit}>
                    <input className="apply-inputs" type='text' name="first" placeholder="First Name" required value={this.state.first} onChange={this.handleChange} />
                    <input className="apply-inputs" type='text' name="last" placeholder="Last Name" required value={this.state.last} onChange={this.handleChange} />
                    <input className="apply-inputs" type='text' name="email" placeholder="Email" required value={this.state.email} onChange={this.handleChange} />
                    <input className="apply-inputs" type='text' name="phone" placeholder="Phone" required value={this.state.phone} onChange={this.handleChange} />
                    <input className="apply-inputs" type='text' name="date" placeholder="Need By Date" required value={this.state.date} onChange={this.handleChange} />
                    <button className="apply-button-send">Send</button>
                </form>
                }
            </div>
        )
    }
}

export default ContactModal;