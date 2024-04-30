import React, { Component } from "react";
import Modal from "react-modal";
import { Element } from "react-scroll";
import Employee from "./Employee";
import NotPictured from "./NotPictured";
import { People } from "./people/Warehouse";

import "../../styles/Team.css";

class Warehouse extends Component {
  state = {
    showModal: [false],
  };

  componentWillMount() {
    Modal.setAppElement("body");
  }

  openModal = (index) => {
    const arr = [...this.state.showModal];
    arr[index] = true;
    this.setState({ showModal: arr });
  };

  closeModal = (index) => {
    this.setState({ showModal: false });
  };

  render() {
    return (
      <div className="container">
        <Element id="warehouse-orange">Warehouse</Element>
        <div className="row">
          <Employee
            image={People.Francisco.image}
            name={People.Francisco.name}
            title={People.Francisco.title}
          />
          <Employee
            image={People.Abi.image}
            name={People.Abi.name}
            title={People.Abi.title}
          />
          <Employee
            image={People.Mario.image}
            name={People.Mario.name}
            title={People.Mario.title}
          />
          <Employee
            image={People.Ismeal.image}
            name={People.Ismeal.name}
            title={People.Ismeal.title}
          />
          <Employee
            image={People.Brian.image}
            name={People.Brian.name}
            title={People.Brian.title}
          />
          <Employee
            image={People.Salvador.image}
            name={People.Salvador.name}
            title={People.Salvador.title}
          />
          <Employee
            image={People.Nancy.image}
            name={People.Nancy.name}
            title={People.Nancy.title}
          />
          <Employee
            image={People.Estella.image}
            name={People.Estella.name}
            title={People.Estella.title}
          />
          <Employee
            image={People.Gonzalo.image}
            name={People.Gonzalo.name}
            title={People.Gonzalo.title}
          />
          <Employee
            image={People.Jacob.image}
            name={People.Jacob.name}
            title={People.Jacob.title}
          />
          <Employee
            image={People.Joesph.image}
            name={People.Joesph.name}
            title={People.Joesph.title}
          />
          <Employee
            image={People.MattC.image}
            name={People.MattC.name}
            title={People.MattC.title}
          />
          <Employee
            image={People.MattN.image}
            name={People.MattN.name}
            title={People.MattN.title}
          />
          {/* <Employee image={People.Juvenita.image} name={People.Juvenita.name} title={People.Juvenita.title} /> */}
          <Employee
            image={People.Byron.image}
            name={People.Byron.name}
            title={People.Byron.title}
          />
          <Employee
            image={People.Alejandra.image}
            name={People.Alejandra.name}
            title={People.Alejandra.title}
          />
          <Employee
            image={People.Elizabeth.image}
            name={People.Elizabeth.name}
            title={People.Elizabeth.title}
          />
          <Employee
            image={People.Maria.image}
            name={People.Maria.name}
            title={People.Maria.title}
          />
          <Employee
            image={People.Guillermina.image}
            name={People.Guillermina.name}
            title={People.Guillermina.title}
          />
          <Employee
            image={People.Edith.image}
            name={People.Edith.name}
            title={People.Edith.title}
          />
          <Employee
            image={People.William.image}
            name={People.William.name}
            title={People.William.title}
          />
          {/* <Employee image={People.Angelica.image} name={People.Angelica.name} title={People.Angelica.title} /> */}
          <Employee
            image={People.Michael.image}
            name={People.Michael.name}
            title={People.Michael.title}
          />
          <Employee
            image={People.Brandy.image}
            name={People.Brandy.name}
            title={People.Brandy.title}
          />
          {/* <Employee image={People.NEW PEOPLE HERERERERERERimage} name={People.CarlosO.name} title={People.CarlosO.title} /> */}
          <Employee
            image={People.Epi.image}
            name={People.Epi.name}
            title={People.Epi.title}
          />
          <Employee
            image={People.AlexO.image}
            name={People.AlexO.name}
            title={People.AlexO.title}
          />
          <Employee
            image={People.AnaR.image}
            name={People.AnaR.name}
            title={People.AnaR.title}
          />
          <Employee
            image={People.AndresD.image}
            name={People.AndresD.name}
            title={People.AndresD.title}
          />
          <Employee
            image={People.AndreT.image}
            name={People.AndreT.name}
            title={People.AndreT.title}
          />
          <Employee
            image={People.AlejandraC.image}
            name={People.AlejandraC.name}
            title={People.AlejandraC.title}
          />
          <Employee
            image={People.AraceliG.image}
            name={People.AraceliG.name}
            title={People.AraceliG.title}
          />
          <Employee
            image={People.ArmandoR.image}
            name={People.ArmandoR.name}
            title={People.ArmandoR.title}
          />
          <Employee
            image={People.BridianaO.image}
            name={People.BridianaO.name}
            title={People.BridianaO.title}
          />
          <Employee
            image={People.DenineR.image}
            name={People.DenineR.name}
            title={People.DenineR.title}
          />
          <Employee
            image={People.DianaC.image}
            name={People.DianaC.name}
            title={People.DianaC.title}
          />
          <Employee
            image={People.Daisy.image}
            name={People.Daisy.name}
            title={People.Daisy.title}
          />
          <Employee
            image={People.EduardoS.image}
            name={People.EduardoS.name}
            title={People.EduardoS.title}
          />
          <Employee
            image={People.ElisaG.image}
            name={People.ElisaG.name}
            title={People.ElisaG.title}
          />
          <Employee
            image={People.EmmelyM.image}
            name={People.EmmelyM.name}
            title={People.EmmelyM.title}
          />
          <Employee
            image={People.Iziss.image}
            name={People.Iziss.name}
            title={People.Iziss.title}
          />
          <Employee
            image={People.IvonR.image}
            name={People.IvonR.name}
            title={People.IvonR.title}
          />
          <Employee
            image={People.JuanaC.image}
            name={People.JuanaC.name}
            title={People.JuanaC.title}
          />
          <Employee
            image={People.KevinD.image}
            name={People.KevinD.name}
            title={People.KevinD.title}
          />
          <Employee
            image={People.LauraG.image}
            name={People.LauraG.name}
            title={People.LauraG.title}
          />
          <Employee
            image={People.LizbethM.image}
            name={People.LizbethM.name}
            title={People.LizbethM.title}
          />
          <Employee
            image={People.LucyG.image}
            name={People.LucyG.name}
            title={People.LucyG.title}
          />
          <Employee
            image={People.MariaQ.image}
            name={People.MariaQ.name}
            title={People.MariaQ.title}
          />
          <Employee
            image={People.MariaS.image}
            name={People.MariaS.name}
            title={People.MariaS.title}
          />
          <Employee
            image={People.MiroslavaC.image}
            name={People.MiroslavaC.name}
            title={People.MiroslavaC.title}
          />
          <Employee
            image={People.MichaelA.image}
            name={People.MichaelA.name}
            title={People.MichaelA.title}
          />
          <Employee
            image={People.NallelyZ.image}
            name={People.NallelyZ.name}
            title={People.NallelyZ.title}
          />
          <Employee
            image={People.NemecisF.image}
            name={People.NemecisF.name}
            title={People.NemecisF.title}
          />
          <Employee
            image={People.SelenaM.image}
            name={People.SelenaM.name}
            title={People.SelenaM.title}
          />
          <Employee
            image={People.VeronicaT.image}
            name={People.VeronicaT.name}
            title={People.VeronicaT.title}
          />
          <Employee
            image={People.VictorV.image}
            name={People.VictorV.name}
            title={People.VictorV.title}
          />
          <Employee
            image={People.ZaidV.image}
            name={People.ZaidV.name}
            title={People.ZaidV.title}
          />
        </div>
        <Element id="creative-orange">Not Pictured</Element>
        <div className="row" style={{ marginBottom: "50px" }}>
          <NotPictured
            name={People.JulianC.name}
            title={People.JulianC.title}
          />
          <NotPictured
            name={People.Natalie.name}
            title={People.Natalie.title}
          />
        </div>
      </div>
    );
  }
}

export default Warehouse;
