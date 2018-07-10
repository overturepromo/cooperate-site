import React, { Component } from 'react';
import Modal from 'react-modal';
import ApplyBox from './ApplyBox'

class Hr extends Component {

    state = {
        showModal: false
    };

    componentWillMount() {
        Modal.setAppElement('body');
    }
     
      openModal = () => {
        this.setState({showModal: true});
      }
     
      closeModal = () => {
        this.setState({showModal: false});
      }

    render(){
        return (
            <div>
                <p>Bacon ipsum dolor amet beef ribs salami filet mignon doner. Brisket buffalo chuck turkey. Porchetta chicken swine landjaeger biltong pork, salami bacon cupim jowl meatloaf chuck ground round corned beef. Jowl flank alcatra kevin buffalo doner. Chuck hamburger tail pancetta picanha andouille t-bone, pork spare ribs short ribs flank. Rump pork spare ribs drumstick beef ribs chuck doner bacon pork chop. Capicola burgdoggen pancetta sausage short loin alcatra leberkas.</p>
                <h4>YOUR RESPONSIBILITIES</h4>
                <ul>
                    <li>Provide Hr advice and counsel to company managers</li>
                    <li>Provide Hr advice and counsel to company managers</li>
                    <li>Provide Hr advice and counsel to company managers</li>
                    <li>Provide Hr advice and counsel to company managers</li>
                    <li>Provide Hr advice and counsel to company managers</li>
                    <li>Provide Hr advice and counsel to company managers</li>
                    <li>Provide Hr advice and counsel to company managers</li>
                    <li>Provide Hr advice and counsel to company managers</li>
                    <li>Provide Hr advice and counsel to company managers</li>
                    <li>Provide Hr advice and counsel to company managers</li>
                </ul>
                <h4>SKILLS/EXPERIENCE REQUIRED</h4>
                <ul>
                    <li>Excellent interpersonal and written communication skills</li>
                    <li>Excellent interpersonal and written communication skills</li>
                    <li>Excellent interpersonal and written communication skills</li>
                    <li>Excellent interpersonal and written communication skills</li>
                    <li>Excellent interpersonal and written communication skills</li>
                </ul>
                <button className="apply-button" onClick={this.openModal}>Apply For Position</button>
                <h5 onClick={() => this.props.bye('hr')} className="view-button">Hide Details</h5>
                <Modal isOpen={this.state.showModal} onRequestClose={this.closeModal}>
                    <ApplyBox title="HR Manager" close={this.closeModal} />
                </Modal>
            </div>
        )
    }
}

export default Hr;