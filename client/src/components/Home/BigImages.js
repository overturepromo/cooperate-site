import React, { Component } from 'react';
import Modal from './Modal';
import Uber from '../../images/home/uber_img.jpg';
import Speaker from '../../images/home/rocknroll_img.jpg';
import Nbc from '../../images/home/nbc_img.jpg';
import Cubs from '../../images/home/cubs_img.jpg';

class BigImages extends Component {
    
    state = {
        modalImage: '',
        modalOpen: false
    }

    handleClick = (image) => {
        document.body.style.overflow = 'hidden'
        this.setState({
            modalImage: image,
            modalOpen: true
        })
    }

    closeModal = () => {
        document.body.style.overflow = 'auto'
        this.setState({modalOpen: false})
    }

    render() {
        if(this.state.modalOpen){
            return <Modal pickedImage={this.state.modalImage} close={this.closeModal} />
        }

        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-6">
                        <img src={Uber} className="uber" alt="uber" onClick={() => this.handleClick(Uber)} />
                        <div className="nbc-box">
                            <img src={Nbc} className="nbc" alt="nbc" onClick={() => this.handleClick(Nbc)} />
                        </div>                    
                    </div>
                    <div className="col-md-6">
                        <img src={Speaker} className="speaker" alt="speaker" onClick={() => this.handleClick(Speaker)} />
                        <div className="cubs-box">
                            <img src={Cubs}  className="cubs" alt="cubs" onClick={() => this.handleClick(Cubs)} />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default BigImages;

