import React, { Component } from 'react';
import Modal from 'react-modal';
import {Element} from "react-scroll";
import Employee from './Employee';
import WorkCard from './WorkCard';
import { People } from './people/Experts';

import '../../styles/Team.css'

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
                    <Employee image={People.AimeeE.image} name={People.AimeeE.name} title={People.AimeeE.title} clicked={() => this.openModal(8)} />
                    <Employee image={People.AmyW.image} name={People.AmyW.name} title={People.AmyW.title} clicked={() => this.openModal(18)} />
                    <Employee image={People.BenB.image} name={People.BenB.name} title={People.BenB.title} clicked={() => this.openModal(9)} />
                    <Employee image={People.BlakeW.image} name={People.BlakeW.name} title={People.BlakeW.title} clicked={() => this.openModal(19)} />
                    <Employee image={People.BobbyH.image} name={People.BobbyH.name} title={People.BobbyH.title} clicked={() => this.openModal(10)} />
                    <Employee image={People.BruceR.image} name={People.BruceR.name} title={People.BruceR.title} clicked={() => this.openModal(22)} />
                    <Employee image={People.CynthiaL.image} name={People.CynthiaL.name} title={People.CynthiaL.title} clicked={() => this.openModal(12)} />
                    <Employee image={People.Dean.image} name={People.Dean.name} title={People.Dean.title} clicked={() => this.openModal(23)} />
                    <Employee image={People.Ethan.image} name={People.Ethan.name} title={People.Ethan.title} clicked={() => this.openModal(24)} />
                    <Employee image={People.Eric.image} name={People.Eric.name} title={People.Eric.title} clicked={() => this.openModal(28)} />
                    <Employee image={People.FrankM.image} name={People.FrankM.name} title={People.FrankM.title} clicked={() => this.openModal(14)} />
                    <Employee image={People.JeremyM.image} name={People.JeremyM.name} title={People.JeremyM.title} clicked={() => this.openModal(15)} />
                    <Employee image={People.Jenna.image} name={People.Jenna.name} title={People.Jenna.title} clicked={() => this.openModal()} />
                    <Employee image={People.Katelynn.image} name={People.Katelynn.name} title={People.Katelynn.title} clicked={() => this.openModal(25)} />
                    <Employee image={People.Katie.image} name={People.Katie.name} title={People.Katie.title} clicked={() => this.openModal()} />
                    <Employee image={People.Kimberline.image} name={People.Kimberline.name} title={People.Kimberline.title} clicked={() => this.openModal(27)} />
                    <Employee image={People.LarryB.image} name={People.LarryB.name} title={People.LarryB.title} clicked={() => this.openModal(16)} />
                    <Employee image={People.LauraI.image} name={People.LauraI.name} title={People.LauraI.title} clicked={() => this.openModal(17)} />
                    <Employee image={People.Lauren.image} name={People.Lauren.name} title={People.Lauren.title} />
                    <Employee image={People.Lindsay.image} name={People.Lindsay.name} title={People.Lindsay.title}  />
                    <Employee image={People.NicoleS.image} name={People.NicoleS.name} title={People.NicoleS.title} clicked={() => this.openModal(26)} />
                </div>


                {/* All The modals */}
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
                <Modal isOpen={this.state.showModal[12]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.CynthiaL.image} 
                        name={People.CynthiaL.name} 
                        title={People.CynthiaL.title} 
                        bio={People.CynthiaL.bio} movie={People.CynthiaL.movie} vacation={People.CynthiaL.vacation} why={People.CynthiaL.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[13]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.DaveR.image} 
                        name={People.DaveR.name} 
                        title={People.DaveR.title} 
                        bio={People.DaveR.bio} movie={People.DaveR.movie} vacation={People.DaveR.vacation} why={People.DaveR.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[14]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.FrankM.image} 
                        name={People.FrankM.name} 
                        title={People.FrankM.title} 
                        bio={People.FrankM.bio} movie={People.FrankM.movie} vacation={People.FrankM.vacation} why={People.FrankM.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[15]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.JeremyM.image} 
                        name={People.JeremyM.name} 
                        title={People.JeremyM.title} 
                        bio={People.JeremyM.bio} movie={People.JeremyM.movie} vacation={People.JeremyM.vacation} why={People.JeremyM.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[16]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.LarryB.image} 
                        name={People.LarryB.name} 
                        title={People.LarryB.title} 
                        bio={People.LarryB.bio} movie={People.LarryB.movie} vacation={People.LarryB.vacation} why={People.LarryB.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[17]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.LauraI.image} 
                        name={People.LauraI.name} 
                        title={People.LauraI.title} 
                        bio={People.LauraI.bio} movie={People.LauraI.movie} vacation={People.LauraI.vacation} why={People.LauraI.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[18]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.AmyW.image} 
                        name={People.AmyW.name} 
                        title={People.AmyW.title} 
                        bio={People.AmyW.bio} movie={People.AmyW.movie} vacation={People.AmyW.vacation} why={People.AmyW.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[19]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.BlakeW.image} 
                        name={People.BlakeW.name} 
                        title={People.BlakeW.title} 
                        bio={People.BlakeW.bio} movie={People.BlakeW.movie} vacation={People.BlakeW.vacation} why={People.BlakeW.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[22]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.BruceR.image} 
                        name={People.BruceR.name} 
                        title={People.BruceR.title} 
                        bio={People.BruceR.bio} movie={People.BruceR.movie} vacation={People.BruceR.vacation} why={People.BruceR.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[23]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.Dean.image} 
                        name={People.Dean.name} 
                        title={People.Dean.title} 
                        bio={People.Dean.bio} movie={People.Dean.movie} vacation={People.Dean.vacation} why={People.Dean.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[24]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.Ethan.image} 
                        name={People.Ethan.name} 
                        title={People.Ethan.title} 
                        bio={People.Ethan.bio} movie={People.Ethan.movie} vacation={People.Ethan.vacation} why={People.Ethan.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[25]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.Katelynn.image} 
                        name={People.Katelynn.name} 
                        title={People.Katelynn.title} 
                        bio={People.Katelynn.bio} movie={People.Katelynn.movie} vacation={People.Katelynn.vacation} why={People.Katelynn.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[26]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.NicoleS.image} 
                        name={People.NicoleS.name} 
                        title={People.NicoleS.title} 
                        bio={People.NicoleS.bio} movie={People.NicoleS.movie} vacation={People.NicoleS.vacation} why={People.NicoleS.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[27]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.Kimberline.image} 
                        name={People.Kimberline.name} 
                        title={People.Kimberline.title} 
                        bio={People.Kimberline.bio} movie={People.Kimberline.movie} vacation={People.Kimberline.vacation} why={People.Kimberline.why}
                    close={() => this.closeModal()} />
                </Modal>
                <Modal isOpen={this.state.showModal[28]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.Eric.image} 
                        name={People.Eric.name} 
                        title={People.Eric.title} 
                        bio={People.Eric.bio} movie={People.Eric.movie} vacation={People.Eric.vacation} why={People.Eric.why}
                    close={() => this.closeModal()} />
                </Modal>
            </div>
        )
    }
}



export default Experts;