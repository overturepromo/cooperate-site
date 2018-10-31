import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    topFunction();
    return (
        <div style={{textAlign: 'center', paddingTop: '100px', backgroundColor: '#3babc5'}}>
            <h3 style={{color: 'white'}}>Page not found. Please return Home</h3>
            <Link to="/"><h4 style={{color: 'white'}}>CLICK HERE</h4></Link>
        </div>
    )
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default Error;