import React from 'react';

//Strickly for hover and queries
import '../../styles/Team.css'

const Employee = (props) => {
    return (
        <div onClick={props.clicked} className="col-md-3 col-sm-6 employee-card">
            <img src={props.image}  style={{width: '225px', height: '225px'}} />
            <h3>{props.name}</h3>
            <div style={{height: '1.5px', width: '20%', backgroundColor: '#ef7521'}}></div>
            <h4>{props.title}</h4>
        </div>
    )
}

export default Employee;