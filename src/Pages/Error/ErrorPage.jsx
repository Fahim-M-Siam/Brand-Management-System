// @ts-nocheck

import { NavLink } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="text-center mt-40 lg:mt-96">
      <h2 className="text-6xl font-bold">
        404 <span className="text-black">Not Found</span>
      </h2>
      <h2 className="mt-3 text-6xl">
        This Page Does Not <span className="text-6xl font-bold">Exist</span>
      </h2>
      <p className="mt-5 text-2xl font-semibold">
        The page you are looking for cannot be found
      </p>
      <NavLink to="/">
        <button className="btn btn-outline mt-5">Go Back</button>
      </NavLink>
    </div>
  );
};

export default ErrorPage;
