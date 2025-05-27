import React from "react";
import { assets } from "../assets/admin_assets/assets";

const Navbar = ({ setToken }) => {
  const handleLogout = () => {
    if (window.confirm("Are you sure you want to log out?")) {
      setToken('');
    }
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 p-4">
      <img src={assets.logo} className="w-[max(10%,80px)]" />
      <button
        onClick={handleLogout}
        className="bg-gray-600 text-white px-5 sm:px-5 py-2 sm:py-2 rounded-full text-xs sm:text-sm cursor-pointer hover:bg-gray-700 transition-colors duration-300"
      >
        Logout
      </button>
    </div>
  );
};

export default Navbar;