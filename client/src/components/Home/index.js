import React from 'react';
import {Helmet} from 'react-helmet';

import Images from './Images'
import Icons from './Icons';
import HeroTwo from './hero_v2'
import SubFooter from '../SubFooter';
import Work from './Work'
import Video from './Video'

const index = () => {
    topFunction();
    return (
        <div>
            <Helmet>
                <title>Overture Promotions | Swag & Promotional Merchandise Experts</title>
                <meta 
                    name="description" 
                    content="We’re an award-winning swag agency that’s relied upon many of the world’s largest brands to manage their swag programs. We offer global distribution and a full-suite of in-house services." 
                />
            </Helmet> 
            <HeroTwo />
            <Work />
            <Images />
            <Icons />
            <Video />
            <SubFooter />
        </div>
    )
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default index;