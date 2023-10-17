// @ts-nocheck
import { Outlet } from "react-router-dom";
import Navbar from "../Pages/Navbar/Navbar";
import Footer from "../Pages/Footer/Footer";

const Root = () => {
  return (
    <div className="font-poppins bg-gradient-to-r from-[#cfd9df] to-[#e2ebf0]">
      <div className="max-w-6xl mx-auto">
        <Navbar></Navbar>
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
