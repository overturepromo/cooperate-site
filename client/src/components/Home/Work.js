import React from 'react';
import { Link } from 'react-router-dom'
import {Element} from "react-scroll";
import ArrowRight from '../../images/home/up_arrow.svg'
import '../../styles/Home.css'

const Work = () => {
    return (
        <div>
            <div className="words-overlay">
                <Element className='big-words' name="wordsOverlay">promo experts.</Element>
                <div className="container green-words-box">
                    <span className="small-green-words">What we do</span>
                </div>
            </div>
            <div className='container'>
                <div className="row">
                    <div className="col-md-9">
                        <p className="home-descriptions">Whatever you call it – swag, branded merchandise or promo. We’re your award-winning, proactive partner in creating brand-building promotions, from giveaways to webstores to national or global programs.</p>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                    <Link to="/work">
                        <p className="arrow">See our work 
                            <span>
                                <img src={ArrowRight} style={{marginLeft: '5px', marginBottom: '2px'}} alt="arrow" />
                            </span>
                        </p>
                    </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Work
