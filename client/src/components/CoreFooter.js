import React from 'react';
import { Link } from 'react-router-dom';
import Core from '../images/home/logo_core.svg';

import "../styles/Footer.css";

const CoreFooter = () => {
    return (
        <div className="core-footer">
        <Link to="/corevalues">
            <div className="container-fluid core-row">
                <div className="container">
                    <div className="row core-center">
                        <div className="col-md-3 core-col">
                                <img className="core-image" src={Core} alt="overture-values" />
                        </div>
                        <div className="col-md-3">
                            <p className="core-text">Communicate and Collaborate</p>
                            <p className="core-text">Work Hard, Have Fun, Make History</p>
                            <p className="core-text">Weird is Cool</p>
                        </div>
                        <div className="col-md-3">
                            <p className="core-text">Live with Integrity & Respect</p>
                            <p className="core-text">Take Ownership & Accountability</p>
                            <p className="core-text">Be Significant, Be Humble</p>
                        </div>
                        <div className="col-md-3">
                            <p className="core-text"> Make an Impact</p>
                            <p className="core-text"></p>
                            <p className="core-text"></p>
                        </div>
                    </div>
                </div>
            </div>
            </Link>
        </div>
    )
}

export default CoreFooter;