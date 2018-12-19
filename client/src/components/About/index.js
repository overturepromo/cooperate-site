import React from 'react';

import Hero from './Hero';
import AbstractImages from './AbstractImages';
import History from './History';
import Work from './Work';
import Awards from './Awards';
import Data from './Data';
import Rockstars from './Rockstars';
import SubFooter from '../SubFooter';


const index = () => {
    topFunction();
    return (
        <div>
            <Hero />
            <History />
            <AbstractImages />
            <Work />
            <Data />
            <Awards />
            <Rockstars />
            <SubFooter />
        </div>
    )
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default index;