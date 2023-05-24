import React, { useEffect, useState } from "react";
 import "../home/Home.scss";
 import axios from "axios";
import Navbar from  "../../components/navbar/Navbar";
import Movies from  "../../components/movies/Movies";
import List from "../../components/list/List";

const Home = ({ type }) => {
  const [lists, setLists] = useState([]);
  const [genre, setGenre] = useState(null);

  useEffect(() => {
    const getRandomLists = async () => {
      try {
        let authToken = localStorage.getItem("token");
        const res = await axios.get(
           `http://localhost:5000/api/list/getalllist${type ? "?type=" + type : ""}${
            genre ? "&genre=" + genre : ""
          }`,
          {
            headers: {
              authorization: `Bearer${authToken}`,
            },
          }
        );
        console.log(res.data.list);
        setLists(res.data.list);
      } catch (err) {
        console.log(err);
      }
    };
    getRandomLists();
  }, [type, genre]);

  return (
    <div className="home">
      <Navbar />
      <Movies type={type} setGenre={setGenre} />
      {lists.map((list, i) => (
        <List  key={i}list={list} />
      ))}
    </div>
  );
};

export default Home;
