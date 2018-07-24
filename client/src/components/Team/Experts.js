import React, { Component } from 'react';
import Modal from 'react-modal';
import {Element} from "react-scroll";
import Employee from './Employee';
import WorkCard from './WorkCard';
import { People } from './People';

import '../../styles/Team.css'

import Speaker from '../../images/home/rocknroll_img.jpg';
import Close from '../../images/home/close.svg'



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
                <Element id="experts-orange" name="experts">The Experts</Element>
                <div className="row">
                    <Employee image={People.JoG.image} name={People.JoG.name} title={People.JoG.title} clicked={() => this.openModal(0)} />
                    <Employee image={People.RonG.image} name={People.RonG.name} title={People.RonG.title} clicked={() => this.openModal(1)} />
                    <Employee image={People.JoeH.image} name={People.JoeH.name} title={People.JoeH.title} clicked={() => this.openModal(2)} />
                    <Employee image={People.TejS.image} name={People.TejS.name} title={People.TejS.title} clicked={() => this.openModal(3)} />
                    <Employee image={People.MikeW.image} name={People.MikeW.name} title={People.MikeW.title} clicked={() => this.openModal(4)} />
                    <Employee image={People.BrianL.image} name={People.BrianL.name} title={People.BrianL.title} clicked={() => this.openModal(5)} />
                    <Employee image={People.ChristinaN.image} name={People.ChristinaN.name} title={People.ChristinaN.title} clicked={() => this.openModal(6)} />
                    <Employee image={People.SueN.image} name={People.SueN.name} title={People.SueN.title} clicked={() => this.openModal(7)} />
                    <Employee image={People.AimeeE.image} name={People.AimeeE.name} title={People.AimeeE.title} clicked={() => this.openModal(8)} />
                    <Employee image={People.BenB.image} name={People.BenB.name} title={People.BenB.title} clicked={() => this.openModal(9)} />
                    <Employee image={People.BobbyH.image} name={People.BobbyH.name} title={People.BobbyH.title} clicked={() => this.openModal(10)} />
                    <Employee image={People.CodyS.image} name={People.CodyS.name} title={People.CodyS.title} clicked={() => this.openModal(11)} />
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
                <Modal isOpen={this.state.showModal[7]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.SueN.image} 
                        name={People.SueN.name} 
                        title={People.SueN.title} 
                        bio={People.SueN.bio} movie={People.SueN.movie} vacation={People.SueN.vacation} why={People.SueN.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[8]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.AimeeE.image} 
                        name={People.AimeeE.name} 
                        title={People.AimeeE.title} 
                        bio={People.AimeeE.bio} movie={People.AimeeE.movie} vacation={People.AimeeE.vacation} why={People.AimeeE.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[9]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.BenB.image} 
                        name={People.BenB.name} 
                        title={People.BenB.title} 
                        bio={People.BenB.bio} movie={People.BenB.movie} vacation={People.BenB.vacation} why={People.BenB.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[10]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.BobbyH.image} 
                        name={People.BobbyH.name} 
                        title={People.BobbyH.title} 
                        bio={People.BobbyH.bio} movie={People.BobbyH.movie} vacation={People.BobbyH.vacation} why={People.BobbyH.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[11]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.CodyS.image} 
                        name={People.CodyS.name} 
                        title={People.CodyS.title} 
                        bio={People.CodyS.bio} movie={People.CodyS.movie} vacation={People.CodyS.vacation} why={People.CodyS.why}
                    close={() => this.closeModal()} />
                </Modal>
            </div>
        )
    }
}



export default Experts;


{/* <Employee image={People..image} name={People..name} title={People..title} clicked={() => this.openModal(7)} /> */}


{/* <Modal isOpen={this.state.showModal[7]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People..image} 
                        name={People..name} 
                        title={People..title} 
                        bio={People..bio} movie={People..movie} vacation={People..vacation} why={People..why}
                    close={() => this.closeModal()} />
                </Modal> */}