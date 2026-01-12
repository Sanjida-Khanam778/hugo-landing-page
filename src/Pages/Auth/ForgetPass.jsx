import { useState } from "react";
import background from "../../assets/images/uniBanner.png";
import signin from "../../assets/images/signin.png";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useForgetPassMutation } from "../../Api/authapi";

export default function ForgetPass() {
  const [email, setEmail] = useState("");
  const navigate = useNavigate();

  const [forgetPass, { isLoading, isError }] = useForgetPassMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email) {
      try {
        const res = await forgetPass({ email }).unwrap();
        console.log("otp sent successful", res.message);
        toast.success(res.message, {
          position: "bottom-center",
        });
        localStorage.setItem("userEmail", email);
        navigate("/verify-otp", { state: email });
        // window.location.reload(); // Removed reload to allow SPA navigation
      } catch (err) {
        console.error("Failed to login:", err);
        toast.error(err.data?.error[0], {
          position: "bottom-center",
        });
      }
    }
  };

  return (
    <div className="bg-base pb-16 font-inter">
      {/* Header Section */}
      <div
        style={{ backgroundImage: `url(${background})` }}
        className="text-white flex items-center justify-center relative overflow-hidden bg-cover bg-no-repeat h-[50vh]"
      >
        <div className="mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <h1 className="text-2xl md:text-4xl xl:text-5xl mb-8">
            Forgot password
          </h1>
        </div>
      </div>
      <div className="flex flex-col-reverse lg:flex-row justify-between w-11/12 mx-auto bg-white mt-8 lg:mt-16">
        <div className="flex items-center justify-center w-1/2 p-8 lg:p-16">
          <div className="w-full">
            <h1 className="text-xl lg:text-4xl text-primary mb-5">
              Forgot password
            </h1>

            <p className="text-light mb-5">
              Enter your email for the verification process, we will send 4
              digits code to your email.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block  mb-2">Email</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full px-4 py-3 bg-base border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center pt-6 justify-between">
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="bg-primary w-full text-lg  px-8 text-white py-3 rounded font-medium disabled:opacity-50"
                >
                  {isLoading ? "Loading..." : "Continue"}
                </button>
              </div>
            </div>
          </div>
        </div>
        <img
          src={signin}
          alt="Sign In"
          className="md:w-1/2 mx-auto md:mt-6 lg:mt-0"
        />
      </div>
    </div>
  );
}
