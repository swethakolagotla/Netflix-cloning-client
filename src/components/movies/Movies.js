import React, { useEffect, useState } from "react";
import  "../movies/movies.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";

const Movies= ({type,setGenre}) => {
    const [content, setContent] = useState({});;
 const Navigate = useNavigate();
  useEffect(() => {
    const getRandomMovie = async () => {
 
      try {
        const res = await axios.get(
          `http://localhost:5000/api/movie/random?type=${type}`
        );
        //console.log(res);
        setContent(res.data[0]);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomMovie();
    console.log(type)
  }, [type]);
  const handleClick = () => {
    Navigate(`/watch/${content._id}`);
  };
  return (
    <div className="featured">
      {type && (
        <div className="category">
          <span>{type === "movies" ? "Movies" : "Series"}</span>
          <select
            name="genre"
            id="genre"
            onChange={(e) =>{
              console.log(e.target.value);
              setGenre(e.target.value);
            }
            } 
             
          >
            <option>Genre</option>
            <option value="action">Action</option>
            <option value="comedy">Comedy</option>
            <option value="horror">Horror</option>
            <option value="romance">Romance</option>
            <option value="thriller">Thriller</option>
            <option value="drama">Drama</option>
            <option value="fantasy">Fantasy</option>
          </select>
        </div>
      )}
      <img src={content.img} alt="" />
      <div className="info">
        <h2 className="desc">{content.title}</h2>
        <span className="desc">{content.desc}</span>
        <div className="buttons">
          <button className="play" onClick={handleClick}>
            <PlayArrowIcon />
            <span style={{ color: "black" }}>Play</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Movies;
