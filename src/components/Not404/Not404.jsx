import React from 'react'
import {Link} from "react-router-dom"
import "./notfound.scss"
import {FaArrowLeft} from "react-icons/fa"

function Not404() {
  return (
    <div className="notfound">
      <Link className="not404" to="/">
        <FaArrowLeft/>Home
      </Link>
    </div>
  );
}

export default Not404