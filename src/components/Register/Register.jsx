// @ts-nocheck
import { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link, NavLink } from "react-router-dom";
import SocialLogins from "../Login/SocialLogins";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
import { updateProfile } from "firebase/auth";

// @ts-nocheck
const Register = () => {
  const { createUser, logOut } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    // inputvalues
    const name = form.name.value;
    const email = form.email.value;
    const img = form.img.value;
    const password = form.password.value;

    // validations
    if (password.length < 6) {
      toast.error("Password is less than 6 characters");
      return;
    } else if (!/[A-Z]/.test(password)) {
      toast.error("Password don't have a capital letter");
      return;
    } else if (!/[!@#$%^&*()_+{}[\]:;<>,.?~\\-]/.test(password)) {
      toast.error("Password don't have a special character");
      return;
    }

    // creatingUser
    createUser(email, password)
      .then((currentUser) => {
        toast.success("Registration has been succesful");
        logOut();
        // update profile
        updateProfile(currentUser.user, {
          displayName: name,
          photoURL: img,
        }).then(() => {
          toast.success("Profile Updated");
        });
        console.log(currentUser.user);
      })
      .catch((error) => {
        toast.error("Registration failed");
        console.log(error);
      });
  };
  return (
    <div className="hero min-h-screen bg-base-10">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Register Now!</h1>
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100 bg-opacity-10">
          <form onSubmit={handleSubmit} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Your Name"
                name="name"
                className="input input-bordered"
                required
              />
            </div>
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
            <div className="form-control">
              <label className="label">
                <span className="label-text">Image URL</span>
              </label>
              <input
                type="text"
                placeholder="image url"
                name="img"
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
                Register
              </button>
            </div>
            <div className="flex text-sm">
              <p>Have a account?</p>
              <Link
                to="/login"
                className="link link-hover text-black font-bold"
              >
                Login Now
              </Link>
            </div>
            <SocialLogins></SocialLogins>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
