// @ts-nocheck
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import SocialLogins from "./SocialLogins";
// import toast from "react-hot-toast";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  //   const handleLogin = (event) => {
  //     event.preventDefault();

  //     // get field values
  //     const email = event.target.email.value;
  //     const password = event.target.password.value;

  //     // signIn
  //     signIn(email, password)
  //       .then(() => {
  //         toast.success("Successfully Logged In");

  //         // navigate after login
  //         navigate(location?.state ? location.state : "/");
  //       })
  //       .catch((error) => {
  //         const errorCode = error.code;
  //         const errorMessage = error.message;

  //         // validations
  //         if (errorCode === "auth/invalid-login-credentials") {
  //           toast.error("Invalid Login Credential");
  //         } else {
  //           console.error(errorMessage);
  //         }
  //       });
  //   };
  // onSubmit={handleLogin}
  return (
    <div className="hero min-h-screen bg-base-10]">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Login now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-10">
          <form className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="Your Email"
                name="email"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                name="password"
                className="input input-bordered"
                required
              />
              <span
                onClick={() => setShowPassword(!showPassword)}
                className="absolute left-[13.25rem] lg:left-[13rem] top-[3.2rem]"
              >
                {showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
              </span>
              <label className="label">
                <NavLink href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </NavLink>
              </label>
            </div>
            <div className="form-control mt-6">
              <button
                type="submit"
                className="btn btn-outline bg-gradient-to-r from-[#cc2b5e] to-[#753a88]"
              >
                Login
              </button>
            </div>
            <div className="flex text-sm">
              <p>New here?</p>
              <Link to="/register" className="link link-hover font-bold">
                Register Now
              </Link>
            </div>
            <SocialLogins></SocialLogins>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
