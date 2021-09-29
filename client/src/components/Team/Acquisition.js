import React, { Component } from 'react';
import Modal from 'react-modal';
import {Element} from "react-scroll";
import Employee from './Employee';
import WorkCard from './WorkCard';
import { People } from './people/Acquisition';

import '../../styles/Team.css'

class Acquisition extends Component {

    state = {
        showModal: [false]
    };

    componentWillMount() {
        Modal.setAppElement('body');
    }
     
    openModal = (index) => {
        const arr = [...this.state.showModal]
        arr[index] = true
        this.setState({showModal: arr});
    }
     
    closeModal = (index) => {
        this.setState({showModal: false});
    }

    render(){
        return (
            <div className="container">
                <Element id="experts-orange" name="experts">The Acquisition Team</Element>
                <div className="row">
                    <Employee image={People.Lou.image} name={People.Lou.name} title={People.Lou.title} clicked={() => this.openModal(0)} />
                    <Employee image={People.Mark.image} name={People.Mark.name} title={People.Mark.title} clicked={() => this.openModal(1)} />
                    <Employee image={People.Michael.image} name={People.Michael.name} title={People.Michael.title} clicked={() => this.openModal(2)} />
                </div>


                {/* All The modals */}
                <Modal isOpen={this.state.showModal[0]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.Lou.image} 
                        name={People.Lou.name} 
                        title={People.Lou.title} 
                        bio={People.Lou.bio} movie={People.Lou.movie} vacation={People.Lou.vacation} why={People.Lou.why}
                    close={() => this.closeModal()}  />
                </Modal>
                <Modal isOpen={this.state.showModal[1]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.Mark.image} 
                        name={People.Mark.name} 
                        title={People.Mark.title} 
                        bio={People.Mark.bio} movie={People.Mark.movie} vacation={People.Mark.vacation} why={People.Mark.why}
                    close={() => this.closeModal()}  />
                </Modal>
                <Modal isOpen={this.state.showModal[2]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.Michael.image} 
                        name={People.Michael.name} 
                        title={People.Michael.title} 
                        bio={People.Michael.bio} movie={People.Michael.movie} vacation={People.Michael.vacation} why={People.Michael.why}
                    close={() => this.closeModal()}  />
                </Modal>
            </div>
        )
    }
}



export default Acquisition;