import React from 'react';
import Close from '../../../images/home/close.svg';

const Weird = (props) => {
    return  (
        <div className="live-modal">
            <div className="row">
                <div className='col-xs-6'>
                    <h4 className="values-title">Weird is Cool</h4>
                </div>
                <div className='col-xs-6' style={{textAlign: 'right'}}>
                <img src={Close} alt="" className="close-img-team" onClick={props.close} /><br />
                </div>
            </div>
            <p className="values-quote">“I think everybody’s weird. We should all celebrate our individuality and not be embarrassed or ashamed of it.” – Johnny Depp</p>
           <div style={styles.orange}></div>
           <p className="values-paragraph">We love weird. It’s what comprises each and every one of us. We encourage weird. It’s what makes our company what it is today. Being creative, taking chances, and trying things no one else has ever done before is what defines our personality.</p>
           <p className="values-paragraph">We are the unusual thinkers, the pioneers of new ideas every day. Sometimes we are great and sometimes we make mistakes. But our ability to learn from setbacks and head in a different direction than everyone else is the key to our success</p>
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

export default Weird;