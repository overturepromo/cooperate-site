import React, { Component } from 'react';
import Modal from 'react-modal';
import ApplyBox from './ApplyBox'

class DirectorAccount extends Component {

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
                <p style={{color: 'gray'}}>Are you a self-starter, master communicator, and Excel whiz? If you are looking to build your career in Finance/Accounting, this may be the role for you! The Accounts Receivable clerk will be responsible for collecting payments for Overture Promotions from clients and customers. This role will be responsible for making bank deposits and running applicable reports as needed. This role also includes the following responsibilities:</p>
                <h4>Duties and Responsibilities:</h4>
                <ul style={{color: "gray"}}>
                    <li>Prepares, posts, verifies, and records customer payments and transactions related to accounts receivable.</li>
                    <li>Creates invoices according to company practices</li>
                    <li>Maintains and updates customer files, including name or address changes, mergers, or mailing attentions</li>
                    <li>Maintains relationships with clients and regularly corresponds with customers regarding outstanding balances and payments</li>
                    <li>Creates reports regarding the current status of customer accounts as requested</li>
                    <li>Researches customer discrepancies and past-due amounts with the assistance of the Accounting Manager and other A/R staff</li>
                    <li>Collaborates with the Accounting Manager to reconcile accounts receivable on a periodic basis.</li>
                    <li>Assists in generating monthly billing statements based on the general ledger</li>
                    <li>Copies, files, and retrieves materials for accounts receivable as needed</li>
                    <li>Relays changes of information to appropriate sales team members for their accounts</li>
                    <li>Post journal entries with the understanding of how debits and credits work</li>
                    <li>Performs other duties as assigned</li>
                </ul>
                <h4>Skills and Competencies:</h4>
                <ul style={{color: "gray"}}>
                    <li>Excellent verbal and written communication skills</li>
                    <li>Strong initiative, confidence and the ability to ask questions as needed</li>
                    <li>Ability to work independently and in a fast-paced environment</li>
                    <li>Ability to anticipate work needs and interact professionally and courteously with both internal and external customers</li>
                    <li>Detail-oriented, with the ability to effectively prioritize multiple projects</li>
                    <li>Excellent organizational skills and attention to detail, with the ability to prioritize multiple projects throughout the day</li>
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
                <h5 onClick={() => this.props.bye('directorAccount')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Accounts Receivable Clerk" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default DirectorAccount;