import React from 'react';

import Hero from './Hero';
import Jobs from './Jobs'
import SubFooter from '../SubFooter';


const index = () => {
    topFunction();
    return (
        <div>
            <Hero />
            <Jobs />
            <SubFooter />
        </div>
    )
}

export default index;


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}