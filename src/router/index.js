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
    {
      exact: true,
      path: "/home/tv-shows",
      element: <HomeScreen />,
    },
    {
      exact: true,
      path: "/home/movies",
      element: <HomeScreen />,
    },
    {
      exact: true,
      path: "/home/new-and-popular",
      element: <HomeScreen />,
    },
    {
      exact: true,
      path: "/home/my-list",
      element: <HomeScreen />,
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RouterComponent;
