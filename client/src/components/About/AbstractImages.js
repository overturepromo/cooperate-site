import React from 'react';
import '../../styles/About.css'
import Bike from '../../images/about/unconventional_img1.jpg';
import Warehouse from '../../images/about/unconventional_img2.jpg';
import CoreValues from '../../images/about/unconventional_img3.jpg';
import Ladies from '../../images/about/unconventional_img4.jpg';

import '../../styles/About.css'

const AbstractImages = () => {
    return (
        <div>
            <div className="abstract-div">
                <span className="big-words-about">we're unconventional.</span>
            </div>
            <div style={{display: 'flex'}} className="desktop-abstract">
                <div style={{width: '23%', paddingRight: '20px'}}>
                <img src={Bike} className="about-bike" alt="" />
                </div>
                <div style={{width: '24%', paddingRight: '20px'}}> 
                <img src={Warehouse} className="about-warehouse" alt="" />
                </div>
                <div style={{width: '34%', paddingRight: '20px'}}>
                <img src={CoreValues} className="about-core-values" alt="" />
                </div>
                <div style={{width: '19%'}}>
                <img src={Ladies} className="about-ladies" alt="" />
                </div>
            </div>
            <div className="mobile-abstract">
                <img src={Bike} className="about-bike" alt="" style={{width: '50%', marginTop: '50px'}} />
                <img src={Warehouse} className="about-warehouse" alt="" style={{width: '50%'}} />
                <img src={CoreValues} className="about-core-values" alt="" style={{width: '50%'}} />
                <img src={Ladies} className="about-ladies" alt="" style={{width: '50%'}} />
            </div>
        </div>
    )
}

export default AbstractImages;

