import React from 'react';
import Close from '../../../images/home/close.svg';

const Make = (props) => {
    return  (
        <div className="live-modal">
            <div className="row">
                <div className='col-xs-6'>
                    <h4 className="values-title">Make an Impact</h4>
                </div>
                <div className='col-xs-6' style={{textAlign: 'right'}}>
                <img src={Close} alt="" className="close-img-team" onClick={props.close} /><br />
                </div>
            </div>
            <p className="values-quote">“At the end of the day it’s not about what you have or even what you’ve accomplished… it’s about who you’ve lifted up, who you’ve made better. It’s about what you’ve given back.” Denzel Washington</p>
           <div style={styles.orange}></div>
           <p className="values-paragraph">We always think about the bigger picture. We pay successes forward because we believe we rise by lifting others. We give back to our community. We strive to reduce our environmental impact. We care about and respect others, regardless of our differences. We place value in different points of view. We believe in more than ourselves, don’t hesitate to adapt to change, and live by the slogan, “Never stop learning.”</p>
        </div>
    )
}

const styles= {
    orange: {
        height: '2px',
        width: '50px',
        backgroundColor: '#ef7521',
        marginBottom: '20px'
    }
}

export default Make;