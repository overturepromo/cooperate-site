import React from 'react';
import '../../styles/Diversity.css'
import '../../styles/animate.css';

const Hero = () => {
    return (
        <div className="hero-diversity">
            <div className="diversity-hero-box container">
                <p className="diversity-cta-top animated fadeInDown">DIVERSITY AT OVERTURE</p>
                <p className="diversity-cta-bottom animated fadeInDown">Overture is minority-owned and woman-led. We value different views and perspectives to help us evolve. We work tirelessly to ensure Overture is a diverse, equitable, and inclusive workplace.</p>
                <p className="diversity-cta-bottom animated fadeInDown">
                    <a className="diversity-cta-bottom diverse-link animated fadeInDown" href="https://issuu.com/overturepromotions/docs/overture_diverse_suplier_products" target="blank">Check Out Our Favorite Diverse Supplier Products</a>
                </p>
            </div>
        </div>
    )
}

export default Hero;