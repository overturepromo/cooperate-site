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
                    <Employee image={People.NicoleS.image} name={People.NicoleS.name} title={People.NicoleS.title} />
                    <Employee image={People.Dean.image} name={People.Dean.name} title={People.Dean.title} />
                    <Employee image={People.Katelynn.image} name={People.Katelynn.name} title={People.Katelynn.title} />
                    <Employee image={People.Nicole.image} name={People.Nicole.name} title={People.Nicole.title} />
                    <Employee image={People.Victoria.image} name={People.Victoria.name} title={People.Victoria.title} />
                    <Employee image={People.Gabrielle.image} name={People.Gabrielle.name} title={People.Gabrielle.title} />
                    <Employee image={People.Steven.image} name={People.Steven.name} title={People.Steven.title} />
                    <Employee image={People.Megan.image} name={People.Megan.name} title={People.Megan.title} />
                    <Employee image={People.Will.image} name={People.Will.name} title={People.Will.title} />
                    <Employee image={People.Jessica.image} name={People.Jessica.name} title={People.Jessica.title} />
                    <Employee image={People.Sarah.image} name={People.Sarah.name} title={People.Sarah.title} />
                    <Employee image={People.SarahC.image} name={People.SarahC.name} title={People.SarahC.title} />
                    <Employee image={People.Melissa.image} name={People.Melissa.name} title={People.Melissa.title} />
                    <Employee image={People.Mallory.image} name={People.Mallory.name} title={People.Mallory.title} />
                    <Employee image={People.Rory.image} name={People.Rory.name} title={People.Rory.title} />
                    <Employee image={People.Kimberline.image} name={People.Kimberline.name} title={People.Kimberline.title} />
                    <Employee image={People.Eric.image} name={People.Eric.name} title={People.Eric.title} />
                    <Employee image={People.MeganK.image} name={People.MeganK.name} title={People.MeganK.title} />
                    <Employee image={People.ShannonL.image} name={People.ShannonL.name} title={People.ShannonL.title} />
                    <Employee image={People.Kailee.image} name={People.Kailee.name} title={People.Kailee.title} />
                </div>
            </div>
        )
    }
}



export default ECommerce;
