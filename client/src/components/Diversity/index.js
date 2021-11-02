import React from 'react';
import Hero from './Hero';
import BlockImages from './BlockImages'
import Together from './Together'
import SubFooter from '../SubFooter';


const index = () => {
    topFunction();
    return (
        <div>
            <Hero />
            <BlockImages />
            <Together />
            <SubFooter />
        </div>
    )
}

export default index;

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}