// @ts-nocheck

import { useLoaderData, useParams } from "react-router-dom";

const ProductDetails = () => {
  const products = useLoaderData();
  const { productName } = useParams();
  const product = products.find(
    (product) => product.productName === productName
  );
  const { _id, brandName, description, rating, type, price, image } = product;
  // const addTocart = (_id) => {
  // const cartProduct = { productName, brandName, type, price, rating, image };
  //   console.log(cartProduct);
  //   // send cartProduct to the server
  //   fetch(`http://localhost:5000/products/${brandName}/cartProduct`, {
  //     method: "POST",
  //     headers: {
  //       "content-type": "application/json",
  //     },
  //     body: JSON.stringify(cartProduct),
  //   })
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log(data);
  //     });
  // };
  return (
    <div className="mt-20 max-w-6xl mx-auto">
      <div className="mt-14 text-start mb-10">
        <h2 className="text-[#0B0B0B] text-[40px] font-semibold">
          {productName}
        </h2>
        <div className="mt-4">
          <div className="badge badge-outline font-semibold bg-gradient-to-r from-[#cc2b5e] to-[#753a88]">
            {brandName}
          </div>
          <div className="badge badge-outline ml-2 font-semibold bg-gradient-to-r from-[#cc2b5e] to-[#753a88]">
            {type}
          </div>
        </div>
      </div>
      <div className="mb-32">
        <div className="w-full p-2 :h-[700px] relative">
          <img className="w-full h-[700px]" src={image} alt="" />
        </div>
      </div>
      <div className="hero mb-20 -mt-10">
        <div className="hero-content p-4 flex-col lg:flex-row-reverse">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl" />
          <div className="w-full">
            <p className="py-6">{description}</p>

            <button
              // onClick={() => addTocart(_id)}
              className="btn btn-outline bg-gradient-to-r from-[#cc2b5e] to-[#753a88]"
            >
              ${price} - Add To Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
