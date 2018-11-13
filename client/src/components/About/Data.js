import React, { Component } from 'react';

import Source1 from '../../images/about/sourcing1.jpg';
import Source2 from '../../images/about/sourcing2.jpg';
import State from '../../images/about/ordersbystate.svg';
import Active from '../../images/about/activeusers.svg';

class Data extends Component {
    render(){
        return (
            <div className="data-div">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                            <img src={Source1} alt="source" className="source-one" />
                            <img src={Source2} alt="source" className="source-two" />
                        </div>
                        <div className="col-md-7 responsible">
                            <h4 className="green-history">Responsible sourcing to protect your brand.</h4>
                            <p className="basic">We work with the Quality Certification Alliance, the promotional product industry's only independent, non-profit organization dedicated to certifying manufacturers' processes for product quality and safety, supply chain security, ethical manufacturing compliance, and environmental stewardship.</p>
                        </div>
                    </div>
                </div>
                <div className="container decision-div">
                    <div className="row">
                        <h4 className="about-orange-words">How we help you make decisions.</h4>
                        <p className="basic">We're always looking at comprehensive data across all programs, conducting meta-analysis to ensure that your promotional programs incorporate best practices for effectiveness and efficiency. Once your promotional program is up and running, we use cutting-edge data analytics to inform ongoing adjustments and planning, and we give you access to extensive, customizable reporting for your own reporting and planning requirements.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-6 data-graphic">
                            <h4 className="data-titles">Orders by State</h4>
                            <img src={State} alt="state" className="orders-by-state" />
                        </div>
                        <div className="col-md-6 data-graphic">
                            <h4 className="data-titles">Active Users</h4>
                            <img src={Active} alt="active" className="active-users" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Data;