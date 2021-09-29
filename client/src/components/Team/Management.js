import React, { Component } from 'react';
import Modal from 'react-modal';
import {Element} from "react-scroll";
import Employee from './Employee';
import WorkCard from './WorkCard';
import { People } from './people/Management';

import '../../styles/Team.css'

class Management extends Component {

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
                <Element id="experts-orange" name="experts">The Management Team</Element>
                <div className="row">
                    <Employee image={People.JoG.image} name={People.JoG.name} title={People.JoG.title} clicked={() => this.openModal(0)} />
                    <Employee image={People.JoeH.image} name={People.JoeH.name} title={People.JoeH.title} clicked={() => this.openModal(2)} />
                    <Employee image={People.RonG.image} name={People.RonG.name} title={People.RonG.title} clicked={() => this.openModal(1)} />
                    <Employee image={People.BrianL.image} name={People.BrianL.name} title={People.BrianL.title} clicked={() => this.openModal(5)} />
                    <Employee image={People.TejS.image} name={People.TejS.name} title={People.TejS.title} clicked={() => this.openModal(3)} />
                    <Employee image={People.MikeW.image} name={People.MikeW.name} title={People.MikeW.title} clicked={() => this.openModal(4)} />
                    <Employee image={People.ChristinaN.image} name={People.ChristinaN.name} title={People.ChristinaN.title} clicked={() => this.openModal(6)} />
                    <Employee image={People.David.image} name={People.David.name} title={People.David.title} clicked={() => this.openModal(21)} />
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
                <Modal isOpen={this.state.showModal[2]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.JoeH.image} 
                        name={People.JoeH.name} 
                        title={People.JoeH.title} 
                        bio={People.JoeH.bio} movie={People.JoeH.movie} vacation={People.JoeH.vacation} why={People.JoeH.why} 
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[3]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.TejS.image} 
                        name={People.TejS.name} 
                        title={People.TejS.title} 
                        bio={People.TejS.bio} movie={People.TejS.movie} vacation={People.TejS.vacation} why={People.TejS.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[4]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.MikeW.image} 
                        name={People.MikeW.name} 
                        title={People.MikeW.title} 
                        bio={People.MikeW.bio} movie={People.MikeW.movie} vacation={People.MikeW.vacation} why={People.MikeW.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[5]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.BrianL.image} 
                        name={People.BrianL.name} 
                        title={People.BrianL.title} 
                        bio={People.BrianL.bio} movie={People.BrianL.movie} vacation={People.BrianL.vacation} why={People.BrianL.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[6]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.ChristinaN.image} 
                        name={People.ChristinaN.name} 
                        title={People.ChristinaN.title} 
                        bio={People.ChristinaN.bio} movie={People.ChristinaN.movie} vacation={People.ChristinaN.vacation} why={People.ChristinaN.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[21]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.David.image} 
                        name={People.David.name} 
                        title={People.David.title} 
                        bio={People.David.bio} movie={People.David.movie} vacation={People.David.vacation} why={People.David.why}
                    close={() => this.closeModal()} />
                </Modal>
            </div>
        )
    }
}



export default Management;