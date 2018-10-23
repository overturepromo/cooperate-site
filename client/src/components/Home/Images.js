import React from 'react';
import Facebook from '../../images/home/facebook_socks.jpg';
import Google from '../../images/home/google.jpg';
import Jimmy from '../../images/home/jimmyfallon.jpg';
import Fiji from '../../images/home/fiji.jpg';

import '../../styles/Home.css';

const Images = () => {
    return (
        <div style={{margin: '20px 0'}}>
            <img className="home-companies" src={Facebook} alt="facebook" />
            <img className="home-companies" src={Google} alt="google" />
            <img className="home-companies" src={Jimmy} alt="jimmy" />
            <img className="home-companies" src={Fiji} alt="fiji" />
        </div>
    )
}

export default Images;