import React from "react";
import "../Train/train.scss";
import { useState } from "react";

function Train({ handleClick }) {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [dateofBirth, setDateOfBirth] = useState("");
  const [education, setEducation] = useState("--Select Education--");
  const [gender, setGender] = useState("--your gender--");
  const [stateoforigin, setStateOfOrigin] = useState(
    "--Select State of Origin--"
  );
  const [lga, setLga] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [address, setAddress] = useState("");

  const handleSubmit = (e) => {
    // e.preventDefault();
    const userApplication = {
      firstName,
      middleName,
      lastName,
      dateofBirth,
      education,
      gender,
      stateoforigin,
      lga,
      email,
      phoneNumber,
      address,
    };
    fetch("http://localhost:8000/apply", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(userApplication),
    }).then(() => {
      console.log("Application succesful");
       e.preventDefault();
       setFirstName("");
       setMiddleName("")
       setLastName("");
       setDateOfBirth("");
       setEducation("");
       setGender("");
       setStateOfOrigin("");
       setLga("");
       setEmail("");
       setPhoneNumber("");
       setAddress("");
       alert("Application Succesful");
    });
  };

  return (
    <div className="train_container">
      <div className="payment">
        <div className="paragraph">
          <p>Training fee is N20,000(Twenty Thousand Naira only).</p>
          <p>
            <span>**</span>Make paymeny to RSG Information & Comm. Dept(ICT).
          </p>
          <p>1011616837</p>
          <p>Zenith Bank</p>
          <p>
            Submit Teller or payment reciept at Riv-TechCreek,R/S ICT Dept, Aba
            Road, PH <span>**</span>
          </p>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="personaldata">
            <p className="form_p">Personal Information</p>
            <div className="informations">
              <input
                type="text"
                value={firstName}
                onChange={(e) => {
                  setFirstName(e.target.value);
                }}
                required
                placeholder="First-name*"
              />
              <input
                type="text"
                value={middleName}
                onChange={(e) => {
                  setMiddleName(e.target.value);
                }}
                required
                placeholder="Middle-name*"
              />
              <input
                type="text"
                value={lastName}
                onChange={(e) => {
                  setLastName(e.target.value);
                }}
                required
                placeholder="Last-name*"
              />
            </div>
            <div className="select">
              <input
                type="date"
                value={dateofBirth}
                onChange={(e) => {
                  setDateOfBirth(e.target.value);
                }}
                required
                placeholder="Date of Birth*"
              />
              <select
                className="select_item"
                value={education}
                onChange={(e) => {
                  setEducation(e.target.value);
                }}
                required
                name="Education"
                id="Education"
                placeholder=" --Select Education"
              >
                <option value="O-level">Please Select</option>
                <option value="Undergraduate">Undergraduate</option>
                <option value="Bachelors Degree ">Bachelors Degree</option>
                <option value="OND/HND">OND/HND</option>
                <option value="Master Degree ">Master Degree</option>
                <option value="Other ">Other</option>
              </select>
              <br />
              <select
                className="select_item"
                value={gender}
                onChange={(e) => {
                  setGender(e.target.value);
                }}
                required
                name="gender"
                id="gender"
                placeholder=" --gender--"
              >
                <option value="gender">--gender--</option>
                <option value="Services">Services</option>
                <option value="Veteran">Veteran</option>
              </select>
            </div>
            <div className="state">
              <select
                className="select_item"
                value={stateoforigin}
                onChange={(e) => {
                  setStateOfOrigin(e.target.value);
                }}
                required
                name="States"
                id="States"
                placeholder="--Select State Of Origin"
              >
                <option value="--Select State of Origin--">
                  --Select State of Origin--
                </option>
                <option value="Abuja FCT">Abuja FCT</option>
                <option value="Abia State">Abia</option>
                <option value="Adamawa">Adamawa</option>
                <option value="Akwa Ibom">Akwa Ibom</option>
                <option value="Anambra">Anambra</option>
                <option value="Bauchi">Bauchi</option>
                <option value="Bayelsa">Bayelsa</option>
                <option value="Benue">Benue</option>
                <option value="Borno">Borno </option>
                <option value="Cross River">Cross River</option>
                <option value="Delta">Delta</option>
                <option value="Ebonyi">Ebonyi</option>
                <option value="Edo">Edo</option>
                <option value="Ekiti">Ekiti</option>
                <option value="Enugu"> Enugu</option>
                <option value="Gombe">Gombe</option>
                <option value="Imo">Imo</option>
                <option value="Jigawa">Jigawa</option>
                <option value="Kaduna">Kaduna</option>
                <option value="Kano">Kano</option>
                <option value="Katsina">Katsina</option>
                <option value="Kebbi">Kebbi</option>
                <option value="Kogi">Kogi</option>
                <option value="Kwara">Kwara</option>
                <option value="Lagos">Lagos</option>
                <option value="Nassarawa">Nassarawa</option>
                <option value="Niger">Niger</option>
                <option value="Ogun">Ogun</option>
                <option value="Ondo">Ondo</option>
                <option value="Osun">Osun</option>
                <option value="Oyo">Oyo</option>
                <option value="Plateau">Plateau</option>
                <option value="Rivers">Rivers</option>
                <option value="Sokoto">Sokoto</option>
                <option value="Taraba">Taraba</option>
                <option value="Yobe">Yobe</option>
                <option value="Zamfara">Zamfara</option>
              </select>
              <input
                type="text"
                value={lga}
                onChange={(e) => {
                  setLga(e.target.value);
                }}
                required
                placeholder="L.G.A of Origin"
              />
            </div>
            <div className="Contact-container">
              <p className="form_p">Contact Information</p>
              <div className="EmailandContact">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                  required
                  placeholder="Email Address*"
                />
                <input
                  type="text"
                  value={phoneNumber}
                  onChange={(e) => {
                    setPhoneNumber(e.target.value);
                  }}
                  required
                  placeholder="Phone Number*"
                />
              </div>
              <textarea
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                }}
                className="textarea"
                name="Message"
                id="Message"
                cols="80"
                rows="5"
                placeholder="Residential Address*"
              ></textarea>
            </div>
          </div>

          <div className="btn">
            <button>Submit</button>
            <button className="close_btn" onClick={handleClick}>
              close
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Train;
