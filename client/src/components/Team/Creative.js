import React, { Component } from 'react';
import Modal from 'react-modal';
import {Element} from "react-scroll";
import Employee from './Employee';
import NotPictured from './NotPictured';
import { People } from './people/Creative';

import '../../styles/Team.css'

class Creative extends Component {

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
                <Element id="creative-orange">Creative & Marketing</Element>
                <div className="row">
                    <Employee image={People.Victoria.image} name={People.Victoria.name} title={People.Victoria.title} />
                    <Employee image={People.Elizabeth.image} name={People.Elizabeth.name} title={People.Elizabeth.title} />
                    <Employee image={People.Duane.image} name={People.Duane.name} title={People.Duane.title} />   
                    <Employee image={People.Enzo.image} name={People.Enzo.name} title={People.Enzo.title} /> 
                    <Employee image={People.Christopher.image} name={People.Christopher.name} title={People.Christopher.title} />
                    <Employee image={People.Samantha.image} name={People.Samantha.name} title={People.Samantha.title} />
                    <Employee image={People.Evie.image} name={People.Evie.name} title={People.Evie.title} />
                    <Employee image={People.Brandon.image} name={People.Brandon.name} title={People.Brandon.title} />
                </div>
                <Element id="creative-orange">Not Pictured</Element>
                <div className="row" style={{marginBottom: '50px'}}>
                    <NotPictured name={People.Jamie.name} title={People.Jamie.title} />
                    <NotPictured name={People.MeganKuerschner.name} title={People.MeganKuerschner.title} />
                </div>
            </div>
        )
    }
}



export default Creative;
