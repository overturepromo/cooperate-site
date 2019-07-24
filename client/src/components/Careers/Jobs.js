import React, { Component } from 'react';
import AccountCoordinator from './Positions/AccountCoordinator'
import ACRiverNorth from './Positions/ACRiverNorth'
import SalesAssistant from './Positions/SalesAssistant'
import SalesAdmin from './Positions/SalesAdmin'
import WarehouseAssociate from './Positions/WarehouseAssociate'
import GraphicDesigner from './Positions/GraphicDesginer';
import WebDeveloper from './Positions/WebDeveloper';
import DirectorAccount from './Positions/DirectorAccount';

import '../../styles/Careers.css'

class Jobs extends Component {

    state = {
        webDeveloper: false,
        accountCoordinator: false,
        acRiverNorth: false,
        salesAssistant: false,
        salesAdmin: false,
        warehouseAssociate: false,
        graphicDesigner: false,
        directorAccount: false
    }

    handleOn = (position) => {
        if(position === 'webDeveloper'){
            this.setState({webDeveloper: true})
        } else if(position === 'accountCoordinator'){
            this.setState({accountCoordinator: true})
        }else if(position === 'acRiverNorth'){
            this.setState({acRiverNorth: true})
        } else if(position === 'salesAssistant'){
            this.setState({salesAssistant: true})
        } else if(position === 'salesAdmin'){
            this.setState({salesAdmin: true})
        } else if(position === 'warehouseAssociate'){
            this.setState({warehouseAssociate: true})
        } else if(position === 'graphicDesigner'){
            this.setState({graphicDesigner: true})
        } else if(position === 'directorAccount'){
            this.setState({directorAccount: true})
        }
    }

    handleOff = (position) => {
        if(position === 'webDeveloper'){
            this.setState({webDeveloper: false})
            document.documentElement.scrollTop = 500;
        } else if(position === 'accountCoordinator'){
            this.setState({accountCoordinator: false})
            document.documentElement.scrollTop = 500;
        } else if(position === 'acRiverNorth'){
            this.setState({acRiverNorth: false})
            document.documentElement.scrollTop = 500;
        } else if(position === 'salesAssistant'){
            this.setState({salesAssistant: false})
            document.documentElement.scrollTop = 500;
        } else if(position === 'salesAdmin'){
            this.setState({salesAdmin: false})
            document.documentElement.scrollTop = 500;
        } else if(position === 'warehouseAssociate'){
            this.setState({warehouseAssociate: false})
            document.documentElement.scrollTop = 500;
        } else if(position === 'graphicDesigner'){
            this.setState({graphicDesigner: false})
            document.documentElement.scrollTop = 500;
        } else if(position === 'directorAccount'){
            this.setState({directorAccount: false})
            document.documentElement.scrollTop = 500;
        }
    }

    render(){
        return (
            <div className='container' style={{marginTop: '20px'}}>
                <div className="jobs-box">
                    {/* <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Account Coordinator Vernon Hills</h3>
                        <h5 onClick={() => this.handleOn('accountCoordinator')} className="view-button">View Details</h5>
                        {this.state.accountCoordinator ? <AccountCoordinator bye={this.handleOff} /> : null}
                    </div>
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Account Coordinator River North</h3>
                        <h5 onClick={() => this.handleOn('acRiverNorth')} className="view-button">View Details</h5>
                        {this.state.acRiverNorth ? <ACRiverNorth bye={this.handleOff} /> : null}
                    </div>
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Sales Assistant</h3>
                        <h5 onClick={() => this.handleOn('salesAssistant')} className="view-button">View Details</h5>
                        {this.state.salesAssistant ? <SalesAssistant bye={this.handleOff} /> : null}
                    </div> */}
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Sales Admin</h3>
                        <h5 onClick={() => this.handleOn('salesAdmin')} className="view-button">View Details</h5>
                        {this.state.salesAdmin ? <SalesAdmin bye={this.handleOff} /> : null}
                    </div>
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Warehouse Associate</h3>
                        <h5 onClick={() => this.handleOn('warehouseAssociate')} className="view-button">View Details</h5>
                        {this.state.warehouseAssociate ? <WarehouseAssociate bye={this.handleOff} /> : null}
                    </div>
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Graphic Designer</h3>
                        <h5 onClick={() => this.handleOn('graphicDesigner')} className="view-button">View Details</h5>
                        {this.state.graphicDesigner ? <GraphicDesigner bye={this.handleOff} /> : null}
                    </div>
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Account Development Manager (Vernon Hills, move to Waukegan in the fall)</h3>
                        <h5 onClick={() => this.handleOn('directorAccount')} className="view-button">View Details</h5>
                        {this.state.directorAccount ? <DirectorAccount bye={this.handleOff} /> : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default Jobs;