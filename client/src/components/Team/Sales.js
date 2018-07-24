import React, { Component } from 'react';
import Modal from 'react-modal';
import {Element} from "react-scroll";
import Employee from './Employee';
import WorkCard from './WorkCard';
import { People } from './people/Experts';

import '../../styles/Team.css'

class Sales extends Component {

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
                <Element id="sales-orange" name="experts">Sales Staff</Element>
                <div className="row">
                    <Employee image={People.JoG.image} name={People.JoG.name} title={People.JoG.title} clicked={() => this.openModal(0)} />
                    <Employee image={People.RonG.image} name={People.RonG.name} title={People.RonG.title} clicked={() => this.openModal(1)} />
                </div>


                {/* All The modals */}
                <Modal isOpen={this.state.showModal[0]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.JoG.image} 
                        name={People.JoG.name} 
                        title={People.JoG.title} 
                        bio={People.JoG.bio} movie={People.JoG.movie} vacation={People.JoG.vacation} why={People.JoG.why}
                    close={() => this.closeModal()}  />
                </Modal>
                <Modal isOpen={this.state.showModal[1]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.RonG.image} 
                        name={People.RonG.name} 
                        title={People.RonG.title} 
                        bio={People.RonG.bio} movie={People.RonG.movie} vacation={People.RonG.vacation} why={People.RonG.why}
                    close={() => this.closeModal()} />
                </Modal>
            </div>
        )
    }
}



export default Sales;


{/* <Employee image={People..image} name={People..name} title={People..title} clicked={() => this.openModal(7)} /> */}


{/* <Modal isOpen={this.state.showModal[7]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People..image} 
                        name={People..name} 
                        title={People..title} 
                        bio={People..bio} movie={People..movie} vacation={People..vacation} why={People..why}
                    close={() => this.closeModal()} />
                </Modal> */}