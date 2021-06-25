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
                <p style={{color: 'gray'}}>We have two high-performing sales teams looking for an organized and efficient administrative whiz. You will serve as a point of contact for your sales team, vendors and customers with queries about products, orders, and deliveries.  You will work with a wide variety of clients and be part of an energetic and enthusiastic sales team.</p>
                <h4>YOUR RESPONSIBILITIES</h4>
                <ul style={{color: "gray"}}>
                    <li>Processing orders for various members of the sales team, including web orders</li>
                    <li>Perform product research and sourcing of items</li>
                    <li>Professionally interact with customers over the phone and email</li>
                    <li>Coordinate with Operations, Production and Sales to ensure timely deliveries, and research shipping logistics</li>
                    <li>Provide vendor follow up, including order and tracking information</li>
                    <li>Contact clients to obtain missing information or to answer queries</li>
                    <li>Assist in Fulfillment projects on an as needed basis</li>
                    <li>Respond to ad hoc requests by sales team members</li>
                </ul>
                <h4>SKILLS/EXPERIENCE REQUIRED</h4>
                <ul style={{color: "gray"}}>
                    <li>Proficient PowerPoint skills are a must</li>
                    <li>Computer proficiency, keyboard and web navigation skills</li>
                    <li>Strong attention to detail</li>
                    <li>Ability to prioritize and handle multiple tasks in a fast-moving work environment</li>
                    <li>Excellent written and verbal communication skills </li>
                    <li>Ability to work independently and on a team</li>
                    <li>Strong work ethic and ambition to succeed</li>
                    <li>Must be a person with high integrity</li>
                </ul>
                <h4>BENIFITS</h4>
                <ul style={{color: "gray"}}>
                    <li>Complete insurance coverage, with insurance eligibility day one of hire – Medical, dental, vision, life insurance and disability plans with Company contributions</li>
                    <li>Pet insurance and quarterly bring your dog to work days</li>
                    <li>Corporate partnerships with Life Time Fitness and Bears Fit </li>
                    <li>Generous paid time off and volunteer opportunities with paid day off </li>
                    <li>401(k) eligibility day one of hire, and based on position and compensation, after first year of employment potential Company match</li>
                    <li>Relaxed dress code</li>
                </ul>
                <h4>EDUCATION/EXPERIENCE</h4>
                <ul style={{color: "gray"}}>
                    <li>High School diploma required.</li>
                </ul>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('salesAdmin')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Sales Account Admin" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default SalesAdmin;