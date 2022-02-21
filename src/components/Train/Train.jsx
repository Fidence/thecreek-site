import React from "react";
import  "../Train/train.scss"


function Train() {
  return (
    <div>
      <form action="" method="post">
        <div className="payment">
          <div className="paragraph">
            <p>Training fee is N20,000(Twenty Thousand Naira only).</p>
            <p>
              <span>**</span>Make paymeny to RSG Information & Comm. Dept(ICT).
            </p>
            <p>1011616837</p>
            <p>Zenith Bank</p>
            <p>Submit Teller or payment reciept at Riv-TechCreek,R/S ICT Dept, Aba Road, PH <span>**</span></p>
          </div>
          <div className="personaldata">
            <p>Personal Information</p>
            <div className="informations">
              <input type="text" required placeholder="First-name*" />
              <input type="text" placeholder="Middle-name" />
              <input type="text" required placeholder="Last-name*" />
              <input type="date" required placeholder="Date of Birth*" />
              <select
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
              <select
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
            <div className="stateandlocal">
              <select
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
              <input type="text" placeholder="L.G.A of Origin" />
            </div>
            <div className="Contact-container">
              <h5>Contact Information</h5>
              <div className="EmailandContact">
                <input type="email" placeholder="Email Address*" required />
                <input type="text" required placeholder="Phone Number*" />
              </div>
              <textarea
                name="Message"
                id="Message"
                cols="30"
                rows="5"
                placeholder="Residential Address*"
              ></textarea>
            </div>
            <div className="btndiv">
              <button>Submit</button>
            </div>
            {/* <div className="Navbar_location">
              <div className="location">
                <img
                  src={location}
                  alt="location-icon"
                  className="location_img"
                />
              </div>
              <div className="location_details">
                <p>
                  Rivers State ICT Center. Opp. Pleasure Park Aba Road, Port
                  Harcourt. Rivers State, Nigeria. talk@techcreek.ng
                  O9030003185, 09030003180
                </p>
              </div>
            </div> */}
          </div>
        </div>
      </form>
    </div>
  );
}

export default Train;
