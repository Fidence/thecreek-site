import React from 'react'
import {Link} from "react-router-dom"
import "./notfound.scss"

function Not404() {
  return (
    <div className='notfound'>
      <Link className='not404' to="/">Click here to go back to Home</Link>

    </div>
  )
}

export default Not404