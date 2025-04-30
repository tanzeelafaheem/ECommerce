import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/frontend_assets/assets";
import NewsLetterBox from '../components/NewsLetterBox'

const About = () => {
  return (
    <div className="text-2xl text-center pt-8 border-t">
      <Title text1={"ABOUT"} text2={"US"} />
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt="About Us"
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi
            voluptatem aperiam deserunt, recusandae fugit aliquam ipsam. Et
            molestiae reiciendis quaerat exercitationem excepturi. Velit sequi
            adipisci suscipit ducimus nostrum quisquam ullam.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo ut enim
            maiores error alias ipsam tempora architecto neque nisi quae.
          </p>
        </div>
      </div>
        <div className="text-4xl py-4">
          <Title text1={'WHY'} text2={'CHOOSE US?'}/> 
          </div>
          <div className=" flex flex-col md:flex-row text-sm mb-20">
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-gray-700">
              <b>Quality Assurance</b>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, corrupti.</p>
            </div>
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-gray-700">
              <b>Convenience</b>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, corrupti.</p>
            </div>
            <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5 text-gray-700">
              <b>Exceptional Customer Service</b>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eligendi, corrupti.</p>
            </div>
          </div>
          <NewsLetterBox/>
    </div>
  );
};

export default About;
