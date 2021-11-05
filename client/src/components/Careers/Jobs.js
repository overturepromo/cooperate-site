import React, { Component } from 'react';
import AccountCoordinator from './Positions/AccountCoordinator'
import ACRiverNorth from './Positions/ACRiverNorth'
import SalesAssistant from './Positions/SalesAssistant'
import SalesAdmin from './Positions/SalesAdmin'
import WarehouseAssociate from './Positions/WarehouseAssociate'
import GraphicDesigner from './Positions/GraphicDesginer';
import WebDeveloper from './Positions/WebDeveloper';
import DirectorAccount from './Positions/DirectorAccount';
import ProductionSupervisor from './Positions/ProductionSupervisor';
import APClerk from './Positions/APClerk';
import ACWaukegan from './Positions/ACWaukegan';

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
        directorAccount: false,
        productionSupervisor: false,
        apClerk: false,
        acWaukegan: false
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
        }  else if(position === 'productionSupervisor'){
            this.setState({productionSupervisor: true})
        } else if(position === 'apClerk') {
            this.setState({apClerk: true})
        }else if(position === 'acWaukegan') {
            this.setState({acWaukegan: true})
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
        } else if(position === 'productionSupervisor'){
            this.setState({productionSupervisor: false})
            document.documentElement.scrollTop = 500;
        } else if(position === 'apClerk'){
            this.setState({apClerk: false})
            document.documentElement.scrollTop = 500;
        } else if(position === 'acWaukegan'){
            this.setState({acWaukegan: false})
            document.documentElement.scrollTop = 500;
        }     
    }

    render(){
        return (
            <div className='container' style={{marginTop: '20px'}}>
                <div className="jobs-box">
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Account Manager, Inside Sales</h3>
                        <h5 onClick={() => this.handleOn('acRiverNorth')} className="view-button">View Details</h5>
                        {this.state.acRiverNorth ? <ACRiverNorth bye={this.handleOff} /> : null}
                    </div>
                    {/* <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Account Coordinator - Waukegan</h3>
                        <h5 onClick={() => this.handleOn('acWaukegan')} className="view-button">View Details</h5>
                        {this.state.acWaukegan ? <ACWaukegan bye={this.handleOff} /> : null}
                    </div> */}
                    {/*<div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Sales Assistant</h3>
                        <h5 onClick={() => this.handleOn('salesAssistant')} className="view-button">View Details</h5>
                        {this.state.salesAssistant ? <SalesAssistant bye={this.handleOff} /> : null}
                    </div> */}
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Sales Account Admin</h3>
                        <h5 onClick={() => this.handleOn('salesAdmin')} className="view-button">View Details</h5>
                        {this.state.salesAdmin ? <SalesAdmin bye={this.handleOff} /> : null}
                    </div>
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Warehouse Associate</h3>
                        <h5 onClick={() => this.handleOn('warehouseAssociate')} className="view-button">View Details</h5>
                        {this.state.warehouseAssociate ? <WarehouseAssociate bye={this.handleOff} /> : null}
                    </div>
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Graphic Designer (Remote)</h3>
                        <h5 onClick={() => this.handleOn('graphicDesigner')} className="view-button">View Details</h5>
                        {this.state.graphicDesigner ? <GraphicDesigner bye={this.handleOff} /> : null}
                    </div>
                    {/* <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Account Development Manager</h3>
                        <h5 onClick={() => this.handleOn('directorAccount')} className="view-button">View Details</h5>
                        {this.state.directorAccount ? <DirectorAccount bye={this.handleOff} /> : null}
                    </div> */}
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Billing Coordinator</h3>
                        <h5 onClick={() => this.handleOn('apClerk')} className="view-button">View Details</h5>
                        {this.state.apClerk ? <APClerk bye={this.handleOff} /> : null}
                    </div>
                    {/* <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Fulfillment Coordinator</h3>
                        <h5 onClick={() => this.handleOn('productionSupervisor')} className="view-button">View Details</h5>
                        {this.state.productionSupervisor ? <ProductionSupervisor bye={this.handleOff} /> : null}
                    </div> */}
                    {/* <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Warehouse Inventory Lead</h3>
                        <h5 onClick={() => this.handleOn('webDeveloper')} className="view-button">View Details</h5>
                        {this.state.webDeveloper ? <WebDeveloper bye={this.handleOff} /> : null}
                    </div> */}
                </div>
                <div style={{margin: '30px 0'}}>
                    <p className="basic">Overture is an equal opportunity/affirmative action employer committed to a diverse and inclusive workplace. All qualified applicants will receive consideration for employment without regards to race, color, religion, sex, sexual orientation, gender identity, national origin, disability status, protected veteran status or any other basis prohibited by law. If you are an individual with a disability and need assistance in applying for a position, please contact us <a href="mailto:Humanresources@overturepromo.com" style={{color: '#54565a', textDecoration: 'underline'}}>here</a>.</p>
                </div>
            </div>
        )
    }
}

export default Jobs;