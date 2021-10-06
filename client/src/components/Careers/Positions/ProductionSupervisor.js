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
                <p style={{color: 'gray'}}>The Fulfillment Coordinator, or customer service representative, requires both excelled phone and email etiquette.  This role will be responsible for answering calls and emails from customers with questions or addressing any concerns that they may have.  The primary duties include handling inbound and outbound calls to and from clients and internal sales teams, listening to customer needs or issues and providing helpful solutions to their problems</p>
                <h4>DUITES AND RESPONSIBILITIES</h4>
                <ul style={{color: "gray"}}>
                    <li>Manage multiple Company webstores with live inventory, and manage the order processing and customer service for those stores.</li>
                    <li>Responsible for organizing and securing shipping dates in relation to both need by and event dates for all orders.</li>
                    <li>Work closely with warehouse staff to ensure that all orders are processed and are shipping in a timely manner; with the ability and comfortability to problem solve if stock issues arise.</li>
                    <li>Partner closely with Purchasing department on inventory management; responsible for monitoring stock availability for orders through our order management system, NetSuite</li>
                    <li>Willing to work with all other departments of the company whenever necessary</li>
                    <li>Communicate directly with clients and provide excellent customer service.</li>
                    <li>Performs other duties as assigned including assisting the larger team with overflow customer service on larger customers by both phone and email as required.</li>
                </ul>
                <h4>SKILLS AND COMPETENCIES</h4>
                <ul style={{color: "gray"}}>
                    <li>Excellent oral and written communication skills</li>
                    <li>Must have critical thinking ability and excellent attention to detail</li>
                    <li>Strong initiative, confidence and the ability to ask questions as needed</li>
                    <li>Have a thick skin with communicating with other areas of the Company</li>
                    <li>Detail-oriented, with the ability to effectively prioritize multiple projects</li>
                    <li>Strong organizational skills</li>
                    <li>Ability to work calmly under pressure</li>
                    <li>Proficient in MS Office Suite and Adobe Acrobat; beginner to intermediate Excel experience</li>
                </ul>
                <h4>BENEFITS</h4>
                <ul style={{color: "gray"}}>
                    <li>Complete insurance coverage on day 1 of hire; Medical, dental, vision, life insurance and disability plans with Company contributions</li>
                    <li>Pet insurance</li>
                    <li>Corporate partnerships with Life Time Fitness and Bears Fit locations</li>
                    <li>Generous paid time off</li>
                    <li>401(k) eligible on day 1 of hire; company match after first year of employment</li>
                    <li>Relaxed dress code</li>
                    <li>Overture family fun – Summer BBQs, volunteer engagement groups (Culture Crew, Green Team, Safety Team, Diversity and Inclusion Advisory Council), employee vegetable garden, contests, potlucks and cookoffs</li>
                    <li>Employee referral bonus</li>
                </ul>
                <h4>EDUCATION/EXPERIENCE</h4>
                <ul style={{color: "gray"}}>
                    <li>1-3 years of customer service experience and a minimum of high school diploma</li>
                </ul>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('productionSupervisor')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Fulfillment Coordinator" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default ProductionSupervisor;