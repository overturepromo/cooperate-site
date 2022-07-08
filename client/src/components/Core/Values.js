import React, { Component } from 'react';
import Modal from 'react-modal';

import Work from './Modals/Work';
import Live from './Modals/Live';
import Weird from './Modals/Weird';
import Be from './Modals/Be';
import Take from './Modals/Take';
import Communicate from './Modals/Communicate';
import Do from './Modals/Do';
import Integrity from './Modals/Integrity';
import Solve from './Modals/Solve';
import Make from './Modals/Make';

import One from '../../images/core/workhard-09.svg';
import Two from '../../images/core/liveproud-08.svg';
import Three from '../../images/core/weirdiscool-02.svg';
import Four from '../../images/core/besignificant-01.svg';
import Five from '../../images/core/takeownership-04.svg';
import Six from '../../images/core/communicate-05.svg';
import Seven from '../../images/core/domore-03.svg';
import Eight from '../../images/core/integrity-06.svg';
import Nine from '../../images/core/solveproblems-07.svg';

import CommunicateOne from '../../images/core/CV_CommunicateAndCollaborate.svg';
import WorkTwo from '../../images/core/CV_WorkHardHaveFunMakeHistory.svg';
import WeirdThree from '../../images/core/CV_WeirdIsCool.svg';
import LiveFour from '../../images/core/CV_LiveWithIntegrityAndRespect.svg';
import TakeFive from '../../images/core/CV_TakeOwnershipAndAccountability.svg';
import MakeSix from '../../images/core/CV_MakeAnImpact.svg';
import BeSeven from '../../images/core/CV_BeSignificantBeHumble.svg';

import '../../styles/Core.css';

class Values extends Component {

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
            <div className="container-fluid">
                <div className="row">
                    <div className="values-img-div">
                        <img src={CommunicateOne} alt="one" className="values-img" onClick={() => this.openModal(5)} />
                        <img src={WorkTwo} alt="one" className="values-img" onClick={() => this.openModal(0)} />
                        <img src={WeirdThree} alt="one" className="values-img" onClick={() => this.openModal(2)} />
                        <img src={LiveFour} alt="one" className="values-img" onClick={() => this.openModal(6)} />
                        <img src={TakeFive} alt="one" className="values-img" onClick={() => this.openModal(4)} />
                        <img src={MakeSix} alt="one" className="values-img" onClick={() => this.openModal(7)} />
                        <img src={BeSeven} alt="one" className="values-img" onClick={() => this.openModal(3)} />
                    </div>
                </div>
                <Modal isOpen={this.state.showModal[0]}onRequestClose={this.closeModal} className="core-modal"><Work close={() => this.closeModal()} /></Modal>
                <Modal isOpen={this.state.showModal[1]}onRequestClose={this.closeModal} className="core-modal"><Live close={() => this.closeModal()} /></Modal>
                <Modal isOpen={this.state.showModal[2]}onRequestClose={this.closeModal} className="core-modal"><Weird close={() => this.closeModal()} /></Modal>
                <Modal isOpen={this.state.showModal[3]}onRequestClose={this.closeModal} className="core-modal"><Be close={() => this.closeModal()} /></Modal>
                <Modal isOpen={this.state.showModal[4]}onRequestClose={this.closeModal} className="core-modal"><Take close={() => this.closeModal()} /></Modal>
                <Modal isOpen={this.state.showModal[5]}onRequestClose={this.closeModal} className="core-modal"><Communicate close={() => this.closeModal()} /></Modal>
                <Modal isOpen={this.state.showModal[6]}onRequestClose={this.closeModal} className="core-modal"><Integrity close={() => this.closeModal()} /></Modal>
                <Modal isOpen={this.state.showModal[7]}onRequestClose={this.closeModal} className="core-modal"><Make close={() => this.closeModal()} /></Modal>
            </div>
        )
    }
}

export default Values;