import React, { Component } from 'react';
import Modal from 'react-modal';
import ApplyBox from './ApplyBox'

class SalesAssistant extends Component {

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
                <p style={{color: 'gray'}}><strong>We are always looking for organized and hardworking team players to help keep our sales team firing on all cylinders.</strong></p>
                <p style={{color: 'gray'}}>The Sales Assistant is responsible for responding to customer inquiries, assisting customers via phone and e-mail and working with vendors.</p>
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
                    <li>Computer proficiency, keyboard and web navigation skills</li>
                    <li>Strong attention to detail</li>
                    <li>Ability to prioritize and handle multiple tasks in a fast-moving work environment</li>
                    <li>Excellent written and verbal communication skills</li>
                    <li>Ability to work independently and on a team</li>
                    <li>Strong work ethic and ambition to succeed</li>
                    <li>Must be a person with high integrity</li>
                    <li>College degree preferred, but not required</li>
                </ul>
                <p>*Please note that this role is not a remote position, and the expectation is to be on site daily.  Relocation is not provided.*</p>
                <p>*We also have a location in Waukegan, so the ideal candidate would have the flexibility to work at both locations.*</p>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('salesAssistant')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Sales Assistant" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default SalesAssistant;