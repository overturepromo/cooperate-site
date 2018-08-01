import React from 'react'
import Close from '../../images/home/close.svg'

const WorkCardTwo = (props) => {
    return (
        <div style={{width: '100%'}}>
            <div className="row">
                <div className='col-xs-6'>
                    <img src={props.image} alt="" style={styles.image} />
                </div>
                <div className='col-xs-6' style={{textAlign: 'right'}}>
                <img src={Close} alt="" className="close-img-team" onClick={props.close} /><br />
                </div>
            </div>
            <div>
                <h3 className="employee-name">{props.name}</h3>
                <h4 className="employee-title">{props.title}</h4>
                <div style={styles.orange}></div>
                <h4 style={styles.question}>Fun Facts:</h4>
                <p>{props.movie}</p>
                <p>{props.vacation}</p>
                <p>{props.why}</p>
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
        height: '2px',
        width: '50px',
        backgroundColor: '#ef7521',
        marginBottom: '20px'
    },
    button:{
        backgroundColor: 'orange',
    },
    question:{
        fontFamily: 'Proxima-bold',
        marginTop: '20px',
    }
}

export default WorkCardTwo