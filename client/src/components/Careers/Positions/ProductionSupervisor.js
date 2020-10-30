import React, { Component } from 'react';
import Modal from 'react-modal';
import ApplyBox from './ApplyBox'

class ProductionSupervisor extends Component {

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
                <p style={{color: 'gray'}}>This is a lead position and is responsible for a wide variety of tasks to ensure timely production and assembly activities in regards to special projects kitting. The main responsibility for this role is to prepare client specific kits for shipment and ensuring all kit timelines and deliverables are accurate and met while leading a team of 10-20 employees and temporary labor. This role will coordinate kitting operations with the objective of maximizing the productivity of all team members while ensuring that all processes are being followed in the daily completion of work tasks. Ideal candidates will have prior experience in a light assembly type of role.</p>
                <h4>Duties and Responsibilities </h4>
                <ul style={{color: "gray"}}>
                    <li>Skilled in reading specification and identifying the correct items for projects in order to fulfill customer orders by locating, coordinating and expediting the flow of kitting materials – both in process materials and materials within the department</li>
                    <li>Knowledge of packing procedures, techniques, equipment and basic warehouse procedures</li>
                    <li>Knowledge of shipping documents and ability to identify shipping requirements and procedures for items</li>
                    <li>Constantly perform quality control checks on every project daily</li>
                    <li>Able to communicate with multiple departments within the organization, including members of upper management, in regards to order status and shipping updates</li>
                    <li>Responsible for data entry, reporting, checking on and verifying information, generating reports and responding to data requests</li>
                    <li>Ability to build strong relationships, provide excellent customer service and problem solve</li>
                    <li>May be required to stack pallets and repeatedly lift up to 50 pounds</li>
                    <li>Ability to work as a team player, but also independently</li>
                    <li>Reports damages and vendor compliance issues</li>
                    <li>Maintains an acceptable level of attendance based on Company attendance policy</li>
                    <li>Ensures safety techniques are used in all aspects of daily work responsibilities</li>
                    <li>Maintain warehouse clean and free of debris at all times</li>
                    <li>Ability to withstand unavoidable exposure to unfavorable atmospheric conditions or extreme temperatures inside and outside the facility, including noise, dust and non-toxic screen-printing fumes</li>
                    <li>Other duties as assigned</li>
                </ul>
                <h4>Required Experience</h4>
                <ul style={{color: "gray"}}>
                    <li>Minimum 2 years’ experience in a supervisory or lead capacity directing the work of others</li>
                    <li>Computer experience required</li>
                    <li>Must be able to read, write and communicate in English, bilingual in Spanish a plus</li>
                    <li>Forklift experience required, forklift certification a plus</li>
                    <li>Able to stand, walk, pull and bend 100% of the day</li>
                    <li>Ability to determine priorities and accomplish multiple tasks with minimal supervision</li>
                    <li>Ability to work in a fast-paced production manner</li>
                    <li>Outstanding communication and organizational skills</li>
                </ul>
                <h4>Benefits</h4>
                <ul style={{color: "gray"}}>
                    <li>Complete insurance coverage – Medical, dental, vision, life insurance and disability plans with Company contributions</li>
                    <li>Pet insurance</li>
                    <li>Corporate partnerships with Life Time Fitness and Bears Fit locations</li>
                    <li>Generous paid time off</li>
                    <li>401(k) eligible upon hire with Company match after the 1st year of employment</li>
                    <li>Relaxed dress code</li>
                </ul>
                <h4>EDUCATION/EXPERIENCE</h4>
                <ul style={{color: "gray"}}>
                    <li>High School Diploma or equivalent working experience</li>
                    <li>At least 18 years of age</li>
                </ul>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('productionSupervisor')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Special Projects Lead" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default ProductionSupervisor;