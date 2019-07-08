import React, { Component } from 'react';
import Modal from 'react-modal';
import ApplyBox from './ApplyBox'

class WebDeveloper extends Component {

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
                <p style={{color: 'gray'}}>We are looking for a driven and analytical front-end web developer to join our fast-growing team. Your primary focus will be working closely with the design team to build out front-end code based on UX Pin and other mock-ups. You will also work closely with our development team to integrate that code into our back-end framework.</p>
                <h4>Duties and Responsibilities </h4>
                <ul style={{color: "gray"}}>
                    <li>Build out front-end code based on mock-ups from design team</li>
                    <li>Integrate code into our in-house e-commerce platform</li>
                    <li>Performs other duties as assigned</li>
                </ul>
                <h4>Skills and Competencies</h4>
                <ul style={{color: "gray"}}>
                    <li>2-3 years of experience working with HTML/CSS/Javascript -- on-the-job, college, or equivalent</li>
                    <li>Bootstrap or similar grid framework</li>
                    <li>Grunt or Gulp task runners/workflow optimizers</li>
                    <li>Basic Photoshop for asset export/optimization</li>
                    <li>Version control (Git)</li>
                    <li>Detail-oriented, with the ability to effectively prioritize multiple projects</li>
                    <li>Ability to work calmly under pressure</li>
                </ul>
                <h4>Preferred Experience</h4>
                <ul style={{color: "gray"}}>
                    <li>Any back-end experience, particularly with .NET and / or Node.js</li>
                    <li>Experience with Amazon Web Services (AWS) for hosting/data storage</li>
                    <li>Any NetSuite experience, and experience with SuiteScript 2.0</li>
                </ul>
                <h4>Benifits</h4>
                <ul style={{color: "gray"}}>
                    <li>Complete insurance coverage – Medical, dental, vision, life insurance and disability plans with Company contributions</li>
                    <li>Pet insurance</li>
                    <li>Corporate partnerships with Life Time Fitness and Bears Fit locations</li>
                    <li>Generous paid time off</li>
                    <li>401(k) eligible after first year of employment, with Company match</li>
                    <li>Relaxed dress code</li>
                </ul>
                <h4>EDUCATION/EXPERIENCE</h4>
                <ul style={{color: "gray"}}>
                    <li>BS/BA degree or equivalent combination of education and experience required.</li>
                </ul>
                <p>*NOTE: Experience is always nice, but it’s the drive to understand the fundamental technologies underneath the frameworks, platforms, and libraries which make a serviceable developer an excellent developer. We put a premium on clean, maintainable code. We’re looking for someone who isn’t satisfied patching together solutions from stack overflow, but rather strives to understand those solutions so they might create their own.</p>
                <p>*Please note that this role is not a remote position, and the expectation is to be on site daily. Relocation is not provided.*</p>
                <p>*We also have a location in Waukegan, so the ideal candidate would have the flexibility to work at both locations.*</p>
                <p><strong>*There is no sponsorship for this role*</strong></p>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('webDeveloper')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Jr. Front End Developer" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default WebDeveloper;