import React, { Component } from 'react';

class Hr extends Component {
    render(){
        return (
            <div>
                <h1>HI!!</h1>
                <span onClick={() => this.props.bye('hr')}>Hide Details</span>
            </div>
        )
    }
}

export default Hr;