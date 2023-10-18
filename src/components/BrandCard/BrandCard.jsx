// @ts-nocheck
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { NavLink } from "react-router-dom";

// @ts-nocheck
const BrandCard = ({ brand }) => {
  const { id, Name, Image } = brand;
  const capName = Name.toUpperCase();

  return (
    <NavLink to={`/products/${capName}`}>
      <div className="card bg-base-100 shadow-xl image-full cursor-pointer h-[250px]">
        <figure className="w-full">
          <img className="w-full h-full" src={Image} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{Name}</h2>
        </div>
      </div>
    </NavLink>
  );
};

export default BrandCard;
