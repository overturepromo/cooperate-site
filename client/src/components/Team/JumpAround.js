import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class JumpAround extends Component {
    render(){
        return (
            <div className="jump-div container">
                <ul className="jump-list">
                    <li id="na-jump-link" className="jump-link"><strong>Jump to:</strong></li>
                    <Link to="/team/board" className="jump-link">The Board</Link>
                    <Link to="/team/acquisition" className="jump-link">The Acquisition Team</Link>
                    <Link to="/team/management" className="jump-link">The Management Team</Link>
                    <Link to="/team/experts" className="jump-link">The Experts</Link>
                    <Link to="/team/sales" className="jump-link">Sales</Link>
                    <Link to="/team/creative" className="jump-link">Creative & Marketing</Link>
                    <Link to="/team/operations" className="jump-link">Operations & Logistics</Link>
                    <Link to="/team/devit" className="jump-link">Web Development & IT</Link>
                    <Link to="/team/embrodiery" className="jump-link">Embroidery & Screen Printing</Link>
                    <Link to="/team/warehouse" className="jump-link">Warehouse</Link>
                </ul>
            </div>
        )
    }
}

export default JumpAround;