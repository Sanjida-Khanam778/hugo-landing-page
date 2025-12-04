import React, { useState } from "react";
import background from "../../assets/images/uniLogin.png";
import { Link, useNavigate } from "react-router-dom";

export default function UniSignIn() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("signup");
  const [users, setUsers] = useState([]);
  const [rememberMe, setRememberMe] = useState(false);
  const handleSigninChange = (e) => {
    const [signinForm, setSigninForm] = useState({
      email: "",
      password: "",
    });

    const [errors, setErrors] = useState({});
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    setSigninForm({
      ...signinForm,
      [e.target.name]: e.target.value,
    });
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: "" });
    }
  };
  const handleSignin = () => {
    const user = users.find(
      (u) => u.email === signinForm.email && u.password === signinForm.password
    );
    navigate("/university/dashboard");

    if (user) {
      setIsLoggedIn(true);
    } else {
      setErrors({ signin: "Invalid email or password" });
    }
  };

  return (
    <div
      className="p-8 bg-cover h-screen bg-no-repeat text-white "
      style={{ backgroundImage: `url(${background})` }}
    >
      <div className="mx-auto my-auto h-full max-w-2xl flex flex-col justify-center">
        <h1 className="text-2xl lg:text-4xl font-bold text-center mb-2">
          Sign In
        </h1>
        <p className="text-blue-100 text-center mb-4 lg:mb-8">
          Enter your credentials to access the admin portal
        </p>

        <div>
          <h2 className="text-lg font-semibold mb-4 text-center">
            Identity & Contact Information
          </h2>

          <div className="mb-4">
            <label className="block text-sm mb-2">
              Official University Email *
            </label>
            <input
              type="email"
              name="email"
              // value={signinForm.email}
              onChange={handleSigninChange}
              className="w-full px-4 py-3 bg-transparent border-2 border-blue-300 rounded-lg placeholder-blue-200 focus:outline-none focus:border-blue-400"
              placeholder="Enter your email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-sm mb-2">Create Password *</label>
            <input
              type="password"
              name="password"
              // value={signinForm.password}
              onChange={handleSigninChange}
              className="w-full px-4 py-3 bg-transparent border-2 border-blue-300 rounded-lg placeholder-blue-200 focus:outline-none focus:border-blue-400"
              placeholder="••••••••••"
            />
          </div>

          {/* {errors.signin && (
          <p className="text-red-300 text-sm mb-4">{errors.signin}</p>
        )} */}

          <div className="flex items-center justify-end mb-6">
             
            <button type="button" className="hover:text-blue text-sm">
              Forgot your password?
            </button>
          </div>

          <button
            onClick={handleSignin}
            className="w-full bg-blue hover:bg-blue-700 font-semibold py-3 rounded-lg transition duration-200 mb-4"
          >
            Sign In
          </button>

          <p className="text-center text-blue-100">
            Don't have an account?{" "}
            <Link to={"/university-register"}>
              <button type="button" className="text-blue-300 hover:text-blue">
                Sign Up
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
