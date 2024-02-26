import React from "react";
//Strickly for hover and queries
import "../../styles/Team.css";

const NotPictured = (props) => {
  return (
    <div
      className="col-md-6 col-xs-12 employee-card"
      style={{ marginBottom: "15px" }}
    >
      <h3
        className="employee-name"
        style={{ display: "inline", fontSize: "15px", paddingRight: "5px" }}
      >
        {props.name},
      </h3>
      <h4 className="employee-title" style={{ display: "inline" }}>
        {props.title}
      </h4>
    </div>
  );
};

export default NotPictured;
