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
           <p className="values-paragraph">Here at Overture, we collaborate with our teammates for help, problem-solving, process improvements and ideas in order to give customers our collective best, most creative work. We value different perspectives and encourage discussion across teams. The communications value means being responsive, to customers and each other. It means we strive to make our communications efficient, effective, professional and to the point. It means we’re always looking for synergies and best practices. </p>
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