import React from 'react';
import Facebook from '../../images/home/facebook_socks.jpg';
import Google from '../../images/home/google.jpg';
import Jimmy from '../../images/home/jimmyfallon.jpg';
import Fiji from '../../images/home/fiji.jpg';

import '../../styles/Home.css';

const Images = () => {
    return (
        <div style={{margin: '20px 0'}}>
            <div style={{display: 'flex'}} className="desktop-abstract">
                <div style={{width: '23%', paddingRight: '20px'}}>
                <img src={Fiji} className="about-bike" alt="" />
                </div>
                <div style={{width: '24%', paddingRight: '20px'}}> 
                <img src={Google} className="about-warehouse" alt="" />
                </div>
                <div style={{width: '34%', paddingRight: '20px'}}>
                <img src={Jimmy} className="about-core-values" alt="" />
                </div>
                <div style={{width: '19%'}}>
                <img src={Facebook} className="about-ladies" alt="" />
                </div>
            </div>
            <div className="mobile-abstract">
                <img src={Fiji} className="about-bike" alt="" />
                <img src={Google} className="about-warehouse" alt="" />
                <img src={Jimmy} className="about-core-values" alt="" />
                <img src={Facebook} className="about-ladies" alt="" />
            </div>
        </div>
    )
}

export default Images;