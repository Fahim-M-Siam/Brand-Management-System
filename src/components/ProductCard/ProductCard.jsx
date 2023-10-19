/* eslint-disable react/prop-types */
// @ts-nocheck

import { Link } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { CgDetailsLess } from "react-icons/cg";

// import Slider from "react-slick";

const ProductCard = ({ product }) => {
  const { _id, productName, brandName, type, price, rating, image } = product;

  return (
    <div>
      <div className="card bg-gradient-to-r from-[#cc2b5e] to-[#753a88] shadow-xl">
        <figure className="w-full h-[250px]">
          <img className="w-full h-full" src={image} alt={productName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-base">
            {productName}
            <div className="badge badge-outline text-xs">{type}</div>
            <div className="badge badge-outline text-xs">{brandName}</div>
          </h2>
          <p className="font-medium">${price}</p>
          <div className="rating">
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input
              type="radio"
              name={rating}
              className="mask mask-star"
              checked
            />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
            <input type="radio" name="rating-1" className="mask mask-star" />
          </div>
          <div className="card-actions justify-end">
            <Link to={`/updateProduct/${_id}`}>
              <button className="btn btn-xs btn-outline font-medium">
                <MdEdit />
                Update
              </button>
            </Link>
            <Link to={`/productsDetails/${productName}`}>
              <button className="btn btn-xs btn-outline font-medium">
                <CgDetailsLess />
                Details
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
