import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Button from "../ui/myUI/Button";
import { IoArrowForward } from "react-icons/io5";
import React from "react";
const About = () => {
  return (
    <div className="w-full pt-10 grid grid-cols-2 justify-center gap-10 max-sm:grid-cols-1 max-sm:p-2 max-md:grid-cols-1 max-md:p-2">
      <div className="flex justify-end max-sm:hidden max-md:hidden">
        <img
          alt="foto1"
          className="rounded-lg shadow"
          src="https://gramentheme.com/wp/rooftek/wp-content/uploads/2023/12/about-5.jpg"
        />
      </div>
      <div className="items-start w-[33rem] max-sm:w-full max-md:w-full max-lg:w-full">
        <div className="flex gap-2 items-center py-3 text-red-600 font-semibold text-balance">
          <div className="h-2 bg-red-600 w-5 rounded-2xl"></div> ABOUT US
        </div>
        <div className="text-slate-900 text-3xl font-semibold py-3">
        Experienced & Quality Electrical Services Providers
        </div>
        <div className="text-slate-700 text-base py-3 text-justify">
        We have years of experience delivering high-quality electrical installation and renovation services for homes, apartments, and buildings. Our team is committed to safety, efficiency, and customer satisfaction.
        </div>
        <div className="text-slate-900 text-base font-medium   pt-4 grid grid-cols-2 items-center gap-y-2 justify-between max-sm:grid-cols-1 max-sm:items-start max-md:grid-cols-1 max-md:items-start  max-lg:grid-cols-1 max-lg:items-start  ">
          <div className="flex items-center  ">
            <IoCheckmarkCircleOutline className="size-5 text-red-600" />
            Accurate Electrical Testing
          </div>
          <div className="flex items-center">
            <IoCheckmarkCircleOutline className="size-5 text-red-600" />
            300+ Successful Projects done
          </div>
          <div className="flex items-center ">
            <IoCheckmarkCircleOutline className="size-5 text-red-600" />
            95% Satisfaction Guarantee
          </div>
          <div className="flex items-center ">
            <IoCheckmarkCircleOutline className="size-5 text-red-600" />
            Professional Electricians
          </div>
        </div>
        <div className="flex items-center justify-between text-slate-900 text-base font-medium py-4">
          <div>Quality Services</div>
          <div>95%</div>
        </div>
        <div className="flex items-center">
          <div className=" bg-red-600 h-3 text-base font-medium  w-11/12"></div>
          <div className=" bg-slate-300 h-3 text-base font-medium  w-1/12"></div>
        </div>
        <div className="flex items-center py-4">
          <Button>ABOUT US <IoArrowForward /></Button>
        </div>
      </div>
    </div>
  );
};
export default About;
