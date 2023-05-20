import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  return token ? children : <Navigate to="/signup" />;
};

// export default ProtectedRoute;
// import React, { useEffect, useState } from "react";
// import { Route, useNavigate } from "react-router-dom";
// const ProtectedRoute = (props) => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const checkUserToken = () => {
//     const userToken = localStorage.getItem("token");
//     if (!userToken || userToken === "undefined") {
//       setIsLoggedIn(false);
//       return navigate("/login");
//     }
//    else{
//     setIsLoggedIn(true)
//     navigate("/series")
//    };
//   };
//   useEffect(() => {
//     checkUserToken();
//   }, [isLoggedIn]);
//   return <React.Fragment>{isLoggedIn ? props.children : null}</React.Fragment>;
// };
// export default ProtectedRoute;
// import React, { useEffect, useState } from "react";
// import { Route, useNavigate } from "react-router-dom";
// const ProtectedRoute = ({children}) => {
//   const navigate = useNavigate();
//   const [isLoggedIn, setIsLoggedIn] = useState(false);
//   const checkUserToken = () => {
//     const userToken = localStorage.getItem("token");
//     if (!userToken || userToken === "undefined") {
//       setIsLoggedIn(false);
//       return navigate("/login");
//     }
//     setIsLoggedIn(true);
//   };
//   useEffect(() => {
//     checkUserToken();
//   }, [isLoggedIn]);
//   return <React.Fragment>{isLoggedIn ?children : null}</React.Fragment>;
// };
 export default ProtectedRoute;
 
