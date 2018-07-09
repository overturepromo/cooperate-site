import React, { Component } from 'react';
import '../styles/Hamburger.css';
import { Link } from 'react-router-dom'

class Hamburger extends Component {
    render(){
        return (
            <div className='whole-burger'>
            <div className="hamburger-div">
                <div className="container">
                    <div className="row">
                        <div className="col-xs-2">
                            <i className="fa fa-times" onClick={() => this.props.noCheese(false)}></i>
                        </div>
                        <div className="col-xs-10">
                            <h4 className="mobile-logo-burger">OVERTURE</h4>
                        </div>
                    </div>
                    <div className="row burger-links">
                        <div className="col-xs-12">
                            <Link to='/' onClick={() => this.props.noCheese(false)} className='burger-link'>Home</Link>
                        </div>
                        <div className="col-xs-12">
                            <Link to='/about' onClick={() => this.props.noCheese(false)} className='burger-link'>About</Link>
                        </div>
                        <div className="col-xs-12">
                            <Link to='/team' onClick={() => this.props.noCheese(false)} className='burger-link'>Team</Link>
                        </div>
                        <div className="col-xs-12">
                            <Link to='/work' onClick={() => this.props.noCheese(false)} className='burger-link'>Work</Link>
                        </div>
                        <div className="col-xs-12">
                            <a href="/" target="blank" onClick={() => this.props.noCheese(false)} className='burger-link'>Catalog</a>
                        </div>
                        <div className="col-xs-12">
                            <Link to='/contact' onClick={() => this.props.noCheese(false)} className='burger-link'>Contact Us</Link>
                        </div>
                        <div className="col-xs-12">
                            <Link to='/careers' onClick={() => this.props.noCheese(false)} className='burger-link'>Careers</Link>
                        </div>
                    </div>
                </div>
            </div>
            <div className='container burger-contact'>
                <div className="row">
                    <div className="col-xs-12 burger-address">
                        <p>595 Lakeview Parkway</p>
                        <p>Vernon Hills, IL 60061</p>
                    </div>
                    <div className="col-xs-12 burger-phone">
                        <p>P. 888.456.9564</p>
                        <p>F. 847.680.0114</p>
                    </div>
                    <div className="col-xs-12" style={{textAlign: 'center'}}>
                        <a href="" target="blank"><i className="fa fa-facebook burger-social"></i></a>
                        <a href="" target="blank"><i className="fa fa-instagram burger-social"></i></a>
                        <a href="" target="blank"><i className="fa fa-twitter burger-social"></i></a>
                        <a href="" target="blank"><i className="fa fa-youtube burger-social"></i></a>
                    </div>
                </div>
            </div>
            </div>
        )
    }
}

export default Hamburger