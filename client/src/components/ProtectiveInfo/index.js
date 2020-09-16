import React from 'react';

import Hero from './Hero';
import ProtectiveBody from './ProtectiveBody';
import ProtectiveSubfooter from './ProtectiveSubFooter';


const index = () => {
    topFunction();
    return (
        <div>
            <Hero />
            <ProtectiveBody />
            <ProtectiveSubfooter />
        </div>
    )
}


function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

export default index;