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
                <p style={{color: 'gray'}}>The Customer Care Assistant Manager will be primarily responsible for the day to day management of the entire customer care team. The role will also be responsible to all customer service aspects for high level customers. This role requires excellent attention to detail, as well as excelled phone and email etiquette when handling both internal and external customers.</p>
                <h4>DUITES AND RESPONSIBILITIES</h4>
                <ul style={{color: "gray"}}>
                    <li>Day to day management, supervision, mentoring and training of customer care (Fulfillment) coordinators. This would also include managing workloads and appropriate distribution of work amongst the team, handling vacation and time off approvals and approving bi-weekly timesheets for payroll.</li>
                    <li>Manage multiple high-level webstores with live inventory, and manage the order processing and customer service for those stores.</li>
                    <li>Responsible for organizing and securing shipping dates in relation to both need by and event dates for all orders.</li>
                    <li>Work closely with warehouse staff to ensure that all orders are processed and are shipping in a timely manner; with the ability and comfortability to problem solve if stock issues arise.</li>
                    <li>Partner closely with Purchasing department on inventory management; responsible for monitoring stock availability for orders through our order management system, NetSuite</li>
                    <li>Monitoring all areas of the customer care department including open orders, back orders, inbound and outbound call logs, voicemails and bulk emails.</li>
                    <li>Act as the primary escalation point for both customers and sales teams, and escalating concerns to the Customer Care Manager when necessary.</li>
                    <li>Assisting with various incoming projects and popup webstores</li>
                    <li>Responsible for the onboarding and training of all new Customer Care Coordinators. This includes keeping department and team training documents up to date and current, and setting up a regular cadence to meet with and check in with team members</li>
                    <li>Have regularly scheduled meetings (1:1 sessions) with each Customer Care Coordinator to go over concerns, questions and new or broken processes. Ensure communication with Customer Care Manager on all items so that action items can be addressed.</li>
                    <li>Performs other duties as assigned including assisting the larger team with overflow customer service on larger customers by both phone and email as required.</li>
                </ul>
                <h4>SKILLS AND COMPETENCIES</h4>
                <ul style={{color: "gray"}}>
                    <li>Customer service, both great phone and email etiquette</li>
                    <li>Excellent oral and written communication skills</li>
                    <li>Must have critical thinking ability and excellent attention to detail</li>
                    <li>Strong initiative, confidence and the ability to ask questions as needed</li>
                    <li>Have a thick skin with communicating with other areas of the Company</li>
                    <li>Detail-oriented, with the ability to effectively prioritize multiple projects at a time</li>
                    <li>Ability to work calmly under pressure</li>
                    <li>Proficient in MS Office Suite and Adobe Acrobat; beginner to intermediate Excel experience</li>
                </ul>
                <h4>BENEFITS</h4>
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
                    <li>1-3 years of customer service experience</li>
                    <li>High school diploma</li>
                </ul>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('productionSupervisor')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Customer Care Assistant Manager" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default ProductionSupervisor;