import React from 'react';
import { Link } from 'react-router-dom';
import '../../styles/About.css'
import GiveImage from '../../images/about/give_back.svg'


const GiveBack = () => {
    return (
        <div style={{margin: '50px 0'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={GiveImage} style={{height: '300px'}} />
                    </div>
                    <div className="col-md-8">
                        <h4 className="about-blue-words">We give back.</h4>
                        <p className="basic" style={{marginBottom: '40px'}}>Overture is dedicated to community engagement, <Link to="/sustainability" style={{color: '#696969', textDecoration: 'underline'}}>sustainability</Link>, and <Link to="/diversity" style={{color: '#696969', textDecoration: 'underline'}}>diversity</Link>. Learn more about our Corporate Social Responsibility program here</p>
                        <Link to="/csr" className="giveback-button">CSR AT OVERTURE</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default GiveBack;

