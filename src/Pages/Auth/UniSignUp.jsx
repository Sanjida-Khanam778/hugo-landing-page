import React, { useState } from "react";
import background from "../../assets/images/uniLogin.png";
import { Link, useNavigate } from "react-router-dom";
import { useUniversitySignupMutation } from "../../Api/authapi";

export default function UniSignUp() {
  const navigate = useNavigate();
  const [signupForm, setSignupForm] = useState({
    universityName: "",
    email: "",
    firstName: "",
    lastName: "",
    jobTitle: "",
    department: "",
    password: "",
    confirmPassword: "",
  });
  const [universitySignupMutation, { isLoading }] = useUniversitySignupMutation();

  const handleSignupChange = (e) => {
    setSignupForm({
      ...signupForm,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    if (signupForm.universityName, signupForm.email, signupForm.firstName, signupForm.lastName, signupForm.jobTitle, signupForm.department, signupForm.password, signupForm.confirmPassword) {
      const newUser = {
        univ_name: signupForm.universityName,
        email: signupForm.email,
        password: signupForm.password,
        first_name: signupForm.firstName,
        last_name: signupForm.lastName,
        job_title: signupForm.jobTitle,
        department: signupForm.department,
      };

      try {
        const res = await universitySignupMutation(newUser).unwrap();
        navigate("/university/dashboard");
        // window.location.reload(); // Removed reload to allow SPA navigation
      } catch (err) {
        console.error("Sign up failed:", err);
        // toast.error(err.data.phone[0], {
        //   position: "bottom-center"
        // })
      }

      setSignupForm({
        universityName: "",
        email: "",
        firstName: "",
        lastName: "",
        jobTitle: "",
        department: "",
        password: "",
        confirmPassword: "",
      });
    }
  };

  return (
    <div
      style={{ backgroundImage: `url(${background})` }}
      className="p-8 bg-cover h-screen bg-no-repeat text-white"
    >
      <div className="mx-auto my-auto h-full max-w-2xl flex flex-col justify-center">
        <h1 className="text-2xl lg:text-4xl font-bold text-white text-center mb-2">
          Sign Up
        </h1>
        <p className="text-blue-100 text-center mb-4">
          Create your account to request admin access
        </p>
        <div>
          <h2 className="text-white text-lg font-semibold mb-8 text-center">
            Identity & Contact Information
          </h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="mb-4">
              <label className="block text-white text-sm mb-2">
                University Name *
              </label>
              <input
                type="text"
                name="universityName"
                value={signupForm.universityName}
                onChange={handleSignupChange}
                className="w-full px-4 py-3 bg-transparent border-2 border-blue-300 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
                placeholder="Enter university name"
              />
            </div>
            <div className="mb-4">
              <label className="block text-white text-sm mb-2">
                Official University Email *
              </label>
              <input
                type="email"
                name="email"
                value={signupForm.email}
                onChange={handleSignupChange}
                className="w-full px-4 py-3 bg-transparent border-2 border-blue-300 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
                placeholder="Enter your email"
              />
            </div>
          </div>


          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <label className="block text-white text-sm mb-2">
                First Name *
              </label>
              <input
                type="text"
                name="firstName"
                value={signupForm.firstName}
                onChange={handleSignupChange}
                className="w-full px-4 py-3 bg-transparent border-2 border-blue-300 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
                placeholder="First name"
              />
            </div>
            <div>
              <label className="block text-white text-sm mb-2">
                Last Name *
              </label>
              <input
                type="text"
                name="lastName"
                value={signupForm.lastName}
                onChange={handleSignupChange}
                className="w-full px-4 py-3 bg-transparent border-2 border-blue-300 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
                placeholder="Last name"
              />
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <label className="block text-white text-sm mb-2">
                Job Title/Designation *
              </label>
              <input
                type="text"
                name="jobTitle"
                value={signupForm.jobTitle}
                onChange={handleSignupChange}
                className="w-full px-4 py-3 bg-transparent border-2 border-blue-300 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
                placeholder="e.g., Program Coordinator, HR Specialist"
              />
            </div>

            <div className="mb-4">
              <label className="block text-white text-sm mb-2">
                Department/Office *
              </label>
              <input
                type="text"
                name="department"
                value={signupForm.department}
                onChange={handleSignupChange}
                className="w-full px-4 py-3 bg-transparent border-2 border-blue-300 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
                placeholder="e.g., Admissions, Faculty of Science"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="mb-4">
              <label className="block text-white text-sm mb-2">
                Create Password *
              </label>
              <input
                type="password"
                name="password"
                value={signupForm.password}
                onChange={handleSignupChange}
                className="w-full px-4 py-3 bg-transparent border-2 border-blue-300 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
                placeholder="••••••••••"
              />
            </div>

            <div className="mb-6">
              <label className="block text-white text-sm mb-2">
                Confirm Password *
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={signupForm.confirmPassword}
                onChange={handleSignupChange}
                className="w-full px-4 py-3 bg-transparent border-2 border-blue-300 rounded-lg text-white placeholder-blue-200 focus:outline-none focus:border-blue-400"
                placeholder="••••••••••"
              />
            </div>
          </div>


          <button
            onClick={handleSignup}
            className="w-full bg-blue text-white font-semibold py-3 rounded-lg transition duration-200 mb-4"
          >
            Sign Up
          </button>

          <p className="text-center">
            Don't have an account?{" "}
            <Link to={"/university-login"}>
              <button type="button" className="text-blue-300 hover:text-blue">
                Sign In
              </button>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
