import React, { Component } from 'react';
import Modal from 'react-modal';
import {Element} from "react-scroll";
import Employee from './Employee';
import { People } from './people/Operations';

import '../../styles/Team.css'

class Operations extends Component {

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
                <Element id="operations-orange">Operations</Element>
                <div className="row">
                    <Employee image={People.AnnaN.image} name={People.AnnaN.name} title={People.AnnaN.title} />
                    <Employee image={People.Glenda.image} name={People.Glenda.name} title={People.Glenda.title} />
                    <Employee image={People.Don.image} name={People.Don.name} title={People.Don.title} />
                    <Employee image={People.Corinne.image} name={People.Corinne.name} title={People.Corinne.title} />
                    <Employee image={People.Lisa.image} name={People.Lisa.name} title={People.Lisa.title} />
                    <Employee image={People.Eileen.image} name={People.Eileen.name} title={People.Eileen.title} />
                    <Employee image={People.Liz.image} name={People.Liz.name} title={People.Liz.title} />
                    <Employee image={People.Troy.image} name={People.Troy.name} title={People.Troy.title} />
                    <Employee image={People.Morgan.image} name={People.Morgan.name} title={People.Morgan.title} />                    
                    <Employee image={People.Robyn.image} name={People.Robyn.name} title={People.Robyn.title} />
                    <Employee image={People.EmilyJ.image} name={People.EmilyJ.name} title={People.EmilyJ.title} />
                    <Employee image={People.Javier.image} name={People.Javier.name} title={People.Javier.title} />
                    <Employee image={People.Grace.image} name={People.Grace.name} title={People.Grace.title} />
                    <Employee image={People.Trina.image} name={People.Trina.name} title={People.Trina.title} />
                    <Employee image={People.ChrisM.image} name={People.ChrisM.name} title={People.ChrisM.title} />
                    <Employee image={People.Tiffany.image} name={People.Tiffany.name} title={People.Tiffany.title} />
                    <Employee image={People.Keyla.image} name={People.Keyla.name} title={People.Keyla.title} />
                    <Employee image={People.Holly.image} name={People.Holly.name} title={People.Holly.title} />
                    <Employee image={People.Bethani.image} name={People.Bethani.name} title={People.Bethani.title} />
                    <Employee image={People.Annabelle.image} name={People.Annabelle.name} title={People.Annabelle.title} />
                    <Employee image={People.Blair.image} name={People.Blair.name} title={People.Blair.title} />
                    <Employee image={People.Jeff.image} name={People.Jeff.name} title={People.Jeff.title} />
                    <Employee image={People.Maria.image} name={People.Maria.name} title={People.Maria.title} />
                    <Employee image={People.Joe.image} name={People.Joe.name} title={People.Joe.title} />
                    <Employee image={People.Asia.image} name={People.Asia.name} title={People.Asia.title} />
                </div>
            </div>
        )
    }
}



export default Operations;
