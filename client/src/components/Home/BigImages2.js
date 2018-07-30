import React, { Component } from 'react';
import Modal from 'react-modal';
import Uber from '../../images/home/uber_img.jpg';
import Speaker from '../../images/home/rocknroll_img.jpg';
import Nbc from '../../images/home/nbc_img.jpg';
import Cubs from '../../images/home/cubs_img.jpg';
import UberBig from '../../images/home/uber_img_lg.jpg';
import SpeakerBig from '../../images/home/rocknroll_img_lg.jpg';
import NbcBig from '../../images/home/nbc_img_lg.jpg';
import CubsBig from '../../images/home/cubs_img_lg.jpg';
import Close from '../../images/home/close.svg'

import '../../styles/Home.css'

class BigImages extends Component {
    
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

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <img src={Uber} className="uber" alt="uber" onClick={() => this.openModal(0)} />
                        <div className="nbc-box">
                            <img src={Nbc} className="nbc" alt="nbc" onClick={() => this.openModal(1)} />
                        </div>                    
                    </div>
                    <div className="col-md-6">
                        <img src={Speaker} className="speaker" alt="speaker" onClick={() => this.openModal(2)} />
                        <div className="cubs-box">
                            <img src={Cubs}  className="cubs" alt="cubs" onClick={() => this.openModal(3)} />
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={this.state.showModal[0]}
                    onRequestClose={this.closeModal}
                    className="home-modals">
                        <div style={{width: '100%'}}>
                            <img src={Close} alt="" className="close-img" onClick={this.closeModal} /><br />
                            <img src={UberBig} className="uber-open" alt="uber" />
                        </div>
                        
                </Modal>
                <Modal
                    isOpen={this.state.showModal[1]}
                    onRequestClose={this.closeModal}
                    className="home-modals">
                        <div style={{width: '100%'}}>
                            <img src={Close} alt="" className="close-img" onClick={this.closeModal} /><br />
                            <img src={NbcBig} className="nbc-open" alt="nbc" />
                        </div>
                </Modal>
                <Modal
                    isOpen={this.state.showModal[2]}
                    onRequestClose={this.closeModal}
                    className="home-modals">
                        <div style={{width: '100%'}}>
                            <img src={Close} alt="" className="close-img" onClick={this.closeModal} /><br />
                            <img src={SpeakerBig} className="speaker-open" alt="speaker" />
                        </div>
                </Modal>
                <Modal
                    isOpen={this.state.showModal[3]}
                    onRequestClose={this.closeModal}
                    className="home-modals">
                        <div style={{width: '100%'}}>
                            <img src={Close} alt="" className="close-img" onClick={this.closeModal} /><br />
                            <img src={CubsBig}  className="cubs-open" alt="cubs" />
                        </div>
                </Modal>
            </div>
        )
    }
}

export default BigImages;

