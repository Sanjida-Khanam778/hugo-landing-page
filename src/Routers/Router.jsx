import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import UniversityDirectory from "../Pages/UniversityDirectory/UniversityDirectory";
import MainLayout from "../Layouts/MainLayout";
import UniversityEvents from "../Pages/Events/UniversityEvents";
import UniversityJobs from "../Pages/Jobs/UniversityJobs";
import UniDashboard from "../Pages/UniversityDirectory/UniDashboard";

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
        path: "/universities/:id",
        element: <UniDashboard />,
      },
      {
        path: "/events",
        element: <UniversityEvents />,
      },
      {
        path: "/jobs",
        element: <UniversityJobs />,
      },
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
