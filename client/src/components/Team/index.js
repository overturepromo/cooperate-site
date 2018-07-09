import React from 'react';

import Hero from './Hero'
import JumpAround from './JumpAround';
import Experts from './Experts';

import SubFooter from '../SubFooter';


const index = () => {
    return (
        <div>
            <Hero />
            <JumpAround />
            <Experts />
            <SubFooter />
        </div>
    )
}

export default index;