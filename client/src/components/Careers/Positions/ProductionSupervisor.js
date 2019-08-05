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
                <p style={{color: 'gray'}}>The Production Supervisor is responsible for supervising the production of the screen printing and embroidery departments. This role will be accountable for meeting customer quality, service and deadline expectations, as well as maintaining a safe work environment. This is a fast-paced working environment and the ideal candidate will be one that has excellent decision-making skills, troubleshoot production and quality issues, and maintain high levels of communication within the department as well as with other departments throughout the building. This person will ideally become an expert in the overall production process and be able to train and develop new employees as well as existing employees. This position will report directly to the Production Manager.</p>
                <h4>Essential Duties and Responsibilities </h4>
                <ul style={{color: "gray"}}>
                    <li>Reviews staff positions and attendance to adjust staff daily assignments as needed</li>
                    <li>Approving and tracking absences and time off requests for the department (employees and temps), and reviewing payroll on a bi-weekly basis to ensure team is paid correctly</li>
                    <li>Responsible for supervising, training, and motivating production teams across production lines</li>
                    <li>Schedule production jobs to meet or exceed customer deadlines and expectations</li>
                    <li>Working knowledge of thread materials, backing, hooping and running an embroidery machine</li>
                    <li>Working knowledge of ink formulation, screen burning and reclaiming, automatic screen-printing machines, and fabric specific drying requirements</li>
                    <li>Responsible for screen printing proofing, order processing, art separation and film production. This would also include getting proof/swatch approval for both embroidery and screen print areas</li>
                    <li>Capable of operating the department’s production equipment</li>
                    <li>Guides and assists production staff to meet required output levels</li>
                    <li>Reports safety issues and policy violations to management</li>
                    <li>Assists the Production Manager with training and staff adjustments</li>
                    <li>Performs other duties as assigned by management</li>
                    <li>Verify product quality meets high quality standards</li>
                </ul>
                <h4>Qualifications</h4>
                <ul style={{color: "gray"}}>
                    <li>Bilingual in English and Spanish is required (both reading and speaking)</li>
                    <li>Strong written, verbal, and interpersonal skills are required</li>
                    <li>Willingness to research and implement new processes and new ways to use existing resources</li>
                    <li>Computer literate with familiarity with Microsoft Office products</li>
                </ul>
                <h4>Qualifications</h4>
                <ul style={{color: "gray"}}>
                    <li>3 years of embroidery and screen print experience, 2 years of production management experience</li>
                    <li>Working knowledge of OSHA safety and reporting requirements, 10-Hour Course certification a plus</li>
                </ul>
                <h4>EDUCATION/EXPERIENCE</h4>
                <ul style={{color: "gray"}}>
                    <li>HS Diploma or equivalent experience</li>
                    <li>Minimum 2 years' experience leading a team</li>
                </ul>
                <p>SHIFTS & SCHEDULE: Often varying shifts and schedules are required to meet our customer’s needs. This may require shift changes, weekends and overtime.</p>
                <p>PHYSICAL REQUIREMENTS: It is common to walk and stand for the duration of the entire shift while bending, kneeling, reaching or crouching to commonly lift 5-15 pounds with the occasional requirement to lift or move up to 40 pounds.</p>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('productionSupervisor')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Production Supervisor" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default ProductionSupervisor;