import React from "react";
import { Link } from "react-router-dom";
import About2 from "../About/About2"
import Quote from "../assets/quote.svg"
import Connect from "../assets/connect.svg";
import Create from "../assets/create.svg";
import Learn from "../assets/learn.svg";
import {  FaLongArrowAltLeft } from "react-icons/fa";


function About() {
  return (
    <div className="about_div">
      <div className="back1">
        <Link className="abt_link" to="/member">
          <p>
            <FaLongArrowAltLeft />
            Back
          </p>
        </Link>
      </div>

      <div className="maincontainer">
        <About2 />

        <div className="about2">
          <img className="image" src={Quote} width="120px" alt="" />
          <h1>About the &lt;creek/&gt;</h1>

          <div className="abt_txt">
            <p>
              TechCreek is a habitat for the teeming population of youths making
              sense of their lives with their digital skills and competencies,
              and actively involved in the development of <br /> the ‘new
              economy’ from Rivers State. Our culture is at heart of everything
              we do. It reinforces our core values which creates the perfect
              picture of our existence as the melting pot for the development of
              tech capacities and opportunities in the region.
              <br /> &ldquo;Tech creek is the pilot for a new set of creeks that
              would huse creativity in design and system development in the
              Niger Delta.&rdquo;
            </p>
            <div className="home_Icons">
              <div className="learn_icone">
                <Link to="/learn">
                  <img src={Learn} width="50px" height="50px" alt="" />
                </Link>
                <h6>Learn</h6>
              </div>
              <div className="learn_icon">
                <Link to="/create">
                  <img src={Create} width="50px" height="50px" alt="" />
                </Link>
                <h6>Create</h6>
              </div>
              <div className="learn_icon">
                <Link to="/">
                  <img src={Connect} width="50px" height="50px" alt="" />
                </Link>
                <h6>Connent</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
