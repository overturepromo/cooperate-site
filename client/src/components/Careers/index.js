import React from 'react';

import Hero from './Hero'
import SubFooter from '../SubFooter';


const index = () => {
    topFunction();
    return (
        <div>
            <Hero />
            <SubFooter />
        </div>
    )
}

export default index;


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}