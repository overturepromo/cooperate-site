import React, { Component } from 'react';
import Modal from 'react-modal';
import {Element} from "react-scroll";
import Employee from './Employee';
import NotPictured from './NotPictured';
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
                    <Employee image={People.RonG.image} name={People.RonG.name} title={People.RonG.title} />
                    {/* <Employee image={People.Serafin.image} name={People.Serafin.name} title={People.Serafin.title} /> */}
                    <Employee image={People.AnnaN.image} name={People.AnnaN.name} title={People.AnnaN.title} />
                    <Employee image={People.Glenda.image} name={People.Glenda.name} title={People.Glenda.title} />
                    <Employee image={People.Angela.image} name={People.Angela.name} title={People.Angela.title} />
                    <Employee image={People.Don.image} name={People.Don.name} title={People.Don.title} />
                    <Employee image={People.Corinne.image} name={People.Corinne.name} title={People.Corinne.title} />
                    <Employee image={People.Eileen.image} name={People.Eileen.name} title={People.Eileen.title} />
                    <Employee image={People.Liz.image} name={People.Liz.name} title={People.Liz.title} />
                    <Employee image={People.Troy.image} name={People.Troy.name} title={People.Troy.title} />
                    <Employee image={People.Brittney.image} name={People.Brittney.name} title={People.Brittney.title} />
                    <Employee image={People.Morgan.image} name={People.Morgan.name} title={People.Morgan.title} />                    
                    <Employee image={People.Yanis.image} name={People.Yanis.name} title={People.Yanis.title} />
                    <Employee image={People.Michael.image} name={People.Michael.name} title={People.Michael.title} />
                    <Employee image={People.BrittneyH.image} name={People.BrittneyH.name} title={People.BrittneyH.title} />
                    <Employee image={People.Grace.image} name={People.Grace.name} title={People.Grace.title} />
                    <Employee image={People.Lisa.image} name={People.Lisa.name} title={People.Lisa.title} />
                    <Employee image={People.RachelK.image} name={People.RachelK.name} title={People.RachelK.title} />
                    <Employee image={People.Justin.image} name={People.Justin.name} title={People.Justin.title} />
                    <Employee image={People.Trina.image} name={People.Trina.name} title={People.Trina.title} />
                    {/* <Employee image={People.Lupe.image} name={People.Lupe.name} title={People.Lupe.title} /> */}
                    {/* <Employee image={People.Holly.image} name={People.Holly.name} title={People.Holly.title} /> */}
                    <Employee image={People.Annabelle.image} name={People.Annabelle.name} title={People.Annabelle.title} />
                    <Employee image={People.Jeff.image} name={People.Jeff.name} title={People.Jeff.title} />
                    <Employee image={People.Maria.image} name={People.Maria.name} title={People.Maria.title} />
                    {/* <Employee image={People.DavidM.image} name={People.DavidM.name} title={People.DavidM.title} /> */}
                    <Employee image={People.Wade.image} name={People.Wade.name} title={People.Wade.title} />
                    {/* <Employee image={People.Maribel.image} name={People.Maribel.name} title={People.Maribel.title} /> */}
                    <Employee image={People.AngelaB.image} name={People.AngelaB.name} title={People.AngelaB.title} />
                    <Employee image={People.Cristian.image} name={People.Cristian.name} title={People.Cristian.title} />
                    <Employee image={People.Emely.image} name={People.Emely.name} title={People.Emely.title} />

                </div>
                <Element id="creative-orange">Not Pictured</Element>
                <div className="row" style={{marginBottom: '50px'}}>
                    <NotPictured name={People.AndreaA.name} title={People.AndreaA.title} />
                    <NotPictured name={People.Ben.name} title={People.Ben.title} />
                    <NotPictured name={People.Bernadette.name} title={People.Bernadette.title} />
                    <NotPictured name={People.Chance.name} title={People.Chance.title} />
                    <NotPictured name={People.IanP.name} title={People.IanP.title} />
                    <NotPictured name={People.Ian.name} title={People.Ian.title} />
                    <NotPictured name={People.Jennifer.name} title={People.Jennifer.title} />
                    <NotPictured name={People.KeylaP.name} title={People.KeylaP.title} />
                    <NotPictured name={People.NickK.name} title={People.NickK.title} />
                    <NotPictured name={People.Noelia.name} title={People.Noelia.title} />
                    <NotPictured name={People.Rebecca.name} title={People.Rebecca.title} />
                </div>
            </div>
        )
    }
}



export default Operations;
