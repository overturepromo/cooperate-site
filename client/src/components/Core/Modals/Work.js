import React from 'react';
import Close from '../../../images/home/close.svg';

const Work = (props) => {
    return  (
        <div className="live-modal">
            <div className="row">
                <div className='col-xs-6'>
                    <h4 className="values-title">Work Hard, Have Fun, Make History</h4>
                </div>
                <div className='col-xs-6' style={{textAlign: 'right'}}>
                <img src={Close} alt="" className="close-img-team" onClick={props.close} /><br />
                </div>
            </div>
            <p className="values-quote">“Always take some of the play, fun, freedom, and wonder of the weekend into your week and your work.” - Rasheed Ogunlaru</p>
           <div style={styles.orange}></div>
           <p className="values-paragraph">We live by the philosophy “do what it takes.” We set aggressive goals and work hard to achieve them, all the while understanding the importance of enjoying what we do. From office pranks to company barbecues to friendly competition to making a difference in our community and the world, we value having fun, together. We believe that working hard and having fun are equally important, and it’s in their balance that we achieve greatness.</p>
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