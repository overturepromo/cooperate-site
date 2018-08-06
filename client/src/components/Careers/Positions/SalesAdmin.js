import React, { Component } from 'react';
import Modal from 'react-modal';
import ApplyBox from './ApplyBox'

class SalesAdmin extends Component {

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
            <div>
                <p style={{color: 'gray'}}>We have two high-performing sales team looking for an organized and efficient administrative whiz. You will serve as a point of contact for customers with queries about products, orders, and deliveries. You will work with a wide variety of clients and be part of an energetic and enthusiastic sales team.</p>
                <h4>YOUR RESPONSIBILITIES</h4>
                <ul style={{color: "gray"}}>
                    <li>Processing orders</li>
                    <li>Product research and sourcing</li>
                    <li>Checking data accuracy</li>
                    <li>Contacting clients to obtain missing information or answer queries</li>
                    <li>Coordinating with Operations, Production and Sales to ensure timely deliveries</li>
                    <li>Maintaining and updating internal records</li>
                    <li>Assisting in Fulfillment projects as needed</li>
                </ul>
                <h4>SKILLS/EXPERIENCE REQUIRED</h4>
                <ul style={{color: "gray"}}>
                    <li>Computer proficiency, keyboard and web navigation skills</li>
                    <li>Strong attention to detail</li>
                    <li>Ability to prioritize and handle multiple tasks in a fast-moving work environment</li>
                    <li>Ability to work independently and on a team</li>
                    <li>Strong work ethic and ambition to succeed</li>
                    <li>Must be a person with high integrity</li>
                    <li>College degree not required</li>
                </ul>
                <button className="apply-button" onClick={this.openModal}>Apply For Position</button>
                <h5 onClick={() => this.props.bye('salesAdmin')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Sales Admin" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default SalesAdmin;