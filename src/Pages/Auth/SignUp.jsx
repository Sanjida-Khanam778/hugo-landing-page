import { useState } from "react";
import background from "../../assets/images/uniBanner.png";
import signupImg from "../../assets/images/signup.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useSignupMutation } from "../../Api/authapi";

export default function SignUp() {
  const [fullName, setFullName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const [signup, { isLoading }] = useSignupMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Validate all fields
    if (fullName && phone && email && password) {
      try {
        const res = await signup({
          full_name: fullName,
          phone,
          email,
          password,
          role: "student",
        }).unwrap();
        console.log("Sign up successful:", res);
        navigate("/");
        // window.location.reload(); // Removed reload to allow SPA navigation
      } catch (err) {
        console.error("Sign up failed:", err);
        toast.error(err.data.phone[0], {
          position: "bottom-center"
        })
      }
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
            Sign Up
          </h1>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between w-11/12 mx-auto bg-white mt-8 lg:mt-16">
        <div className="flex items-center justify-center w-full p-8 lg:p-16">
          <div className="w-full">
            <h1 className="text-3xl font-semibold mb-8 border-b pb-4 border-[#E2E1E1]">
              SIGN UP
            </h1>



            <div className="space-y-4">
              <div>
                <input
                  type="text"
                  value={fullName}
                  placeholder="Full Name *"
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <input
                  type="tel"
                  value={phone}
                  placeholder="Phone Number *"
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <input
                  type="email"
                  value={email}
                  placeholder="Email *"
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div>
                <input
                  type="password"
                  value={password}
                  placeholder="Password *"
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col gap-4 md:gap-0 md:flex-row items-center pt-6 justify-between">
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="bg-blue px-8 text-white py-3 rounded font-medium disabled:opacity-50"
                >
                  {isLoading ? "Signing Up..." : "Sign Up"}
                </button>

                <div className="flex gap-4 justify-center items-center">
                  <span className="px-4  text-gray-500">
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

              <p className=" text-gray-600">
                Already have an account?
                <Link to={"/login"}>
                  <button className="text-blue-600 font-medium hover:underline ml-2">
                    Sign In
                  </button>
                </Link>
              </p>
            </div>
          </div>
        </div>
        <img src={signupImg} alt="Sign In" className="md:w-1/2 mx-auto md:mt-6 lg:mt-0" />
      </div>
    </div>
  );
}
