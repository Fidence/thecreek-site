import React from 'react'
import "../About/about2.scss"
import Bg1 from "../assets/bg1.png"
import Bg2 from "../assets/bg2.png"
import Bg3 from "../assets/bg3.png"
import Bg4 from "../assets/bg4.png"
import Bg6 from "../assets/training.jpg"
import location from "../assets/location.svg";

import {
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";



function About2() {
  return (
    <div className="bg_container">
      <div className="abt_3">
        <div className="about_bg1">
          <img src={Bg1} alt="" />
        </div>
        <div className="about_bg2">
          <img src={Bg2} alt="" />
        </div>
        <div className="about_bg3">
          <img src={Bg4} alt="" />
        </div>
        <div className="about_bg4">
          <img src={Bg3} alt="" />
        </div>
        <div className="about_bg5">
          <img src={Bg2} alt="" />
        </div>

        <div className="about_bg6">
          <img src={Bg6} alt="" />
        </div>
      </div>

      <div className="location">
        <div className="location_ict">
          <img src={location} alt="" />
          <p>
            Rivers State ICT Center. Opp. Pleasure Park Aba Road, Port
            <br /> Harcourt. Rivers State, Nigeria.{" "}
            <a href="talk@techcreek.Nigeria">talk@techcreek.ng</a> <br />
            <a href=" O9030003185, 09030003180"> O9030003185, 09030003180</a>
          </p>
        </div>

        <div className="socials">
          <a href="https://web.facebook.com/techcreekng/?_rdc=3&_rdr">
            <FaFacebook style={{ color: "#3b5998", fontSize: "20px " }} />
          </a>
          <a href="https://twitter.com/techcreekng">
            {" "}
            <FaTwitter
              style={{
                marginLeft: "10px",
                color: "#00acee",
                fontSize: "20px ",
              }}
            />
          </a>

          <a href="">
            {" "}
            <FaGithub
              style={{ marginLeft: "10px", color: "black", fontSize: "20px " }}
            />
          </a>
          <a href="https://ng.linkedin.com/company/rivers-state-ict-department-techcreek">
            <FaLinkedin
              style={{
                color: "#0e76a8",
                marginLeft: "10px",
                fontSize: "20px ",
              }}
            />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About2