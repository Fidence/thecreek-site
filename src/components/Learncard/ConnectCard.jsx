import React from "react";
import "../Learncard/connectcard.scss"
import {Link} from "react-router-dom"

const ConnectCard = ({ student }) => {
  return (
    <div className="layout">
      <div className="student--section">
        <div className="header">
          <h5> {student.fullName} </h5>
          <Link to="*">
            <p>{student.email}</p>
          </Link>
          <p>{student.gender}</p>
          <p>{student.stateOfOrigin}</p>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default ConnectCard;
