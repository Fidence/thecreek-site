import React from "react";
import "../Learnblog/blog.scss";
import White from "../assets/logo-white.png"
import {Link} from "react-router-dom"

function blog() {
  return (
    <div className="blog">
      <div className="overlay">
        <div className="bloglogo">
          <div>
            {" "}
            <Link to="/">
              <img src={White} alt="" />
            </Link>
          </div>
          <ul>
            <li>Blog</li>
            <li>Tutorial Videos</li>
          </ul>
        </div>
        <div className="blog_text">
          <h1>
            Welcome to the <br /> &lt;creek/&gt; <br /> Learning 
            Flatform
          </h1>
          <button>View More</button>
        </div>
      </div>
    </div>
  );
}

export default blog;
