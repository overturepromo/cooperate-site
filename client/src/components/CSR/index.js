import React from 'react';
import Hero from './Hero';
import CsrAbout from './CsrAbout';
import CsrDifference from './CsrDifference';
import SubFooter from '../SubFooter';


const index = () => {
    topFunction();
    return (
        <div>
            <Hero />
            <CsrAbout />
            <CsrDifference />
            <SubFooter />
        </div>
    )
}

export default index;

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}