import React from 'react';

import '../../styles/Work.css'
import NBC from '../../images/work/nbc.jpg';
import Honey from '../../images/work/honey.jpg';
import Mikes from '../../images/work/mikes.jpg';
import NBA from '../../images/work/nba.jpg';
import Nielsen from '../../images/work/nielsen.jpg';
import Fiji from '../../images/work/fiji.jpg';
import Jimmy from '../../images/work/jimmy.jpg';
import Pinterest from '../../images/work/pinterest.jpg';
import Sports from '../../images/work/espn.jpg';
import Slurpee from '../../images/work/slurpee.jpg';
import Google from '../../images/work/google.jpg';
import Subway from '../../images/work/subway.jpg';
import Lexus from '../../images/work/lexus.jpg';
import Cubs from '../../images/work/cubs.jpg';
import Rock from '../../images/work/rocknroll.jpg';
import BCBS from '../../images/work/bcbs.jpg';
import Beach from '../../images/work/beachbabe.jpg';
import Univision from '../../images/work/univision.jpg';

const ImageGrid = () => {
    return (
        <div className="container" style={{marginTop: '30px'}}>
           <div className="rows">
                <div className="columns">
                    <img src={NBC} alt={'NBC'} style={{width: '100%'}} />
                    <img src={Honey} alt={'Honey'} style={{width: '100%'}} />
                    <img src={Mikes} alt={'Mikes'} style={{width: '100%'}} />
                    <img src={NBA} alt={'NBA'} style={{width: '100%'}} />
                    <img src={Nielsen} alt={'Nielsen'} style={{width: '100%'}} />
                    <img src={Fiji} alt={'Fiji'} style={{width: '100%'}} />
                </div>
                <div className="columns">
                    <img src={Jimmy} alt={'Jimmy'} style={{width: '100%'}} />
                    <img src={Pinterest} alt={'Pinterest'} style={{width: '100%'}} />
                    <img src={Sports} alt={'Sports'} style={{width: '100%'}} />
                    <img src={Slurpee} alt={'Slurpee'} style={{width: '100%'}} />
                    <img src={Google} alt={'google'} style={{width: '100%'}} />
                    <img src={Subway} alt={'Subway'} style={{width: '100%'}} />
                </div> 
                <div className="columns">
                    <img src={Lexus} alt={'Lexus'} style={{width: '100%'}} />
                    <img src={Cubs} alt={'cubs'} style={{width: '100%'}} />
                    <img src={Rock} alt={'rock'} style={{width: '100%'}} />
                    <img src={BCBS} alt={'bcbs'} style={{width: '100%'}} />
                    <img src={Beach} alt={'Beach'} style={{width: '100%'}} />
                    <img src={Univision} alt={'Univision'} style={{width: '100%'}} />
                </div> 
           </div>
        </div>
    )
}

export default ImageGrid;
