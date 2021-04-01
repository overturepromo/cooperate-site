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
                <p style={{color: 'gray'}}>The Marketing Assistant will coordinate and execute Marketing initiatives, including email marketing, blog creation, social media and analytics tracking. This role will also support merchandising on our e-commerce platform.</p>
                <h4>DUITES AND RESPONSIBILITIES</h4>
                <ul style={{color: "gray"}}>
                    <li>Track the effectiveness of current email, social media, blog and merchandising strategies, and provide necessary feedback for changes</li>
                    <li>Forecast and track marketing and sales trends</li>
                    <li>Monitor industry statistics and follow trends in trade literature </li>
                    <li>Write a variety of content: social media copy, blogs, product descriptions, email marketing copy, etc.</li>
                    <li>Maintain and manage a content calendar</li>
                    <li>Support merchandising strategy through product upkeep and cross-merchandising</li>
                    <li>Create sales emails for general eblasts</li>
                    <li>Format data to add new products, update pricing and delete discontinued products</li>
                    <li>Help develop a social media strategy to grow and engage our audience and customer base</li>
                </ul>
                <h4>SKILLS AND COMPETENCIES</h4>
                <ul style={{color: "gray"}}>
                    <li>Strong writing skills; able to communicate effectively in writing, for the needs of the audience and to mimic our brand’s voice</li>
                    <li>Be a creative mind, with a great sense of humor</li>
                    <li>Self-motivated, able to work independently and quickly</li>
                    <li>Have a strong knowledge of Microsoft Excel</li>
                    <li>Basic HTML, WordPress, Magento and/or Graphic Design knowledge is a plus</li>
                </ul>
                <h4>EDUCATION/EXPERIENCE</h4>
                <ul style={{color: "gray"}}>
                    <li>College degree</li>
                    <li>Some marketing experience </li>
                </ul>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('productionSupervisor')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Marketing Assistant" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default ProductionSupervisor;