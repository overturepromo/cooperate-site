import React from 'react';
import '../../styles/Leads.css'

import Tik from '../../images/Leads/TiktokMugMobile@3x.png';
import Coke from '../../images/Leads/CocaColaShirtMobile@3x.png';
import Dash from '../../images/Leads/DashMartIcecreamMobile@3x.png';
import Bank from '../../images/Leads/BankofAmericaMobile@3x.png';
import AA from '../../images/Leads/AAMugMobile@3x.png';

const Images = () => {
    return (
        <div className="container-fluid">
            <div className="leads-images">
                <img src={Tik} className="leads-img tik-image" />
                <img src={Coke} className="leads-img coke-image" />
                <img src={Dash} className="leads-img dash-image" />
                <img src={Bank} className="leads-img bank-image" />
                <img src={AA} className="leads-img aa-image" />
            </div>
        </div>
    )
}

export default Images;