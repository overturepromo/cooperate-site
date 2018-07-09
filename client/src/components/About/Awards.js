import React from 'react';
import AwardCard from './AwardCard';

const Awards = () => {
    return (
        <div className="awards-div" style={{marginTop: '100px'}}>
            <div className="awards-title">
                <h2 className="awards-top-title">Awards & accolades</h2>
                <h6 className="awards-bottom-title">We're good at what we do. But don't take our word for it, see what others have to say about us.</h6>
            </div>
            <div className="container">
                <div className="row">
                    <AwardCard title="INC. 5000 FASTEST GROWING COMPANIES IN AMERICA" />
                    <AwardCard title="ERNST AND YOUNG ENTREPRENUER OF THE YEAR FINALIST" />
                    <AwardCard title="QUALITY CERTIFICATION COUNCIL (QCA) DAC MEMBER" />
                    <AwardCard title="FEMALE ENTREPRENUER OF THE YEAR, WBENC" />
                    <AwardCard title="BEST PLACES TO WORK, COUNSLEOR MAGAZINE" />
                    <AwardCard title="TOP 50 DISTRIBUTORS, PROMO MARKETING MAGAZINE" />
                    <AwardCard title="ADVERTISING SPECIALTIES" />
                    <AwardCard title="CHICAGO TRIBUNE'S BEST PLACES TO WORK" />
                    <AwardCard title="DISTRIBUTOR OF DISTINCTION AWARD" />
                </div>
            </div>
        </div>
    )
}

export default Awards;