import React from 'react'

import Uber from '../../images/home/uber_img.jpg';
import Speaker from '../../images/home/rocknroll_img.jpg';
import Nbc from '../../images/home/nbc_img.jpg';
import Cubs from '../../images/home/cubs_img.jpg';

import '../../styles/Home.css'

const Modal = (props) => {
    topFunction();
    return (
        <div>
        <div id="modal" style={styles.modal} onClick={() => props.close()} >
            <div className="window-close-div">
                <span className="fa fa-window-close"></span>
            </div>
            <img src={props.pickedImage} style={{width: '725px'}} alt="selected" />
        </div>
        <div className="row">
                    <div className="col-md-6">
                        <img src={Uber} className="uber" alt="uber" />
                        <div className="nbc-box">
                            <img src={Nbc} className="nbc" alt="nbc" />
                        </div>                    
                    </div>
                    <div className="col-md-6">
                        <img src={Speaker} className="speaker" alt="speaker" />
                        <div className="cubs-box">
                            <img src={Cubs}  className="cubs" alt="cubs" />
                        </div>
                    </div>
                </div>
        </div>
    )
}

const styles = {
    modal: {
        textAlign: 'center',
        width: '100%',
        height: '100%',
        padding: '100px 0 250px 0',
        position: 'absolute',
        zIndex: '99',
        backgroundColor: 'rgba(0,0,0,.7)'
    }
}

export default Modal;

function topFunction() {
    document.documentElement.scrollTop = 1200;
}
