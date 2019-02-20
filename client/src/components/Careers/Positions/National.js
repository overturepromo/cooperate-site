import React, { Component } from 'react';
import Modal from 'react-modal';
import ApplyBox from './ApplyBox'

class National extends Component {

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
                <p style={{color: 'gray'}}>We’re looking for a fun and driven rockstar candidate with experience in the promotional product industry to take on a Director role. This would typically be someone with 7+ years of experience.</p>
                <h4>YOUR RESPONSIBILITIES</h4>
                <ul style={{color: "gray"}}>
                    <li>Own and hit/exceed annual sales targets within assigned territory and accounts</li>
                    <li>Develop and execute strategic plan to achieve sales targets and to expand the company’s customer base</li>
                    <li>Build and maintain strong, long-lasting customer relationships</li>
                    <li>Partner with customers to understand their business needs and objectives</li>
                    <li>Effectively communicate the value proposition through proposals and presentations</li>
                    <li>Understand category-specific landscapes and trends, reporting on the forces that shift tactical budgets and strategic direction of accounts</li>
                </ul>
                <h4>SKILLS/EXPERIENCE REQUIRED</h4>
                <ul style={{color: "gray"}}>
                    <li>Proven sales experience, consistently meeting or exceeding targets</li>
                    <li>Demonstrated ability to communicate, present and influence credibly and effectively at all levels of the organization, including executive and C-level</li>
                    <li>Proven ability to drive the sales process from plan to close</li>
                    <li>Proven ability to articulate the distinct aspects of products and services and position them against competitors</li>
                    <li>Demonstrable experience in developing client-focused, differentiated and achievable solutions</li>
                    <li>Excellent listening, negotiation and presentation skills</li>
                    <li>Excellent verbal and written communications skills</li>
                    <li>BA/BS degree or equivalent</li>
                </ul>
                <p>*Please note that this role is not a remote position, and the expectation is to be on site daily.  Relocation is not provided.*</p>
                <button className="apply-button" onClick={this.openModal}>Apply For Position</button>
                <h5 onClick={() => this.props.bye('national')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Director, National Accounts" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default National;