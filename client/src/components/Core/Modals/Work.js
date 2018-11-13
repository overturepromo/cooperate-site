import React from 'react';
import Close from '../../../images/home/close.svg';

const Work = (props) => {
    return  (
        <div className="live-modal">
            <div className="row">
                <div className='col-xs-6'>
                    <h4 className="values-title">Work Hard, Play Hard</h4>
                </div>
                <div className='col-xs-6' style={{textAlign: 'right'}}>
                <img src={Close} alt="" className="close-img-team" onClick={props.close} /><br />
                </div>
            </div>
            <p className="values-quote">"I work hard, and I tend to play hard. I very seldom rest hard." - Jacqueline Bisset</p>
           <div style={styles.orange}></div>
           <p className="values-paragraph">We set aggressive (but realistic) goals, then work hard to meet and even exceed those goals. The key is to make sure that you don’t get so consumed in your work that you forget what is truly important: enjoying life, having fun and loving whatever it is that you do.</p>
           <p className="values-paragraph">Some may suggest we’ve perfected the art of celebration, we think we understand that proper work-life balance is the key to evolving and not burning out. Life is not all about work and every conversation doesn’t need to be about business. Having this balance is what deepens our relationships and guides us in our pursuit of happiness.</p>
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

export default Work;