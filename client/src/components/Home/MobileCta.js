import React from 'react';
import { Link } from 'react-router-dom'
import ArrowRight from '../../images/home/up_arrow.svg'
import HeroText from '../../images/home/herotext.svg';
import '../../styles/Home.css'


const MobileCta = () => {
    return (
            <div className="cta-mobile container-fluid">
            <img src={HeroText} className="hero-text" alt="overture-hero" />
                <p className="home-cta-top">Widley creative Promotional marketing programs exacting supply chain control.</p>
                <Link to="/contact">
                    <p className="home-cta-bottom">Ask us how 
                        <span><img src={ArrowRight} style={{marginLeft: '10px'}} alt="arrow" /></span>
                    </p>
                </Link>
            </div>
    )
}


export default MobileCta;