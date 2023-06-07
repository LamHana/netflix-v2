import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Navigate } from "react-router-dom";
import SignUp from "../pages/SignUp/SignUp";
import HomeScreen from "../pages/home/HomeScreen";

const RouterComponent = () => {
  const router = createBrowserRouter([
    { path: "/", element: <Navigate to="/signup" /> },
    {
      exact: true,
      path: "/signup",
      element: <SignUp />,
    },
    {
      exact: true,
      path: "/home",
      element: <HomeScreen />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterComponent;
