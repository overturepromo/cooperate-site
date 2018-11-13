import React from 'react';
import Close from '../../../images/home/close.svg';

const Be = (props) => {
    return  (
        <div className="live-modal">
            <div className="row">
                <div className='col-xs-6'>
                    <h4 className="values-title">Be Significant Be Big</h4>
                </div>
                <div className='col-xs-6' style={{textAlign: 'right'}}>
                <img src={Close} alt="" className="close-img-team" onClick={props.close} /><br />
                </div>
            </div>
            <p className="values-quote">“Aim for the moon. If you miss, you may hit a star.” – W. Clement Stone</p>
           <div style={styles.orange}></div>
           <p className="values-paragraph">We believe that whatever it is that you choose to do in life, you must strive to be the very best at it. We’re not an average company and neither are our people. Don’t settle for mediocrity.</p>
           <p className="values-paragraph">Be a difference maker. Have a positive impact on everyone around you through your words and actions.</p>
           <p className="values-paragraph">Be bold. Raise the bar and grow from your mistakes. Push your limits to reach all your goals.</p>
           <p className="values-paragraph">Be a global citizen. Consistently give your time, money, or resources to help those in need.</p>
           <p className="values-paragraph">Be Significant. Be Big.</p>
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