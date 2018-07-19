import React from 'react'

const WorkCard = (props) => {
    return (
        <div style={{width: '100%'}}>
            <div className="row">
                <div className='col-xs-6'>
                    <img src={props.image} alt="" style={styles.image} />
                </div>
                <div className='col-xs-6'>
                <button onClick={props.close} className="team-close-button">close</button>
                </div>
            </div>
            <div>
                <h3>{props.name}</h3>
                <h4>{props.title}</h4>
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
        backgroundColor: 'orange'
    },
    button:{
        backgroundColor: 'orange',
    }
}

export default WorkCard