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
                <h4>Job Description</h4>
                <p style={{color: 'gray'}}>Are you a self-starter, master communicator, and Excel whiz?  If you are looking to build your career in Finance/Accounting, this may be the role for you!  With general direction, this role performs a variety of billing functions to ensure the preparation of accurate and timely bills to our customers.  This also includes the following responsibilities:</p>
                <h4> Responsibilities </h4>
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
                <h4>Required Skills and Experience</h4>
                <ul style={{color: "gray"}}>
                    <li>Excellent oral and written communication skills</li>
                    <li>Must have critical thinking ability and be able to analyze all aspects of an order</li>
                    <li>Strong initiative, confidence and the ability to ask questions as needed</li>
                    <li>Have a thick skin with communicating with other areas of the Company, and not be afraid to say no</li>
                    <li>Detail-oriented, with the ability to effectively prioritize multiple projects</li>
                    <li>Detailed and accurate data entry</li>
                    <li>Strong organizational skills</li>
                    <li>Ability to work calmly under pressure</li>
                    <li>Proficient in MS Office Suite and Adobe Acrobat, with significant experience in MS Excel</li>
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
                <h4>Education/Experience</h4>
                <ul style={{color: "gray"}}>
                    <li>BS/BA degree or equivalent combination of education and experience required.</li>
                </ul>
                <p>*Relocation is not provided for this role.</p>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('apClerk')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Billing Coordinator" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default APClerk;