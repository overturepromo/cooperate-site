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
                <p style={{color: 'gray'}}>The primary responsibility of a Receiving Associates is to accurately receive all in-bound purchase orders. This requires carefully inspecting all boxes, crates, totes, and product for damage by comparing items received with accompanied documentation ensuring a match and noting any discrepancies. This position is also responsible for providing support in various areas of the warehouse according to business needs.  This is a full-time position Monday- Friday, 1st shift (8:00am-4:30pm).</p>
                <h4>Duties and Responsibilities</h4>
                <ul style={{color: "gray"}}>
                    <li>Receives material coming into the building by vendors, customers, or other warehouses accurately and promptly</li>
                    <li>Unloads and stocks incoming merchandise, picking of outgoing merchandise, and loading of outbound trailers as needed</li>
                    <li>Verifies the quantity and description of materials received by checking merchandise against packing lists</li>
                    <li>Safely operate all the necessary equipment in your work area only when properly trained or certified to do so</li>
                    <li>May be responsible for palletizing and shrink-wrapping items</li>
                    <li>May be required to stack pallets and repeatedly lift up to 40 pounds</li>
                    <li>Ability to work as a team player, as well as independently</li>
                    <li>Reports damages and vendor compliance issues</li>
                    <li>Maintains an acceptable level of attendance based on Company attendance policy</li>
                    <li>Ensures safety techniques are used in all aspects of daily work responsibilities</li>
                    <li>Maintain warehouse clean and free of debris at all times</li>
                    <li>Ability to withstand unavoidable exposure to unfavorable atmospheric conditions or extreme temperatures inside and outside the facility, including noise, dust and non-toxic screen-printing fumes</li>
                    <li>Other duties as assigned </li>
                </ul>
                <h4>Education/Experience</h4>
                <ul style={{color: "gray"}}>
                    <li>High School Diploma or equivalent working experience</li>
                    <li>Previous receiving experience preferred </li>
                    <li>Must be able to multitask and work in a fast pace environment</li>
                    <li>Able to follow instructions and production schedules </li>
                    <li>Ability to work cohesively with team members and independently  </li>
                    <li>Able to read and write in English</li>
                    <li>RF scanner gun experience preferred </li>
                    <li>Must be able to lift up to 40 lbs.</li>
                    <li>Able to walk, stand, push, pull, reach, bend, stoop, climb, and carry 100% of the day</li>
                    <li>Ability to determine priorities and accomplish multiple tasks with minimal supervision</li>
                    <li>Must have reliable and dependable transportation</li>
                    <li>Experience operating warehouse equipment: Cherry picker or Order picker, stand-up unit, sit-down regular fork-truck.</li>
                    <li>Experience with WMS (warehouse management system)</li>
                    <li>Must have basic computer skills, especially with Outlook</li>
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
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('apClerk')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Receiving Associate" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default APClerk;