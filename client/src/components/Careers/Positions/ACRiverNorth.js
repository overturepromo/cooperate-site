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
                <p style={{color: 'gray'}}><strong>Summary: </strong>Our Account Manager, Inside Sales & eCommerce is an entry level sales role; no cold-calling is required. It is eCommerce-based selling, with customers coming to our website to order promotional products, and communicating with account managers through email and web chat. The ideal candidate will have a background in customer service and/or inside sales, and have average mathematical skills to accurately provide quotes and pricing. Your primary responsibility in this role is to handle all aspects of customer account orders, including order processing, product quotes and coordinating product sample requests – in partnership with our vendors. Growth in this role is about establishing strong customer relationships through excellent service, and using those relationships to build your own book of business. The expectation is that you will, with training, become an expert in our offered products and suppliers, and will be able to help customers choose promotional products that meet their branding and budget requirements.</p>
                <h4>PRIMARY DUTIES AND RESPONSIBILITIES</h4>
                <ul style={{color: "gray"}}>
                    <li>Handle all aspects of customer account orders, including order processing, product quotes and coordinating product sample requests, with our clients as well as our vendors</li>
                    <li>Expand responsibilities by learning and sourcing trending products to be able to fully support clients</li>
                    <li>Assist new and existing customers with inquires while providing consultative support and recommendations on promotional products</li>
                    <li>Proactively communicate with existing customers to build and maintain the relationships and expand your book of business</li>
                    <li>Leverage internally provided training and opportunities to meet with suppliers, such that you will be able to discuss products and help customers make promotional marketing decisions.</li>
                    <li>Coordinate orders with other departments including warehouse, fulfillment, production and accounting.</li>
                </ul>
                <h4>YOU ARE THE PERFECT PERSON IF YOU HAVE</h4>
                <ul style={{color: "gray"}}>
                    <li>Previous customer service or sales experience</li>
                    <li>Good communication skills</li>
                    <li>Must be able to prioritize and handle multiple tasks in a changing work environment</li>
                    <li>Average mathematical skills to accurately provide quotes and pricing</li>
                    <li>Be creative and up to speed on industry trends and new and trendy products</li>
                    <li>Must be motivated, driven and have the ambition to succeed</li>
                    <li>Have a positive, upbeat and team player attitude</li>
                    <li>Must have the ability to work independently</li>
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
                    <ApplyBox title="Account Manager, Inside Sales" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default ACRiverNorth;