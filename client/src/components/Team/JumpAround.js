import React, { Component } from 'react';

class JumpAround extends Component {
    render(){
        return (
            <div className="jump-div container">
                <ul className="jump-list">
                    <li><strong>Jump to:</strong></li>
                    <li className="jump-link">The Experts</li>
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