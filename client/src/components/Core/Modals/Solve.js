import React from 'react';
import Close from '../../../images/home/close.svg';

const Solve = (props) => {
    return  (
        <div className="live-modal">
            <div className="row">
                <div className='col-xs-6'>
                    <h4 className="values-title">Solve Problems</h4>
                </div>
                <div className='col-xs-6' style={{textAlign: 'right'}}>
                <img src={Close} alt="" className="close-img-team" onClick={props.close} /><br />
                </div>
            </div>
            <p className="values-quote">“A problem is a chance for you to do your best.” –  Duke Ellington</p>
           <div style={styles.orange}></div>
           <p className="values-paragraph">Our philosophy: there is no problem that can’t be solved. When the going gets tough, we figure it out. At Overture, we understand that problems arise. Processes outlive their effectiveness. We work together find solutions quickly, and are always asking “How can we improve this?”</p>
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

export default Solve;