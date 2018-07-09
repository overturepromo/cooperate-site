import React from 'react';
import { Link } from 'react-router-dom'
import '../styles/SubFooter.css'

const SubFooter = () => {
    return (
        <div className="sub-footer">
            <div className="some-fun">
                <div className="contact-box">
                    <div className="contact-small">
                        <h2 className="contact-fun">Let's have some fun.</h2>
                        <p className="contact-p">Get in touch and we'll contact you to discuss how we can help boost your brand. We'll knock your socks off, guaranteed.</p>
                        <Link className="contact-button" to="/contact">CONTACT US</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SubFooter;