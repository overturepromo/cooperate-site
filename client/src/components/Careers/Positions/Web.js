import React, { Component } from 'react';

class Web extends Component {
    render(){
        return (
            <div>
                <h1>HI!!</h1>
                <span onClick={() => this.props.bye('web')}>Hide Details</span>
            </div>
        )
    }
}

export default Web;