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
                <h4>Summary</h4>
                <p style={{color: 'gray'}}>The Scheduling Coordinator is mainly responsible for managing the project scheduling and scheduling project due dates. The Scheduling Coordinator will serve as the liaison to Sales and Embroidery and Screen Printing, and requires the ability to manage their own time to ensure complete project planning and execution of tasks on time.</p>
                <h4>Key Responsibilities</h4>
                <ul style={{color: "gray"}}>
                    <li>Creates embroidery schedules </li>
                    <li>Communicates effectively with Sales personal via emails and phone </li>
                    <li>Maintains schedules up to date and communicates with Sales personal when orders are being push out </li>
                    <li>Writes up embroidery / screen printing job orders via adobe </li>
                    <li>Coordinates production activities with shift supervisor </li>
                    <li>Sends approvals via email to Sales personal </li>
                    <li>Reviews & maintain accurate department records </li>
                    <li>Properly files order documentation once job is complete </li>
                    <li>Provides support to Production team as needed </li>
                    <li>Works with appropriate departments to investigate schedule delays </li>
                    <li>Provide status updates to appropriate stakeholder </li>
                </ul>
                <h4>Education/Experience</h4>
                <ul style={{color: "gray"}}>
                    <li>Ability to proactively identify possible production issues and ability to find a solution to problems in a timely manner </li>
                    <li>Experience working in logistics, coordination, project management, or in a similar capacity </li>
                    <li>Strong organizational and multi-tasking skills </li>
                    <li>Good analytical and problem-solving abilities </li>
                    <li>Must be detail oriented and dependable </li>
                    <li>Excellent communication and interpersonal skills </li>
                    <li>Time management skills with the ability to meet tight deadlines </li>
                    <li>Proficient in MS office (Word, Excel and Outlook specifically) </li>
                    <li>Ability to determine priorities and accomplish multiple tasks with minimal supervision </li>
                    <li>Ability to work well under pressure without sacrificing quality </li>
                    <li>Ability in building relationships across various departments/teams </li>
                    <li>High school diploma or equivalent </li>
                </ul>
                <h4>Benefits</h4>
                <ul style={{color: "gray"}}>
                    <li>Complete insurance coverage on day 1 of hire; Medical, dental, vision, life insurance and disability plans with Company contributions </li>
                    <li>Pet insurance </li>
                    <li>Corporate partnerships with Life Time Fitness and Bears Fit locations </li>
                    <li>Generous paid time off </li>
                    <li>401(k) eligible on day 1 of hire; company match after first year of employment </li>
                    <li>Relaxed dress code </li>
                </ul>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('apClerk')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Scheduling Coordinator" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default APClerk;