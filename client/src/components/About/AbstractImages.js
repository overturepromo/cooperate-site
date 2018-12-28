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
            <div style={{display: 'flex', marginTop: '50px'}} className="desktop-abstract">
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
                <img src={Bike} className="about-bike" alt="" />
                <img src={Warehouse} className="about-warehouse" alt="" />
                <img src={CoreValues} className="about-core-values" alt="" />
                <img src={Ladies} className="about-ladies" alt="" />
            </div>
        </div>
    )
}

export default AbstractImages;

