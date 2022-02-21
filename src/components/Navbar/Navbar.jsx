import React from "react";
import "./navbar.scss";
import { Link } from "react-router-dom";
import Note from "../assets/notification.svg";
import { useState } from "react";
import ModalPage from "../Modal/ModalPage";
import "bootstrap/dist/css/bootstrap.min.css";


const Navbar = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  const [name, setname] = useState(false);
  const handleToggle = () =>setname(!name);

  return (
    <div className="nav">
      <div className="nav_items">
        <nav>
          <ul>
            <li>
              <Link className="nav_link" to="/">
                Home
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/learn">
                Learn
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/create">
                Create
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/connect">
                Connect
              </Link>
            </li>
            <li>
              <Link className="nav_link" to="/member">
                Membership
              </Link>
            </li>

            <div className="home_notification" onClick={handleToggle}>
              <p>ongoing Applications</p>
              <img src={Note} width="30px" alt="" />

              {name && (
                <div className="blue_toggle " onClick={handleClick}>
                  <p>ICT & Digital Literacy Training</p>
                </div>
              )}

              <ModalPage handleClick={handleClick} show={show} />
            </div>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
