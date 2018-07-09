import React from 'react';
import { Link } from 'react-router-dom'
import ArrowRight from '../../images/home/up_arrow.svg'
import '../../styles/Home.css'


const MobileCta = () => {
    return (
            <div className="cta-mobile container-fluid">
                <p className="home-cta-top">We're An Award Winning Promotional Product Agency That</p>
                <p className="home-cta-middle">CREATES AWESOMENESS</p>
                <Link to="/contact">
                    <p className="home-cta-bottom">Ask us how 
                        <span><img src={ArrowRight} style={{marginLeft: '10px'}} alt="arrow" /></span>
                    </p>
                </Link>
            </div>
    )
}


export default MobileCta;