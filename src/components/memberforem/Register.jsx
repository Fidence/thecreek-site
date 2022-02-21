import React from 'react'
import {Link} from "react-router-dom"
import "../memberforem/signreg.scss";


function Register() {
  return (
    <div>
      <div className="signup">
        <form>
          <div className="forminput">
            <input
              className="input"
              type="text"
              placeholder="First Name, Last Name"
            />
          </div>

          <div className="forminput">
            <input className="input" type="text" placeholder="Email" />
          </div>
          <div className="forminput">
            <select className="input">
              <option value>Please select.....</option>
              <option value="enthusiast">Enthusiast</option>
              <option value="service_professional">service professional</option>
              <option value="Veteran">Veteran</option>
            </select>
          </div>
          <div className="forminput">
            <input className="input" type="text" placeholder="Password" />
          </div>

          <div className="forminput">
            <input  type="checkbox" name="" id="" />{" "}
            <span className='reme'>Remember me</span>
            <span className="forgot">
              <Link className="link" to="/">
                Forgot Password?
              </Link>
            </span>
          </div>

          <div className="btnn">
            <button>Sign Up</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register