import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { NavLink, Link } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const {getCartCount}=useContext(ShopContext);

  return (
    <div className="flex items-center justify-between py-5 px-6 font-medium">
      <Link to='/'>
      <img src={assets.logo} className="w-36" alt="Logo" />
      </Link>

      {/* Navigation Menu (Visible on larger screens) */}
      <ul className="hidden sm:flex gap-8 text-sm text-gray-700">
        <li>
          <NavLink to="/" className="flex flex-col items-center gap-1">
            <p>Home</p>
            <hr className="w-6 border-none h-[2px] bg-gray-700 hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/collection" className="flex flex-col items-center gap-1">
            <p>Collection</p>
            <hr className="w-6 border-none h-[2px] bg-gray-700 hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" className="flex flex-col items-center gap-1">
            <p>About</p>
            <hr className="w-6 border-none h-[2px] bg-gray-700 hidden" />
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" className="flex flex-col items-center gap-1">
            <p>Contact Us</p>
            <hr className="w-6 border-none h-[2px] bg-gray-700 hidden" />
          </NavLink>
        </li>
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        <img src={assets.search_icon} className="w-5 cursor-pointer" alt="Search" />
        
        {/* Profile Dropdown */}
        <div className="group relative">
          <img src={assets.profile_icon} className="w-5 cursor-pointer" alt="Profile" />
          <div className="group-hover:block hidden absolute right-0 pt-4">
            <div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
              <p className="cursor-pointer hover:text-black">My Profile</p>
              <p className="cursor-pointer hover:text-black">Orders</p>
              <p className="cursor-pointer hover:text-black">Log-Out</p>
            </div>
          </div>
        </div>

        {/* Cart Icon with Count */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5 min-w-5" alt="Cart" />
          <p className="absolute right-0 bottom-0 transform translate-x-1/2 translate-y-1/2 w-4 h-4 text-center flex items-center justify-center bg-black text-white rounded-full text-[8px]">
          {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu Icon */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt="Menu"
        />
      </div>

      {/* Sidebar Menu (For Small Screens) */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-white shadow-md transition-transform transform ${
          visible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col text-gray-600 h-full">
          {/* Close Button */}
          <div
            className="flex items-center gap-4 p-4 border-b cursor-pointer"
            onClick={() => setVisible(false)}
          >
            <img src={assets.dropdown_icon} className="h-4 rotate-180" alt="Back" />
            <p>Back</p>
          </div>

          {/* Sidebar Links */}
          <NavLink to="/" className="py-3 px-6 border-b hover:bg-gray-100" onClick={() => setVisible(false)}>Home</NavLink>
          <NavLink to="/collection" className="py-3 px-6 border-b hover:bg-gray-100" onClick={() => setVisible(false)}>Collection</NavLink>
          <NavLink to="/about" className="py-3 px-6 border-b hover:bg-gray-100" onClick={() => setVisible(false)}>About</NavLink>
          <NavLink to="/contact" className="py-3 px-6 border-b hover:bg-gray-100" onClick={() => setVisible(false)}>Contact Us</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
