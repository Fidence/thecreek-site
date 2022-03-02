import React from 'react';
import "../styles/pages.scss"
import Junior from "../assets/junior.png"
import Main from "../assets/cg_main.png"
import {Link} from "react-router-dom"
import { FaLongArrowAltLeft } from "react-icons/fa";

function Create() {
  return (
    <div>
      <div className="create_main">
        <div className="back">
          <Link to="*">
            <p>
              <FaLongArrowAltLeft />
              Back
            </p>
          </Link>
        </div>
        <div className="create1">
          <h5>CREATIVITY</h5>
          <p>
            We serve as a nursery providing the right Eco-System for Start-Ups
            and #individuals in Port Harcourt and it’s evirons, actively
            developing solutions to meet local needs.
          </p>
          <p>
            Codegaminator is a special programme designes to build the
            capacities in <br /> software and digital contenet development.
          </p>
        </div>

        <div className="createimg">
          <img src={Junior} alt="" />
        </div>

        <div className="create2">
          <h5>ABOUT THE PROGRAMME</h5>
          <p>
            the CODEGAMINATORS programme was initiated to skill-up our youth in
            the fundamentals of the ICT contentes industry. the content industry
            (in software, game, animations , movies, music, education, health
            etc) accounts for $30bn worldwild
          </p>

          <img src={Main} width="400px" alt="" />
          <p>
            As part of our mandate to ensure the right capacities are developed
            in the Information and Communication Technology sector of the
            Economy, we have this programme designed to build capacities in
            software and digital content development. Our focus with this
            programme is Software Development, Animations/Post production and
            Game Development. At the RivTechCreek we envision to create the
            foremost hub of creative minds in content development in sub-sahara
            Africa
          </p>
        </div>

        <div className="create3">
          <h5> Animation</h5>
          <p>
            This course is designed for people interested in pursuing a career
            in 2D Animation, as well as those seeking to enhance their animation
            skills in order to produce their own animated content and/or work
            with an animated video production team.
          </p>
        </div>

        <div className="create4">
          <h5> Coding Coding </h5>
          <p>
            Provides a doorway into the world of programming, software
            development and website development. It focuses on the principles of
            software design and development on different platforms with more
            emphasis on web and mobile application development...
          </p>
        </div>

        <div className="create5">
          <h5>Game Development </h5>
          <p>
            This course is designed to teach the rudiments of game development
            and design from beginner to intermediate level. The course will
            cover basic to advanced techniques in development and optimization,
            glancing through different game types and mechanics
          </p>
        </div>
      </div>
    </div>
  );
}

export default Create