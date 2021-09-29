import React, { Component } from 'react';
import Modal from 'react-modal';
import {Element} from "react-scroll";
import Employee from './Employee';
import WorkCard from './WorkCard';
import { People } from './people/Board';

import '../../styles/Team.css'

class Board extends Component {

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
                <Element id="experts-orange" name="experts">The Board</Element>
                <div className="row">
                    <Employee image={People.MichaelM.image} name={People.MichaelM.name} title={People.MichaelM.title} clicked={() => this.openModal(0)} />
                    <Employee image={People.Trish.image} name={People.Trish.name} title={People.Trish.title} clicked={() => this.openModal(1)} />
                    <Employee image={People.Stuart.image} name={People.Stuart.name} title={People.Stuart.title} clicked={() => this.openModal(2)} />
                    <Employee image={People.Justin.image} name={People.Justin.name} title={People.Justin.title} clicked={() => this.openModal(3)} />
                    <Employee image={People.Lou.image} name={People.Lou.name} title={People.Lou.title} clicked={() => this.openModal(4)} />
                    <Employee image={People.JoG.image} name={People.JoG.name} title={People.JoG.title} clicked={() => this.openModal(5)} />

                </div>


                {/* All The modals */}
                <Modal isOpen={this.state.showModal[0]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.MichaelM.image} 
                        name={People.MichaelM.name} 
                        title={People.MichaelM.title} 
                        bio={People.MichaelM.bio} movie={People.MichaelM.movie} vacation={People.MichaelM.vacation} why={People.MichaelM.why}
                    close={() => this.closeModal()}  />
                </Modal>
                <Modal isOpen={this.state.showModal[1]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.Trish.image} 
                        name={People.Trish.name} 
                        title={People.Trish.title} 
                        bio={People.Trish.bio} movie={People.Trish.movie} vacation={People.Trish.vacation} why={People.Trish.why}
                    close={() => this.closeModal()}  />
                </Modal>
                <Modal isOpen={this.state.showModal[2]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.Stuart.image} 
                        name={People.Stuart.name} 
                        title={People.Stuart.title} 
                        bio={People.Stuart.bio} movie={People.Stuart.movie} vacation={People.Stuart.vacation} why={People.Stuart.why}
                    close={() => this.closeModal()}  />
                </Modal>
                <Modal isOpen={this.state.showModal[3]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.Justin.image} 
                        name={People.Justin.name} 
                        title={People.Justin.title} 
                        bio={People.Justin.bio} movie={People.Justin.movie} vacation={People.Justin.vacation} why={People.Justin.why}
                    close={() => this.closeModal()}  />
                </Modal>
                <Modal isOpen={this.state.showModal[4]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.Lou.image} 
                        name={People.Lou.name} 
                        title={People.Lou.title} 
                        bio={People.Lou.bio} movie={People.Lou.movie} vacation={People.Lou.vacation} why={People.Lou.why}
                    close={() => this.closeModal()}  />
                </Modal>
                <Modal isOpen={this.state.showModal[5]} onRequestClose={this.closeModal} className="employee-modal">
                    <WorkCard 
                        image={People.JoG.image} 
                        name={People.JoG.name} 
                        title={People.JoG.title} 
                        bio={People.JoG.bio} movie={People.JoG.movie} vacation={People.JoG.vacation} why={People.JoG.why}
                    close={() => this.closeModal()}  />
                </Modal>
            </div>
        )
    }
}



export default Board;