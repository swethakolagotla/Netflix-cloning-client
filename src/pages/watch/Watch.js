import React, { useEffect, useState } from "react";
 import "../watch/Watch.scss";
import ArrowBackOutlinedIcon from "@mui/icons-material/ArrowBackOutlined";
import { Link, useParams } from "react-router-dom";
import axios from "axios";

const Watch = () => {
  const { _id } = useParams();

  const [movievideo, setMovieVideo] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:4000/api/movie/singlefind/${_id}`)
      .then((res) => {
        console.log(res.data);
        setMovieVideo(res.data);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <div className="watch">
      <Link to="/movies">
        <div className="back">
          <ArrowBackOutlinedIcon />
          Home
        </div>
      </Link>
      <iframe
        src={movievideo.video}
        className="video"
        title="YouTube video player"
      
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
};

export default Watch;
