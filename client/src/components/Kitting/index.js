import React from 'react';
import Hero from './Hero';
import SubFooter from '../SubFooter';
import ContactForm from './ContactForm';
import ImageGrid from './ImageGrid';


const index = () => {
    topFunction();
    return (
        <div>
            <Hero />
            <ContactForm />
            <ImageGrid />
            <SubFooter />
        </div>
    )
}

export default index;

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}