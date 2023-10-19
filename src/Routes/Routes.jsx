// @ts-nocheck

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Products from "../components/Products/Products";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/addProduct",
        element: <AddProduct></AddProduct>,
      },
      {
        path: "/myCart",
        element: <MyCart></MyCart>,
      },
      {
        path: "/products/:Name",
        element: <Products></Products>,
        loader: ({ Name }) => fetch(`http://localhost:5000/products/${Name}`),
      },
      {
        path: "/productsDetails/:productName",
        element: <ProductDetails></ProductDetails>,
        loader: () => fetch("http://localhost:5000/products"),
      },
      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/product/${params.id}`),
      },
    ],
  },
]);

export default router;
