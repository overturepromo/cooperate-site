import React from 'react';
import Close from '../../../images/home/close.svg';

const Communicate = (props) => {
    return  (
        <div className="live-modal">
            <div className="row">
                <div className='col-xs-6'>
                    <h4 className="values-title">Communicate & Collaborate</h4>
                </div>
                <div className='col-xs-6' style={{textAlign: 'right'}}>
                <img src={Close} alt="" className="close-img-team" onClick={props.close} /><br />
                </div>
            </div>
            <p className="values-quote">“Great things in business are never done by one person; they’re done by a team of people.” – Steve Jobs</p>
           <div style={styles.orange}></div>
           <p className="values-paragraph">It’s much harder to accomplish tasks alone than it is with a team. Here at Overture, we rely on our teammates for assistance, guidance and ideas in order to accomplish our goals to our highest potential.</p>
           <p className="values-paragraph">We value differences in opinion and encourage discussion amongst and across teams to guarantee the work we do is nothing less than excellent. When we communicate effectively and collaborate daily, we ensure we are always putting our best foot forward as a company.</p>
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

export default Communicate;