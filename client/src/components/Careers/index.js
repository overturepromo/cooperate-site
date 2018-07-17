import React from 'react';

import Hero from './Hero';
import Avail from './Avail'
import Jobs from './Jobs'
import SubFooter from '../SubFooter';


const index = () => {
    topFunction();
    return (
        <div>
            <Hero />
            <Avail />
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