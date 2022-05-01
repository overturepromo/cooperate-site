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
                <p style={{color: 'gray'}}>This role will report directly to the Chief Financial Officer, the Director, IT & Information Security is responsible for the continued development, implementation, and management of Overture’s enterprise security, data privacy, and IT compliance programs. This is a leadership role that requires strategic capabilities, implementing best practices by ensuring IT-related policies and procedures are in place and that all employees are trained on those policies and procedures.</p>
                <h4>Duties and Responsibilities</h4>
                <ul style={{color: "gray"}}>
                    <li>Responsible for the foundation of risk assessment practices, policies, procedures, and security and compliance reporting</li>
                    <li>Coordinates the continuous development, implementation and updating of security and privacy policies, standards, guidelines, baselines, processes and procedures in compliance with local, state and federal regulations, as well as client requirements.</li>
                    <li>As the functional owner of IT compliance and SOPs for all technology-related activity, the Director, IT & Information Security will assist in the hosting and response to client audits and will work with the larger IT team in conducting and responding to regular audits and inspections, which may include policy development and/or enhancements.</li>
                    <li>Directly responsible for establishing and monitoring information security-related policies, procedures, and controls to assure compliance with applicable regulatory, legal, and audit requirements</li>
                    <li>Continued assessment of IT procedures and policies against industry standards, recommending any necessary updates to documentation in collaboration with appropriate departments and Senior Leadership.</li>
                    <li>Ensure policies and procedures are communicated to all personnel and that compliance is enforced and trained on at minimum a quarterly basis.</li>
                    <li>Schedule periodic internal audits or Quality Control reviews with internal and external resources</li>
                    <li>Ensure that disaster recovery and business continuity plans are in place, appropriately documented, and tested</li>
                    <li>Review investigations after breaches or incidents, including impact analysis and recommendations for avoiding similar vulnerabilities</li>
                    <li>Provide leadership and direction to the company to oversee successful completion of security-related and compliance projects</li>
                    <li>Collaborate Senior Leadership to update the cyber security strategy and leverage new technology and threat information</li>
                    <li>Maintain a current understanding the IT threat landscape for the industry and translate that knowledge to identification of risks and actionable plans to protect the business</li>
                    <li>Brief the executive team on status and risks, including taking the role of champion for the overall security strategy</li>
                </ul>
                <h4>Skills and Competencies</h4>
                <ul style={{color: "gray"}}>
                    <li>Proven success in building a security strategy driven by business initiatives and presenting the solution to senior leaders and colleagues.</li>
                    <li>Background in building, leading, and retaining Security and Compliance teams</li>
                    <li>Track record of effectively leading project teams, including internal and external resources, across an array of functional areas and departments</li>
                    <li>Demonstrated willingness and passion to work in a hands-on manner with complex challenges</li>
                    <li>Strong knowledge and experience in information security processes, procedures, systems, methodologies, and best practices</li>
                    <li>Understanding of Business Continuity and Disaster Recovery principles</li>
                    <li>Leading and/or participating in regulatory inspections and audits</li>
                    <li>Experience establishing and managing security and data privacy policies and standards in a growing company</li>
                    <li>Superior communication skills, both written and verbal, with ability to communicate effectively at all levels of the organization</li>
                    <li>Excellent leadership and organization skills with a results-oriented mindset</li>
                    <li>Strong strategic planning discipline, with experience building and communicating business cases for technology change</li>
                    <li>Demonstrated ability to build strong relationships with both business and IT stakeholders and leaders, as well as related IT project and operations teams</li>
                    <li>Grasp of current and emerging technologies and trends, with ability to rapidly assess and apply new and emerging technologies</li>
                    <li>Strong analytical problem-solving ability</li>
                </ul>
                <h4>Benefits</h4>
                <ul style={{color: "gray"}}>
                    <li>Complete insurance coverage – Medical, dental, vision, life insurance, flex spending accounts and disability plans with Company contributions</li>
                    <li>Pet insurance and bring your dog to work days</li>
                    <li>Corporate partnerships with Life Time Fitness, Bears Fit, Skechers and Tickets at Work</li>
                    <li>Generous paid time off (vacation, sick and personal days as well as yearly floating holiday)</li>
                    <li>401(k) eligibility day one of employment, with a Company match after the first year of employment</li>
                    <li>Paid maternity and paternity leave based on years of service</li>
                    <li>Relaxed dress code</li>
                    <li>Overture family fun – Summer BBQs, volunteer engagement groups (Culture Crew, Green Team, Safety Team, Diversity and Inclusion Advisory Council), employee vegetable garden, contests, potlucks and cookoffs</li>
                    <li>Employee referral bonus</li>
                </ul>
                <h4>Education/Experience</h4>
                <ul style={{color: "gray"}}>
                    <li>Bachelor's degree from accredited university, or equivalent background or experience</li>
                </ul>
                <p>*Relocation is not provided for this role.</p>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('apClerk')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Director, IT & Information Security" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default APClerk;