import React from 'react';
import { Link } from 'react-router-dom';

const HelloBar = () => {
    return (
        <div className="hellobar-div">
            <p className="hellobar-p">Every Kit Made to Your Specifications? You’ve Got to be Kitting! Request Your Custom Kit Here!</p>
            <a href="/kitting" className="hellobar-link">Request a Kit </a>
        </div>
    )
}

export default HelloBar;