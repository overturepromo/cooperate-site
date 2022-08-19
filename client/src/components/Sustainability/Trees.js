import React, { Component } from 'react';
import axios from 'axios';
import '../../styles/Contact.css'

class Trees extends Component {

    state = {
        trees: 0
      }
    
      componentDidMount() {
        axios.get(`https://public.ecologi.com/users/overturepromotionsin/trees`)
          .then(res => {
              console.log(res.data.total)
            const treesTotal = res.data.total;
            this.setState({ 
                trees: treesTotal
            });
          })
      }

    render(){
        return (
            <div className="trees-div container">
                <h1>Trees</h1>
                <h4>Total: </h4>
                {
                    this.state.trees
                }
            </div>
        )
    }
}

export default Trees;