import React from 'react';
import { Link } from 'react-router-dom'
import ArrowRight from '../../images/home/up_arrow.svg'
import ScrollDown from '../../images/home/scrollDown.png'
import '../../styles/Home.css'
import MobileCta from './MobileCta';


const Hero = () => {
    return (
        <div>
        <div  className="hero">
            <div className="cta-home container">
                <p className="home-cta-top">We're An Award Winning Promotional Product Agency That</p>
                <p className="home-cta-middle">CREATES AWESOMENESS</p>
                <Link to="/contact">
                    <p className="home-cta-bottom">Ask us how 
                        <span><img src={ArrowRight} style={{marginLeft: '10px'}} alt="arrow" /></span>
                    </p>
                </Link>
                <div className='scroll-down' >
                    <img src={ScrollDown} alt="scroll-down" />
                </div>   
            </div>
        </div>
        <MobileCta />
        </div>
    )
}

function scrollWin() {
    window.scrollTo(0, 800);
}

export default Hero;