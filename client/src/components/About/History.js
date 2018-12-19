import React, { Component } from 'react';
import Modal from 'react-modal';

import Thumbnail from '../../images/about/thumbnail.png';

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
            <div className="container-fluid">
                <span className="big-words-about">we're unconventional.</span>
                <div className="container">
                    <div className="row">
                        <div className="col-md-7 history-box">
                            <span className="green-history">What we do.</span>
                            <p className="history-paragraph">Creating effective promotional programs covers a lot of ground. It starts with your dedicated account management team. Here’s what you can ask them to do for you:</p>
                            <div className="what-we-do">
                                <div className="we-do-left">
                                    <ul>
                                        <li className="we-do-green">International sourcing</li>
                                        <li className="we-do-green">Brand activation</li>
                                        <li className="we-do-green">Licensed merchandise</li>
                                        <li className="we-do-green">Dealer networks</li>
                                        <li className="we-do-green">Webstores/ecommerce</li>
                                        <li className="we-do-green">Print collateral</li>
                                        <li className="we-do-green">Employee recognition</li>
                                    </ul>
                                </div>
                                <div className="we-do-right">
                                    <ul>
                                        <li className="we-do-green">Kit assembly</li>
                                        <li className="we-do-green">Tradeshow giveaways</li>
                                        <li className="we-do-green">Incentives</li>
                                        <li className="we-do-green">Retail programs</li>
                                        <li className="we-do-green">Graphic design</li>
                                        <li className="we-do-green">International shipping, logistics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 about-video image-scale" onClick={this.openModal} >
                            <img src={Thumbnail} alt="play-button" />
                        </div>
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