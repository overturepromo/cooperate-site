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
                       </div>
                       <iframe src="https://player.vimeo.com/video/800642069?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479"
                        width="500" 
                        height="281"
                        frameborder="0"
                        allow="autoplay; fullscreen; picture-in-picture"
                        allowfullscreen title="DEI at Overture">
                        </iframe>
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