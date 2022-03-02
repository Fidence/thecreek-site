import React from "react";
import { Link } from "react-router-dom";
import "../memberforem/signreg.scss";
import { useState } from "react";

function Sign() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignInSubmit = (e) => {
    const SignIn = {
      email,
      password,
    };

    fetch(" http://localhost:8000/signin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(SignIn),
    }).then(() => {
        console.log("Registration succesful");
        e.preventDefault();
        setEmail("");
        setPassword("");
        alert("Sign succesful");
      })
      .catch((Error) => {
        console.log(Error);
      });
  };

  return (
    <div>
      <div className="signup">
        <form onSubmit={handleSignInSubmit}>
          <div className="forminput">
            <input
              className="input"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              placeholder="Email"
            />
          </div>

          <div className="forminput">
            <input
              className="input"
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              placeholder="Password"
            />
          </div>

          <div className="checkbox_container">
            <div className="check_box">
              <input type="checkbox" />{" "}
              <span className="reme">Remember me</span>
            </div>
            <div className="forgot">
              <Link className="link" to="/">
                forgot Password
              </Link>
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

export default Sign;
