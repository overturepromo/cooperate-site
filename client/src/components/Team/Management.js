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
                <Element id="experts-orange" name="experts">Leadership</Element>
                <div className="row">
                    <Employee image={People.JoG.image} name={People.JoG.name} title={People.JoG.title} clicked={() => this.openModal(0)} />
                    <Employee image={People.JoeH.image} name={People.JoeH.name} title={People.JoeH.title} clicked={() => this.openModal(2)} />
                    <Employee image={People.BrianL.image} name={People.BrianL.name} title={People.BrianL.title} clicked={() => this.openModal(5)} />
                    <Employee image={People.TejS.image} name={People.TejS.name} title={People.TejS.title} clicked={() => this.openModal(3)} />
                    <Employee image={People.MikeW.image} name={People.MikeW.name} title={People.MikeW.title} clicked={() => this.openModal(4)} />
                    <Employee image={People.ChristinaN.image} name={People.ChristinaN.name} title={People.ChristinaN.title} clicked={() => this.openModal(6)} />
                    <Employee image={People.Aldo.image} name={People.Aldo.name} title={People.Aldo.title} />
                    <Employee image={People.ChrisS.image} name={People.ChrisS.name} title={People.ChrisS.title} />
                </div>
                <Element id="experts-orange" name="experts">The Board</Element>
                <div className="row">
                    <Employee image={People.MichaelM.image} name={People.MichaelM.name} title={People.MichaelM.title} clicked={() => this.openModal(25)} />
                    <Employee image={People.Trish.image} name={People.Trish.name} title={People.Trish.title} clicked={() => this.openModal(26)} />
                    <Employee image={People.Stuart.image} name={People.Stuart.name} title={People.Stuart.title} clicked={() => this.openModal(27)} />
                    <Employee image={People.Justin.image} name={People.Justin.name} title={People.Justin.title} clicked={() => this.openModal(28)} />
                    {/* <Employee image={People.Lou.image} name={People.Lou.name} title={People.Lou.title} clicked={() => this.openModal(22)} /> */}
                    <Employee image={People.JoG.image} name={People.JoG.name} title={People.JoG.title} clicked={() => this.openModal(0)} />
                </div>
                {/* <Element id="experts-orange" name="experts">The Acquisition Team</Element>
                <div className="row">
                    <Employee image={People.Lou.image} name={People.Lou.name} title={People.Lou.title} clicked={() => this.openModal(22)} />
                    <Employee image={People.Mark.image} name={People.Mark.name} title={People.Mark.title} clicked={() => this.openModal(23)} />
                    <Employee image={People.MichaelN.image} name={People.MichaelN.name} title={People.MichaelN.title} clicked={() => this.openModal(24)} />
                </div> */}

                {/* All The modals */}
                <Modal isOpen={this.state.showModal[0]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.JoG.image} 
                        name={People.JoG.name} 
                        title={People.JoG.title} 
                        bio={People.JoG.bio} movie={People.JoG.movie} vacation={People.JoG.vacation} why={People.JoG.why}
                    close={() => this.closeModal()}  />
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
                {/* <Modal isOpen={this.state.showModal[22]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.Lou.image} 
                        name={People.Lou.name} 
                        title={People.Lou.title} 
                        bio={People.Lou.bio} movie={People.Lou.movie} vacation={People.Lou.vacation} why={People.Lou.why}
                    close={() => this.closeModal()}  />
                </Modal> */}
                <Modal isOpen={this.state.showModal[23]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.Mark.image} 
                        name={People.Mark.name} 
                        title={People.Mark.title} 
                        bio={People.Mark.bio} movie={People.Mark.movie} vacation={People.Mark.vacation} why={People.Mark.why}
                    close={() => this.closeModal()}  />
                </Modal>
                <Modal isOpen={this.state.showModal[24]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.MichaelN.image} 
                        name={People.MichaelN.name} 
                        title={People.MichaelN.title} 
                        bio={People.MichaelN.bio} movie={People.MichaelN.movie} vacation={People.MichaelN.vacation} why={People.MichaelN.why}
                    close={() => this.closeModal()}  />
                </Modal>
                <Modal isOpen={this.state.showModal[25]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.MichaelM.image} 
                        name={People.MichaelM.name} 
                        title={People.MichaelM.title} 
                        bio={People.MichaelM.bio} movie={People.MichaelM.movie} vacation={People.MichaelM.vacation} why={People.MichaelM.why}
                    close={() => this.closeModal()}  />
                </Modal>
                <Modal isOpen={this.state.showModal[26]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.Trish.image} 
                        name={People.Trish.name} 
                        title={People.Trish.title} 
                        bio={People.Trish.bio} movie={People.Trish.movie} vacation={People.Trish.vacation} why={People.Trish.why}
                    close={() => this.closeModal()}  />
                </Modal>
                <Modal isOpen={this.state.showModal[27]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.Stuart.image} 
                        name={People.Stuart.name} 
                        title={People.Stuart.title} 
                        bio={People.Stuart.bio} movie={People.Stuart.movie} vacation={People.Stuart.vacation} why={People.Stuart.why}
                    close={() => this.closeModal()}  />
                </Modal>
                <Modal isOpen={this.state.showModal[28]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.Justin.image} 
                        name={People.Justin.name} 
                        title={People.Justin.title} 
                        bio={People.Justin.bio} movie={People.Justin.movie} vacation={People.Justin.vacation} why={People.Justin.why}
                    close={() => this.closeModal()}  />
                </Modal>
            </div>
        )
    }
}



export default Management;