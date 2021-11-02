import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/Kitting.css'
import '../../styles/animate.css';

const Hero = () => {
    return (
        <div className="hero-long-kitting">
            <div className="long-kitting-hero-box container">
                <p className="long-kitting-cta-top animated fadeInDown">ELEVATE YOUR HOLIDAY GIFTING WITH CUSTOM KITS</p>
                <p className="long-kitting-cta-bottom animated fadeInDown">When advertising your brand, it’s more important than ever to stand out from the competition. Custom kits do just that, whether the goal is to entice new business, welcome new employees, thank a client for their loyalty, or even spread some holiday cheer.</p>
                <Link to="/kitting" className="long-kitting-btn">CONTACT US TO GET STARTED</Link>
            </div>
        </div>
    )
}

export default Hero;