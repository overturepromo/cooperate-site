import React from 'react';
import Hero from './Hero'
import About from './About'
import KittingSubFooter from './KittingSubFooter';


const index = () => {
    topFunction();
    return (
        <div>
            <Hero />
            <About />
            <KittingSubFooter />
        </div>
    )
}

export default index;

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}