// @ts-nocheck

import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const products = useLoaderData();
  console.log(products);
  const { productName } = useParams();
  const product = products.find(
    (product) => product.productName === productName
  );
  console.log(product);
  const { brandName, description, type, price, image } = product;
  return (
    <div className="mt-20 max-w-6xl mx-auto">
      <div className="mt-14 text-start mb-10">
        <h2 className="text-[#0B0B0B] text-[40px] font-semibold">
          {productName}
        </h2>
        <div className="badge badge-outline font-semibold">{brandName}</div>
        <div className="badge badge-outline ml-2 font-semibold">{type}</div>
      </div>
      <div className="mb-32">
        <div className="w-full h-[700px] relative">
          <img className="w-full h-[700px]" src={image} alt="" />
        </div>
      </div>
      <div className="hero mb-20 -mt-10">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div>
            <p className="py-6">{description}</p>

            <button className="btn btn-outline">${price} - Add To Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
