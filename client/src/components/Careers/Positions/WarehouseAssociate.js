import React, { Component } from 'react';
import Modal from 'react-modal';
import ApplyBox from './ApplyBox'

class WarehouseAssociate extends Component {

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
                <p style={{color: 'gray'}}>This position is primarily responsible for one or more areas of support in the Warehouse.  Those areas can include: shipping and receiving, picking and packing orders and inventory control and restocking.  Position reports directly to Warehouse Manager. Ideal candidates will have prior experience in a warehouse environment, but not required.  </p>
                <h4>YOUR RESPONSIBILITIES</h4>
                <ul style={{color: "gray"}}>
                    <li>Receives material coming into the building by vendors, customer or other warehouses accurately and promptly.</li>
                    <li>Unloads and stocks incoming merchandise, picking of outgoing merchandise, and loading of outbound trailers as needed.</li>
                    <li>Verify the quantity and description of materials received by checking merchandise against packing lists.</li>
                    <li>Assemble and fill orders to determine if they were picked correctly.</li>
                    <li>Safely operate all of the necessary equipment in your work area only when properly trained or certified to do so.</li>
                    <li>May be responsible for palletizing and shrink-wrapping items.</li>
                    <li>May be required to stack pallets and repeatedly lift up to 50 pounds.</li>
                    <li>Ability to work as a team player, but also independently.</li>
                    <li>Reports damages and vendor compliance issues.</li>
                    <li>Maintains an acceptable level of attendance based on Company attendance policy.</li>
                    <li>Ensures safety techniques are used in all aspects of daily work responsibilities</li>
                    <li>Maintain warehouse clean and free of debris at all times.</li>
                    <li>Ability to withstand unavoidable exposure to unfavorable atmospheric conditions or extreme temperatures inside and outside the facility, including noise, dust and non-toxic screen printing fumes.</li>
                    <li>Other duties as assigned </li>
                </ul>
                <h4>SKILLS AND COMPETENCIES</h4>
                <ul style={{color: "gray"}}>
                    <li>Forklift experience required, forklift certification a plus</li>
                    <li>Must be able to lift up to 50lbs</li>
                    <li>Able to stand, walk, pull and bend 100% of the day</li>
                    <li>Ability to determine priorities and accomplish multiple tasks with minimal supervision.</li>
                    <li>Ability to work in a fast-paced production manner</li>
                    <li>Must have reliable and dependable transportation</li>
                </ul>
                <h4>BENEFITS</h4>
                <ul style={{color: "gray"}}>
                    <li>Complete insurance coverage for Full time roles – Medical, dental, vision and life insurance</li>
                    <li>Pet Insurance</li>
                    <li>401(k) eligible after first year of employment</li>
                </ul>
                <h4>EDUCATION/EXPERIENCE</h4>
                <ul style={{color: "gray"}}>
                    <li>High School Diploma or equivalent working experience.</li>
                    <li>At least 18 years of age</li>
                </ul>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('warehouseAssociate')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Warehouse Associate" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default WarehouseAssociate;