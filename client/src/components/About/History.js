import React, { Component } from 'react';
import Modal from 'react-modal';

import Thumbnail from '../../images/about/thumbnail.png';
import Check from '../../images/about/checkmark.svg';

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
                                        <li className="we-do-green"><img src={Check} className="checkmark" alt="checkmark" style={{height: '15px'}} /> International sourcing</li>
                                        <li className="we-do-green"><img src={Check} className="checkmark" alt="checkmark" style={{height: '15px'}} /> Brand activation</li>
                                        <li className="we-do-green"><img src={Check} className="checkmark" alt="checkmark" style={{height: '15px'}} /> Licensed merchandise</li>
                                        <li className="we-do-green"><img src={Check} className="checkmark" alt="checkmark" style={{height: '15px'}} /> Dealer networks</li>
                                        <li className="we-do-green"><img src={Check} className="checkmark" alt="checkmark" style={{height: '15px'}} /> Webstores/ecommerce</li>
                                        <li className="we-do-green"><img src={Check} className="checkmark" alt="checkmark" style={{height: '15px'}} /> Print collateral</li>
                                        <li className="we-do-green"><img src={Check} className="checkmark" alt="checkmark" style={{height: '15px'}} /> Employee recognition</li>
                                    </ul>
                                </div>
                                <div className="we-do-right">
                                    <ul>
                                        <li className="we-do-green"><img src={Check} className="checkmark" alt="checkmark" style={{height: '15px'}} /> Kit assembly</li>
                                        <li className="we-do-green"><img src={Check} className="checkmark" alt="checkmark" style={{height: '15px'}} /> Tradeshow giveaways</li>
                                        <li className="we-do-green"><img src={Check} className="checkmark" alt="checkmark" style={{height: '15px'}} /> Incentives</li>
                                        <li className="we-do-green"><img src={Check} className="checkmark" alt="checkmark" style={{height: '15px'}} /> Retail programs</li>
                                        <li className="we-do-green"><img src={Check} className="checkmark" alt="checkmark" style={{height: '15px'}} /> Graphic design</li>
                                        <li className="we-do-green"><img src={Check} className="checkmark" alt="checkmark" style={{height: '15px'}} /> International shipping, logistics</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-md-5 about-video" onClick={this.openModal} >
                            <img src={Thumbnail} style={{width: '100%'}} alt="play-button" />
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