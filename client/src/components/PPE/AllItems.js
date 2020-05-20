import React, { Component } from 'react'
import ItemBox from './ItemBox'
import Image1 from '../../images/ppe/PPE_Images-01.jpg';
import Image2 from '../../images/ppe/PPE_Images-02.jpg';
import Image3 from '../../images/ppe/PPE_Images-03.jpg';
import Image4 from '../../images/ppe/PPE_Images-04.jpg';
import Image5 from '../../images/ppe/PPE_Images-05.jpg';
import Image6 from '../../images/ppe/PPE_Images-06.jpg';
import Image7 from '../../images/ppe/PPE_Images-07.jpg';
import Image8 from '../../images/ppe/PPE_Images-08.jpg';




class AllItems extends Component {

    render(){
        return (
            <div className="ppe-all-items container">
                <ItemBox open={this.openModal} image={Image1} name="Disposable Nitrile Gloves" 
                    lineOne=""
                    lineTwo=""
                    lineThree=""
                    lineFour=""
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Image3} name="3 Layers Disposable Face Masks" 
                    lineOne=""
                    lineTwo=""
                    lineThree=""
                    lineFour=""
                    lineFive=""
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Image5} name="30ml Antibacterial Hand Gel" 
                    lineOne=""
                    lineTwo=""
                    lineThree=""
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Image6} name="60ml Antibacterial Hand Gel" 
                    lineOne=""
                    lineTwo=""
                    lineThree=""
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Image7} name="300ml Antibacterial Hand Gel" 
                    lineOne=""
                    lineTwo=""
                    lineThree=""
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Image8} name="Sanitizer Wipe (10pcs wipes per pack)" 
                    lineOne=""
                    lineTwo=""
                    lineThree=""
                >
                </ItemBox>
            </div>
        )
    }
}

export default AllItems