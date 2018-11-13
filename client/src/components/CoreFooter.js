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
                                <img className="core-image" src={Core} />
                        </div>
                        <div className="col-md-3">
                            <p className="core-text">Live With Integrity and Respect</p>
                            <p className="core-text">Work Hard, Play Hard</p>
                            <p className="core-text">Do More With Less</p>
                        </div>
                        <div className="col-md-3">
                            <p className="core-text">Be Significant. Be Big</p>
                            <p className="core-text">Live Proud, Maintain Humility</p>
                            <p className="core-text">Weird is Cool</p>
                        </div>
                        <div className="col-md-3">
                            <p className="core-text">Take Ownership and Accountability</p>
                            <p className="core-text">Communicate and Collaborate</p>
                            <p className="core-text">Solve Problems</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-copy">
                <p className="copy-text">&copy; 2018 Overture, LLC</p>
            </div>
            </Link>
        </div>
    )
}

export default CoreFooter;