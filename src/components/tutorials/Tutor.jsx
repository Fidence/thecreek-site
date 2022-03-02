import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import "../tutorials/tutot.scss";

function Tutor() {
  const [videoPost, setvideoPost] = useState(null);
  const [err, setErr] = useState(null);
  useEffect(() => {
    /*  setLoading(true); */
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=c4084f4ff50cb99442df8d12e1551bdc&language=en-US&page=2"
      )
      .then((res) => {
        setvideoPost(res.data.results);
        console.log(res.data.results);
      })
      .catch((err) => {
        setErr(err);
      })
      .finally(() => {
        /* setLoading(false); */
      });
  }, []);

  return (
    <div className="video_grid">
      
      {videoPost &&
        videoPost.map((video) => {
          return (
            <div className="video_section">
              <div className="video_flex">
                <div className="image_section">
                  <a href="https://www.youtube.com/watch?v=-0exw-9YJBo&t=11s">
                    {" "}
                    <img
                      src={`https://image.tmdb.org/t/p/w200/${video.poster_path}`}
                      alt=""
                    />
                  </a>
                </div>

                <div className="header1">
                  <a href="https://www.youtube.com/watch?v=-0exw-9YJBo&t=11s">
                    <h2> {video.title} </h2>
                  </a>
                  <hr />
                  <p className="popula"> {`Popularity ${video.popularity}`} </p>
                  <p>{video.overview}</p>
                </div>
              </div>
              <hr />
            </div>
          );
        })}
    </div>
  );
}

export default Tutor;
