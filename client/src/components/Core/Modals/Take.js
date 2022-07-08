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
            <p className="values-quote">“A person who never made a mistake never tried anything new.” Albert Einstein </p>
           <div style={styles.orange}></div>
           <p className="values-paragraph">We know that mistakes happen, and we know they are always opportunities to improve. We acknowledge when something goes wrong and find the solutions together. We empower the individuals most involved in a process to participate in its improvement. We are accountable to each other for always asking how we can make something better. We own every mistake, and we take the initiative to do whatever it takes to make things right for our clients.</p>
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