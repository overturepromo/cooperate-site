import React, { Component } from 'react';
import Modal from 'react-modal';
import Employee from './Employee';
import WorkCard from './WorkCard';
import { People } from './People';

import '../../styles/Team.css'

import Speaker from '../../images/home/rocknroll_img.jpg';

class Experts extends Component {

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
                <h4 id="experts-orange">The Experts</h4>
                <div className="row">
                    <Employee image={People.JoG.image} name={People.JoG.name} title={People.JoG.title} clicked={() => this.openModal(0)} />
                    <Employee image={People.JoG.image} name={People.RonG.name} title={People.RonG.title} clicked={() => this.openModal(1)} />
                    <Employee image={People.JoG.image} name="Tej Shah" title="" clicked={() => this.openModal(2)} />
                    <Employee image={People.JoG.image} name="Mike Wilson" title="" clicked={() => this.openModal(3)} />
                </div>


                {/* All The modals */}
                <Modal isOpen={this.state.showModal[0]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard image={People.JoG.image} name={People.JoG.name} title={People.JoG.title} bio={People.JoG.bio} close={() => this.closeModal()}  />
                </Modal>
                <Modal isOpen={this.state.showModal[1]} onRequestClose={this.closeModal}>
                    <WorkCard image={People.JoG.image} name={People.RonG.name} title={People.RonG.title} bio={People.RonG.bio} close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[2]} onRequestClose={this.closeModal}>
                    <WorkCard image={People.JoG.image} close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[3]} onRequestClose={this.closeModal} className="employee-modal">
                <WorkCard image={People.JoG.image} close={() => this.closeModal()} />
                </Modal>
            </div>
        )
    }
}



export default Experts;