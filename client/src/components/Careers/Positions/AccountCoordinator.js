import React, { Component } from 'react';
import Modal from 'react-modal';
import ApplyBox from './ApplyBox'

class AccountCoordinator extends Component {

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
                <p style={{color: 'gray'}}>We have two, high-performing sales teams looking for an organized and efficient administrative whiz. You will serve as a point of contact for customers with queries about products, orders and deliveries. You will work with a wide variety of clients and be part of an energetic and enthusiastic sales team.</p>
                <h4>YOUR RESPONSIBILITIES</h4>
                <ul style={{color: "gray"}}>
                    <li>Professionally interact with customers over the phone and email</li>
                    <li>Maintain electronic databases for the sales team</li>
                    <li>Coordinate shipping logistics</li>
                    <li>Provide vendor follow up, including order and tracking information</li>
                    <li>Process web orders</li>
                    <li>Respond to ad hoc requests by sales team members</li>
                </ul>
                <h4>SKILLS/EXPERIENCE REQUIRED</h4>
                <ul style={{color: "gray"}}>
                    <li>Previous customer service or sales experience preferred</li>
                    <li>Computer proficiency, keyboard and web navigation skills </li>
                    <li>Strong attention to detail </li>
                    <li>Ability to prioritize and handle multiple tasks in a fast-moving work environment</li>
                    <li>Excellent written and verbal communication skills </li>
                    <li>Ability to work independently and on a team</li>
                    <li>Strong work ethic and ambition to succeed</li>
                    <li>Must be a person with high integrity</li>
                </ul>
                <h4>BENEFITS</h4>
                <ul style={{color: "gray"}}>
                    <li>Complete insurance coverage – Medical, dental, vision, life insurance and disability plans with Company contributions</li>
                    <li>Pet insurance</li>
                    <li>Corporate partnerships with Life Time Fitness and Bears Fit locations</li>
                    <li>Generous paid time off</li>
                    <li>401(k) eligible after first year of employment, with Company match</li>
                    <li>Relaxed dress co</li>
                </ul>
                <h4>EDUCATION/EXPERIENCE</h4>
                <ul style={{color: "gray"}}>
                    <li>BS/BA degree or equivalent combination of education and experience required.</li>
                </ul>
                <p>*Please note that this role is not a remote position, and the expectation is to be on site daily. Relocation is not provided.*</p>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('accountCoordinator')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Sales Account Coordinator" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default AccountCoordinator;