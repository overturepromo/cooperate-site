import React, { Component } from 'react';
import {Link} from "react-scroll";

class JumpAround extends Component {
    render(){
        return (
            <div className="jump-div container">
                <ul className="jump-list">
                    <li className="jump-link"><strong>Jump to:</strong></li>
                    <Link className="jump-link" to="experts" smooth={true} duration={500}>The Experts</Link>
                    <li className="jump-link">Account Coordinators</li>
                    <li className="jump-link">E-Commerce</li>
                    <li className="jump-link">Creative</li>
                    <li className="jump-link">Operations & Logistics</li>
                    <li className="jump-link">Embrodiery & Screen Printing</li>
                    <li className="jump-link">Warehouse</li>
                </ul>
            </div>
        )
    }
}

export default JumpAround;