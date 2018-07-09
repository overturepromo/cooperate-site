import React, { Component } from 'react';
import Modal from 'react-modal';

import VideoButton from '../../images/home/play_icon.png'

class History extends Component {

    state = {
        showModal: false
    };

    componentWillMount() {
        Modal.setAppElement('body');
    }
     
      openModal = () => {
        this.setState({showModal: true});
      }
     
      closeModal = () => {
        this.setState({showModal: false});
      }

    render(){
        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8 history-box">
                        <span className="green-history">Our history</span>
                        <p className="history-paragraph">Established in 2001, Overture has grown from a small two person boutique agency to over 125 employees today and one of the largest promotional product agencies. Overture has experienced tremendous growth and is ranked as one of the Top 30 Distributors by Promotional Marketing as well as one of the Best Places to Work by Counselor Magazine. Overture is a privately-held, certified women-owned business (WBE) that offers thousands of advertising specialties and promotional items from both domestic and internatioal markets. Our management team consists of individuals who have more than 30 years of experience in the promotional products industry.</p>
                    </div>
                    <div className="col-md-4 office-video-box" style={{textAlign: 'center', marginTop: '100px'}} onClick={this.openModal} >
                        <img src={VideoButton} alt="play-button" />
                        <p className="cta-video-text">CHECK OUT OUR OFFICE</p>
                    </div>
                </div>
                <Modal
                isOpen={this.state.showModal}
                onRequestClose={this.closeModal}
                className="video-modal"
                >
                <iframe 
                    title="office" 
                    width="500" 
                    height="281" 
                    src="https://player.vimeo.com/video/142292190?autoplay=1&loop=1&autopause=0" 
                    frameBorder="0" 
                    allowFullScreen>
                </iframe>
            </Modal>
            </div>
        )
    }
}

export default History;