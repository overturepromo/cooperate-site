import React from 'react';

import Hero from './Hero'
import SubFooter from '../SubFooter';
import Work from './Work'
import BigImages from './BigImages';
import Clients from './Clients'
import Video from './Video'

const index = () => {
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


export default index;