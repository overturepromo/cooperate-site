import React, { Component } from 'react';
import AwardCard from './AwardCard';
import Waypoint from 'react-waypoint';

class Awards extends Component {

    state = {
        hover: false
    }

    handleEnter = () => {
       this.setState({ hover: true })
    }

    handleLeave = () => {
        this.setState({ hover: false })
    }

    render(){
        return (
            <div className="awards-div">
                <div className="awards-title">
                    <h2 className="awards-top-title">We win awards. Regularly.</h2>
                    <h6 className="awards-bottom-title">We're good at what we do. But don't take our word for it, see what others have to say about us.</h6>
                </div>
                <div className="container">
                    <Waypoint onEnter={this.handleEnter} onLeave={this.handleLeave}>
                    <div className={ this.state.hover ? "row animated fadeIn slower" : "row"}>
                        <AwardCard title="INC. 5000 FASTEST GROWING COMPANIES IN AMERICA" />
                        <AwardCard title="ERNST AND YOUNG ENTREPRENUER OF THE YEAR FINALIST" />
                        <AwardCard title="50 FASTEST GROWING WOMEN OWNED COMPANIES, WPO" />
                        <AwardCard title="FEMALE ENTREPRENUER OF THE YEAR, WBENC" />
                        <AwardCard title="BEST PLACES TO WORK, COUNSLEOR MAGAZINE" />
                        <AwardCard title="TOP 50 DISTRIBUTORS, PROMO MARKETING MAGAZINE" />
                        <AwardCard title="ADVERTISING SPECIALTIES INSTITUTE HOT LIST" />
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