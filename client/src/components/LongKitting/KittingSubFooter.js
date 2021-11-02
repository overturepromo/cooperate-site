import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/SubFooter.css'

const KittingSubFooter = () => {
    return (
        <div className="sub-footer">
            <div className="some-fun">
                <div className="contact-box">
                    <div className="contact-small">
                        <h2 className="contact-fun">Want to turn your kitting dream into an expectation-exceeding reality?</h2>
                        <p className="contact-p">Reach out so we can get started!</p>
                        <Link className="contact-button-footer" to="/careers">REQUEST A CUSTOM KIT</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default KittingSubFooter;