import React, { Component } from 'react';
import Modal from 'react-modal';
import {Element} from "react-scroll";
import Employee from './Employee';
import NotPictured from './NotPictured';
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
                    <Employee image={People.Abi.image} name={People.Abi.name} title={People.Abi.title} />
                    <Employee image={People.Mario.image} name={People.Mario.name} title={People.Mario.title} />
                    <Employee image={People.Ismeal.image} name={People.Ismeal.name} title={People.Ismeal.title} />
                    <Employee image={People.Salvador.image} name={People.Salvador.name} title={People.Salvador.title} />
                    <Employee image={People.Nancy.image} name={People.Nancy.name} title={People.Nancy.title} />
                    <Employee image={People.Estella.image} name={People.Estella.name} title={People.Estella.title} />
                    <Employee image={People.Gonzalo.image} name={People.Gonzalo.name} title={People.Gonzalo.title} />
                    {/* <Employee image={People.Jacob.image} name={People.Jacob.name} title={People.Jacob.title} /> */}
                    <Employee image={People.Joesph.image} name={People.Joesph.name} title={People.Joesph.title} />
                    <Employee image={People.MattC.image} name={People.MattC.name} title={People.MattC.title} />
                    <Employee image={People.MattN.image} name={People.MattN.name} title={People.MattN.title} />
                    {/* <Employee image={People.Juvenita.image} name={People.Juvenita.name} title={People.Juvenita.title} /> */}
                    <Employee image={People.Byron.image} name={People.Byron.name} title={People.Byron.title} />
                    <Employee image={People.Alejandra.image} name={People.Alejandra.name} title={People.Alejandra.title} />
                    <Employee image={People.Elizabeth.image} name={People.Elizabeth.name} title={People.Elizabeth.title} />
                    <Employee image={People.Maria.image} name={People.Maria.name} title={People.Maria.title} />
                    <Employee image={People.Guillermina.image} name={People.Guillermina.name} title={People.Guillermina.title} />
                    <Employee image={People.Edith.image} name={People.Edith.name} title={People.Edith.title} />
                    <Employee image={People.William.image} name={People.William.name} title={People.William.title} />
                    {/* <Employee image={People.Angelica.image} name={People.Angelica.name} title={People.Angelica.title} /> */}
                    <Employee image={People.Doris.image} name={People.Doris.name} title={People.Doris.title} />
                    <Employee image={People.Michael.image} name={People.Michael.name} title={People.Michael.title} />
                    <Employee image={People.Brandy.image} name={People.Brandy.name} title={People.Brandy.title} />
                    {/* <Employee image={People.CarlosO.image} name={People.CarlosO.name} title={People.CarlosO.title} /> */}
                    <Employee image={People.Epi.image} name={People.Epi.name} title={People.Epi.title} />
                </div>
                <Element id="creative-orange">Not Pictured</Element>
                <div className="row" style={{marginBottom: '50px'}}>
                    <NotPictured name={People.Brian.name} title={People.Brian.title} />
                    <NotPictured name={People.Francisco.name} title={People.Francisco.title} />
                    <NotPictured name={People.Natalie.name} title={People.Natalie.title} />
                </div>
            </div>
        )
    }
}



export default Warehouse;
