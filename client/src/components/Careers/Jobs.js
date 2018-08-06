import React, { Component } from 'react';
import National from './Positions/National'
import AccountCoordinator from './Positions/AccountCoordinator'
import SalesAssistant from './Positions/SalesAssistant'
import SalesAdmin from './Positions/SalesAdmin'

import '../../styles/Careers.css'

class Jobs extends Component {

    state = {
        national: false,
        accountCoordinator: false,
        salesAssistant: false,
        salesAdmin: false
    }

    handleOn = (position) => {
        if(position === 'national'){
            this.setState({national: true})
        } else if(position === 'accountCoordinator'){
            this.setState({accountCoordinator: true})
        } else if(position === 'salesAssistant'){
            this.setState({salesAssistant: true})
        } else if(position === 'salesAdmin'){
            this.setState({salesAdmin: true})
        }
    }

    handleOff = (position) => {
        if(position === 'national'){
            this.setState({national: false})
            document.documentElement.scrollTop = 500;
        } else if(position === 'accountCoordinator'){
            this.setState({accountCoordinator: false})
            document.documentElement.scrollTop = 500;
        } else if(position === 'salesAssistant'){
            this.setState({salesAssistant: false})
            document.documentElement.scrollTop = 500;
        } else if(position === 'salesAdmin'){
            this.setState({salesAdmin: false})
            document.documentElement.scrollTop = 500;
        }
    }

    render(){
        return (
            <div className='container' style={{marginTop: '20px'}}>
                <div className="jobs-box">
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Director, National Accounts</h3>
                        <h5 onClick={() => this.handleOn('national')} className="view-button">View Details</h5>
                        {this.state.national ? <National bye={this.handleOff} /> : null}
                    </div>
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Account Coordinator</h3>
                        <h5 onClick={() => this.handleOn('accountCoordinator')} className="view-button">View Details</h5>
                        {this.state.accountCoordinator ? <AccountCoordinator bye={this.handleOff} /> : null}
                    </div>
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Sales Assistant</h3>
                        <h5 onClick={() => this.handleOn('salesAssistant')} className="view-button">View Details</h5>
                        {this.state.salesAssistant ? <SalesAssistant bye={this.handleOff} /> : null}
                    </div>
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Sales Admin</h3>
                        <h5 onClick={() => this.handleOn('salesAdmin')} className="view-button">View Details</h5>
                        {this.state.salesAdmin ? <SalesAdmin bye={this.handleOff} /> : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default Jobs;