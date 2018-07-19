import React from 'react';

import Hero from './Hero'
import SubFooter from '../SubFooter';
import Work from './Work'
import BigImages from './BigImages2';
import Clients from './Clients'
import Video from './Video'

const index = () => {
    topFunction();
    return (
        <div> 
            <Hero />
            <Work />
            <BigImages />
            <Clients />
            <Video />
            <SubFooter />
        </div>
    )
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default index;