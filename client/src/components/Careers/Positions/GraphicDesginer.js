import React, { Component } from 'react';
import Modal from 'react-modal';
import ApplyBox from './ApplyBox'

class GraphicDesigner extends Component {

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
                <p style={{color: 'gray'}}>Overture is looking for a mid-level Graphic Designer to work on a wide range of print and digital design projects. We are looking for someone with an innovative and detail-oriented approach. In this role, you will be able to work with a variety of well-known brands, help to develop high-visibility promo projects, and be able to create your own custom artwork.</p>
                <p style={{color: 'gray'}}>Our ideal candidate must have a working knowledge of Adobe Photoshop, Illustrator, InDesign and prototyping tools for website creation. Our perfect candidate will have knowledge of preparing artwork for print materials, screen-printing, embroidery, and promotional items. Web design experience is required. Must have experience working in a team environment, but can work independently. Can provide excellent customer service to both internal and external clients.</p>
                <h4>Essential Duties and Responsibilities </h4>
                <ul style={{color: "gray"}}>
                    <li>Ability to work in a fast-paced environment and manage multiple projects with tight deadlines</li>
                    <li>Develop graphics for products, websites, eBlasts, collateral, logos/branding, and more</li>
                    <li>Design promotional webstores and present them to clients</li>
                    <li>Marketing: create blogs, eblasts, and images for presentation decks</li>
                    <li>Communicate effectively with internal sales teams and managers, including providing updates about projects and deadlines</li>
                    <li>Work with our copywriter to develop social media content and messaging for other graphics</li>
                    <li>Participate in our team critique of creative work and work collaboratively with the team</li>
                </ul>
                <h4>Qualifications</h4>
                <ul style={{color: "gray"}}>
                    <li>Proficient with Adobe Illustrator, Photoshop, and InDesign</li>
                    <li>Web design experience preferred (coding skills not required, but you must have an understanding of responsive/mobile design and best practices for web design)</li>
                    <li>Adobe XD or other prototyping tool experience</li>
                    <li>Proven resourcefulness with creative problem-solving skills</li>
                    <li>Excellent communication skills</li>
                    <li>Positive, upbeat and team player attitude</li>
                    <li>Animation and After Effects experience a plus</li>
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
                <h4>EDUCATION/EXPERIENCE</h4>
                <ul style={{color: "gray"}}>
                    <li>4 year degree in Graphic Design, or equivalent</li>
                    <li>2-5 years of experience working on a graphic design team</li>
                </ul>
                <p>*All candidates will be expected to provide a digital portfolio of work that showcases both print and website designs*</p>
                <p>*Relocation is not provided for this role.</p>
                <button className="apply-button" onClick={this.openModal}>APPLY FOR POSITION</button>
                <h5 onClick={() => this.props.bye('graphicDesigner')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ApplyBox title="Graphic Designer" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default GraphicDesigner;