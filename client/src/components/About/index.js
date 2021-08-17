import React from 'react';
import {Helmet} from 'react-helmet';

import Hero from './Hero';
import AbstractImages from './AbstractImages';
import History from './History';
import Work from './Work';
import Awards from './Awards';
import Data from './Data';
import Rockstars from './Rockstars';
import SubFooter from '../SubFooter';


const index = () => {
    topFunction();
    return (
        <div>
            <Helmet>
                <title>Who We Are | Creative Control Freaks & Marketing Experts</title>
                <meta 
                    name="description" 
                    content="We handle everything in-house - from account management to webstore development to warehousing and inventory. Just let us know how we can help and we have you covered!" 
                />
            </Helmet>
            <Hero />
            <History />
            <AbstractImages />
            <Work />
            <Data />
            <Awards />
            <Rockstars />
            <SubFooter />
        </div>
    )
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default index;