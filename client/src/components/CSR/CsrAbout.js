import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/Csr.css'
import '../../styles/animate.css';
import Culture from '../../images/csr/culture.svg';
import Diac from '../../images/csr/diac.svg';
import Green from '../../images/csr/green.svg';
import Safety from '../../images/csr/saftey.svg';

const CsrAbout = () => {
    return (
        <div className="csr-about">
            <div className="container">
                <p className="basic-csr">Corporate Social Responsibility at Overture is about doing the next right thing to have a positive influence on our world. We put our actions in these buckets:</p>
                <ul className="basic-csr" style={{padding: '25px 50px'}}>
                    <li>Being socially and economically responsible and ethical.</li>
                    <li>Minimizing our environmental impact.</li>
                    <li>Promoting volunteerism by our employees and partners.</li>
                </ul>
                <p className="basic-csr csr-img-margin">It all starts with our volunteer employee resource groups:</p>
                <div className="row csr-img-margin">
                    <div className="col-sm-1">
                        <img className="csr-icons" src={Culture} />
                    </div>
                    <div className="col-sm-11 csr-11">
                        <h4 className="csr-blue">Culture Crew</h4>
                        <p className="basic-csr">Ensures we are making connections between front-of-house and back-of-house employees, keeps us all informed of Overture family news and victories, and brings the fun. </p>
                    </div>
                </div>
                <div className="row csr-img-margin">
                    <div className="col-sm-1">
                        <img className="csr-icons" src={Diac} />
                    </div>
                    <div className="col-sm-11 csr-11">
                        <h4 className="csr-blue">DIAC (Diversity and Inclusion Advisory Council)</h4>
                        <p className="basic-csr">Makes recommendations to management and creates programs and training to ensure Overture is a diverse and inclusive workplace. <Link to="/diversity" className="csr-link">Learn More</Link></p>
                    </div>
                </div>
                <div className="row csr-img-margin">
                    <div className="col-sm-1">
                        <img className="csr-icons" src={Green} />
                    </div>
                    <div className="col-sm-11 csr-11">
                        <h4 className="csr-blue">Green Team</h4>
                        <p className="basic-csr">Pushes us to be more conscious of our impact on the environment, scopes and recommends initiatives to management, helps identify sustainable promotional products, and makes our family vegetable and herb garden happen. <Link to="/sustainability" className="csr-link">Learn More</Link></p>
                    </div>
                </div>
                <div className="row csr-img-margin">
                    <div className="col-sm-1">
                        <img className="csr-icons" src={Safety} />
                    </div>
                    <div className="col-sm-11 csr-11">
                        <h4 className="csr-blue">Safety Team</h4>
                        <p className="basic-csr">Trains staff for every day and crisis safety and ensures we have appropriate certifications and equipment. </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CsrAbout;