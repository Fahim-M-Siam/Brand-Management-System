// @ts-nocheck
import { Link } from "react-router-dom";
import "../Banner/Banner.css";

// @ts-nocheck
const Banner = () => {
  return (
    <div className="hero bg-base-200 h-[400px] banner">
      <div className="overlay">
        <div className="hero-content text-center">
          <div className="max-w-md">
            <h1 className="text-3xl font-bold text-white mt-16">
              Welcome to Speedy Wrench
            </h1>
            <p className="py-6 text-sm text-white">
              Rev up your automotive experience at SpeedyWrench! Your one-stop
              destination for fast, reliable, and expert auto services. We are
              here to keep you on the road with top-notch repairs, maintenance,
              and a passion for performance.
            </p>
            <Link to="/register">
              <button className="btn btn-outline text-white">
                Register Now
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
