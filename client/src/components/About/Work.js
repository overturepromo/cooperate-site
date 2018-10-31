import React from 'react';

import Computer from '../../images/about/computer_screen.png'

const Work = () => {
    return (
        <div>
            <div className="how-we-work">
                <div className="how-box">
                    <h4 className="about-orange-words">How we Work.</h4>
                    <p className="basic">We're always streamlining processes and improving quality by leveraging out full suite of in-house services, including domestic and international sourcing of promotional products, graphic design, web devlopment, on-site screen printing and embroidery, 100,000 square feet of warehouse space, kit assembly, packing, and domestic and international shipping.</p>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-md-7 company-stores">
                        <h4 className="green-history">Company Stores</h4>
                        <p className="basic">We create elegant, easy to use, leading edge webstores which give our customers and easy-to-use platform for ordering branded merchandise, with marketing support and detailed reporting.</p>
                    </div>
                    <div className="col-md-5">
                        <img src={Computer} style={{width: '100%'}} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work