import React from 'react';
import { Parallax } from 'react-parallax';
import HowImage from '../../images/about/howwework.jpg';
import Computer from '../../images/about/computer_screen.png';
import Service from '../../images/about/customerservice_grahic.svg';
import Mapy from '../../images/about/map.gif';

const Work = () => {
    return (
        <div style={{marginTop: '50px'}}>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 company-stores">
                        <h4 className="about-blue-words">Company stores.</h4>
                        <p className="basic">When it comes to e-commerce, templates don’t work. We build tailored, elegant and easy-to-use company stores that are regularly refreshed with new and unique products. Our in-house team of six full-time web developers design, develop and manage over 100 different company stores that are completely customized to each client’s specific requirements.</p>
                    </div>
                    <div className="col-md-5">
                        <img src={Computer} alt="computer" style={{width: '100%', padding: '20px'}} />
                    </div>
                </div>
            </div>
            <Parallax bgImage={HowImage} strength={700}>
            <div style={{ height: 500 }}>
                <div className="how-box">
                    <h4 className="about-orange-words">How we work.</h4>
                    <p className="basic">We’re always streamlining processes and improving quality by leveraging our full suite of in-house services, including domestic and international sourcing of promotional products, graphic design, web development, on-site screen printing and embroidery, 140,000 square feet of warehouse space, kit assembly, packing, and domestic and international shipping.</p>
                </div>
            </div>
            </Parallax>
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <img src={Service} className="service-image" alt="service" />
                    </div>
                    <div className="col-md-8 service-div">
                        <h4 className="green-history">We obsess about customer service.</h4>
                        <p className="basic">We invest in technology to improve our responsiveness. We respond quickly. We work proactively to send you new product ideas. We learn your business and are fierce protectors of your brand. We're resourceful problem-solvers and honest about things we can't do.</p>
                    </div>
                </div>
            </div>
            <Parallax bgImage={Mapy} strength={500}>
            <div style={{ height: 500 }}>
                <div className="where-box">
                    <h4 className="about-orange-words">Where we work.</h4>
                    <h4 className="thin-orange-words">(Hint: everywhere.)</h4>
                    <p className="basic">The magic starts in our offices in Chicago and Dallas, and our partner’s office in Montreal, then spreads to all the places around the world that you need to reach. To help reduce your costs, we create import sourcing programs for large quantity and custom orders, and we regularly import from our accredited factories overseas. International shipments leave our warehouse daily.</p>
                </div>
            </div>
            </Parallax>
        </div>
    )
}

export default Work