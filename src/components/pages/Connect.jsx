import React from "react";
import ConnectCard from "../Learncard/ConnectCard";
import students from "../Learncard/Card";
import "../styles/pages.scss"
import Learn from "../assets/learn.svg";
import Create from "../assets/create.svg";
import {Link} from "react-router-dom"


const Connect = () => {
  return (
    <div>
      <div className="products__container">
        {students.map((student, index) => {
          return <ConnectCard student={student} key={index} />;
        })}

        <div className="postion">
          <div className="img1">
            <Link to="/learn">
              {" "}
              <img src={Learn} alt="" />
            </Link>
          </div>
          <div className="img2">
            {" "}
            <Link to="create">
              {" "}
              <img src={Create} alt="" />
            </Link>
          </div>
          <div className="img3">
            <Link to="/">
              {" "}
              Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Connect;
