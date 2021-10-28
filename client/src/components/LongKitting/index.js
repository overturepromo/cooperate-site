import React from 'react';
import SubFooter from '../SubFooter';


const index = () => {
    topFunction();
    return (
        <div>
            <h1>Long Kitting</h1>
            <SubFooter />
        </div>
    )
}

export default index;

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}