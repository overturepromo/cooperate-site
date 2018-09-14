import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ArrowRight from '../../images/home/up_arrow.svg'
import ScrollDown from '../../images/home/scrollDown.png'
import '../../styles/Home.css'
import MobileCta from './MobileCta';
import MyVideo from '../../images/Video.mp4';

import {Link as LinkScroll} from "react-scroll";

class Hero extends Component {
    componentDidMount(){
        document.getElementById('myVideo').play();
    }
    render(){    
        return (
            <div style={{width: '100vw', height: '90vh', overflowX: 'hidden'}}>
                <video style={{width: '100%', height: '100%', objectFit: 'cover'}} autoPlay muted loop id="myVideo">
                    <source src={MyVideo} type="video/mp4" />
                </video>
                <div className="cta-home container">
                    <p className="home-cta-top">We're An Award Winning Promotional Product Agency That</p>
                    <p className="home-cta-middle">CREATES AWESOMENESS</p>
                    <Link to="/contact">
                        <p className="home-cta-bottom">Ask us how 
                            <span><img src={ArrowRight} style={{marginLeft: '10px'}} alt="arrow" /></span>
                        </p>
                    </Link>
                    <div className='scroll-down'>
                        <LinkScroll to="wordsOverlay" smooth={true} duration={500} >
                            <img src={ScrollDown} alt="scroll-down" />
                        </LinkScroll>
                    </div>  
                </div>
                <MobileCta />
            </div>
        )
    }
}

export default Hero;


