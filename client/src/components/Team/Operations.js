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
                <Element id="operations-orange">Operations & Logistics</Element>
                <div className="row">
                    <Employee image={People.Carolyn.image} name={People.Carolyn.name} title={People.Carolyn.title} />
                    <Employee image={People.Sue.image} name={People.Sue.name} title={People.Sue.title} />
                    <Employee image={People.Don.image} name={People.Don.name} title={People.Don.title} />
                    <Employee image={People.Kristin.image} name={People.Kristin.name} title={People.Kristin.title} />
                    <Employee image={People.Corinne.image} name={People.Corinne.name} title={People.Corinne.title} />
                    <Employee image={People.Nancy.image} name={People.Nancy.name} title={People.Nancy.title} />
                    <Employee image={People.Jen.image} name={People.Jen.name} title={People.Jen.title} />
                    <Employee image={People.Lisa.image} name={People.Lisa.name} title={People.Lisa.title} />
                    <Employee image={People.Eileen.image} name={People.Eileen.name} title={People.Eileen.title} />
                    <Employee image={People.Liz.image} name={People.Liz.name} title={People.Liz.title} />
                    <Employee image={People.Morgan.image} name={People.Morgan.name} title={People.Morgan.title} />                    
                    <Employee image={People.Robyn.image} name={People.Robyn.name} title={People.Robyn.title} />
                    <Employee image={People.Barb.image} name={People.Barb.name} title={People.Barb.title} />
                    <Employee image={People.Trina.image} name={People.Trina.name} title={People.Trina.title} />
                    <Employee image={People.Julie.image} name={People.Julie.name} title={People.Julie.title} />
                    <Employee image={People.Ashley.image} name={People.Ashley.name} title={People.Ashley.title} />
                    <Employee image={People.ChrisM.image} name={People.ChrisM.name} title={People.ChrisM.title} />
                    <Employee image={People.Tiffany.image} name={People.Tiffany.name} title={People.Tiffany.title} />
                    <Employee image={People.Keyla.image} name={People.Keyla.name} title={People.Keyla.title} />
                    <Employee image={People.Jeremy.image} name={People.Jeremy.name} title={People.Jeremy.title} />
                    <Employee image={People.Melissa.image} name={People.Melissa.name} title={People.Melissa.title} />
                    <Employee image={People.Shawn.image} name={People.Shawn.name} title={People.Shawn.title} />
                    <Employee image={People.Chintan.image} name={People.Chintan.name} title={People.Chintan.title} />
                    <Employee image={People.Kevin.image} name={People.Kevin.name} title={People.Kevin.title} />
                    <Employee image={People.ChrisS.image} name={People.ChrisS.name} title={People.ChrisS.title} />
                    <Employee image={People.Dave.image} name={People.Dave.name} title={People.Dave.title} />
                    <Employee image={People.Charles.image} name={People.Charles.name} title={People.Charles.title} />
                    <Employee image={People.Jacob.image} name={People.Jacob.name} title={People.Jacob.title} />
                </div>
            </div>
        )
    }
}



export default Operations;
