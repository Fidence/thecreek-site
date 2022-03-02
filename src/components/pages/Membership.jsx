import React from "react";
import Sign from "../memberforem/Sign";
import Register from "../memberforem/Register";
import Logo from "../assets/logo.png";
import "../styles/pages.scss";
import { useState } from "react";
import { Link } from "react-router-dom";



function Membership() {
  const [form, setForm] = useState(true);
  

  return (
    <div className="membership">
      <div className="empty">
        <div className="formcontainer">
          <div className="formflex">
            <div className="imgcontainer">
              <div className="logoimg">
                <Link to="/">
                  {" "}
                  <img src={Logo} alt="" />
                </Link>
              </div>
            </div>

            <div className="memberslink">
              <button className="btn1" onClick={() => setForm(true)}>
                SIGN IN
              </button>
              <button className="btn2" onClick={() => setForm(false)}>
                REGISTER
              </button>

              {form ? <Sign /> : <Register />}

              {/* <Sign />
            <Register /> */}
            </div>
          </div>
          <div className="member_list">
            <Link
              className="
            list"
              to="/about"
            >
              About
            </Link>
            <Link
              className="
            list"
              to="/"
            >
              Service
            </Link>
            <Link className="list" to="/">
              Let's talk
            </Link>
            <Link
              className="
            list"
              to="/member"
            >
              Membership
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Membership;
