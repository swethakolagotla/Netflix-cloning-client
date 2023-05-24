import React, { useState, useEffect } from "react";
import "../listitem/listitem.scss";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import AddIcon from "@mui/icons-material/Add";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import ThumbDownOffAltOutlinedIcon from "@mui/icons-material/ThumbDownOffAltOutlined";
import axios from "axios";
import { Link } from "react-router-dom";

const ListItem = ({ index, item }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [movie, setMovie] = useState({});

  useEffect(() => {
    const getMovie = async () => {
      try {
        const res = await axios.get(
          `http://localhost:5000/api/movie/singlefind/${item} `
        );
        //console.log(res.data);
        setMovie(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    getMovie();
  }, [item]);

  return (
    <div
      className="listItem"
      style={{ left: isHovered && index * 225 - 50 + index * 2.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img src={movie.imgSm} alt="" />
      {isHovered && (
        <>
          <iframe
            className="video"
            src={movie.trailer}
            title="video"
            
            allow=" autoplay; encrypted-media"
            allowFullScreen
          ></iframe>
          <div className="itemInfo">
            <div className="icons">
              <Link to={{ pathname: `/watch/${movie._id}` }}>
                <PlayArrowIcon className="icon" />
              </Link>
              <AddIcon className="icon" />
              <ThumbUpOutlinedIcon className="icon" />
              <ThumbDownOffAltOutlinedIcon className="icon" />
            </div>
            <div className="itemInfoTop">
              <span className="limit">+{movie.limit}</span>
              <span>{movie.year}</span>
            </div>
            <h3 className="desc">{movie.title}</h3>
            <div className="desc">{movie.desc}</div>
            <div className="genre">{movie.genre}</div>
          </div>
        </>
      )}
    </div>
  );
};

export default ListItem;
