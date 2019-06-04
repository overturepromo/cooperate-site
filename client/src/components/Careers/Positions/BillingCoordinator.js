import React, { Component } from 'react';
import Modal from 'react-modal';
import ApplyBox from './ApplyBox'

class BillingCoordinator extends Component {

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
                <p style={{color: 'gray'}}>Are you a self-starter, master communicator, and Excel whiz?  If you are looking to build your career in Finance/Accounting, this may be the role for you!  With general direction, this role performs a variety of billing functions to ensure the preparation of accurate and timely bills to our customers.  This also includes the following responsibilities:</p>
                <h4>YOUR RESPONSIBILITIES</h4>
                <ul style={{color: "gray"}}>
                    <li>Gather and apply merchandise and shipping costs to orders</li>
                    <li>Invoice customer orders in a timely manner</li>
                    <li>Analyze open order reports and communicate directly with sales teams</li>
                    <li>Willing to work with all departments of the company whenever necessary</li>
                    <li>Run, organize, and distribute various reports to sales teams and monthly reporting to clients</li>
                    <li>Check accuracy of orders and prepare invoices for billing</li>
                    <li>Develop up-to-date knowledge of various client billing requirements</li>
                    <li>Research and resolve routine and non-routine billing questions and discrepancies</li>
                    <li>Prepare credit memos for returns or adjustments</li>
                    <li>Answer questions from customers or from the Accounts Receivable department</li>
                    <li>Communicate directly with clients and provide excellent customer service</li>
                    <li>Organizing and entering vendor bills as needed</li>
                    <li>Performs other duties as assigned</li>
                </ul>
                <h4>SKILLS AND COMPETENCIES</h4>
                <ul style={{color: "gray"}}>
                    <li>Excellent oral and written communication skills</li>
                    <li>Detail-oriented, with the ability to effectively prioritize multiple projects</li>
                    <li>Detailed and accurate data entry</li>
                    <li>Strong organizational skills</li>
                    <li>Ability to work calmly under pressure</li>
                    <li>Proficient in MS Office Suite and Adobe Acrobat, with significant experience in MS Excel</li>
                </ul>
                <h4>BENEFITS</h4>
                <ul style={{color: "gray"}}>
                    <li>Complete insurance coverage for Full time roles – Medical, dental, vision and life insurance</li>
                    <li>Pet Insurance</li>
                    <li>Corporate Partnerships with Life Time Fitness and Bears Fit</li>
                    <li>Generous paid time off</li>
                    <li>401(k) eligible after first year of employment</li>
                    <li>Relaxed dress code</li>
                </ul>
                <h4>EDUCATION/EXPERIENCE</h4>
                <ul style={{color: "gray"}}>
                    <li>BS/BA degree or equivalent combination of education and experience required.</li>
                </ul>
                <p>*Please note that this role is not a remote position, and the expectation is to be on site daily. Relocation is not provided.*</p>
                <p>*We also have a location in Waukegan, so the ideal candidate would have the flexibility to work at both locations.*</p>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('billingCoordinator')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Billing Coordinator" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default BillingCoordinator;