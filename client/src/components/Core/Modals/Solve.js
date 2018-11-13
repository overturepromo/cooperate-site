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
           <p className="values-paragraph">Our philosophy: there is no problem that can’t be solved. We at Overture have a can-do attitude that fosters inquisitive minds and encourages employees to think outside of the box in all that they do.</p>
           <p className="values-paragraph">When the going gets tough, we figure it out. At Overture, we understand that problems arise, more often than they are wanted. However, it’s our ability to deal with those problems and move past them that sets us apart in this industry. Every problem has a solution, and we focus on finding those solutions quickly and efficiently.</p>
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