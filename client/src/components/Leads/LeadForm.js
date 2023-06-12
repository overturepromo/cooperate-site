import React, { Component } from 'react';
import '../../styles/Leads.css'
import '../../styles/animate.css';
import Orange from '../../images/Leads/Overture-leads.svg';

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
                        <h2 className="leads-h2">Amazing Swag from Diverse Suppliers</h2>
                        <h4 className="leads-h4">We’re an award-winning minority-owned (and woman-led!) swag agency. Need high-quality branded merch that’s sustainably sourced or from diverse suppliers? We got you covered.</h4>
                        <div className="leads-forms-text">
                           <p style={{fontWeight: 'bold'}}>Not sure where to start? We can help!</p>
                           <p>Get in Touch: <a href="hello@overturepromo.com">hello@overturepromo.com</a></p>
                       </div>
                    </div>
                    <div className="col-md-6">
                       <div id="hubform"></div> 
                    </div>
                </div>
            </div>
        )
    }
}

export default LeadForm;