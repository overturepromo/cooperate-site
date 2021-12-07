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
                <p style={{color: 'gray'}}>We are looking for a driven and analytical Full-Stack .NET Web Developer to join our fast-growing team. Our ideal candidate will have experience working on multiple different client projects simultaneously. This person will work on a team of both Jr and Sr level developers, reporting in to the Sr Web Developer. A fast paced and outcome-focused approach allows our development team the autonomy for their work and the delivery of various business and technical capabilities.</p>
                <h4>Duties and Responsibilities </h4>
                <ul style={{color: "gray"}}>
                    <li>Design, develop and test new and existing web applications</li>
                    <li>Develop and maintain e-commerce web stores</li> 
                    <li>Develop and maintain e-commerce web store management tools</li> 
                    <li>Develop scripting and components to support continuous integration and delivery pipelines</li>
                    <li>Quality Assurance (QA) test new sites in the final stages of pre-launch</li> 
                    <li>Hunt and Squash bugs</li> 
                    <li>Performs other duties as assigned</li>
                </ul>
                <h4>Skills and Competencies</h4>
                <ul style={{color: "gray"}}>
                    <li>4+ years of development experience</li> 
                    <li>2+ years of web development experience working with .NET, C#, HTML/CSS/Javascript</li> 
                    <li>Experience with jQuery</li>
                    <li>Experience developing e-commerce web stores</li> 
                    <li>Experience with Visual Studio</li> 
                    <li>Experience with MS SQL Server tables, relationships and stored procedures</li> 
                    <li>Bootstrap or similar grid framework</li>  
                    <li>Version control (Git and/or Visual Studio Azure DevOps)</li> 
                    <li>Detail-oriented, with the ability to effectively prioritize multiple projects</li> 
                    <li>Ability to work calmly under pressure</li> 
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
                <h4>EDUCATION/EXPERIENCE</h4>
                <ul style={{color: "gray"}}>
                    <li>4-year degree in Computer Science, or equivalent</li>
                </ul>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('webDeveloper')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Web Developer" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default WebDeveloper;