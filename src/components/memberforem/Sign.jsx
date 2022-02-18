import React from 'react'
import {Link} from "react-router-dom"
import "../memberforem/signreg.scss"

function Sign() {
  return (
    <div>
      <div className="signup">
        <form>
          <div className="forminput">
            <input className="input" type="text" placeholder="Email" />
          </div>

          <div className="forminput">
            <input className="input" type="text" placeholder="Password" />
          </div>

          <div className="forminput">
            <input className="" type="checkbox" name="" id="" />{" "}
            <span className='reme'>Remember me</span>
            <span className="forgot">
              <Link className="link" to="/">
                Forgot Password?
              </Link>
            </span>
          </div>

          <div className="btn">
            <button>Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sign