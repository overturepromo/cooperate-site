import React from 'react';
import Close from '../../../images/home/close.svg';

const Take = (props) => {
    return  (
        <div className="live-modal">
            <div className="row">
                <div className='col-xs-6'>
                    <h4 className="values-title">Take Ownership & Accountability</h4>
                </div>
                <div className='col-xs-6' style={{textAlign: 'right'}}>
                <img src={Close} alt="" className="close-img-team" onClick={props.close} /><br />
                </div>
            </div>
            <p className="values-quote">“He that is good for making excuses is seldom good for anything else.” – Benjamin Franklin</p>
           <div style={styles.orange}></div>
           <p className="values-paragraph">We believe that the best teams work well together because each individual member takes personal responsibility for their role and is always there for their teammates. The best team members take initiative when they notice issues so the team can succeed. The best team members will voluntarily step in and help out when they see a teammate overwhelmed, in return only wanting to see the team succeed.</p>
           <p className="values-paragraph">As a team, it is important that we commit to an open and honest environment that fosters learning and growth. If all of us are accountable for our actions and take ownership of our roles and responsibilities, we will build a championship team through the combined force of our strengths.</p>
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

export default Take;