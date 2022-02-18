import React from 'react'
import Logo from '../assets/logo.png'
import Search from '../assets/search.png'
import "../Sidebar/sidebar.scss"
import Member from "../assets/member.svg";
import {Link} from "react-router-dom"
import Location from "../assets/location.svg"


function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebarcont">
        <div className="sideimg">
          <img src={Logo} alt="" />
        </div>

        <div className="sidebarinput">
          <img src={Search} alt="" />
          <input type="text" placeholder="search" />
        </div>
        <div className="sidebarlist">
          <ul>
            <li>Learn</li>
            <li>Connect</li>
            <li>Create</li>
            <li>Member</li>
          </ul>
        </div>
        
          <div className="location">
            <div className="location_ict">
              <img src={Location} alt="" />
              <p>
                Rivers State ICT Center. Opp. Pleasure Park Aba Road, Port
                <br /> Harcourt. Rivers State, Nigeria.{" "}
                <a href="talk@techcreek.Nigeria">talk@techcreek.ng</a>
              </p>
            </div>
            <p className="phone">
              <a href=" O9030003185, 09030003180"> O9030003185, 09030003180</a>
            </p>
          </div>
        

        <div className="img4">
          <Link to="/member">
            <img src={Member} width="20px" height="20px" alt="" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Sidebar