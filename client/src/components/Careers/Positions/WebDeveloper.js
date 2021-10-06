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
                <p style={{color: 'gray'}}>This position is primarily responsible for monitoring and managing inventory in the Warehouse with the support of the Warehouse Manager. The position will report directly to Warehouse Manager. Ideal candidates will have prior experience in managing inventory and cycle counts.</p>
                <h4>Duties and Responsibilities </h4>
                <ul style={{color: "gray"}}>
                    <li>Responsible for overseeing both cycle counts of inventory and bin transfers</li>
                    <li>Maintain and update inventory records as required</li>
                    <li>Develop and implement efficient inventory management procedures</li>
                    <li>Reconcile any inventory discrepancies</li>
                    <li>Reports damages, vendor compliance issues and stock issues to management</li>
                    <li>Safely operate all necessary equipment only when properly trained or certified to do so</li>
                    <li>May be responsible for palletizing and shrink-wrapping items</li>
                    <li>May be required to stack pallets and repeatedly lift up to 50 pounds without restriction</li>
                    <li>Ability to work as a team player, but also independently</li>
                    <li>Maintains an acceptable level of attendance based on Company attendance policy.</li>
                    <li>Ensures safety techniques are used in all aspects of daily work responsibilities</li>
                    <li>Maintain warehouse clean and free of debris at all times.</li>
                    <li>Ability to withstand unavoidable exposure to unfavorable atmospheric conditions or extreme temperatures inside and outside the facility</li>
                </ul>
                <h4>Skills and Competencies</h4>
                <ul style={{color: "gray"}}>
                    <li>2+ years of required experience in inventory control</li>
                    <li>2+ years of required experience within a WMS environment/system; NetSuite experience a plus</li>
                    <li>Excellent written and verbal communication skills</li>
                    <li>Proficient in MS office (Word and Excel specifically)</li>
                    <li>Must be forklift operator trained and certified, as well as trained on a stand-up reach</li>
                    <li>Must be able to lift up to 50lbs</li>
                    <li>Able to stand, walk, pull and bend 100% of the day</li>
                    <li>Ability to determine priorities and accomplish multiple tasks with minimal supervision.</li>
                    <li>Ability to work in a fast-paced production manner</li>
                    <li>Must have reliable and dependable transportation</li>
                </ul>

                <h4>Benefits</h4>
                <ul style={{color: "gray"}}>
                    <li>Complete insurance coverage – Medical, dental, vision, life insurance, flex spending accounts and disability plans with Company contributions</li>
                    <li>Pet insurance and bring your dog to work days</li>
                    <li>Corporate partnerships with Life Time Fitness, Bears Fit, Skechers and Tickets at Work</li>
                    <li>Generous paid time off (vacation, sick and personal days as well as yearly floating holiday)</li>
                    <li>401(k) eligible on day 1 of hire; company match after first year of employment</li>
                    <li>Relaxed dress code</li>
                    <li>Overture family fun – Summer BBQs, volunteer engagement groups (Culture Crew, Green Team, Safety Team, Diversity and Inclusion Advisory Council), employee vegetable garden, contests, potlucks and cookoffs</li>
                    <li>Employee referral bonus</li>
                </ul>
                <h4>EDUCATION/EXPERIENCE</h4>
                <ul style={{color: "gray"}}>
                    <li>High School Diploma or equivalent working experience</li>
                    <li>At least 18 years of age</li>
                </ul>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('webDeveloper')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Warehouse Inventory Lead" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default WebDeveloper;