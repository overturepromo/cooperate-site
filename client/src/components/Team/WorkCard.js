import React from 'react'

const WorkCard = (props) => {
    return (
        <div>
            <div style={{textAlign: 'right'}}>
                <button onClick={props.close} style={styles.button}>close</button>
            </div>
            <br />
            <div>
                <img src={props.image} alt="" style={styles.image} />
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