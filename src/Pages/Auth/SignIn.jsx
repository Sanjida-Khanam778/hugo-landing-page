import React, { useState } from "react";
import background from "../../assets/images/uniBanner.png";
import signin from "../../assets/images/signin.png";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(email, password);
    // Validate email and password
    if (email && password) {
      // Extract user name from email or you can add a name field
      const userName = email.split("@")[0];

      // Store login info in localStorage
      localStorage.setItem("isLoggedIn", "true");
      localStorage.setItem("userName", userName);
      localStorage.setItem("userEmail", email);

      console.log("Sign in:", { email, password });

      // Navigate to dashboard or home
      navigate("/");

      // Refresh page to update Navbar state
      window.location.reload();
    }
  };

  return (
    <div className="bg-base pb-16">
      {/* Header Section */}
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="text-white flex items-center justify-center relative overflow-hidden bg-cover bg-no-repeat h-[50vh]"
      >
        <div className="mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-4xl xl:text-5xl font-bold mb-8">
            Sign In
          </h1>
        </div>
      </div>
      <div className="flex justify-between w-11/12 mx-auto bg-white mt-16">
        <div className="flex items-center justify-center w-full p-16">
          <div className="w-full">
            <h1 className="text-3xl font-semibold mb-8 border-b pb-4 border-[#E2E1E1]">
              SIGN IN
            </h1>

            <div className="space-y-4">
              <div>
                <label className="block text-sm mb-2">
                  Email <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-base border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <label className="block text-sm mb-2">
                  Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-base border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex items-center justify-between text-sm pt-2">
                <button className="text-red-500 hover:text-red-600">
                  Forgot Password?
                </button>
                <label className="flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="mr-2"
                  />
                  <span className="text-gray-600">Remember me</span>
                </label>
              </div>

              <div className="flex items-center pt-6 justify-between">
                <button
                  onClick={handleSubmit}
                  className="bg-blue px-8 text-white py-3 rounded font-medium"
                >
                  Sign In
                </button>

                <div className="flex gap-4 justify-center items-center">
                  <span className="px-4 text-sm text-gray-500">
                    or sign up with
                  </span>
                  <button className="w-12 h-12 flex items-center justify-center border border-gray-300 rounded hover:bg-gray-50 transition-colors">
                    <svg className="w-6 h-6" viewBox="0 0 24 24">
                      <path
                        fill="#4285F4"
                        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      />
                      <path
                        fill="#34A853"
                        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      />
                      <path
                        fill="#FBBC05"
                        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      />
                      <path
                        fill="#EA4335"
                        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <p className="text-sm text-gray-600">
                Don't have an account?{" "}
                <Link to={"/register"}>
                  <button className="text-blue-600 font-medium hover:underline ml-2">
                    Sign Up
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <img src={signin} alt="Sign In" className="" />
      </div>
    </div>
  );
}
