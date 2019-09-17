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
                <p style={{color: 'gray'}}>Overture has an opening for a talented, creative Graphic Designer in a fast paced, fun environment that encourages creativity.  You will work on a wide range of print and digital design projects, all of which require an innovative and detail-oriented approach.  This role offers a good balance of projects in which you will use clients’ artwork and prepare it for printing in addition to being able to create your own, custom artwork.</p>
                <p style={{color: 'gray'}}>Our ideal candidate must have a working knowledge of Adobe Photoshop, Illustrator and InDesign. Our perfect candidate will have knowledge of preparing artwork for print materials, screen-printing, embroidery and promotional items. Must be a team player, but can work independently; is personable, friendly and can provide excellent customer service to both internal and external clients. </p>
                <h4>Essential Duties and Responsibilities </h4>
                <ul style={{color: "gray"}}>
                    <li>Develop graphics for products, websites, eBlasts, collateral, logos/branding, and more</li>
                    <li>Convert raster artwork into vector artwork </li>
                    <li>Produce virtual product mockups </li>
                    <li>Maintain composure in stressful situations</li>
                    <li>Ability to manage multiple projects with tight deadlines in a fast-moving work environment</li>
                    <li>Communicate effectively with internal sales teams and clients, and present website designs</li>
                    <li>Work with our copywriter to develop social media content and messaging for other graphics</li>
                    <li>Participate in our team critique of creative work and work collaboratively with the team</li>
                </ul>
                <h4>Qualifications</h4>
                <ul style={{color: "gray"}}>
                    <li>Web design experience a huge plus (coding skills not required, understanding of how designs translate to websites is needed</li>
                    <li>Proficient with Adobe Illustrator, Photoshop, and InDesign</li>
                    <li>Knowledge of typography, hierarchy, color theory, layout, and using a grid</li>
                    <li>UXPin or other prototyping tool experience</li>
                    <li>Knowledge of current best practices for web and print design </li>
                    <li>Product photography experience</li>
                    <li>Proven resourcefulness with creative problem-solving skills</li>
                    <li>Excellent communication skills</li>
                    <li>Detail-oriented</li>
                    <li>Positive, upbeat and team player attitude</li>
                </ul>
                <h4>Preferred Qualifications</h4>
                <ul style={{color: "gray"}}>
                    <li>Proficient in responsive/mobile design</li>
                    <li>Video and video editing experience</li>
                    <li>Mailchimp experience</li>
                </ul>
                <h4>EDUCATION/EXPERIENCE</h4>
                <ul style={{color: "gray"}}>
                    <li>4 year degree in Graphic Design, or equivalent</li>
                    <li>2-5 years of experience working on a graphic design team</li>
                </ul>
                <p>*All candidates will be expected to provide a digital portfolio of work that showcases both digital and print work.*</p>
                <p>*Please note that this role is not a remote position, and the expectation is to be on site daily. Relocation is not provided.*</p>
                {/* <p>*We also have a location in Waukegan, so the ideal candidate would have the flexibility to work at both locations.*</p> */}
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