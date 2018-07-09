import React from 'react';
import '../../styles/Home.css'
import EspnLogo from '../../images/logos/espn_logo.svg';
import NbcLogo from '../../images/logos/nbc_logo.svg';
import NielsenLogo from '../../images/logos/nielsen_logo.svg';
import DiscoverLogo from '../../images/logos/discover_logo.svg';
import BlueLogo from '../../images/logos/bcbs_logo.svg';
import SubwayLogo from '../../images/logos/subway_logo.svg';
import LexusLogo from '../../images/logos/lexus_logo.svg';
import NbaLogo from '../../images/logos/nba_logo.svg';
import ExonLogo from '../../images/logos/exxonmobil_logo.svg';
import JJlogo from '../../images/logos/johnson_logo.svg'

const Clients = () => {
    return (
        <div className="clients">
            <div className="words-overlay-two">
                <span className="big-clients">our clients</span>
                <div className="container small-blue-words">
                    <span className="small-clients">Our awesome clients</span>
                    <p className="home-descriptions">We're proud to work with some of the best companies in the world.</p>
                </div>    
            </div>
            <div className="container-fluid">
                <div className="row logos-top">
                    <div className="col-md-2 col-xs-6 col-md-offset-1 clients-logos"><img src={EspnLogo} alt="client-logo" /></div>
                    <div className="col-md-2 col-xs-6 clients-logos"><img src={NbcLogo} alt="client-logo" /></div>
                    <div className="col-md-2 col-xs-6 clients-logos"><img src={NielsenLogo} alt="client-logo" /></div>
                    <div className="col-md-2 col-xs-6 clients-logos"><img src={DiscoverLogo} alt="client-logo" /></div>
                    <div className="col-md-2 col-xs-6 clients-logos"><img src={BlueLogo} alt="client-logo" /></div>
                    <div className="col-md-2 col-xs-6 col-md-offset-1 clients-logos"><img src={SubwayLogo} alt="client-logo" /></div>
                    <div className="col-md-2 col-xs-6 clients-logos"><img src={LexusLogo} alt="client-logo" /></div>
                    <div className="col-md-2 col-xs-6 clients-logos"><img src={NbaLogo} alt="client-logo" /></div>
                    <div className="col-md-2 col-xs-6 clients-logos"><img src={ExonLogo} alt="client-logo" /></div>
                    <div className="col-md-2 col-xs-6 clients-logos"><img src={JJlogo} alt="client-logo" /></div>
                </div>
            </div>
        </div>
    )
}

export default Clients;