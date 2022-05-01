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
                <p style={{color: 'gray'}}>Assist the Purchasing Manager in all aspects purchasing as well as being primarily responsible for new item creation and item updates to various e-commerce webstores.</p>
                <h4>DUITES AND RESPONSIBILITIES</h4>
                <ul style={{color: "gray"}}>
                    <li>Receive item information from Sales teams and verifying information is filled out in its entirety and if complete add to new or existing Web Stores.  However, if incomplete information is received, report problems encountered to appropriate Sales teams.</li>
                    <li>Verifies data entry activity completed to ensure 100% accuracy.</li>
                    <li>Performs new item setup, including handling item adjustments and all future item maintenance.</li>
                    <li>Partner with Sales and Operations teams to create best practices and continued improvements on item forms, and orders missing item maintenance.</li>
                    <li>Program specific inventory allocation and adjustments in the system to help with order transition to other departments in the building. </li>
                    <li>Assist in Purchasing and help create and design process improvements for the reorder point process, and assume the backup responsibilities when the Purchasing Lead is not in the office.</li>
                    <li>Purchasing Manager will assign clients to the Purchasing Assistant that the Purchasing Assistant will be primarily responsible for purchasing for.  This includes all facets of the purchasing process, including follow up to item receipt.</li>
                    <li>Responsible for running and creating various reports within NetSuite, and reformatting and improving spreadsheets upon request.</li>
                    <li>Daily monitoring, adjusting and closing of orders with missing item maintenance within NetSuite by filling in appropriate missing information.</li>
                    <li>Monitor websites to remove any out of stock, discounted product on Hive Platforms, and verifying any website description add ons that are no longer valid and partnering with IT as needed </li>
                    <li>Develop reporting on slow moving items and/or low value items to sell in bulk to Sales teams.</li>
                    <li>Sort and filter through UPS bills, and import landed costs onto items within NetSuite.</li>
                    <li>Performs other related duties as assigned.</li>
                </ul>
                <h4>SKILLS AND COMPETENCIES</h4>
                <ul style={{color: "gray"}}>
                    <li>Excellent verbal and written communication skills</li>
                    <li>Must have critical thinking ability and be able to analyze all aspects of an order</li>
                    <li>Strong initiative, confidence and the ability to ask questions as needed</li>
                    <li>Ability to work independently and in a fast-paced environment</li>
                    <li>Ability to anticipate work needs and interact professionally and courteously with both internal and external customers</li>
                    <li>Detail-oriented, with the ability to effectively prioritize multiple projects</li>
                    <li>Excellent organizational skills and attention to detail, with the ability to prioritize multiple projects throughout the day</li>
                    <li>Ability to work calmly under pressure</li>
                    <li>Proficient in MS Office Suite and Adobe Acrobat, with significant experience in MS Excel</li>
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
                    <li>High School Diploma or Equivalent.</li>
                </ul>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('productionSupervisor')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Purchasing Assistant" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default ProductionSupervisor;