import React from 'react';
import {Helmet} from 'react-helmet';

import Hero from './Hero'
import ImageGrid from './ImageGrid';
import SubFooter from '../SubFooter';


const index = () => {
    topFunction();
    return (
        <div>
            <Helmet>
                <title>Our Work | See Our Branded Merchandise in Action! </title>
                <meta 
                    name="description" 
                    content="We work hard to deliver wildly creative and effective promotional products and programs. We love what we do, and its shows! Check out some of our favorite projects!" 
                />
            </Helmet>
            <Hero />
            <ImageGrid />
            <SubFooter />
        </div>
    )
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default index;