
import App from "../App";
import ProtectedRoute from "../components/ProtectedRoute";
import Home from "../pages/home/Home";
import Login from  "../pages/login/Login";
import Register from  "../pages/register/Register";
import Watch from  "../pages/watch/Watch";

const route = [
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register/>,
  },
  {
    path: "/movies",
    element: (
      <ProtectedRoute>
        <Home type="movies" />
      </ProtectedRoute>
    ),
  },
  {
    path: "/series",
    element: (
      <ProtectedRoute>
        <Home type="series" />
      </ProtectedRoute>
    ),
  },
  {
    path: "/watch/:_id",
    element: (
      <ProtectedRoute>
        <Watch />
      </ProtectedRoute>
    ),
  },
];

export default route;