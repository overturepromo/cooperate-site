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
import FaceShield from '../../images/ppe/face_shield.jpg';
import Booties from '../../images/ppe/booties.jpg';
import Wipes from '../../images/ppe/wipes.jpg';
import PumpLid from '../../images/ppe/pump_lid.jpg';
import Spray from '../../images/ppe/spray.jpg';
import Gown from '../../images/ppe/gown.jpg';
import ClothMask from '../../images/ppe/Mask.jpg';

import BadImage from '../../images/team/Male1.jpg';


class AllItems extends Component {

    render(){
        return (
            <div className="ppe-all-items container">
                <ItemBox open={this.openModal} image={Image1} name="Disposable Nitrile Gloves" 
                    lineOne="We have nitrile, polyethylene and vinyl options available"
                    lineTwo=""
                    lineThree=""
                    lineFour=""
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Image3} name="3 Layers Disposable Face Masks" 
                    lineOne="Same-day shipping now available!"
                    lineTwo=""
                    lineThree=""
                    lineFour=""
                    lineFive=""
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Image4} name="KN95 Face Masks" 
                    lineOne="Available in quantities as low as 250"
                    lineTwo=""
                    lineThree=""
                    lineFour=""
                    lineFive=""
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={ClothMask} name="Reusable Cloth Face Masks" 
                    lineOne="Branded and blank options available, with varying types of material"
                    lineTwo=""
                    lineThree=""
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={FaceShield} name="Face Shields" 
                    lineOne="Several options available"
                    lineTwo=""
                    lineThree=""
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={PumpLid} name="Antibacterial Hand Sanitizer" 
                    lineOne="Ranging from 1oz to 1gal, as well as drum sizes available"
                    lineTwo=""
                    lineThree=""
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Wipes} name="Disinfectant Wipes " 
                    lineOne="Available in packs or canisters"
                    lineTwo=""
                    lineThree=""
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Spray} name="Disinfectant Spray" 
                    lineOne="Available in aerosol cans or spray bottles"
                    lineTwo=""
                    lineThree=""
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Gown} name="Medical Gowns" 
                    lineOne="Available in multiple sizes"
                    lineTwo=""
                    lineThree=""
                >
                </ItemBox>
                <ItemBox open={this.openModal} image={Booties} name="Shoe Covers" 
                    lineOne="Multiple options available"
                    lineTwo=""
                    lineThree=""
                >
                </ItemBox>
            </div>
        )
    }
}

export default AllItems