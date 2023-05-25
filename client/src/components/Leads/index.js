import React from 'react';
import Hero from './Hero';
import LeadForm from './LeadForm';
import Images from './Images';
import SubFooter from '../SubFooter';


const index = () => {
    topFunction();
    return (
        <div>
            <Hero />
            <LeadForm />
            <Images />
            <SubFooter />
        </div>
    )
}

export default index;

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}