import React, { Component } from 'react';
import Modal from 'react-modal';
import ApplyBox from './ApplyBox'

class APClerk extends Component {

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
                <h4>Job Description</h4>
                <p style={{color: 'gray'}}>We are looking for an entry-level Accounts Payable Clerk to join our fast-growing team. You will work on the accounting team, with primary responsibility for receiving, processing, verifying and reconciling invoices.</p>
                <h4> Responsibilities </h4>
                <ul style={{color: "gray"}}>
                    <li>Gather and apply merchandise and shipping costs to orders</li>
                    <li>Work closely with billing to ensure orders are ready to invoice</li>
                    <li>Distribute various reports to sales teams</li>
                    <li>Research and resolve routine and non-routine vendor bill questions</li>
                    <li>Communicate directly with vendors and with the Overture sales staff</li>
                    <li>Review vendor statements to ensure all costs have been accounted for</li>
                  
                </ul>
                <h4>Required Skills and Experience</h4>
                <ul style={{color: "gray"}}>
                    <li>Ability to prioritize and handle multiple tasks in a fast-moving work environment</li>
                    <li>Experience using Excel, Word and Outlook</li>
                    <li>Excellent written and verbal communication skills</li>
                    <li>Ability to work independently and on a team</li>
                    <li>Strong work ethic and ambition to succeed </li>
                    <li>Ability to bring new ideas for creating more efficient processes to the team</li>
                    <li>Must be a person of integrity</li>
                    <li>Strong attention to detail – accuracy in this work is critical</li>
                </ul>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('apClerk')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="AP Clerk" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default APClerk;