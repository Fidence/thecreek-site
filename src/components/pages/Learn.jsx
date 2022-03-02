import React from 'react'
import "../styles/pages.scss"
import Blog from '../Learnblog/blog'
import Blog2 from "../Learnblog/Blog2"
import Tutor from '../tutorials/Tutor'

function Learn() {
  return (
    <div>
      <Blog/>
      <h3>BLOG</h3>
      <Blog2/>
      <h3>TUTORIAL VIDEOS</h3>
      <Tutor/>
    </div>
  )
}

export default Learn