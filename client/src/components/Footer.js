import React, { Component } from 'react';
import Map from '../images/home/map.svg';
import { Link } from 'react-router-dom'

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
                    <div className="col-md-3">
                        <img src={Map} alt="map" />
                        <p className="map-paragraph">Headquarted in Chicago with over 200 warehouses nationwide</p>
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
                        <div className="socials" style={{padding: '40px 0'}}>
                            <a href="" target="blank"><i className="fa fa-facebook" style={footerIcons}></i></a>
                            <a href="" target="blank"><i className="fa fa-instagram" style={footerIcons}></i></a>
                            <a href="" target="blank"><i className="fa fa-twitter" style={footerIcons}></i></a>
                            <a href="" target="blank"><i className="fa fa-youtube" style={footerIcons}></i></a>
                        </div>
                        <h5>&copy; 2017 Overture, LLC</h5>
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
    marginLeft: "35px"
}

export default Footer;