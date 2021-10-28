import React from 'react';
import SubFooter from '../SubFooter';


const index = () => {
    topFunction();
    return (
        <div>
            <h1 style={{height: '200px', backgroundColor: '#3babc5', paddingTop: '100px', margin: '0', textAlign: 'center', color: '#fff'}}>Sustainability Page Coming Soon!</h1>
            <SubFooter />
        </div>
    )
}

export default index;

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}