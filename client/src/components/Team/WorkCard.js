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
                <h4 style={styles.question}>Bio:</h4>
                <p>{props.bio}</p>
                <h4 style={styles.question}>What is your favorite movie?</h4>
                <p>{props.movie}</p>
                <h4 style={styles.question}>What is your favorite vacation spot?</h4>
                <p>{props.vacation}</p>
                <h4 style={styles.question}>Why did you choose overture promotions?</h4>
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
        height: '1.5px',
        width: '50px',
        backgroundColor: 'orange',
        marginBottom: '20px'
    },
    button:{
        backgroundColor: 'orange',
    },
    question:{
        fontFamily: 'Proxima-bold',
        marginTop: '20px',
        marginBottom: '0'
    }
}

export default WorkCard