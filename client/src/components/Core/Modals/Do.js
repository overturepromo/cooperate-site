import React from 'react';
import Close from '../../../images/home/close.svg';

const Do = (props) => {
    return  (
        <div className="live-modal">
            <div className="row">
                <div className='col-xs-6'>
                    <h4 className="values-title">Do More with Less</h4>
                </div>
                <div className='col-xs-6' style={{textAlign: 'right'}}>
                <img src={Close} alt="" className="close-img-team" onClick={props.close} /><br />
                </div>
            </div>
            <p className="values-quote">“Your attitude, not your aptitude, will determine your altitude.” – Zig Ziglar</p>
           <div style={styles.orange}></div>
           <p className="values-paragraph">Make it happen, period. Overture was born with 3 employees, a small office space and little money. It was the positive attitude and lack of excuses from each and every person in the company along the way that helped take Overture to where it is today: one of the largest promotional product agencies in the United States.</p>
           <p className="values-paragraph">We believe in innovation, change and creative ideas. The key to success is taking these ideas from concept to implementation. Sometimes you may be the only person working on a project, sometimes you’ll have tight deadlines and sometimes you’ll have skeptics and cynics. Regardless of the obstacles ahead, we keep a smile on our face and make it happen.</p>
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

export default Do;