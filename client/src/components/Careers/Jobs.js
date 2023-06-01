import React, { Component } from 'react';
import {Helmet} from "react-helmet";
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

    componentDidMount () {
        // const script = document.createElement("script");
    
        // script.src = "https://app.jazz.co/widgets/basic/create/overturepromotions";
        // script.async = true;
    
        // document.body.appendChild(script);

    }

    render(){
        return (
            <div className='container' style={{marginTop: '20px'}}>
                <div className="jobs-box">
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3><a className="apply-link" target='blank' href="https://overturepromotions.applytojob.com/apply/eQVeprIQMb/Account-Coordinator">Account Coordinator</a></h3>
                    </div>
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3><a className="apply-link" target='blank' href="https://overturepromotions.applytojob.com/apply/VXf7PiCfzx/Web-Developer">Web Developer</a></h3>
                    </div>
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3><a className="apply-link" target='blank' href="https://overturepromotions.applytojob.com/apply/g43rbWcoBG/Training-Coordinator">Training Coordinator</a></h3>
                    </div>
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3><a className="apply-link" target='blank' href="https://overturepromotions.applytojob.com/apply/8iVstydKlO/Training-Coordinator-Bilingual">Training Coordinator (Bilingual)</a></h3>
                    </div>
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3><a className="apply-link" target='blank' href="https://overturepromotions.applytojob.com/apply/JchCiKr9Zg/Warehouse-Supervisor">Warehouse Supervisor</a></h3>
                    </div>
                    {/* <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Purchasing Manager</h3>
                        <h5 onClick={() => this.handleOn('acWaukegan')} className="view-button">View Details</h5>
                        {this.state.acWaukegan ? <ACWaukegan bye={this.handleOff} /> : null}
                    </div> */}
                    {/* <div style={{borderTop : '1px solid #d8dadc'}}>
                        <h3>Purchasing Coordinator</h3>
                        <h5 onClick={() => this.handleOn('productionSupervisor')} className="view-button">View Details</h5>
                        {this.state.productionSupervisor ? <ProductionSupervisor bye={this.handleOff} /> : null}
                    </div> */}
                    {/* <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Customer Care Coordinator</h3>
                        <h5 onClick={() => this.handleOn('salesAssistant')} className="view-button">View Details</h5>
                        {this.state.salesAssistant ? <SalesAssistant bye={this.handleOff} /> : null}
                    </div> */}
                    {/* <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Sales Account Admin</h3>
                        <h5 onClick={() => this.handleOn('salesAdmin')} className="view-button">View Details</h5>
                        {this.state.salesAdmin ? <SalesAdmin bye={this.handleOff} /> : null}
                    </div> */}
                    {/* <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Warehouse Associate</h3>
                        <h5 onClick={() => this.handleOn('warehouseAssociate')} className="view-button">View Details</h5>
                        {this.state.warehouseAssociate ? <WarehouseAssociate bye={this.handleOff} /> : null}
                    </div> */}
                    {/* <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Graphic Designer</h3>
                        <h5 onClick={() => this.handleOn('graphicDesigner')} className="view-button">View Details</h5>
                        {this.state.graphicDesigner ? <GraphicDesigner bye={this.handleOff} /> : null}
                    </div> */}
                    {/* <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Accounts Receivable Clerk</h3>
                        <h5 onClick={() => this.handleOn('directorAccount')} className="view-button">View Details</h5>
                        {this.state.directorAccount ? <DirectorAccount bye={this.handleOff} /> : null}
                    </div> */}
                    {/* <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Scheduling Coordinator</h3>
                        <h5 onClick={() => this.handleOn('apClerk')} className="view-button">View Details</h5>
                        {this.state.apClerk ? <APClerk bye={this.handleOff} /> : null}
                    </div> */}
                    {/* <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Web Developer </h3>
                        <h5 onClick={() => this.handleOn('webDeveloper')} className="view-button">View Details</h5>
                        {this.state.webDeveloper ? <WebDeveloper bye={this.handleOff} /> : null}
                    </div> */}
                </div>
                {/* <h3 style={{marginTop: '50px'}}><a target="blank" href="https://overturepromotions.applytojob.com/apply/">View All Positions!</a></h3> */}
                {/* The second iframe is the one that works. But will have to change scrolling to yes and at height as well */}
                {/* <iframe name="resumator-job-frame" id="resumator-job-frame" class="resumator-advanced-widget" src="https://app.jazz.co/widgets/basic/create/overturepromotions" width="100%" height="1500px" scrolling="yes" frameborder="0" allowTransparency="true"></iframe>{function resizeResumatorIframe(height,nojump){if(nojump== 0){window.scrollTo(0,0);}document.getElementById("resumator-job-frame").height = parseInt(height)+20;}} */}
                {/* <iframe name="resumator-job-frame" id="resumator-job-frame" className="resumator-advanced-widget" src="//overturepromotions.applytojob.com/apply/jobs/" width="100%" scrolling="yes" height="250" frameBorder="0" allowtransparency="true"></iframe>{function resizeResumatorIframe(height,nojump){if(nojump== 0){window.scrollTo(0,0);}document.getElementById("resumator-job-frame").height = parseInt(height)+20;}}<a href="//overturepromotions.applytojob.com/apply/jobs/">View all jobs</a> */}
                {/* <Helmet>
                    <script 
                        src="https://app.jazz.co/widgets/basic/create/overturepromotions"
                        crossorigin="anonymous"
                        async>
                        </script>
                </Helmet> */}
                <div style={{margin: '30px 0'}}>
                    <p className="basic">Overture is an equal opportunity/affirmative action employer committed to a diverse and inclusive workplace. All qualified applicants will receive consideration for employment without regards to race, color, religion, sex, sexual orientation, gender identity, national origin, disability status, protected veteran status, or any other basis prohibited by law. If you are an individual with a disability and need assistance in applying for a position, please contact us <a href="mailto:Humanresources@overturepromo.com" style={{color: '#54565a', textDecoration: 'underline'}}>here</a>.</p>
                </div>
            </div>
        )
    }
}

export default Jobs;