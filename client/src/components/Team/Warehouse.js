import React, { Component } from 'react';
import Modal from 'react-modal';
import {Element} from "react-scroll";
import Employee from './Employee';
import { People } from './people/Warehouse';

import '../../styles/Team.css'

class Warehouse extends Component {

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
                <Element id="warehouse-orange">Warehouse</Element>
                <div className="row">
                    <Employee image={People.Jeremy.image} name={People.Jeremy.name} title={People.Jeremy.title} />
                    <Employee image={People.Abi.image} name={People.Abi.name} title={People.Abi.title} />
                    <Employee image={People.Mario.image} name={People.Mario.name} title={People.Mario.title} />
                    <Employee image={People.Karla.image} name={People.Karla.name} title={People.Karla.title} />
                    <Employee image={People.Ismeal.image} name={People.Ismeal.name} title={People.Ismeal.title} />
                    <Employee image={People.Justin.image} name={People.Justin.name} title={People.Justin.title} />
                    <Employee image={People.Salvador.image} name={People.Salvador.name} title={People.Salvador.title} />
                    <Employee image={People.Nancy.image} name={People.Nancy.name} title={People.Nancy.title} />
                    <Employee image={People.Estella.image} name={People.Estella.name} title={People.Estella.title} />
                    <Employee image={People.Gloria.image} name={People.Gloria.name} title={People.Gloria.title} />
                    <Employee image={People.Abbey.image} name={People.Abbey.name} title={People.Abbey.title} />
                    <Employee image={People.Julio.image} name={People.Julio.name} title={People.Julio.title} />
                    <Employee image={People.Jacob.image} name={People.Jacob.name} title={People.Jacob.title} />
                    <Employee image={People.Aristarco.image} name={People.Aristarco.name} title={People.Aristarco.title} />
                    <Employee image={People.Jose.image} name={People.Jose.name} title={People.Jose.title} />
                    <Employee image={People.Joesph.image} name={People.Joesph.name} title={People.Joesph.title} />
                    <Employee image={People.Mayla.image} name={People.Mayla.name} title={People.Mayla.title} />
                    <Employee image={People.MattC.image} name={People.MattC.name} title={People.MattC.title} />
                    <Employee image={People.MattN.image} name={People.MattN.name} title={People.MattN.title} />
                    <Employee image={People.Juvenita.image} name={People.Juvenita.name} title={People.Juvenita.title} />
                    <Employee image={People.Natalie.image} name={People.Natalie.name} title={People.Natalie.title} />
                    <Employee image={People.Byron.image} name={People.Byron.name} title={People.Byron.title} />
                    <Employee image={People.Alejandra.image} name={People.Alejandra.name} title={People.Alejandra.title} />
                    <Employee image={People.Araceli.image} name={People.Araceli.name} title={People.Araceli.title} />
                    <Employee image={People.David.image} name={People.David.name} title={People.David.title} />
                    <Employee image={People.Elizabeth.image} name={People.Elizabeth.name} title={People.Elizabeth.title} />
                    <Employee image={People.Maria.image} name={People.Maria.name} title={People.Maria.title} />
                    <Employee image={People.Guillermina.image} name={People.Guillermina.name} title={People.Guillermina.title} />
                    <Employee image={People.GloriaVT.image} name={People.GloriaVT.name} title={People.GloriaVT.title} />
                    <Employee image={People.Edith.image} name={People.Edith.name} title={People.Edith.title} />
                </div>
            </div>
        )
    }
}



export default Warehouse;
