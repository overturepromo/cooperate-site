import React from 'react';
import '../../styles/Diversity.css'
import '../../styles/animate.css';
import OrangeButterfly from '../../images/diversity/orange_butterfly.svg'
import LimeButterfly from '../../images/diversity/lime_butterfly.svg';
import GreenButterfly from '../../images/diversity/green_butterfly.svg'
import BlueButterfly from '../../images/diversity/blue_butterfly.svg'

const Together = () => {
    return (
        <div className="together-diversity">
            <div className="container">
                <h1 className="diversity-big" style={{marginTop: '25px'}}>together</h1>
                <h4 className="diversity-blue">Walking the Talk</h4>
                <div className="butterfly-div-top">
                     <img src={OrangeButterfly} className="butterfly o-b" />
                     <div>
                        <p className="basic">Our target for diversity hiring is that our workforce reflects our community, and that we ensure there is no bias in our recruiting and hiring processes. Lake County is 60% white and 40% black/Hispanic/other. As of July 1, 2021, Overture’s workforce is:</p>
                        <ul className="basic butterfly-margin">
                            <li>60% women, 40% men</li>
                            <li>62% white, 38% underrepresented minorities</li>
                        </ul>
                     </div>
                </div>
                <div className="butterfly-div-top">
                    <img src={LimeButterfly} className="butterfly l-b" />
                    <div>
                        <p className="basic">All people and process managers at Overture have participated in Diversity, Equity, and Inclusion training. Out of that training, we are implementing the following suggestions:</p>
                        <ul className="basic butterfly-margin">
                            <li>An Overture job-shadowing program, to help employees build a more in-depth understanding of how the building works, and what their colleagues do. It will also build bridges between front-of-house and operations staff.</li>
                            <li>An anonymous suggestion box, to allow employees to give feedback and share ideas without attribution. </li>
                        </ul>
                    </div>
                </div>
                <div className="butterfly-div">
                    <img src={BlueButterfly} className="butterfly b-b" />
                    <p className="basic">We assigned two gender-neutral restrooms at our headquarters building.</p>
                </div>
                <div className="butterfly-div">
                    <img src={OrangeButterfly} className="butterfly o-b" />
                    <p className="basic">We implemented diversity policies for our marketing collateral.</p>
                </div>
                <div className="butterfly-div">
                    <img src={GreenButterfly} className="butterfly g-b" />
                    <p className="basic">We are creating an Overture Supplier Diversity Portal, to give our sales and operations teams easy access to diverse suppliers, so we can increase our Tier Two spend. </p>
                </div>
                <div className="butterfly-div">
                    <img src={BlueButterfly} className="butterfly b-b" />
                    <p className="basic">We set up customized workstations for our special needs employees, with access to onsite coaching and expanded training. </p>
                </div>
                <div className="butterfly-div">
                    <img src={LimeButterfly} className="butterfly l-b" />
                    <p className="basic">We have a hiring and training program for disabled veterans with Chicago’s Captain James A. Lovell Federal Health Care Center, which provides health care for veterans, active duty military and their families, and military retirees. </p>
                </div>
                <div className="butterfly-div">
                    <img src={OrangeButterfly} className="butterfly o-b" />
                    <p className="basic">We are creating DEI resources for employees, including lists of books, podcasts, and links to articles. DIAC volunteers are reading and listening, and will post reviews on our internal Facebook Workplace site.</p>
                </div>
            </div>
        </div>
    )
}

export default Together;