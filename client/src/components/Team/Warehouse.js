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
                    <Employee image={People.Mario.image} name={People.Mario.name} title={People.Mario.title} />
                    <Employee image={People.Michelle.image} name={People.Michelle.name} title={People.Michelle.title} />
                    <Employee image={People.Mayla.image} name={People.Mayla.name} title={People.Mayla.title} />
                    <Employee image={People.MattC.image} name={People.MattC.name} title={People.MattC.title} />
                    <Employee image={People.MattN.image} name={People.MattN.name} title={People.MattN.title} />
                    <Employee image={People.Elijah.image} name={People.Elijah.name} title={People.Elijah.title} />
                    <Employee image={People.Lupe.image} name={People.Lupe.name} title={People.Lupe.title} />
                    <Employee image={People.Yeni.image} name={People.Yeni.name} title={People.Yeni.title} />
                    <Employee image={People.Juvenita.image} name={People.Juvenita.name} title={People.Juvenita.title} />
                    <Employee image={People.Jeff.image} name={People.Jeff.name} title={People.Jeff.title} />
                    <Employee image={People.Karla.image} name={People.Karla.name} title={People.Karla.title} />
                    <Employee image={People.Abi.image} name={People.Abi.name} title={People.Abi.title} />
                    <Employee image={People.Salvador.image} name={People.Salvador.name} title={People.Salvador.title} />
                    <Employee image={People.Ismeal.image} name={People.Ismeal.name} title={People.Ismeal.title} />
                    <Employee image={People.Nancy.image} name={People.Nancy.name} title={People.Nancy.title} />
                    <Employee image={People.Bryan.image} name={People.Bryan.name} title={People.Bryan.title} />
                    <Employee image={People.Gloria.image} name={People.Gloria.name} title={People.Gloria.title} />
                    <Employee image={People.Natalie.image} name={People.Natalie.name} title={People.Natalie.title} />
                    <Employee image={People.Emrys.image} name={People.Emrys.name} title={People.Emrys.title} />
                    <Employee image={People.Ellover.image} name={People.Ellover.name} title={People.Ellover.title} />
                    <Employee image={People.Brisa.image} name={People.Brisa.name} title={People.Brisa.title} />
                    <Employee image={People.Hugo.image} name={People.Hugo.name} title={People.Hugo.title} />
                    <Employee image={People.Mayolo.image} name={People.Mayolo.name} title={People.Mayolo.title} />
                    <Employee image={People.Justin.image} name={People.Justin.name} title={People.Justin.title} />
                </div>
            </div>
        )
    }
}



export default Warehouse;
