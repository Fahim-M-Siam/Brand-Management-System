// @ts-nocheck
import { Link, NavLink } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import toast from "react-hot-toast";
const Navbar = () => {
  const { currentUser, logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        toast.success("Successfully Logged Out");
      })
      .catch(() => {
        toast.error("Logout Action Failed");
      });
  };
  const navlinks = (
    <>
      <li className="font-medium">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending" : isActive ? "text-[#FF444A] font-medium" : ""
          }
        >
          Home
        </NavLink>
      </li>
      {currentUser && (
        <>
          <li className="font-medium">
            <NavLink
              to="/addProduct"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] font-medium"
                  : ""
              }
            >
              Add Product
            </NavLink>
          </li>
          <li className="font-medium">
            <NavLink
              to="/myCart/{currentUser.email}"
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#FF444A] font-medium"
                  : ""
              }
            >
              My Cart
            </NavLink>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navlinks}
          </ul>
        </div>
        <NavLink to="/">
          <a className="normal-case text-sm md:text-xl lg:text-3xl font-dancing font-bold">
            SpeedyWrench
          </a>
        </NavLink>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="gap-5 menu-horizontal px-1">{navlinks}</ul>
      </div>
      <div className="navbar-end">
        {currentUser ? (
          <div>
            <span className="mr-0 lg:mr-1 text-xs font-medium">
              {currentUser.displayName}
            </span>
            <label
              tabIndex={0}
              className="btn btn-ghost btn-circle avatar mr-0 lg:mr-2 top-0 lg:top-[0.9rem]"
            >
              <div className="w-6 lg:w-10 rounded-full">
                <img src={currentUser.photoURL} alt={currentUser.displayName} />
              </div>
            </label>
            <Link>
              <button
                onClick={handleLogOut}
                className="btn btn-outline px-0 lg:px-10"
              >
                Logout
              </button>
            </Link>
          </div>
        ) : (
          <div className="flex lg:flex-none">
            <div>
              <label
                tabIndex={0}
                className="btn btn-ghost btn-circle avatar mr-0 lg:mr-2 top-[0.1rem]"
              >
                <div className="w-10 rounded-full">
                  <img src="https://i.ibb.co/26q0ZKp/user.png" alt="" />
                </div>
              </label>
            </div>
            <div>
              <Link to="/login">
                <button className="btn btn-outline bg-gradient-to-r from-[#cc2b5e] to-[#753a88] px-10">
                  Login
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
