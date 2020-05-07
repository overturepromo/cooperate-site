import React, { Component } from 'react';
import ContactModal from './ContactModal'
import Modal from 'react-modal';
import '../../styles/Ppe.css'

class ItemBox extends Component {
    state = {
        showModal: false
    };

    componentWillMount() {
        Modal.setAppElement('body');
    }
     
    openModal = (index) => {
        this.setState({showModal: true});
    }
     
    closeModal = (index) => {
        this.setState({showModal: false});
    }
    render(){
        return (
            <div className="col-md-3 col-xs-6 item-card">
                <img src={this.props.image} alt="itemimage" className="item-image" />
                <h3 className="item-name">{this.props.name}</h3>
                <p className="item-description">{this.props.description}</p>
                <button onClick={this.openModal} className="item-btn">Request Quote</button>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal} className="apply-lightbox">
                    <ContactModal title={this.props.name} close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default ItemBox;



// const ItemBox = (props) => {
//     return (
//         <div className="col-md-3 col-xs-6 item-card">
//             <img src={props.image} alt="itemimage" className="item-image" />
//             <h3 className="item-name">{props.name}</h3>
//             <p className="item-description">{props.description}</p>
//             <button onClick={props.open} className="item-btn">Request Quote</button>
//         </div>
//     )
// }