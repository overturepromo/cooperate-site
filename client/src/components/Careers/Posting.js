import React, { Component } from 'react';


// this compnent will pop open the modal which will allow for the user to appy for the Job. Using state and the modal modulle.

class Posting extends Component {


    render(){
        return (
            <div>
                {this.props.title}
            </div>
        )
    }
}

export default Posting;