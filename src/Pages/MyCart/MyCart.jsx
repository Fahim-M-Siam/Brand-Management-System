// @ts-nocheck
import { Link, useLoaderData } from "react-router-dom";
import { MdEdit } from "react-icons/md";
import { AiFillDelete } from "react-icons/ai";

// @ts-nocheck
const MyCart = () => {
  const cartProduct = useLoaderData();

  const { _id, productName, brandName, type, price, rating, image } =
    cartProduct;

  return (
    <div key={cartProduct._id}>
      <h2 className="text-center text-3xl font-semibold my-20">
        Your Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
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
                name={cartProduct.rating}
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
                </button>
              </Link>
              <Link to={`/productsDetails/${productName}`}>
                <button className="btn btn-xs btn-outline font-medium">
                  <AiFillDelete />
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCart;
