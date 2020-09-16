import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/SubFooter.css'

const ProtectiveSubFooter = () => {
    return (
        <div className="sub-footer">
            <div className="some-fun">
                <div className="contact-box">
                    <div className="contact-small-ppe">
                        <h2 className="ppe-footer-title">Ready to Get Started?<br />Browse our selection of PPE essentials now! </h2>
                        <Link className="contact-button-footer" to="/ppe">SHOP PPE</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProtectiveSubFooter;