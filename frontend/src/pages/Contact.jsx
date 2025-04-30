import React from 'react';
import Title from '../components/Title';
import { assets } from '../assets/frontend_assets/assets';
import NewsLetterBox from '../components/NewsLetterBox';

const Contact = () => {
  return (
    <div className="text-center text-2xl pt-10 border-t">
      <Title text1="CONTACT" text2="US" />
      <div className="my-10 flex flex-col justify-center md:flex-row gap-20 mb-28">
        <img 
          className="w-full md:max-w-[480px]" 
          src={assets.contact_img} 
          alt="Contact Image" 
        />
        <div className="flex flex-col justify-center items-start gap-6">
          <p className="font-semibold text-xl text-gray-700">Our Store</p>
          <p className="text-gray-600">Dummy Address</p>
          <p className="text-gray-600">Tel: (234) 123-456</p>
          <p className="text-gray-600">Email: tanzeela@forever.com</p>
          <p className="font-semibold text-gray-700">Careers at Forever</p>
          <button 
            className="border border-black bg-white text-black py-2 px-4 rounded hover:bg-black hover:text-white"
          >
            Explore Jobs
          </button>
        </div>
      </div>
      <NewsLetterBox />
    </div>
  );
};

export default Contact;