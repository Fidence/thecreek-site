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

          <div className="checkbox_container">
            <div className="check_box">
              <input type="checkbox" /> <span className='reme'>Remember me</span>
            </div>
            <div className="forgot">
             <Link  className='link' to="/">forgot Password</Link>
            </div>
          </div>

          <div className="bton">
            <button>Log in</button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Sign