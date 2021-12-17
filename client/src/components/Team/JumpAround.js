import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class JumpAround extends Component {
    render(){
        return (
            <div className="jump-div container">
                <ul className="jump-list">
                    {/* <li id="na-jump-link" className="jump-link"><strong>Jump to:</strong></li> */}
                    <Link to="/team/management" className="jump-link">Leadership</Link>
                    <Link to="/team/experts" className="jump-link">The Experts</Link>
                    <Link to="/team/sales" className="jump-link">Sales</Link>
                    <Link to="/team/creative" className="jump-link">Creative & Marketing</Link>
                </ul>
                <ul className="jump-list" style={{marginTop: 0}}>
                    <Link to="/team/operations" className="jump-link">Operations</Link>
                    <Link to="/team/devit" className="jump-link">Web Dev & IT</Link>
                    <Link to="/team/embrodiery" className="jump-link">Production</Link>
                    <Link to="/team/warehouse" className="jump-link">Warehouse</Link>
                </ul>
            </div>
        )
    }
}

export default JumpAround;