import React from 'react';

import Service from '../../images/about/customerservice_grahic.svg';
import Rock1 from '../../images/about/img1.jpg';
import Rock2 from '../../images/about/img2.jpg';
import Rock3 from '../../images/about/img3.jpg';
import Rock4 from '../../images/about/img4.jpg';

const Rockstars = () => {
    return (
        <div className="rockstars">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={Service} className="service-image" />
                    </div>
                    <div className="col-md-8 service-div">
                        <h4 className="green-history">We obsess about customer service.</h4>
                        <p className="basic">We invest in technology to improve our responsiveness. We respond quickly. We work proactively to send you new product ideas. We learn your business and are fierce protectors of your brand. We're resourceful problem-solvers and honest about things we can't do.</p>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-5">
                        <div className="about-images-one">
                            <img src={Rock2} alt="rocking-two" className="rock-two" />
                            <img src={Rock1} alt="rocking-one" className="rock-one" />
                        </div>
                        <div className="about-images-two">
                            <img src={Rock3} alt="rocking-three" className="rock-three" />
                            <img src={Rock4} alt="rocking-four" className="rock-four" />
                        </div>
                    </div>
                    <div className="col-md-6 women-owned">
                        <h4 className="about-orange-words">Owned by women. Powered by rockstars.</h4>
                        <p className="basic">o	Change copy to: Founded in 2001, Overture began with two women investors, two sales reps and an office manager. The original dream was to create a boutique promotional marketing agency, emphasizing creative and customer service excellence. We realized as we grew that extraordinary customer service requires supply chain control, and we began bringing services in-house. Today, we are a Top 30 promotional products distributor (out of 24,000+ distributors), with 150 employees.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Rockstars;