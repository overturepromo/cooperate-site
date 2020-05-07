import React from 'react';

import Hero from './Hero'
import AllItems from './AllItems'
import SubFooter from '../SubFooter';


const index = () => {
    topFunction();
    return (
        <div>
            <Hero />
            <AllItems />
            <SubFooter />
        </div>
    )
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default index;