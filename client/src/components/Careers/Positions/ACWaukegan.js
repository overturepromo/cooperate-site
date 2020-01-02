import React, { Component } from 'react';
import Modal from 'react-modal';
import ApplyBox from './ApplyBox'

class ACWaukegan extends Component {

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
                <p style={{color: 'gray'}}>Do you have experience with, or want to move into, inside sales and account management? Start a career with a growing promotional marketing agency that has been ranked as one of the Best Places to Work by Counselor Magazine, and as a Chicago’s Best Workplace by the Chicago Tribune. Our ideal candidate will have experience in customer service or inside sales.</p>
                <h4>PRIMARY DUTIES AND RESPONSIBILITIES</h4>
                <ul style={{color: "gray"}}>
                    <li>Handle all aspects of customer account orders, including order processing, product quotes and coordinating product sample requests</li>
                    <li>Assist new and existing customers with inquires while providing consultative support and recommendations</li>
                    <li>Proactively call existing customers with inquiries while providing consultative support and recommendations</li>
                    <li>By becoming familiar with our offered products and their associated suppliers, you will educate customers on those products and help them make promotional marketing decisions</li>
                    <li>Identify and evaluate opportunities to increase customer retention and satisfaction by developing a positive rapport and relationship with customers</li>
                    <li>Act as an overall coordinator and partner with other departments including warehouse, fulfillment, production and accounting</li>
                </ul>
                <h4>YOU ARE THE PERFECT PERSON IF YOU HAVE</h4>
                <ul style={{color: "gray"}}>
                    <li>Above average communication skills</li>
                    <li>Previous customer service or sales experience</li>
                    <li>MS Office proficiency in Word, Excel, PowerPoint and Outlook</li>
                    <li>Must be able to prioritize and handle multiple tasks in a changing work environment</li>
                    <li>Must be motivated, driven and have the ambition to succeed</li>
                    <li>Have a positive, upbeat and team player attitude</li>
                    <li>Must have the ability to work both as part of a team and independently</li>
                    <li>Must have strong attention to detail</li>
                </ul>
                <h4>EDUCATION/EXPERIENCE</h4>
                <ul style={{color: "gray"}}>
                    <li>High School Diploma or Equivalent</li>
                    <li>Computer and basic Excel experience required.</li>
                </ul>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('acWaukegan')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Account Coordinator - Waukegan" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default ACWaukegan;