import React, { Component } from 'react';
import Modal from 'react-modal';
import {Element} from "react-scroll";
import Employee from './Employee';
import { People } from './people/Embrodiery';

import '../../styles/Team.css'

class Embrodiery extends Component {

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
                <Element id="embrodiery-orange">Embroidery & Screen Printing</Element>
                <div className="row">
                    <Employee image={People.Wendy.image} name={People.Wendy.name} title={People.Wendy.title} />
                    <Employee image={People.Nastia.image} name={People.Nastia.name} title={People.Nastia.title} />
                    <Employee image={People.Gabriel.image} name={People.Gabriel.name} title={People.Gabriel.title} />
                    <Employee image={People.Jose.image} name={People.Jose.name} title={People.Jose.title} />
                    <Employee image={People.Kilino.image} name={People.Kilino.name} title={People.Kilino.title} />
                    <Employee image={People.Edgar.image} name={People.Edgar.name} title={People.Edgar.title} />
                    <Employee image={People.Esmeralda.image} name={People.Esmeralda.name} title={People.Esmeralda.title} />
                    <Employee image={People.Maria.image} name={People.Maria.name} title={People.Maria.title} />
                    <Employee image={People.Adriana.image} name={People.Adriana.name} title={People.Adriana.title} />
                    <Employee image={People.Carolina.image} name={People.Carolina.name} title={People.Carolina.title} />
                    <Employee image={People.Dorotea.image} name={People.Dorotea.name} title={People.Dorotea.title} />
                    <Employee image={People.Laura.image} name={People.Laura.name} title={People.Laura.title} />
                    <Employee image={People.Daniela.image} name={People.Daniela.name} title={People.Daniela.title} />
                    <Employee image={People.Zenaida.image} name={People.Zenaida.name} title={People.Zenaida.title} />
                    <Employee image={People.Victor.image} name={People.Victor.name} title={People.Victor.title} />
                    <Employee image={People.Tina.image} name={People.Tina.name} title={People.Tina.title} />
                    <Employee image={People.Inocente.image} name={People.Inocente.name} title={People.Inocente.title} />
                </div>
            </div>
        )
    }
}



export default Embrodiery;
