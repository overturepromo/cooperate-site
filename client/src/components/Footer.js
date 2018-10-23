import React, { Component } from 'react';
import Map from '../images/home/map.svg';
import { Link } from 'react-router-dom';
import Dallas from '../images/home/love-dallas.svg';
import Women from '../images/home/women-owned.svg';

import '../styles/Footer.css'

class Footer extends Component {
    render(){
        return (
            <div className="container footer-container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="address">
                            <h4 className="overture" >Overture, LLC</h4>
                            <h5 className="info">595 Lakeview Parkway</h5>
                            <h5 className="infoBreak">Vernon Hills, IL 60061</h5>
                        </div>
                        <div className="phone">
                            <h5 className="info">P. 888.756.9564</h5>
                            <h5 className="info">F. 847.680.0114</h5>
                        </div>
                    </div>
                    <div className="col-md-3 map-divy">
                        <img src={Map} alt="map" /><br />
                        <img src={Dallas} alt="Love-dallas" style={{margin: '30px 0 15px 0'}} />
                        <p className="map-paragraph">Nationwide network of 200 warehouses + Canadian partner</p>
                    </div>
                    <div className="col-md-5 footer-right-nav">
                        <div className="footer-nav-links" style={{display: 'flex', justifyContent: "flex-end"}}>
                            <Link to="/contact" className="footer-link">
                                <h5 className="footer-link">Contact Us</h5>
                            </Link>
                            <Link to="/privacy" className="footer-link">
                                <h5 className="footer-link">Privacy Policy</h5>
                            </Link>
                            <Link to="/careers" className="footer-link">
                                <h5 className="footer-link">Careers</h5>
                            </Link>
                        </div>
                        <div>
                            <img src={Women} alt="women-owned" style={{marginTop: '25px'}} />
                        </div>
                        <div className="socials" style={{padding: '40px 0'}}>
                            <a href="https://www.facebook.com/OverturePromotions/" target="blank"><i className="fa fa-facebook" style={footerIcons}></i></a>
                            <a href="https://twitter.com/overturepromo?lang=en" target="blank"><i className="fa fa-twitter" style={footerIcons}></i></a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

//This is the font awesome only being able to take on one css so inline are necessary

const footerIcons = {
    color: "#ef7521",
    fontSize: "2.2em",
    marginLeft: "10px"
}

export default Footer;