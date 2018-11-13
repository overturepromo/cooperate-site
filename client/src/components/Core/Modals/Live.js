import React from 'react';
import Close from '../../../images/home/close.svg';

const Live = (props) => {
    return  (
        <div className="live-modal">
            <div className="row">
                <div className='col-xs-6'>
                    <h4 className="values-title">Live Proud, Maintain Humility</h4>
                </div>
                <div className='col-xs-6' style={{textAlign: 'right'}}>
                <img src={Close} alt="" className="close-img-team" onClick={props.close} /><br />
                </div>
            </div>
            <p className="values-quote">“Believe in your flyness, conquer your shyness.” – Kanye West</p>
           <div style={styles.orange}></div>
           <p className="values-paragraph">We take pride in our appearance, what we do, the company we represent, and the people we work with. We remain humble, whether we are a top performing sales-person, part of the executive management team or an entry-level employee.</p>
           <p className="values-paragraph">We strive to always be enthusiastic about our mission and go above and beyond the call of duty for the company and our clients. We build bridges – never burn them – through our work ethic and superior service levels. The relationships we establish are deep and lifelong. Never overpromise, always over-deliver.</p>
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

export default Live;