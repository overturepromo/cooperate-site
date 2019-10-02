import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import ArrowRight from '../../images/home/up_arrow.svg'
import ScrollDown from '../../images/home/scrollDown.png'
import '../../styles/Home.css'
import MobileCta from './MobileCta';
import MyVideo from '../../images/Video.mp4';
import HeroText from '../../images/home/herotext.svg';
import BackupImage from '../../images/home/temp_hero.jpg';

import {Link as LinkScroll} from "react-scroll";

class Hero extends Component {

    state={
        ios: false
    }

    componentWillMount(){
        var iOS = /iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if(iOS){
            this.setState({
                ios: true
            })
        }
    }
    componentDidMount(){
        if(!this.state.ios){
            document.getElementById('myVideo').play();
        }
    }
    
    render(){    
        return (
            <div>
                <div id="video-box">
                {this.state.ios ? <img src={BackupImage} alt="video-failed" style={{width: '102%'}} /> :  
                    <video autoPlay muted loop playsInline id="myVideo">
                        <source src={MyVideo} type="video/mp4" />
                    </video>
                }
                    <div className="cta-home">
                        <div className="container">
                            <img src={HeroText} className="hero-text" alt="overture-hero" />
                            <p className="home-cta-top">Wildly creative promotional marketing programs exacting supply chain control.</p>    
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
                    </div>                    
                </div>
                <MobileCta />
            </div>

        )
    }
}

export default Hero;


