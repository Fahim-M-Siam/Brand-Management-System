// @ts-nocheck

import CartProductCard from "../../components/cartproductCard/CartProductCard";
import { useLoaderData } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { useState } from "react";

// @ts-nocheck
const MyCart = () => {
  const loadedCartProducts = useLoaderData();
  console.log(loadedCartProducts);
  const { currentUser } = useAuth();
  const cartProduct = loadedCartProducts?.filter(
    (emailFind) => emailFind.email === currentUser?.email
  );
  console.log(cartProduct);
  const [cartProducts, setCartProducts] = useState(cartProduct);

  return (
    <div>
      <h2 className="text-center text-3xl font-semibold my-20">
        Your Products
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
        {cartProducts?.map((cartProduct) => (
          <CartProductCard
            key={cartProduct._id}
            cartProduct={cartProduct}
            setCartProducts={setCartProducts}
            cartProducts={cartProducts}
          ></CartProductCard>
        ))}
      </div>
    </div>
  );
};

export default MyCart;
// onClick={() => handleDelete(_id)}
