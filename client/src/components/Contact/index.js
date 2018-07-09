import React from 'react';

import Hero from './Hero'
import ContactForm from './ContactForm'
import Mantra from './Mantra'


const index = () => {
    topFunction();
    return (
        <div>
            <Hero />
            <ContactForm />
            <Mantra />
        </div>
    )
}

export default index;

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}