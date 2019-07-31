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
                    <Employee image={People.Emily.image} name={People.Emily.name} title={People.Emily.title} />
                    <Employee image={People.Briana.image} name={People.Briana.name} title={People.Briana.title} />                   
                </div>
            </div>
        )
    }
}



export default Creative;
