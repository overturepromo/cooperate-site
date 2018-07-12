import React, { Component } from 'react';
import axios from 'axios';
import {withRouter} from "react-router-dom";

class ApplyBox extends Component {

    state = {
        first: '',
        last: '',
        email: '',
        phone: '',
        movies: '',
        coverLetter: '',
        selectedFile: ''
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
            case 'movies':
                this.setState({movies: e.target.value})
                break;
            case 'coverLetter':
                this.setState({coverLetter: e.target.value})
                break;
            case 'resume':
                this.setState({selectedFile: e.target.files[0]})
                break;
            default:
                break;
       }
    }


    handleSubmit = (e) => {
        e.preventDefault();
        const { first, last, email, phone, movies, coverLetter, selectedFile } = this.state;

        let formData = new FormData();
        formData.append('position', this.props.title)
        formData.append('first', first );
        formData.append('last', last);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('movies', movies);
        formData.append('coverLetter', coverLetter);
        formData.append('selectedFile', selectedFile);

        axios.post('/apply', formData)
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.setState({first: '', last: '', email: '', phone: '', movies: '', coverLetter: '', selectedFile: ''})
        this.props.history.push("/");
    }

    render(){
        console.log(this.state.resume)
        return (
            <div>
                <button onClick={this.props.close}>Close</button>
                <h3>Apply for</h3>
                <h3>{this.props.title}</h3>
                <form onSubmit={this.handleSubmit}>
                    <input className="contact-inputs" type='text' name="first" placeholder="First Name" required value={this.state.first} onChange={this.handleChange} />
                    <input className="contact-inputs" type='text' name="last" placeholder="Last Name" required value={this.state.last} onChange={this.handleChange} />
                    <input className="contact-inputs" type='text' name="email" placeholder="Email" required value={this.state.email} onChange={this.handleChange} />
                    <input className="contact-inputs" type='text' name="phone" placeholder="Phone" required value={this.state.phone} onChange={this.handleChange} />
                    <input className="contact-inputs" type='text' name="movies" placeholder="What are your 3 favorite movies?" required value={this.state.movies} onChange={this.handleChange} />
                    <textarea className="contact-inputs text-area-contact" type='text' name="coverLetter" placeholder="Paste your cover letter" value={this.state.coverLetter} onChange={this.handleChange} />
                    <input className="contact-file" type='file' name='resume' value={this.state.resume} onChange={this.handleChange} />
                    <button className="contact-button-send">Send</button>
                </form>
            </div>
        )
    }
}

export default withRouter(ApplyBox);