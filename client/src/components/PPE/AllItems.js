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
                    lineOne="Product Color: Blue"
                    lineTwo="Imprint: Blank"
                    lineThree="2000 @ $.44/pair"
                    lineFour="Turn time: 10-15 Days"
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Image2} name="N95 Face Masks" 
                    lineOne="NIOSH Certiﬁcate"
                    lineTwo="10,000 @ $3.70/each"
                    lineThree="20,000 @ $3.56/each"
                    lineFour="Production Time: 5 Days"
                    lineFive="Shipping Time: 10-15 Days"
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Image3} name="3 Layers Disposable Face Masks" 
                    lineOne="FDA Certiﬁcate"
                    lineTwo="10,000 @ $.65/each"
                    lineThree="50,000 @ $.57/each"
                    lineFour="Production Time: 3-5 Days"
                    lineFive="Shipping Time: 10-15 Days"
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Image4} name="KN95 Face Mask" 
                    lineOne="FDA Certiﬁcate"
                    lineTwo="10,000 @ $2.85/each"
                    lineThree="20,000 @ $2.78/each"
                    lineFour="Production Time: 5-10 Days"
                    lineFive="Shipping Time: 10-15 Days"
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Image5} name="30ml Antibacterial Hand Gel" 
                    lineOne="10,000 @ $1.82/each"
                    lineTwo="20,000 @ $1.68/each"
                    lineThree="Lead Time: 3-4 Weeks"
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Image6} name="60ml Antibacterial Hand Gel" 
                    lineOne="10,000 @ $2.59/each"
                    lineTwo="20,000 @ $2.44/each"
                    lineThree="Lead Time: 3-4 Weeks"
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Image7} name="300ml Antibacterial Hand Gel" 
                    lineOne="10,000 @ $7.64/each"
                    lineTwo="20,000 @ $7.46/each"
                    lineThree="Lead Time: 3-4 Weeks"
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Image8} name="Sanitizer Wipe (10pcs wipes per pack)" 
                    lineOne="50,000 @ $.62/each"
                    lineTwo="10,000 @ $.56/each"
                    lineThree="Lead Time: 50 Days"
                >
                </ItemBox>
            </div>
        )
    }
}

export default AllItems