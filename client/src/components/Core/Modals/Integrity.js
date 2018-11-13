import React from 'react';
import Close from '../../../images/home/close.svg';

const Integrity = (props) => {
    return  (
        <div className="live-modal">
            <div className="row">
                <div className='col-xs-6'>
                    <h4 className="values-title">Live with Integrity & Respect</h4>
                </div>
                <div className='col-xs-6' style={{textAlign: 'right'}}>
                <img src={Close} alt="" className="close-img-team" onClick={props.close} /><br />
                </div>
            </div>
            <p className="values-quote">“Live in such a way that you would not be ashamed to sell your parrot to the town gossip.” – Will Rogers</p>
           <div style={styles.orange}></div>
           <p className="values-paragraph">Responsibilities Remember to always live by the “Golden Rule” – treat others the way you would want them to treat you. We hold the door open for others, we say “please” and “thank you”, we don’t engage in office gossip or say hurtful things to others. We treat each other as family. At Overture, we genuinely believe it is important to adhere to the highest moral and ethical standards.</p>
           <p className="values-paragraph">This commitment to truth and mutual respect is displayed throughout all levels of the company, as well as across our supplier and client partners. The Overture culture is not only about how we behave towards each other within our walls, but also how we represent ourselves in the general community every day.</p>
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

export default Integrity;