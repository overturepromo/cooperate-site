import React, { Component } from 'react';

import Globe from '../../images/about/globe_img.svg'
import Data from '../../images/about/data_img.svg'
import '../../styles/About.css'

class Network extends Component {
    render(){
        return (
            <div className="container" style={{marginTop: '70px'}}>
                <div className="row">
                    <div className="col-md-8">
                        <div className="col-md-4 mobile-globe">
                            <img src={Globe} alt="globe" className="mobile-globe-image" />
                        </div>
                        <h4 className="green-network">We're a global network</h4>
                        <p className="network-paragraph">There are no limits to what we can do. We regularly import from our accredited factories overseas and have international shipments leaving our warehouse daily. The bottom line is what matters, and we understand that. To help reduce your costs, we have negotiated exclusive rates with our vendors, developed global partnerships and created import sourcing programs for large quantity or custom order.</p>
                    </div>
                    <div className="col-md-4 network-globe">
                        <img src={Globe} alt="globe" />
                    </div>
                    <div className="col-md-4 data-image" style={{marginTop: '70px'}}>
                        <img src={Data} alt="data" className="mobile-globe-image"  />
                    </div>
                    <div className="col-md-8" style={{marginTop: '70px'}}>
                        <h4 className="green-network">Data-driven decisions</h4>
                        <p className="network-paragraph">We don't just make decisions based off of gut instinct. We combine thorough data analysis, comprehensive reporting and historical behavior to develop a custom promotional program for your company that reduces costs and increases efficiencies.</p>
                        <p className="network-paragraph">Our reporting capabilities are completely customizable and flexible. What this means for your company is that essentially any metric or values that you want tracked can be exported in endless combinations to create a report that best suits your needs. Reports can be scheduled to be automatically sent out daily, weekly, monthly or quarterly. Example reports include:</p>
                        <div className="row" style={{margin: '30px 0 70px 0'}}>
                            <div className="col-md-6">
                                <h6 className="orange-network">In-Stock vs. Drop-Ship Orders</h6>
                            </div>
                            <div className="col-md-6">
                                <h6 className="orange-network">Orders Placed by Category Type</h6>
                            </div>
                            <div className="col-md-6">
                                <h6 className="orange-network">Inventory Status Reports</h6>
                            </div>
                            <div className="col-md-6">
                                <h6 className="orange-network">Product Turnover Reports</h6>
                            </div>
                            <div className="col-md-6">
                                <h6 className="orange-network">Order Allocations Reports</h6>
                            </div>
                            <div className="col-md-6">
                                <h6 className="orange-network">Real-Time Inventory Levels</h6>
                            </div>
                            <div className="col-md-6">
                                <h6 className="orange-network">Orders Placed By Region/Department</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Network;