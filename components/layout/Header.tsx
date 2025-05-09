import React from "react";
import AppLogo from "../ui/AppLogo";
import Navbar from "./Header/Navbar";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full bg-[#fff] text-black px-4 py-2.5 md:px-8 md:py-5">
      <AppLogo />
      <Navbar />
    </div>
  );
};

export default Header;
