import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Modal from 'react-modal';
import '../../styles/Home.css'
import ArrowRight from '../../images/home/up_arrow.svg'
import VideoButton from '../../images/home/play_icon.png'
import ImageGrid from '../../images/home/Imagegrid.jpg'


class Video extends Component {

    componentWillMount() {
        Modal.setAppElement('body');
    }

    state = {
        showModal: false
    };
     
      openModal = () => {
        this.setState({showModal: true});
      }
     
      closeModal = () => {
        this.setState({showModal: false});
      }

    render(){
        return (
            <div style={{overflow: 'hidden'}}>
            <span className="big-words-video">we're unconventional.</span>
            <div className="container video-container">
                    <div className="row">
                        <div className="col-md-8">
                            <span className="small-words-video">Who we are</span>
                            <p className="home-descriptions">
                                We believe in providing high quality and creative promotional products. We believe in efficent and cost-effective programs. We believe in stellar customer service and having fun. That's Overture.
                            </p>
                            <Link to="/about">
                                <p className="arrow">About Us 
                                    <span>
                                        <img src={ArrowRight} style={{marginLeft: '5px', marginBottom: '2px'}} alt="arrow" />
                                    </span>
                                </p>
                            </Link>
                        </div>
                        <div className="col-md-4 office-video-box" style={{textAlign: 'center', marginTop: '20px'}} onClick={this.openModal} >
                            <img src={VideoButton} alt="play-button" />
                            <p className="cta-video-text">CHECK OUT OUR OFFICE</p>
                        </div>
                    </div>
            </div>
            <div>
                <img src={ImageGrid} className="image-grid" alt="grid" />
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

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.8)';

export default Video