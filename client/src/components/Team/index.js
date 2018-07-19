import React from 'react';

import Hero from './Hero'
import JumpAround from './JumpAround';
import Experts from './Experts';

import SubFooter from '../SubFooter';


const index = () => {
    topFunction();
    return (
        <div>
            <Hero />
            <JumpAround />
            <Experts />
            <SubFooter />
        </div>
    )
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default index;