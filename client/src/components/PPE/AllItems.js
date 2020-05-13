import React, { Component } from 'react'
import ItemBox from './ItemBox'
import Male1 from '../../images/team/Male1.jpg';



class AllItems extends Component {

    render(){
        return (
            <div className="ppe-all-items container">
                <ItemBox open={this.openModal} image={Male1} name="Disposable Nitrile Gloves" 
                    lineOne="Product Color: Blue"
                    lineTwo="Imprint: Blank"
                    lineThree="2000 @ $.44/pair"
                    lineFour="Turn time: 10-15 Days"
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Male1} name="N95 Face Masks" 
                    lineOne="NIOSH Certiﬁcate"
                    lineTwo="10,000 @ $3.70/each"
                    lineThree="20,000 @ $3.56/each"
                    lineFour="Production Time: 5 Days"
                    lineFive="Shipping Time: 10-15 Days"
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Male1} name="3 Layers Disposable Face Masks" 
                    lineOne="FDA Certiﬁcate"
                    lineTwo="10,000 @ $.65/each"
                    lineThree="50,000 @ $.57/each"
                    lineFour="Production Time: 3-5 Days"
                    lineFive="Shipping Time: 10-15 Days"
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Male1} name="KN95 Face Mask" 
                    lineOne="FDA Certiﬁcate"
                    lineTwo="10,000 @ $2.85/each"
                    lineThree="20,000 @ $2.78/each"
                    lineFour="Production Time: 5-10 Days"
                    lineFive="Shipping Time: 10-15 Days"
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Male1} name="30ml Antibacterial Hand Gel" 
                    lineOne="10,000 @ $1.82/each"
                    lineTwo="20,000 @ $1.68/each"
                    lineThree="Lead Time: 3-4 Weeks"
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Male1} name="60ml Antibacterial Hand Gel" 
                    lineOne="10,000 @ $2.59/each"
                    lineTwo="20,000 @ $2.44/each"
                    lineThree="Lead Time: 3-4 Weeks"
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Male1} name="300ml Antibacterial Hand Gel" 
                    lineOne="10,000 @ $7.64/each"
                    lineTwo="20,000 @ $7.46/each"
                    lineThree="Lead Time: 3-4 Weeks"
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Male1} name="Sanitizer Wipe (10pcs wipes per pack)" 
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