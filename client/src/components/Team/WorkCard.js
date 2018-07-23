import React from 'react'
import Close from '../../images/home/close.svg'

const WorkCard = (props) => {
    return (
        <div style={{width: '100%'}}>
            <div className="row">
                <div className='col-xs-6'>
                    <img src={props.image} alt="" style={styles.image} />
                </div>
                <div className='col-xs-6' style={{textAlign: 'right'}}>
                <img src={Close} className="close-img-team" onClick={props.close} /><br />
                </div>
            </div>
            <div>
                <h3 className="employee-name">{props.name}</h3>
                <h4 className="employee-title">{props.title}</h4>
                <div style={styles.orange}></div>
                <p>{props.bio}</p>
            </div>
        </div>
    )
}

const styles= {
    image: {
        borderRadius: '160px',
        width: '125px'
    },
    orange: {
        height: '1.5px',
        width: '50px',
        backgroundColor: 'orange',
        marginBottom: '10px'
    },
    button:{
        backgroundColor: 'orange',
    }
}

export default WorkCard