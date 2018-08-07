import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <div style={{textAlign: 'center'}}>
            <h3>Page not found. Please return Home</h3>
            <Link to="/"><h4>CLICK HERE</h4></Link>
        </div>
    )
}

export default Error;