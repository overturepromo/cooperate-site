import React, { Component } from 'react';
import Modal from 'react-modal';
import {Element} from "react-scroll";
import Employee from './Employee';
import NotPictured from './NotPictured';
import { People } from './people/DevIT';

import '../../styles/Team.css'

class DevIT extends Component {

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
                <Element id="creative-orange">IT</Element>
                <div className="row">
                    <Employee image={People.Shawn.image} name={People.Shawn.name} title={People.Shawn.title} />
                    <Employee image={People.Chintan.image} name={People.Chintan.name} title={People.Chintan.title} />                                         
                </div>
                <Element id="creative-orange">Web Dev</Element>
                <div className="row">
                    <Employee image={People.Charles.image} name={People.Charles.name} title={People.Charles.title} />
                    <Employee image={People.Melissa.image} name={People.Melissa.name} title={People.Melissa.title} />
                    <Employee image={People.Josella.image} name={People.Josella.name} title={People.Josella.title} />
                    <Employee image={People.Kevin.image} name={People.Kevin.name} title={People.Kevin.title} />
                    <Employee image={People.Dave.image} name={People.Dave.name} title={People.Dave.title} />
                    <Employee image={People.Brian.image} name={People.Brian.name} title={People.Brian.title} />
                    <Employee image={People.Jacob.image} name={People.Jacob.name} title={People.Jacob.title} />
                    <Employee image={People.Sam.image} name={People.Sam.name} title={People.Sam.title} />
                    <Employee image={People.Briana.image} name={People.Briana.name} title={People.Briana.title} />
                </div>
                <Element id="creative-orange">Not Pictured</Element>
                <div className="row" style={{marginBottom: '50px'}}>
                    <NotPictured name={People.Mark.name} title={People.Mark.title} />
                    <NotPictured name={People.KevinS.name} title={People.KevinS.title} />
                </div>
            </div>
        )
    }
}



export default DevIT;
