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

import One from '../../images/core/workhard-09.svg';
import Two from '../../images/core/liveproud-08.svg';
import Three from '../../images/core/weirdiscool-02.svg';
import Four from '../../images/core/besignificant-01.svg';
import Five from '../../images/core/takeownership-04.svg';
import Six from '../../images/core/communicate-05.svg';
import Seven from '../../images/core/domore-03.svg';
import Eight from '../../images/core/integrity-06.svg';
import Nine from '../../images/core/solveproblems-07.svg';

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
                        <img src={One} alt="one" className="values-img" onClick={() => this.openModal(0)} />
                        <img src={Two} alt="one" className="values-img" onClick={() => this.openModal(1)} />
                        <img src={Three} alt="one" className="values-img" onClick={() => this.openModal(2)} />
                        <img src={Four} alt="one" className="values-img" onClick={() => this.openModal(3)} />
                        <img src={Five} alt="one" className="values-img" onClick={() => this.openModal(4)} />
                        <img src={Six} alt="one" className="values-img" onClick={() => this.openModal(5)} />
                        <img src={Seven} alt="one" className="values-img" onClick={() => this.openModal(6)} />
                        <img src={Eight} alt="one" className="values-img" onClick={() => this.openModal(7)} />
                        <img src={Nine} alt="one" className="values-img" onClick={() => this.openModal(8)} />
                    </div>
                </div>
                <Modal isOpen={this.state.showModal[0]}onRequestClose={this.closeModal} className="employee-modal"><Work close={() => this.closeModal()} /></Modal>
                <Modal isOpen={this.state.showModal[1]}onRequestClose={this.closeModal} className="employee-modal"><Live close={() => this.closeModal()} /></Modal>
                <Modal isOpen={this.state.showModal[2]}onRequestClose={this.closeModal} className="employee-modal"><Weird close={() => this.closeModal()} /></Modal>
                <Modal isOpen={this.state.showModal[3]}onRequestClose={this.closeModal} className="employee-modal"><Be close={() => this.closeModal()} /></Modal>
                <Modal isOpen={this.state.showModal[4]}onRequestClose={this.closeModal} className="employee-modal"><Take close={() => this.closeModal()} /></Modal>
                <Modal isOpen={this.state.showModal[5]}onRequestClose={this.closeModal} className="employee-modal"><Communicate close={() => this.closeModal()} /></Modal>
                <Modal isOpen={this.state.showModal[6]}onRequestClose={this.closeModal} className="employee-modal"><Do close={() => this.closeModal()} /></Modal>
                <Modal isOpen={this.state.showModal[7]}onRequestClose={this.closeModal} className="employee-modal"><Integrity close={() => this.closeModal()} /></Modal>
                <Modal isOpen={this.state.showModal[8]}onRequestClose={this.closeModal} className="employee-modal"><Solve close={() => this.closeModal()} /></Modal>
            </div>
        )
    }
}

export default Values;