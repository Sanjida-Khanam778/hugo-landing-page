import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import UniversityDirectory from "../Pages/UniversityDirectory/UniversityDirectory";
import MainLayout from "../Layouts/MainLayout";
import UniversityEvents from "../Pages/Events/UniversityEvents";
import UniversityJobs from "../Pages/Jobs/UniversityJobs";
import UniDashboard from "../Pages/UniversityDirectory/UniDashboard";
import UniversityTab from "../Pages/UniversityDirectory/Universitytab";
import Overview from "../Pages/UniversityDirectory/Overview";
import Program from "../Pages/UniversityDirectory/Program";
import Events from "../Pages/UniversityDirectory/Events";
import TestimonialTab from "../Pages/UniversityDirectory/TestimonialTab";
import Gallery from "../Pages/UniversityDirectory/Gallery";
import ProgramDetails from "../components/ProgramDetails/ProgramDetails";
import LoginPage from "../Pages/Auth/LoginPage";
import SignIn from "../Pages/Auth/SignIn";
import SignUp from "../Pages/Auth/SignUp";
import About from "../Pages/About/About";
import UserDashboard from "../Pages/UserDashboard/UserDashboard";
import MessageInterface from "../Pages/UserDashboard/MessageInterface";
import UniSignUp from "../Pages/Auth/UniSignUp";
import UniSignIn from "../Pages/Auth/UniSignIn";
import UniversityDashboard from "../Layouts/UniversityDashboard";
import UniMain from "../Layouts/University/UniMain";

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
        children: [
          {
            path: "overview",
            element: <Overview />,
          },
          {
            path: "programs",
            element: <Program />,
          },
          {
            path: "events",
            element: <Events />,
          },
          {
            path: "testimonials",
            element: <TestimonialTab />,
          },
          {
            path: "gallery",
            element: <Gallery />,
          },
        ],
      },
      {
        path: "/program-details",
        element: <ProgramDetails />,
      },

      {
        path: "/events",
        element: <UniversityEvents />,
      },
      {
        path: "/jobs",
        element: <UniversityJobs />,
      },
      {
        path: "/login",
        element: <SignIn />,
      },
      {
        path: "/register",
        element: <SignUp />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/user",
        element: <UserDashboard />,
      },
      {
        path: "/message",
        element: <MessageInterface />,
      },
    ],
  },
  {
    path: "/login-page",
    element: <LoginPage />,
  },
  {
    path: "/university-login",
    element: <UniSignIn />,
  },
  {
    path: "/university-register",
    element: <UniSignUp />,
  },
  {
    path: "/university",
    element: <UniMain />
  }
]);
