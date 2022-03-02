import React from 'react'
import Digital from "../assets/digital.jpg"
import ICT from "../assets/ICT.jpg"
import Safe from "../assets/safe_image.jpg"
import {Link} from "react-router-dom"

function Blog2() {
  return (
    <div className="main_container">
      <div className="blog_main">
        <div className="blog1">
          <img src={Digital} alt="" />
          <p>
            Learn a high income digital Technology skill and become a master in
            the next three months of codegerminator 9.0.
          </p>
        </div>

        <div className="blog2">
          <img src={ICT} alt="" />
          <p>
            Learn how to use computer and become proficient in different IT
            packages. This opportunitity indroduces you to the baasic compect of
            computing, which equips you with the basic skillet in the everyday
            use of computer.
          </p>
        </div>
        <div className="blog3">
          <img src={Safe} alt="" />
          <p>
            We've got good news. <br /> We've started registration for the ICT
            Competence Training, a program created to introduce computer novices
            the basics of computing and its applications in a digital age. To
            register, visit <Link to="/">www.techcreek.ng</Link> to reserve a
            space in this program.
          </p>
        </div>
      </div>
      <button> Read more</button>
    </div>
  );
}

export default Blog2