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
           <p className="values-paragraph">We are committed to respecting each other, our supplier partners, and our clients, and we carry that commitment into our public lives. We emphasize the importance of truth and respect in all of our interpersonal relationships. Just as we value the aspects that make each of us unique, we also respect those differences. We aim to be the same people inside and outside the walls of Overture. </p>
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