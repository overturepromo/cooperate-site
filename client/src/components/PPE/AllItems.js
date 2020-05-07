import React, { Component } from 'react'
import ItemBox from './ItemBox'
import Male1 from '../../images/team/Male1.jpg';



class AllItems extends Component {

    render(){
        return (
            <div className="ppe-all-items container">
                <ItemBox open={this.openModal} image={Male1} name="Test Product" description="Product description lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis diam quam, hendrerit id sollicitudin eget."></ItemBox>
            </div>
        )
    }
}

export default AllItems