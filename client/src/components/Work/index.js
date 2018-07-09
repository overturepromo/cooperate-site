import React from 'react';

import Hero from './Hero'

import How from './How';
import Services from './Services'
import Warehouse from './Warehouse';
import ImageGrid from './ImageGrid';
import SubFooter from '../SubFooter';


const index = () => {
    return (
        <div>
            <Hero />
            <ImageGrid />
            <How />
            <Services />
            <Warehouse />
            <SubFooter />
        </div>
    )
}

export default index;