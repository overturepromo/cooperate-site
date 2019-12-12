import React, { Component } from 'react';
import Modal from 'react-modal';
import {Element} from "react-scroll";
import Employee from './Employee';
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
                <Element id="creative-orange">Creative</Element>
                <div className="row">
                    <Employee image={People.Christine.image} name={People.Christine.name} title={People.Christine.title} />
                    <Employee image={People.Laura.image} name={People.Laura.name} title={People.Laura.title} />
                    <Employee image={People.Briana.image} name={People.Briana.name} title={People.Briana.title} />
                    <Employee image={People.Duane.image} name={People.Duane.name} title={People.Duane.title} />   
                    <Employee image={People.Brent.image} name={People.Brent.name} title={People.Brent.title} />   
                    <Employee image={People.Enzo.image} name={People.Enzo.name} title={People.Enzo.title} />                      
                </div>
            </div>
        )
    }
}



export default Creative;
