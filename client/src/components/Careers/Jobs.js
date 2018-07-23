import React, { Component } from 'react';
import Hr from './Positions/Hr'
import Web from './Positions/Web'

import '../../styles/Careers.css'

class Jobs extends Component {

    state = {
        hr: false,
        web: false
    }

    handleOn = (position) => {
        if(position === 'hr'){
            this.setState({hr: true})
        } else if(position === 'web'){
            this.setState({web: true})
        }
    }

    handleOff = (position) => {
        if(position === 'hr'){
            this.setState({hr: false})
            document.documentElement.scrollTop = 500;
        } else if(position === 'web'){
            this.setState({web: false})
            document.documentElement.scrollTop = 500;
        }
    }

    render(){
        return (
            <div className='container' style={{marginTop: '20px'}}>
                <div className="jobs-box">
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>HR Manager</h3>
                        <h5 onClick={() => this.handleOn('hr')} className="view-button">View Details</h5>
                        {this.state.hr ? <Hr bye={this.handleOff} /> : null}
                    </div>
                    <div style={{borderTop: '1px solid #d8dadc'}}>
                        <h3>Web Dev</h3>
                        <h5 onClick={() => this.handleOn('web')} className="view-button">View Details</h5>
                        {this.state.web ? <Web bye={this.handleOff} /> : null}
                    </div>
                </div>
            </div>
        )
    }
}

export default Jobs;