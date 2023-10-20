// @ts-nocheck

import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Root from "../Layout/Root";
import AddProduct from "../Pages/AddProduct/AddProduct";
import MyCart from "../Pages/MyCart/MyCart";
import Products from "../components/Products/Products";
import ProductDetails from "../Pages/ProductDetails/ProductDetails";
import UpdateProduct from "../components/UpdateProduct/UpdateProduct";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import PrivateRoute from "./PrivateRoute";
import ErrorPage from "../Pages/Error/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch("/brands.json"),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/myCart",
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            `https://speedy-wrench-server-ag54id2ts-fahim-mohammad-siams-projects.vercel.app/cartProduct`
          ),
      },
      {
        path: "/products/:Name",
        element: <Products></Products>,
        loader: ({ Name }) =>
          fetch(
            `https://speedy-wrench-server-ag54id2ts-fahim-mohammad-siams-projects.vercel.app/products/${Name}`
          ),
      },
      {
        path: "/productsDetails/:productName",
        element: (
          <PrivateRoute>
            <ProductDetails></ProductDetails>
          </PrivateRoute>
        ),
        loader: () =>
          fetch(
            "https://speedy-wrench-server-ag54id2ts-fahim-mohammad-siams-projects.vercel.app/products"
          ),
      },

      {
        path: "/updateProduct/:id",
        element: <UpdateProduct></UpdateProduct>,
        loader: ({ params }) =>
          fetch(
            `https://speedy-wrench-server-ag54id2ts-fahim-mohammad-siams-projects.vercel.app/product/${params.id}`
          ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

export default router;
