import React from 'react';

import Hero from './Hero';
import AbstractImages from './AbstractImages';
import History from './History';
import Programs from './Programs';
import Awards from './Awards';
import Network from './Network';
import SubFooter from '../SubFooter';


const index = () => {
    return (
        <div>
            <Hero />
            <AbstractImages />
            <History />
            <Programs />
            <Awards />
            <Network />
            <SubFooter />
        </div>
    )
}

export default index;