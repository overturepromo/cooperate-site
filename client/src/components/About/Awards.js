import React, { Component } from 'react';
import AwardCard from './AwardCard';
import Waypoint from 'react-waypoint';

class Awards extends Component {

    state = {
        entered: false
    }

    handleEnter = () => {
       this.setState({ entered: true })
    }

    render(){
        return (
            <div className="awards-div">
                <div className="awards-title">
                    <h2 className="awards-top-title">We win awards. Regularly.</h2>
                    <h6 className="awards-bottom-title">We're good at what we do. But don't take our word for it, see what others have to say about us.</h6>
                </div>
                <div className="container">
                    <Waypoint onEnter={this.handleEnter}>
                    <div className={ this.state.entered ? "row animated slideInDown" : "row"}>
                        <AwardCard title="INC. 5000 FASTEST GROWING COMPANIES IN AMERICA" />
                        <AwardCard title="ERNST AND YOUNG ENTREPRENUER OF THE YEAR FINALIST" />
                        <AwardCard title="QUALITY CERTIFICATION COUNCIL (QCA) DAC MEMBER" />
                        <AwardCard title="FEMALE ENTREPRENUER OF THE YEAR, WBENC" />
                        <AwardCard title="BEST PLACES TO WORK, COUNSLEOR MAGAZINE" />
                        <AwardCard title="TOP 50 DISTRIBUTORS, PROMO MARKETING MAGAZINE" />
                        <AwardCard title="ADVERTISING SPECIALTIES" />
                        <AwardCard title="CHICAGO TRIBUNE'S BEST PLACES TO WORK" />
                        <AwardCard title="DISTRIBUTOR OF DISTINCTION AWARD" />                      
                    </div>
                    </Waypoint>                    
                </div>
            </div>
        )
    }
}

export default Awards;