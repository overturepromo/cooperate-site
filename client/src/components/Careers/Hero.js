import React from 'react';

import '../../styles/Careers.css'

const Hero = () => {
    return (
        <div className="hero-careers">
            <div className="career-hero-box container">
                <p className="work-cta-top animated fadeInDown">CAREERS</p>
                <div style={{marginBottom: '30px'}}>
                    <a className='careers-button'>HOLD UP!</a>
                </div>
                <p className="careers-cta-bottom animated fadeInDown">Studies have shown that women and people of color are less likely to apply to jobs they don’t meet every single qualification for. At Overture, building a diverse workforce is a high priority and, let’s face it, we don’t want to miss out on someone great over a job requirement!</p>
                <p className="careers-cta-bottom animated fadeInDown"> We encourage you to apply to any role you’re interested in, regardless of whether or not your past experience aligns with every qualification. Who knows? You could be one application away from your dream role!</p>
            </div>
        </div>
    )
}

export default Hero;