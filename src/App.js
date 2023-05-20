import "./App.scss";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import React, { useEffect, useState } from "react";
function App() {
 const [isLoggedIn, setIsLoggedIn] = useState(false);
 const checkUserToken = () => {
   const userToken = localStorage.getItem("token");
   if (!userToken || userToken === "undefined") {
     setIsLoggedIn(false);
   }
   setIsLoggedIn(true);
 };
 useEffect(() => {
   checkUserToken();
 }, [isLoggedIn]);

 return (
   <React.Fragment>
     {isLoggedIn && <Navbar/>}
     <Outlet />
 
   </React.Fragment>
 );
}

export default App;
