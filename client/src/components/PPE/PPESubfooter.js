import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/SubFooter.css'

const PPESubfooter = () => {
    return (
        <div className="sub-footer">
            <div className="some-fun">
                <div className="contact-box">
                    <div className="contact-small-ppe">
                        <h2 className="ppe-footer-title">Not sure which PPE is right for you? Or interested in more information on safety and compliance?</h2>
                        <Link className="contact-button-footer" to="/protectiveinfo">LEARN MORE</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PPESubfooter;