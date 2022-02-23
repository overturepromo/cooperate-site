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
                <p style={{color: 'gray'}}>Manage all operations of two warehouses, including receiving, storing, stocking, kitting and distributing a wide variety of promotional products. Ensure that all warehouse processes are running smoothly and efficiently, that productivity targets are met, and that safety procedures and practices are followed. Manage, schedule and train all permanent and temporary warehouse staff, and plan for seasonal and project-based hiring. Responsible for sourcing warehouse equipment and supplies. Requires travel between warehouses in Waukegan and Libertyville (15 minutes by car).</p>
                <h4>Essential Duties and Responsibilities</h4>
                <ul style={{color: "gray"}}>
                    <li>Strategically manage warehouses in compliance with company’s policies and vision.</li>
                    <li>Oversee receiving, warehousing, picking, assembly, and distribution/shipping operations.</li>
                    <li>Setup warehouse layout and ensure efficient space utilization and organization by program.</li>
                    <li>Initiate, coordinate and enforce optimal operational policies and procedures.</li>
                    <li>Adhere to all warehousing, handling and shipping legislation requirements.</li>
                    <li>Maintain standards of health and safety, hygiene and security, schedule appropriate training as required.</li>
                    <li>Interview, select, train, coach, and motivate employees.</li>
                    <li>Plan work schedules, assign tasks appropriately and appraise results.</li>
                    <li>Address staff performance and attendance issues as required.</li>
                    <li>Produce reports and statistics to inform planning process.</li>
                    <li>Work closely with both the Special Projects and Customer Service areas to resolve print/pick/pack/ship issues, and to reallocate staff according to current needs.</li>
                    <li>Work with Customer Service team to ensure that orders are processed and shipped on time.</li>
                    <li>Partner with the sales teams to reduce obsolete inventory.</li>
                    <li>Regularly review overstock and consolidate and donate expired/unwanted goods to free additional space for current inventory overstock.</li>
                    <li>Liaise with suppliers and transport companies, seeking cost savings and process improvements.</li>
                    <li>Regularly inspect equipment; issue work orders for repair and requisitions for replacement.</li>
                    <li>Plan with senior management for operational expansion which will include adding warehouses, processes, labor and machinery.</li>
                </ul>
                <h4>Qualifications</h4>
                <ul style={{color: "gray"}}>
                    <li>Proven work experience as a warehouse manager</li>
                    <li>Hands on experience with warehouse management software and databases</li>
                    <li>Expertise in warehouse management procedures and best practices</li>
                    <li>Proven ability to implement process improvement initiatives</li>
                    <li>Leadership skills and the ability to manage and develop staff</li>
                    <li>Strong decision-making and problem-solving skills</li>
                    <li>Excellent communication skills</li>
                    <li>Detail-oriented</li>
                    <li>Knowledge of inventory control methods and procedures and all applicable Federal and State rules and regulations, such as the Occupational Safety and Health Act (OSHA) and the Americans with Disabilities Act (ADA)</li>
                    <li>Ability to prioritize and handle multiple tasks in a fast-moving work environment</li>
                    <li>Positive, upbeat and team player attitude</li>
                    <li>NetSuite WMS experience</li>
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
                    <li>BS degree in logistics, supply chain management or business administration</li>
                    <li>At least 7 years of experience as a warehouse manager</li>
                </ul>
                <p>*Relocation is not provided for this role.</p>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('apClerk')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Distribution Center Manager" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default APClerk;