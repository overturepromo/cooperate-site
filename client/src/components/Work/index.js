import React from 'react';

import Hero from './Hero'
import ImageGrid from './ImageGrid';
import SubFooter from '../SubFooter';


const index = () => {
    topFunction();
    return (
        <div>
            <Hero />
            <ImageGrid />
            <SubFooter />
        </div>
    )
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default index;