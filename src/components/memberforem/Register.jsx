import React from 'react'
import {Link} from "react-router-dom"
import "../memberforem/signreg.scss";
import {useState} from  "react"

function Register() {

   const [fullName, setfullName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");
   const [category, setCategory] = useState("");

   const handleSignUpSubmit = (e) => {
      e.preventDefault();
      const SignUp= {
        fullName,
        email,
        password,
        category

      }

       fetch(" http://localhost:8000/register", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(SignUp),
       })
         .then(() => {
           console.log("Registration succesful");
           e.preventDefault();
           setfullName("");
           setEmail("");
           setPassword("");
           setCategory("");
           alert("Registration succesful");
           
         })
         .catch((Error) => {
           console.log(Error);
         });
   }

  return (
    <div>
      <div className="signup">
        <form onSubmit={handleSignUpSubmit}>
          <div className="forminput">
            <input
              className="input"
              type="text"
              value={fullName}
              onChange={(e) => setfullName(e.target.value)}
              required
              placeholder="Full Name"
            />
          </div>

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
            <select
              className="select"
              placeholder="Please Select"
              required
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            >
              <option value>Please select.....</option>
              <option value="enthusiast">Enthusiast</option>
              <option value="service_professional">service professional</option>
              <option value="Veteran">Veteran</option>
            </select>
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
              <input type="checkbox" />
            </div>
            <div className="forgot">
              <Link className="link" to="/">
                Accept Terms & Conditions
              </Link>
            </div>
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