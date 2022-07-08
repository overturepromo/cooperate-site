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
            <p className="values-quote">“If you are always trying to be normal, you will never know how amazing you can be.” Maya Angelou </p>
           <div style={styles.orange}></div>
           <p className="values-paragraph">We believe in celebrating our diversity and valuing our varying perspectives. We strive to be unusual thinkers and innovative creators. We shy away from the idea of “normalcy” and instead embrace our inner weirdness, because our differences are where we find the diversity of thought and process nuances that set us apart.</p>
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