import React from 'react';

import Jeff from '../../images/work/warehouse_img1.jpg';

const Warehouse = () => {
    return (
        <div className="container" style={{marginTop: '70px', marginBottom: '70px'}}>
            <div className="row">
                <div className="col-md-8">
                    <h4 className="green-network">Warehouse, Fulfillment & Distribution</h4>
                    <p className="network-paragraph">Need to have your tradeshow giveaways arrive at the convention before you do? Or maybe you need to have your corporate apparel drop-shipped directly to your n ationwide sales force. Let us coordinate your fulfillment project to your exact specifications. We can also develop special packaging and inserts for those special corporate gifts and imprinted promotional products and then handle the distribution for you.</p>
                </div>
                <div className="col-md-4 network-globe">
                    <img src={Jeff} alt="Jeff" />
                </div>
            </div>
        </div>
    )
}

export default Warehouse;
