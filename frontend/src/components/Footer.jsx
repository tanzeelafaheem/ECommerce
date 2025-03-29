import React from 'react';
import { assets } from '../assets/frontend_assets/assets';

const Footer = () => {
  return (
    <div className="bg-gray-100 py-10">
      <div className='max-w-6xl mx-auto flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 text-sm px-5'>
      
        <div>
          <img src={assets.logo} className='mb-5 w-32' alt="Company Logo"/>
          <p className='w-full md:w-2/3 text-gray-600'> 
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, accusantium ab! Fugit.
          </p>
        </div>

        <div className='mb-5'>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className="cursor-pointer hover:text-black">Home</li>
            <li className="cursor-pointer hover:text-black">About Us</li>
            <li className="cursor-pointer hover:text-black">Delivery</li>
            <li className="cursor-pointer hover:text-black">Privacy Policy</li>
          </ul>
        </div>

        <div className='mb-5'>
          <p className="text-xl font-medium mb-5">CONTACT US</p>
          <ul className='flex flex-col gap-2 text-gray-600'>
            <li className=" hover:text-black">+12-752-643-852</li>
            <li className=" hover:text-black">contact@forever.com</li>
          </ul>
        </div>
    </div>
    <div>
        <hr/>
        <p className='py-5 text-sm text-center '>Copyright 2025@forever.com - All rights reserved</p>
    </div>
    </div>
  );
};

export default Footer;
