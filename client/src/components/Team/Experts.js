import React, { Component } from 'react';
import Modal from 'react-modal';
import {Element} from "react-scroll";
import Employee from './Employee';
import WorkCard from './WorkCard';
import { People } from './people/Experts';
import PlaceHolder from '../../images/team/ExpertsPhotos/PortraitPlaceholder.png'

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
                    <Employee image={People.CynthiaL.image} name={People.CynthiaL.name} title={People.CynthiaL.title} clicked={() => this.openModal(12)} />
                    <Employee image={People.DaveR.image} name={People.DaveR.name} title={People.DaveR.title} clicked={() => this.openModal(13)} />
                    <Employee image={People.FrankM.image} name={People.FrankM.name} title={People.FrankM.title} clicked={() => this.openModal(14)} />
                    <Employee image={People.JeremyM.image} name={People.JeremyM.name} title={People.JeremyM.title} clicked={() => this.openModal(15)} />
                    <Employee image={People.LarryB.image} name={People.LarryB.name} title={People.LarryB.title} clicked={() => this.openModal(16)} />
                    <Employee image={People.LauraI.image} name={People.LauraI.name} title={People.LauraI.title} clicked={() => this.openModal(17)} />
                    <Employee image={People.AmyW.image} name={People.AmyW.name} title={People.AmyW.title} clicked={() => this.openModal(18)} />
                    <Employee image={PlaceHolder} name={People.BlakeW.name} title={People.BlakeW.title} clicked={() => this.openModal(19)} />
                    <Employee image={People.BruceR.image} name={People.BruceR.name} title={People.BruceR.title} clicked={() => this.openModal(20)} />
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
                <Modal isOpen={this.state.showModal[20]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.BruceR.image} 
                        name={People.BruceR.name} 
                        title={People.BruceR.title} 
                        bio={People.BruceR.bio} movie={People.BruceR.movie} vacation={People.BruceR.vacation} why={People.BruceR.why}
                    close={() => this.closeModal()} />
                </Modal>
            </div>
        )
    }
}



export default Experts;