import React from 'react';
import Close from '../../../images/home/close.svg';

const Be = (props) => {
    return  (
        <div className="live-modal">
            <div className="row">
                <div className='col-xs-6'>
                    <h4 className="values-title">Be Significant, Be Humble</h4>
                </div>
                <div className='col-xs-6' style={{textAlign: 'right'}}>
                <img src={Close} alt="" className="close-img-team" onClick={props.close} /><br />
                </div>
            </div>
            <p className="values-quote">“Keep your eyes on the stars and your feet on the ground.” Theodore Roosevelt</p>
           <div style={styles.orange}></div>
           <p className="values-paragraph">We set big goals and work together to reach them. We mobilize to make every vision a reality. When it comes to customer service, we don’t reach for the bar, we raise it. Whether looking at internal processes, organizational goals, or industry standards, we always strive to drive creativity and innovation rather than following in someone else’s footsteps. We take pride in our work, our colleagues, and our company, but we know there is always more to learn, and there are always ways to do it better. </p>
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

export default Be;