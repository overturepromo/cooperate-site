import React, { Component } from 'react';
import axios from 'axios';
import Close from '../../../images/home/close.svg'

class ApplyBox extends Component {

    state = {
        first: '',
        last: '',
        email: '',
        phone: '',
        movies: '',
        hear: '',
        coverLetter: '',
        selectedFile: '',
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
            case 'movies':
                this.setState({movies: e.target.value})
                break;
            case 'hear':
                this.setState({hear: e.target.value})
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
        const { first, last, email, phone, movies, hear, coverLetter, selectedFile } = this.state;

        let formData = new FormData();
        formData.append('position', this.props.title)
        formData.append('first', first );
        formData.append('last', last);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('movies', movies);
        formData.append('hear', hear);
        formData.append('coverLetter', coverLetter);
        formData.append('selectedFile', selectedFile);

        axios.post('/apply', formData)
        .then(function (response) {
            console.log(response);
          })
          .catch(function (error) {
            console.log(error);
          });
        this.setState({first: '', last: '', email: '', phone: '', movies: '', hear: '', coverLetter: '', selectedFile: '', applied: true})
    }

    render(){
        console.log(this.state.resume)
        return (
            <div>
                <div className='row'>
                    <div className="col-xs-6">
                        <h3 style={{lineHeight: 0}}>Apply for</h3>
                        <h3 style={{fontFamily: 'Proxima-bold'}}>{this.props.title}</h3>
                    <div className="orange-bar-apply"></div>
                    </div>
                    <div className="col-xs-6" style={{textAlign: 'right'}}>
                        <img src={Close} alt="" className="close-img-team" onClick={this.props.close} /><br />
                    </div>
                </div>
                {this.state.applied === true
                        ? <div style={{fontSize: '20px'}}>Thank you for your interest in joining our team! If we see a fit, we will be in contact with you shortly!</div>
                        :
                <form onSubmit={this.handleSubmit}>
                    <input className="apply-inputs" type='text' name="first" placeholder="First Name" required value={this.state.first} onChange={this.handleChange} />
                    <input className="apply-inputs" type='text' name="last" placeholder="Last Name" required value={this.state.last} onChange={this.handleChange} />
                    <input className="apply-inputs" type='text' name="email" placeholder="Email" required value={this.state.email} onChange={this.handleChange} />
                    <input className="apply-inputs" type='text' name="phone" placeholder="Phone" required value={this.state.phone} onChange={this.handleChange} />
                    <input className="apply-inputs" type='text' name="movies" placeholder="What are your 3 favorite movies?" required value={this.state.movies} onChange={this.handleChange} />
                    <input className="apply-inputs" type='text' name="hear" placeholder="How did you hear about us?" required value={this.state.hear} onChange={this.handleChange} />
                    <textarea className="apply-inputs text-area-contact" style={{height: "100px"}} type='text' name="coverLetter" placeholder="Paste your cover letter" value={this.state.coverLetter} onChange={this.handleChange} />
                    <div style={{display: 'flex'}}>
                        <lable>Attach your resume<br /> (PDF or Word attachment)</lable>
                        <input className="apply-file" type='file' accept=".doc, .docx, .pdf" name='resume' value={this.state.resume} onChange={this.handleChange} required />
                    </div>
                    <button className="apply-button-send">Send</button>
                </form>
                }
            </div>
        )
    }
}

export default ApplyBox;