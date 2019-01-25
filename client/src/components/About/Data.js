import React, { Component } from 'react';
import { Parallax } from 'react-parallax';
import CountUp from 'react-countup';
import Waypoint from 'react-waypoint';
import Source1 from '../../images/about/test_p.png';
import Source2 from '../../images/about/test_p2.png';
import Sourcing from '../../images/about/sourcing.jpg';
import State from '../../images/about/ordersbystate.svg';
import ActiveTwo from '../../images/about/activeusers.png';

class Data extends Component {

    state={
        hover: false
    }

    handleEnter = () => {
        console.log('entered')
        this.setState({ hover: true })
     }
 
     handleLeave = () => {
         console.log('bye')
         this.setState({ hover: false })
     }

    render(){
        return (
            <div className="data-div">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-md-4">
                        <Parallax className='sourcing' bgImage={Sourcing} strength={300}>
                            <div style={{height: 430}}>

                            </div>
                        </Parallax>
                            {/* <img src={Source1} alt="source" className="source-one" /> */}
                            {/* <Parallax className="source-one" bgImage={Source1} strength={400}>
                                <div style={{ height: 300 }}>
                                </div>
                            </Parallax> */}
                            {/* <img src={Source2} alt="source" className="source-two" /> */}
                            {/* <Parallax className="source-two" bgImage={Source2} strength={400}>
                                <div style={{ height: 250 }}>
                                </div>
                            </Parallax> */}
                        </div>
                        <div className="col-md-7 responsible">
                            <h4 className="green-history">How carefully we work.</h4>
                            <p className="basic">We’re serious about investing in technology to streamline processes and improve quality and inventory control. We are assiduous in our security precautions to protect our customers’ data. We work with the Quality Certification Alliance, the promotional product industry’s only independent, non-profit organization dedicated to certifying manufacturers’ processes for product quality and safety, supply chain security, ethical manufacturing compliance, and environmental stewardship. We believe so strongly in the importance of their work that we serve on QCA’s Distributor Advocacy Council.</p>
                        </div>
                    </div>
                </div>
                <div className="container decision-div">
                    <div className="row">
                        <h4 className="about-blue-words">How we help you make decisions.</h4>
                        <p className="basic">We’re always looking at comprehensive data across all programs, conducting meta-analyses to ensure that your promotional programs incorporate best practices for effectiveness and efficiency. Once your promotional program is up and running, we use cutting-edge data analytics to inform ongoing adjustments and planning, and we give you access to extensive, customizable reporting for your own reporting and planning requirements.</p>
                    </div>
                    <Waypoint onEnter={this.handleEnter} onLeave={this.handleLeave}>
                        <div className="row">
                            <div className="col-md-6 data-graphic">
                                <h4 className="data-titles">Orders by State</h4>
                                <img src={State} alt="state" className="orders-by-state" />
                            </div>
                            <div className="col-md-6 data-graphic">
                                <h4 className="data-titles">Active Users</h4>
                                <img src={ActiveTwo} alt="active" className="active-users" />
                                <div className="count1">
                                    {this.state.hover === true ? <CountUp end={10137} duration={4} start={-875.039} /> : <CountUp end={10000} duration={4} />}
                                </div>
                                <div className="count2">
                                    {this.state.hover === true ? <CountUp end={4952} duration={3} start={-875.039} /> : <CountUp end={4800} duration={3} />}
                                </div>
                                <div className="count3">
                                    {this.state.hover === true ? <CountUp end={398} duration={2} start={-875.039} /> : <CountUp end={398} duration={2} />}
                                </div>
                            </div>
                        </div>
                    </Waypoint>
                </div>
            </div>
        )
    }
}

export default Data;