import React, { Component } from 'react';
import Modal from 'react-modal';

import '../../styles/About.css'
import AboutHats from '../../images/about/custprograms_img1.jpg';
import AboutCorna from '../../images/about/custprograms_img2.jpg';
import AboutMusic from '../../images/about/custprograms_img3.jpg';

import BrandActivation from './Modals/BrandActivation'
import LicensedMerchandise from './Modals/LicensedMerchandis';
import DealerNetworks from './Modals/DealerNetworks';
import OverseasImporting from './Modals/OverseasImporting';
import EStores from './Modals/EStores';
import PrintCollateral from './Modals/PrintCollateral';
import EmployeeRecognition from './Modals/EmployeeRecognition';
import RetailPrograms from './Modals/RetailPrograms';
import GraphicDesign from './Modals/GraphicDesign';
import ServiceAward from './Modals/ServiceAward';


class Programs extends Component {

    state = {
        showModal: [false]
    };

    componentWillMount() {
        Modal.setAppElement('body');
    }
     
      openModal = (index) => {
        const arr = [...this.state.showModal]
        arr[index] = true
        this.setState({showModal: arr});
      }
     
      closeModal = (index) => {
        this.setState({showModal: false});
      }

    render(){
        return (
            <div className="container-fluid" style={{marginTop: '50px'}}>
                <div className="row">
                    <div className="col-md-5 strange-images">
                        <img src={AboutHats} className="about-hats" alt="" />
                        <img src={AboutCorna} className="about-corona" alt="" />
                        <img src={AboutMusic} className="about-music" alt="about-music" />
                    </div>
                    <div className="col-md-7" style={{marginTop: '100px'}}>
                        <h4 className="programs-orange">Customized programs</h4>
                        <p className="programs-paragraph">Let us help you create an effective promotional program that speaks to your brand name, appeals to your demographics, is comprised of high-quality products, and most importantly, is effective. In addition to promotional product programs, we provide:</p>
                        <div className="row">
                            <div className="col-md-6 about-program-links" onClick={() => this.openModal(0)}>
                                Brand Activation
                            </div>
                            <div className="col-md-6 about-program-links" onClick={() => this.openModal(1)}>
                                Licensed Merchandise
                            </div>
                            <div className="col-md-6 about-program-links" onClick={() => this.openModal(2)}>
                                Dealer Networks
                            </div>
                            <div className="col-md-6 about-program-links" onClick={() => this.openModal(3)}>
                                Overseas Importing
                            </div>
                            <div className="col-md-6 about-program-links" onClick={() => this.openModal(4)}>
                                E-Stores
                            </div>
                            <div className="col-md-6 about-program-links" onClick={() => this.openModal(5)}>
                                Print Collateral
                            </div>
                            <div className="col-md-6 about-program-links" onClick={() => this.openModal(6)}>
                                Employee Recognition Programs
                            </div>
                            <div className="col-md-6 about-program-links" onClick={() => this.openModal(7)}>
                                Retail Programs
                            </div>
                            <div className="col-md-6 about-program-links" onClick={() => this.openModal(8)}>
                                Graphic Design
                            </div>
                            <div className="col-md-6 about-program-links" onClick={() => this.openModal(9)}>
                                Service Award Programs
                            </div>
                        </div>
                    </div>
                </div>
                <Modal isOpen={this.state.showModal[0]}onRequestClose={this.closeModal}><BrandActivation /></Modal>
                <Modal isOpen={this.state.showModal[1]}onRequestClose={this.closeModal}><LicensedMerchandise /></Modal>
                <Modal isOpen={this.state.showModal[2]}onRequestClose={this.closeModal}><DealerNetworks /></Modal>
                <Modal isOpen={this.state.showModal[3]}onRequestClose={this.closeModal}><OverseasImporting /></Modal>
                <Modal isOpen={this.state.showModal[4]}onRequestClose={this.closeModal}><EStores /></Modal>
                <Modal isOpen={this.state.showModal[5]}onRequestClose={this.closeModal}><PrintCollateral /></Modal>
                <Modal isOpen={this.state.showModal[6]}onRequestClose={this.closeModal}><EmployeeRecognition /></Modal>
                <Modal isOpen={this.state.showModal[7]}onRequestClose={this.closeModal}><RetailPrograms /></Modal>
                <Modal isOpen={this.state.showModal[8]}onRequestClose={this.closeModal}><GraphicDesign /></Modal>
                <Modal isOpen={this.state.showModal[9]}onRequestClose={this.closeModal}><ServiceAward /></Modal>
            </div>
        )
    }
}

export default Programs;