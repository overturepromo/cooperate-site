import React, { Component } from 'react';
import '../../styles/Leads.css'
import '../../styles/animate.css';

class LeadForm extends Component {

    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        const formLocation = document.querySelector('#hubform')
        document.body.appendChild(script);
        
        var hubBody = script.addEventListener('load', () => {
            if(window.hbspt) {
              window.hbspt.forms.create({
                  region: "na1",
                  portalId: "20650520",
                  formId: "ec8ff01a-ce33-4228-8091-40079b59f772",
                  target: '#hubform'
            })
          }
        });
      }

      render(){
        return (
            <div className="leads-form">
                <div className="container">
                    <div className="col-md-6">
                        <h1 className="leads-h1">OVERTURE</h1>
                        <h2 className="leads-h2">Your FREE Swag Kit Awaits!</h2>
                        <h4 className="leads-h4">As experts in kit curation, we can’t wait to show you what we’re capable of! Please take a moment to fill out this form so we can send a free swag kit your way!</h4>
                    </div>
                    <div id="hubform" className="col-md-6">
                        <h4>Jambo Beans!</h4>
                    </div>
                </div>
            </div>
        )
    }
}

export default LeadForm;