import React, { Component } from 'react';
import Modal from 'react-modal';
import {Element} from "react-scroll";
import Employee from './Employee';
import { People } from './people/Embrodiery';
import NotPictured from './NotPictured';

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
                <Element id="embrodiery-orange">Production</Element>
                <div className="row">
                    <Employee image={People.Wendy.image} name={People.Wendy.name} title={People.Wendy.title} />
                    <Employee image={People.Rolando.image} name={People.Rolando.name} title={People.Rolando.title} />
                    <Employee image={People.Gabriel.image} name={People.Gabriel.name} title={People.Gabriel.title} />
                    <Employee image={People.Edgar.image} name={People.Edgar.name} title={People.Edgar.title} />
                    <Employee image={People.Esmeralda.image} name={People.Esmeralda.name} title={People.Esmeralda.title} />
                    <Employee image={People.Maria.image} name={People.Maria.name} title={People.Maria.title} />
                    <Employee image={People.Carolina.image} name={People.Carolina.name} title={People.Carolina.title} />
                    <Employee image={People.Dorotea.image} name={People.Dorotea.name} title={People.Dorotea.title} />
                    <Employee image={People.Zenaida.image} name={People.Zenaida.name} title={People.Zenaida.title} />
                    <Employee image={People.Victor.image} name={People.Victor.name} title={People.Victor.title} />
                    {/* <Employee image={People.Tina.image} name={People.Tina.name} title={People.Tina.title} /> */}
                    <Employee image={People.Alejandra.image} name={People.Alejandra.name} title={People.Alejandra.title} />
                    <Employee image={People.Debra.image} name={People.Debra.name} title={People.Debra.title} />
                    <Employee image={People.Inocente.image} name={People.Inocente.name} title={People.Inocente.title} />
                    <Employee image={People.Miguel.image} name={People.Miguel.name} title={People.Miguel.title} />
                    {/* <Employee image={People.Angelica.image} name={People.Angelica.name} title={People.Angelica.title} /> */}
                    <Employee image={People.Mayra.image} name={People.Mayra.name} title={People.Mayra.title} />
                    <Employee image={People.Julyne.image} name={People.Julyne.name} title={People.Julyne.title} />
                    <Employee image={People.Martha.image} name={People.Martha.name} title={People.Martha.title} />
                    {/* <Employee image={People.Titiana.image} name={People.Titiana.name} title={People.Titiana.title} /> */}
                    <Employee image={People.Citlali.image} name={People.Citlali.name} title={People.Citlali.title} />
                    {/* <Employee image={People.Gladys.image} name={People.Gladys.name} title={People.Gladys.title} /> */}
                    <Employee image={People.Leomar.image} name={People.Leomar.name} title={People.Leomar.title} />
                    <Employee image={People.Delfina.image} name={People.Delfina.name} title={People.Delfina.title} />
                    {/* <Employee image={People.Esteban.image} name={People.Esteban.name} title={People.Esteban.title} /> */}
                    <Employee image={People.Geovanni.image} name={People.Geovanni.name} title={People.Geovanni.title} />
                    <Employee image={People.Mario.image} name={People.Mario.name} title={People.Mario.title} />
                    <Employee image={People.MariaA.image} name={People.MariaA.name} title={People.MariaA.title} />
                    <Employee image={People.MelG.image} name={People.MelG.name} title={People.MelG.title} />
                    <Employee image={People.MiguelC.image} name={People.MiguelC.name} title={People.MiguelC.title} />
                    <Employee image={People.MonicaR.image} name={People.MonicaR.name} title={People.MonicaR.title} />
                    <Employee image={People.OlgaR.image} name={People.OlgaR.name} title={People.OlgaR.title} />
                    <Employee image={People.OscarB.image} name={People.OscarB.name} title={People.OscarB.title} />
                </div>
                <Element id="creative-orange">Not Pictured</Element>
                <div className="row" style={{marginBottom: '50px'}}>
                    <NotPictured name={People.AnaI.name} title={People.AnaI.title} />
                    <NotPictured name={People.JoseG.name} title={People.JoseG.title} />
                    <NotPictured name={People.SontinaL.name} title={People.SontinaL.title} />
                </div>
            </div>
        )
    }
}



export default Embrodiery;
