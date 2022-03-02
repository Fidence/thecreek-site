import React from "react";
import "../Learncard/connectcard.scss";
import { Link } from "react-router-dom";
import { FaFacebook, FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";

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

          <div className="socials">
            <FaFacebook style={{ color: "#3b5998" }} />
            <FaTwitter style={{ marginLeft: "10px", color: "#00acee" }} />
            <FaGithub style={{ marginLeft: "10px" }} />
            <FaLinkedin style={{ color: "#0e76a8",marginLeft:"10px" }} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectCard;
