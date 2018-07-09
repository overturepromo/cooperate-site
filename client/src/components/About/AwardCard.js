import React from 'react';
import Ribbon from '../../images/about/award_icon.svg'

const AwardCard = (props) => {
    return (
        <div className="col-md-4">
        <div className="ribbon-box">
            <img src={Ribbon} className="ribbon" alt="ribbon" />
            <p className="ribbon-paragraph">{props.title}</p>
        </div>
    </div>
    )
}

export default AwardCard