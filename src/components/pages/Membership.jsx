import React from "react";
import Sign from "../memberforem/Sign";
import Register from "../memberforem/Register";
import Logo from "../assets/logo.png";
import "../styles/pages.scss";
import { useState } from "react";

function Membership() {
  const [form, setForm] = useState(true);

  return (
    <div className="membership">
      <div className="formcontainer">
        <div className="formflex">
          <div className="imgcontainer">
            <img src={Logo} width="225px" height="250px" alt="" />
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
      </div>
    </div>
  );
}

export default Membership;
