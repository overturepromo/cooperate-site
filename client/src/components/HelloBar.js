import React from 'react';
import { Link } from 'react-router-dom';

const HelloBar = () => {
    return (
        <div className="hellobar-div">
            <p className="hellobar-p">Need Personal Protective Equipment? We’ve Got You Covered (Literally)!</p>
            <a href="/ppe" className="hellobar-cta">BROWSE PPE</a>
        </div>
    )
}

export default HelloBar;