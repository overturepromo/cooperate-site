import React, { Component } from 'react';
import Modal from 'react-modal';
import ApplyBox from './ApplyBox'

class DirectorAccount extends Component {

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
                <h4>SUMMARY</h4>
                <p style={{color: 'gray'}}>If you’ve been working in promotional marketing for a few years, have experience developing new business leads with minimal support, presenting to prospective customers, and mentoring up-and-coming sales reps, we’ve got the job for you.  Overture is a fast-growing, women-owned promotional marketing agency that has been ranked as one of the Best Places to Work by Counselor Magazine, and as a Chicago’s Best Workplace by the Chicago Tribune.</p>
                <h4>Primary Responsibilities</h4>
                <p style={{color: 'gray'}}>The primary responsibilities of this new position are twofold:</p>
                <ul style={{color: "gray"}}>
                    <li>To generate new business by nurturing high potential, identified leads, and by outreach to targeted prospects.</li>
                    <li>To ensure that high-quality service is being provided to client accounts through account managers, and to expand those client relationships.</li>
                </ul>
                <p style={{color: 'gray'}}>More specifically, these will include the following responsibilities:</p>
                <ul style={{color: "gray"}}>
                    <li>Assist in identifying new business opportunities with both potential and existing customers.</li>
                    <li>Cultivate new client opportunities through nurturing high potential leads.</li>
                    <li>Develop relationships with targeted prospects by cold outreach.</li>
                    <li>Provide consultative support for sales reps working with new and existing customers, including regular meetings to discuss issues and work progress.</li>
                    <li>Develop, motivate and train team members, and create a spirit of teamwork.</li>
                    <li>Understand all aspects of our process for customer account orders, including order processing, product quotes and coordinating product sample requests.</li>
                    <li>Keep management informed of pertinent activities and potential problems.</li>
                </ul>
                <h4>Personal Qualifications:</h4>
                <ul style={{color: "gray"}}>
                    <li>3-5 years of experience in promotional marketing </li>
                    <li>Experience managing and mentoring sales staff</li>
                    <li>Experience developing leads and prospects </li>
                    <li>MS Office proficiency in Word, Excel, PowerPoint and Outlook</li>
                    <li>Ability to prioritize and handle multiple tasks in a fast-moving work environment</li>
                    <li>Excellent written and verbal communication skills </li>
                    <li>Strong work ethic and ambition to succeed </li>
                    <li>Have a positive, upbeat and team player attitude</li>
                    <li>Must be a person of high integrity, with a sense of humor</li>
                    <li>College degree required</li>
                </ul>
                <p>*Please note that this role is not a remote position, and the expectation is to be on site daily. Relocation is not provided.*</p>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('directorAccount')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Account Development Manager" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default DirectorAccount;