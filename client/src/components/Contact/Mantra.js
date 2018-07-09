import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/SubFooter.css'

const Mantra = () => {
    return (
        <div className="sub-footer">
            <div className="some-fun">
                <div className="contact-box">
                    <div className="contact-small">
                        <h2 className="contact-fun">Is "work hard play hard" your mantra?</h2>
                        <p className="contact-p">If so, we've got a special spot for you on our team.</p>
                        <Link className="contact-button" to="/careers">VIEW OPEN POSITIONS</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Mantra;