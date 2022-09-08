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
                <p style={{color: 'gray'}}>The Purchasing Coordinator is primarily responsible for purchasing promotional product inventory for the 100+ ecommerce stores hosted by Overture.</p>
                <h4>DUITES AND RESPONSIBILITIES</h4>
                <ul style={{color: "gray"}}>
                    <li>Review daily reorder searches to analyze the information and make purchase decisions for various company webstores.</li>
                    <li>Place purchase orders for various items in Netsuite and work with the vendor to ensure receipt, and follow up through delivery to Overture’s warehouse</li>
                    <li>Work closely with sales to ensure to develop any special ordering rules in place for specific clients, as well as to get information on any upcoming promotions or seasonal buying patterns to account for those in product reorders</li>
                    <li>Coordinate with internal and external decorators to ensure Purchase Orders are being processed and handling per Overture’s instructions</li>
                    <li>Work with internal and external stakeholders on item reordering needs, as well as keeping the reorder searches up to date (i.e. marking items as discontinued, removing them from the reorder searches, ensuring new items are setup correctly, etc.)</li>
                    <li>Work closely with sales and operations to solve problems as they come up. This includes, but is not limited to, item backorder or stock issues, internal work order follow up, inventory transfers, etc.</li>
                    <li>Provide ad-hoc reporting as needed to sales and clients as it relates to inventory levels and item movement related to specific programs</li>
                    <li>Have the ability to learn how to pull reporting independently and provide minor tweaks to existing reports, like adding filters or additional columns onto reports</li>
                    <li>Communicate regularly with Senior Management on the reordering process, discuss any operational challenges and any suggested improvements to the process to ensure a seamless customer experience</li>
                    <li>Work closely with Webstore Development, Item Changes, Customer Service, Sales, and the Webstore Program Manager to be up to date on upcoming projects and help solve problems as they arise.</li>
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
                    <ApplyBox title="Purchasing Coordinator" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default ProductionSupervisor;