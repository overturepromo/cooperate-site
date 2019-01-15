import React, { Component } from 'react';
import Modal from 'react-modal';
import '../../styles/Home.css'
import PlayButton from '../../images/home/play.svg';
import ImageGrid from '../../images/home/Imagegrid.jpg'
import Tweet from '../../images/home/twitter.png';


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
                            <span className="small-blue-words">Who we are.</span>
                            <img src={Tweet} className="tweet" alt="tweet" />
                        </div>
                        <div className="col-md-4 office-video-box" onClick={this.openModal} >
                            <img src={PlayButton} alt="play-button" />
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
            <div style={{width: '100%'}}>
            <iframe
                className="iframe-video" 
                title="office" 
                width="500" 
                height="281" 
                src="https://player.vimeo.com/video/142292190?autoplay=1&loop=1&autopause=0" 
                frameBorder="0" 
                allowFullScreen>
            </iframe>
            </div>
            </Modal>
            </div>
        )
    }
}


// var size = {
//     width: window.innerWidth || document.body.clientWidth,
//     height: window.innerHeight || document.body.clientHeight
//   }

Modal.defaultStyles.overlay.backgroundColor = 'rgba(0,0,0,.8)';

export default Video