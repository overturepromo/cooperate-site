import React from 'react';
import {Link as LinkScroll} from "react-scroll";
import ScrollDown from '../../images/home/scrollDown.png'
import '../../styles/Work.css'

const Hero = () => {
    return (
        <div className="hero-work">
            <div className="work-hero-box container">
                <p className="work-cta-top animated fadeInDown">OUR WORK</p>
                <p className="work-cta-bottom animated fadeInDown">We work hard to deliver wildly creative and effective promotional products and programs. To be a proactive and responsive partner. To keep customers so happy that they keep us. We love what we do, and its show!</p>
            </div>
            <div className='scroll-down-work'>
                <LinkScroll to="imageGrid" smooth={true} duration={500} >
                    <img src={ScrollDown} alt="scroll-down" />
                </LinkScroll>
            </div> 
        </div>
    )
}


export default Hero;