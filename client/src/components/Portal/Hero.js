import React from 'react';
import '../../styles/Diversity.css'
import '../../styles/animate.css';

const Hero = () => {
    return (
        <div className="hero-diversity" style={{height: '350px', backgroundPositionY: '50%'}}>
            <div className="diversity-hero-box container" style={portalStyle}>
                <p className="diversity-cta-top animated fadeInDown">DIVERSE SUPPLIER PORTAL</p>
            </div>
        </div>
    )
}


const portalStyle = {
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: '100%',
    paddingRight: '0'
}



export default Hero;