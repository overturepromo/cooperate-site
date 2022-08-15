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
                <p style={{color: 'gray'}}>At Overture, our people are our most important resource. We are currently looking for a highly skilled recruiter to become one of them, and to help us find them. The ideal candidate will have prior recruiting experience or an HR background with knowledge of all hiring and onboarding practices. The recruiter will report directly to the VP, Human Resources.</p>
                <h4>Duties and Responsibilities</h4>
                <ul style={{color: "gray"}}>
                    <li>Develops, facilitates, and implements all phases of the recruitment process in an effort to build a robust candidate pipeline</li>
                    <li>Partner closely with HR team to build recruitment process, strategy and communications for the company. Including assisting in the selection and development of an ATS, job guides and interview guides for all company roles</li>
                    <li>Collaborates with department managers to gain an understanding of the company’s hiring needs for each position, and identify accurate job descriptions and hiring criteria</li>
                    <li>Identifies and implements efficient and effective recruiting methods and strategies based on the available role, industry standards, and the needs of the organization</li>
                    <li>Assists with job posting and advertisement processes</li>
                    <li>Screen resumes and prospects, qualify, interview and manage candidate flow throughout the process from initial interview through final offer and negotiation</li>
                    <li>Performs reference checks and background screens as necessary</li>
                    <li>Schedules interviews; oversees preparation of interview questions and other hiring and selection materials</li>
                    <li>Assists with the interview process, attending and conducting interviews with managers, directors, and other stakeholders if needed</li>
                    <li>Grow and foster high-touch relationships with a diverse candidate pool and maintain a pipeline of talent to pull from as new positions open up throughout the company</li>
                    <li>Collaborates with the hiring manager and/or other human resource staff during the offer process, identifying and recommending salary ranges, incentives, start dates, and other pertinent details.</li>
                    <li>Ensures compliance with federal, state, and local employment laws and regulations, and company policies during the entire process</li>
                    <li>Attends and participates in college job fairs and recruiting sessions</li>
                    <li>Stay active and up to speed on all current job posting sites, and partner with Marketing on posting to social networking platforms</li>
                    <li>Stays up to speed on current and evolving recruiting trends and best practices</li>
                    <li>Performs other duties as assigned</li>
                </ul>
                <h4>Skills and Competencies</h4>
                <ul style={{color: "gray"}}>
                    <li>Excellent verbal and written communication skills.</li>
                    <li>Excellent interpersonal skills with good negotiation tactics.</li>
                    <li>Ability to create and implement sourcing strategies for recruitment for a variety of roles.</li>
                    <li>Proactive and independent with the ability to take initiative.</li>
                    <li>Excellent time management skills with a proven ability to meet deadlines.</li>
                    <li>Familiarity with laws, regulations, and best practices applicable to hiring and recruitment.</li>
                    <li>Proficient with or the ability to quickly learn applicant-tracking software or other recruitment systems.</li>
                    <li>Proficient with Microsoft Office Suite or related software.</li>
                </ul>
                <h4>Education/Experience</h4>
                <ul style={{color: "gray"}}>
                    <li>Bachelor’s degree in Human Resources or related field, or equivalent work experience</li>
                    <li>Minimum of 2 years recruiting experience required</li>
                </ul>
                <p>*Relocation is not provided for this role.</p>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('apClerk')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Recruiter" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default APClerk;