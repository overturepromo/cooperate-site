import React from 'react';
import Rule from '../../images/team/orange_rule.svg'
//Strickly for hover and queries
import '../../styles/Team.css'

const Employee = (props) => {
    return (
        <div onClick={props.clicked} className="col-md-3 col-xs-6 employee-card">
            <img src={props.image} alt="headshot" className="employee-headshot" />
            <h3 className="employee-name">{props.name}</h3>
            {/* <div style={{height: '1.5px', width: '20%', backgroundColor: '#ef7521'}}></div> */}
            <div  style={{width: '50px'}}>
                <img src={Rule} alt="ruler" style={{height: '4px', width: '100%'}} />
            </div>
            <h4 className="employee-title">{props.title}</h4>
        </div>
    )
}

export default Employee;