import React, { Component } from 'react';
import {Helmet} from "react-helmet";
import WebDeveloper from './Positions/WebDeveloper';

import '../../styles/Careers.css'

class Jobs extends Component {

    state = {
        webDeveloper: false,
    }

    handleOn = (position) => {
        if(position === 'webDeveloper'){
            this.setState({webDeveloper: true})
        } 
    }

    handleOff = (position) => {
        if(position === 'webDeveloper'){
            this.setState({webDeveloper: false})
            document.documentElement.scrollTop = 500;
        } 
    }

    render(){
        return (
            <div className='container' style={{marginTop: '20px'}}>
                <div className="jobs-box">
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3><a className="apply-link" target='blank' href="https://overturepromotions.applytojob.com/apply/kwrIC2KwE9/Account-Coordinator">Account Coordinator</a></h3>
                    </div>
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3><a className="apply-link" target='blank' href="https://overturepromotions.applytojob.com/apply/UomMjBk14Y/ESG-Compliance-Specialist">ESG Compliance Specialist</a></h3>
                    </div>
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3><a className="apply-link" target='blank' href="https://overturepromotions.applytojob.com/apply/ShG2RG3rBW/Vouching-Coordinator">Vouching Coordinator</a></h3>
                    </div>
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3><a className="apply-link" target='blank' href="https://overturepromotions.applytojob.com/apply/DKeZBtnWnW/Overture-Promotions-Pipeline">Overture Promotions - Pipeline</a></h3>
                    </div>
                    

                    {/* <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Web Developer </h3>
                        <h5 onClick={() => this.handleOn('webDeveloper')} className="view-button">View Details</h5>
                        {this.state.webDeveloper ? <WebDeveloper bye={this.handleOff} /> : null}
                    </div> */}
                </div>
                <div style={{margin: '30px 0'}}>
                    <p className="basic">Overture is an equal opportunity/affirmative action employer committed to a diverse and inclusive workplace. All qualified applicants will receive consideration for employment without regards to race, color, religion, sex, sexual orientation, gender identity, national origin, disability status, protected veteran status, or any other basis prohibited by law. If you are an individual with a disability and need assistance in applying for a position, please contact us <a href="mailto:Humanresources@overturepromo.com" style={{color: '#54565a', textDecoration: 'underline'}}>here</a>.</p>
                </div>
            </div>
        )
    }
}

export default Jobs;