import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/SubFooter.css'

const SubFooter = () => {
    return (
        <div className="sub-footer">
            <div className="some-fun">
                <div className="contact-box">
                    <div className="contact-small">
                        <h2 className="contact-fun">We'll knock your socks off, guaranteed.</h2>
                        <p className="contact-p">Let's discuss how we can help boost your brand.</p>
                        <Link className="contact-button-footer" to="/contact">CONTACT US</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubFooter;