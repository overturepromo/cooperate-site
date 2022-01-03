import React from 'react';
import '../../styles/Sustainability.css'
import '../../styles/animate.css';

const Hero = () => {
    return (
        <div className="hero-sus">
            <div className="sus-hero-box container">
                <p className="sus-cta-top animated fadeInDown">We Believe in Sustainable Business Practices</p>
                <p className="sus-cta-bottom animated fadeInDown">Our future depends on how we live in the present. Overture is committed to year-over-year improvement in regards to ethical, sustainable, and eco-responsible business practices. We continually strive to minimize our environmental impact.</p>
                <p className="diversity-cta-bottom animated fadeInDown">
                    <a className="diversity-cta-bottom diverse-link animated fadeInDown" href="https://issuu.com/overturepromotions/docs/overture_sustainability_deck" target="blank">Check Out Our Favorite Sustainable Products</a>
                </p>
            </div>
        </div>
    )
}

export default Hero;