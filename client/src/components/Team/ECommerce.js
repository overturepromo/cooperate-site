import React, { Component } from 'react';
import Modal from 'react-modal';
import {Element} from "react-scroll";
import Employee from './Employee';
import { People } from './people/ECom';

import '../../styles/Team.css'

class ECommerce extends Component {

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
                <Element id="e-commerce-orange">E-Commerce</Element>
                <div className="row">
                    <Employee image={People.Ethan.image} name={People.Ethan.name} title={People.Ethan.title} />
                    <Employee image={People.Anne.image} name={People.Anne.name} title={People.Anne.title} />
                    <Employee image={People.Ashley.image} name={People.Ashley.name} title={People.Ashley.title} />
                    <Employee image={People.Brittany.image} name={People.Brittany.name} title={People.Brittany.title} />
                    <Employee image={People.Dean.image} name={People.Dean.name} title={People.Dean.title} />
                    <Employee image={People.Jeff.image} name={People.Jeff.name} title={People.Jeff.title} />
                    <Employee image={People.John.image} name={People.John.name} title={People.John.title} />
                    <Employee image={People.Katelynn.image} name={People.Katelynn.name} title={People.Katelynn.title} />
                    <Employee image={People.Michael.image} name={People.Michael.name} title={People.Michael.title} />
                    <Employee image={People.Nicole.image} name={People.Nicole.name} title={People.Nicole.title} />
                    <Employee image={People.Victoria.image} name={People.Victoria.name} title={People.Victoria.title} />
                    <Employee image={People.Gabrielle.image} name={People.Gabrielle.name} title={People.Gabrielle.title} />
                    <Employee image={People.Sarah.image} name={People.Sarah.name} title={People.Sarah.title} />
                </div>
            </div>
        )
    }
}



export default ECommerce;
