// @ts-nocheck
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";
import { Toaster } from "react-hot-toast";

const Root = () => {
  return (
    <div className="font-poppins bg-gradient-to-r from-[#cfd9df] to-[#e2ebf0]">
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
      <Toaster />
    </div>
  );
};

export default Root;
