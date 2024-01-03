import React from 'react';
import Hero from './Hero';
import Info from './Info';
import SubFooter from '../SubFooter';

// TODO WITH NEW RELEASES
// Eventually we are going to want this to be /press/ecovadis and have a switch statement for press releases

const index = () => {
    topFunction();
    return (
        <div>
            <Hero />
            <Info />
            <SubFooter />
        </div>
    )
}

export default index;

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}