import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Hamburger from './Hamburger'
import '../styles/Header.css'
import Logo from '../images/home/overture_logo.svg'

class Header extends Component{

    state = {
        hamburger: false
    }

    handleClick = (boolean) => {
        console.log(boolean)
        this.setState({hamburger: boolean})
    }

    render(){
        
        if(this.state.hamburger) return <Hamburger noCheese={this.handleClick} />

        return (
            <div className="headers-div">
                <div className="container header-desktop">
                    <div className="row">
                        <div className="col-md-5">
                            <Link to="/"><img src={Logo} style={{width: '234px', marginTop: '5px'}} alt="main-logo" /></Link>
                        </div>
                        <div className="col-md-7">
                            <nav>
                                <Link className="nav-links" to="/">HOME</Link>
                                <Link className="nav-links" to="/about">ABOUT</Link>
                                <Link className="nav-links" to="/team">TEAM</Link>
                                <Link className="nav-links" to="/work">WORK</Link>
                                <a href="http://catalog.overturepromo.com/" target="blank" className="nav-links">CATALOG</a>
                                <Link className="contact-button" to="/contact">CONTACT US</Link>
                            </nav>
                        </div>
                    </div>
                </div>
                <div className="container header-mobile">
                    <div className="row">
                        <div className="col-xs-2">
                            <i className="fa fa-bars" onClick={() => this.handleClick(true)}></i>
                        </div>
                        <div className="col-xs-10">
                            <h4 className="mobile-logo">OVERTURE</h4>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


export default Header;
