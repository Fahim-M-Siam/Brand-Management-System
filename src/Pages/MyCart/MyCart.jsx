import { useLoaderData } from "react-router-dom";

// @ts-nocheck
const MyCart = () => {
  const cartProduct = useLoaderData();
  console.log(cartProduct);
  return (
    <div>
      <h2>This is my Cart : {cartProduct?.email}</h2>
    </div>
  );
};

export default MyCart;
