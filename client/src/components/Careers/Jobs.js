import React, { Component } from 'react';
import Hr from './Positions/Hr'
import Web from './Positions/Web'

// Thic component will pass in all the information that will hold the details of the Jobs. The details will be shown based of the state and which 
// is open.

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
        } else if(position === 'web'){
            this.setState({web: false})
        }
    }

    render(){
        return (
            <div className='container'>
                <div className="hr-box">
                    <h3>HR Manager</h3>
                    <h5 onClick={() => this.handleOn('hr')}>View Details</h5>
                    {this.state.hr ? <Hr bye={this.handleOff} /> : null}
                    <h3>Web Dev</h3>
                    <h5 onClick={() => this.handleOn('web')}>View Details</h5>
                    {this.state.web ? <Web bye={this.handleOff} /> : null}
                </div>
            </div>
        )
    }
}

export default Jobs;