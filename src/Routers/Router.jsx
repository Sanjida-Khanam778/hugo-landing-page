import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../Layouts/Dashboard";
import Home from "../Pages/Home/Home";
import UniversityDirectory from "../Pages/UniversityDirectory/UniversityDirectory";
import MainLayout from "../Layouts/MainLayout";
import UniversityEvents from "../Pages/Events/UniversityEvents";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <h1>404</h1>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/universities",
        element: <UniversityDirectory />,
      },
      {
        path: "/events",
        element: <UniversityEvents />
      }
    ],
  },
  {
    path: "/login",
    element: <h1>Login</h1>,
  },
  {
    path: "/register",
    element: <h1>Register</h1>,
  },
]);
