import React from "react";
import "../Rightbar/rightbar.scss";
import Hero from "../assets/hero.png";
import Learn from "../assets/learn.svg";
import Create from "../assets/create.svg";
import Connect from "../assets/connect.svg";
import { Link } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

function Rightbar() {
  return (
    <div className="right">
      <Navbar />
      <div className="right_body">
        <div className="flex1">
          <h1>Welcome to The &lt;creek/&gt;</h1>
          <p>
            TechCreek is a habitat for the teeming <br /> population of youths
            making sense of their <br /> lives with their digital skills and
            competencies,
            <br /> and actively involved in the development of <br /> the ‘new
            economy’ from Rivers State.
          </p>
        </div>

        <div className="flex2">
          <img src={Hero} alt="" />
        </div>
        
      </div>
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
          <Link to="/connect">
            {" "}
            <img src={Connect} alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Rightbar;
