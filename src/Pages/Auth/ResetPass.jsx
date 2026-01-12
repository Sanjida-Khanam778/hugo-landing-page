import { useState } from "react";
import background from "../../assets/images/uniBanner.png";
import signin from "../../assets/images/signin.png";
import { Link, useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { useResetPasswordMutation } from "../../Api/authapi";

export default function ResetPass() {
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state;
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [resetPassword, { isLoading, isError }] = useResetPasswordMutation();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await resetPassword({
        email,
        password,
        confirm_password: confirmPassword,
      }).unwrap();
      toast.success(res.message, { position: "bottom-center" });
      navigate("/");
    } catch (err) {
      console.error("Failed to login:", err);
      toast.error(err.data?.error, {
        position: "bottom-center",
      });
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
              New Password
            </h1>

            <p className="text-light mb-5">
              Set the new password for your account so you can login and access
              all featuress.
            </p>

            <div className="space-y-4">
              <div>
                <label className="block  mb-2">
                  Enter new password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full px-4 py-3 bg-base border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div>
                <label className="block  mb-2">
                  Confirm Password <span className="text-red-500">*</span>
                </label>
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm Password"
                  className="w-full px-4 py-3 bg-base border border-gray-200 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col md:flex-row gap-4 md:gap-0 items-center pt-6 justify-between">
                <button
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="bg-primary w-full text-lg  px-8 text-white py-3 rounded font-medium disabled:opacity-50"
                >
                  {isLoading ? "Updating..." : "Update Password"}
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
