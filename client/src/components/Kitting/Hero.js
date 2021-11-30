import React from 'react';
import { Link } from 'react-router-dom'
import '../../styles/Kitting.css'
import '../../styles/animate.css';

const Hero = () => {
    return (
        <div className="hero-long-kitting">
            <div className="long-kitting-hero-box container">
                <p className="long-kitting-cta-top animated fadeInDown">REQUEST A CUSTOM KIT</p>
                <p className="long-kitting-cta-bottom animated fadeInDown">We are kit ideation experts, with broad experience creating custom-made kits that are tailored to fit each client’s individual goals. Every kit is carefully curated by our promotional product experts, delectably designed by our creative gurus, and perfectly packed, down to the smallest detail, by our in-house production teams. All we need to get started is YOU!</p>
                <Link to="/longkitting" className="long-kitting-btn">LEARN MORE ABOUT KITTING</Link>
            </div>
        </div>
    )
}

export default Hero;