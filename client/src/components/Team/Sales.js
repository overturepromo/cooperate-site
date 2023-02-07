import React, { Component } from 'react';
import Modal from 'react-modal';
import {Element} from "react-scroll";
import Employee from './Employee';
import NotPictured from './NotPictured';
import { People } from './people/Sales';
import WorkCardTwo from './WorkCardTwo';

import '../../styles/Team.css'

class Sales extends Component {

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
                <Element id="sales-orange" name="experts">Sales Staff</Element>
                <div className="row">
                    <Employee image={People.Adam.image} name={People.Adam.name} title={People.Adam.title} />
                    <Employee image={People.Amy.image} name={People.Amy.name} title={People.Amy.title} />
                    <Employee image={People.Alexandra.image} name={People.Alexandra.name} title={People.Alexandra.title} />
                    <Employee image={People.Angela.image} name={People.Angela.name} title={People.Angela.title} />
                    <Employee image={People.Beth.image} name={People.Beth.name} title={People.Beth.title} />
                    <Employee image={People.Brittani.image} name={People.Brittani.name} title={People.Brittani.title} />
                    <Employee image={People.Brittany.image} name={People.Brittany.name} title={People.Brittany.title} />
                    <Employee image={People.Carolyn.image} name={People.Carolyn.name} title={People.Carolyn.title} />
                    <Employee image={People.Cindy.image} name={People.Cindy.name} title={People.Cindy.title} />
                    <Employee image={People.ChrisM.image} name={People.ChrisM.name} title={People.ChrisM.title} />
                    <Employee image={People.Danny.image} name={People.Danny.name} title={People.Danny.title} />
                    <Employee image={People.Erin.image} name={People.Erin.name} title={People.Erin.title} />
                    <Employee image={People.Jamie.image} name={People.Jamie.name} title={People.Jamie.title} />
                    <Employee image={People.Jennifer.image} name={People.Jennifer.name} title={People.Jennifer.title} />
                    <Employee image={People.Jen.image} name={People.Jen.name} title={People.Jen.title} />
                    <Employee image={People.Jessica.image} name={People.Jessica.name} title={People.Jessica.title} />
                    <Employee image={People.Julie.image} name={People.Julie.name} title={People.Julie.title} />
                    <Employee image={People.Kailee.image} name={People.Kailee.name} title={People.Kailee.title} />
                    <Employee image={People.Kaley.image} name={People.Kaley.name} title={People.Kaley.title} />
                    <Employee image={People.Karyn.image} name={People.Karyn.name} title={People.Karyn.title} />
                    <Employee image={People.Kat.image} name={People.Kat.name} title={People.Kat.title} />
                    <Employee image={People.Katarina.image} name={People.Katarina.name} title={People.Katarina.title} />
                    <Employee image={People.Leunshe.image} name={People.Leunshe.name} title={People.Leunshe.title} />
                    <Employee image={People.Lisa.image} name={People.Lisa.name} title={People.Lisa.title} />
                    <Employee image={People.Lynette.image} name={People.Lynette.name} title={People.Lynette.title} />
                    <Employee image={People.Mallory.image} name={People.Mallory.name} title={People.Mallory.title} />
                    <Employee image={People.MeganK.image} name={People.MeganK.name} title={People.MeganK.title} /> 
                    <Employee image={People.Megan.image} name={People.Megan.name} title={People.Megan.title} />
                    <Employee image={People.MichelleF.image} name={People.MichelleF.name} title={People.MichelleF.title} />
                    <Employee image={People.Michelle.image} name={People.Michelle.name} title={People.Michelle.title} />
                    <Employee image={People.Roger.image} name={People.Roger.name} title={People.Roger.title} />
                    <Employee image={People.Rory.image} name={People.Rory.name} title={People.Rory.title} />
                    <Employee image={People.SaraM.image} name={People.SaraM.name} title={People.SaraM.title} />
                    <Employee image={People.SarahL.image} name={People.SarahL.name} title={People.SarahL.title} />
                    <Employee image={People.Sean.image} name={People.Sean.name} title={People.Sean.title} />
                    <Employee image={People.Shannon.image} name={People.Shannon.name} title={People.Shannon.title} />
                    <Employee image={People.ShannonL.image} name={People.ShannonL.name} title={People.ShannonL.title} />
                    <Employee image={People.Will.image} name={People.Will.name} title={People.Will.title} />                    
                </div>
                <Element id="creative-orange">Not Pictured</Element>
                <div className="row" style={{marginBottom: '50px'}}>
                    <NotPictured name={People.Amanda.name} title={People.Amanda.title} />
                    <NotPictured name={People.AmyB.name} title={People.AmyB.title} />
                    <NotPictured name={People.Cassie.name} title={People.Cassie.title} />
                    <NotPictured name={People.Clair.name} title={People.Clair.title} />
                    <NotPictured name={People.Hal.name} title={People.Hal.title} />
                    <NotPictured name={People.Jocelyn.name} title={People.Jocelyn.title} />
                    <NotPictured name={People.Kara.name} title={People.Kara.title} />
                    <NotPictured name={People.KatieG.name} title={People.KatieG.title} />
                    <NotPictured name={People.Melanie.name} title={People.Melanie.title} />
                    <NotPictured name={People.RachelD.name} title={People.RachelD.title} />
                    <NotPictured name={People.Shelly.name} title={People.Shelly.title} />
                    <NotPictured name={People.Stella.name} title={People.Stella.title} />
                    <NotPictured name={People.Tom.name} title={People.Tom.title} />
                    <NotPictured name={People.Zac.name} title={People.Zac.title} />
                </div>
                {/* All The modals */}
                <Modal isOpen={this.state.showModal[0]} onRequestClose={this.closeModal} className="employee-two-modal">
                    <WorkCardTwo 
                    image={People.Oksana.image} 
                    name={People.Oksana.name} 
                    title={People.Oksana.title} 
                    movie={People.Oksana.movie} vacation={People.Oksana.vacation} why={People.Oksana.why}
                    close={() => this.closeModal()}  />
                </Modal>
            </div>
        )
    }
}





export default Sales;
