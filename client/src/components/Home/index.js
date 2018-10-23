import React from 'react';
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