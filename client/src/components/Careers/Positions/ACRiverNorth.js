import React, { Component } from 'react';
import Modal from 'react-modal';
import ApplyBox from './ApplyBox'

class ACRiverNorth extends Component {

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
                <p style={{color: 'gray'}}><strong>Summary: </strong>Your primary responsibility in this role is to handle all aspects of customer account orders, including order processing, product quotes and coordinating product sample requests – in partnership with our vendors. This role is all about customer relationships and using those relationships, while assisting the Sr. Account Manager with support of their business. The expectation is that this person will quickly become an expert with our offered products and associated suppliers by educating customers and helping them to make promotional marketing decisions.</p>
                <h4>PRIMARY DUTIES AND RESPONSIBILITIES</h4>
                <ul style={{color: "gray"}}>
                    <li>Handle all aspects of customer account orders, including order processing, product quotes and coordinating product sample requests, with our clients as well as our vendors</li>
                    <li>Expand responsibilities by learning and sourcing trending products to be able to fully support clients</li>
                    <li>Assist new and existing customers with inquires while providing consultative support and recommendations on promotional products</li>
                    <li>Proactively communicating with existing customers to build and maintain the customer relationship</li>
                    <li>By becoming an expert with our offered products and their associated suppliers, you will educate customers on those products and help them make promotional marketing decisions.</li>
                    <li>Identify and evaluate opportunities to increase customer retention and satisfaction by developing a positive rapport and relationship with customers</li>
                    <li>Act as an overall coordinator and partner with other departments including warehouse, fulfillment, production and accounting</li>
                    <li>Provide day to day support to Sr Account Manager and assist and handle ad hoc tasks as required</li>
                </ul>
                <h4>YOU ARE THE PERFECT PERSON IF YOU HAVE</h4>
                <ul style={{color: "gray"}}>
                    <li>Previous customer service or sales experience</li>
                    <li>Above average communication skills</li>
                    <li>Must be able to prioritize and handle multiple tasks in a changing work environment</li>
                    <li>Average mathematical skills to accurately provide quotes and pricing</li>
                    <li>Be creative and up to speed on industry trends and new and trendy products</li>
                    <li>Must be motivated, driven and have the ambition to succeed</li>
                    <li>Have a positive, upbeat and team player attitude</li>
                    <li>Must have the ability and be comfortable to work independently</li>
                    <li>Must have strong attention to detail</li>
                    <li>MS Office proficiency in Word, Excel, PowerPoint and Outlook</li>
                </ul>
                <h4>EDUCATION/EXPERIENCE</h4>
                <ul style={{color: "gray"}}>
                    <li>BS/BA degree or equivalent combination of education and experience required.</li>
                </ul>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('acRiverNorth')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Account Manager" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default ACRiverNorth;