import Link from "next/link";
import React from "react";
const Section1 = () => {
  return (
    <div className="w-full bg-slate-100">
      <div className="w-[70rem] max-sm:w-full max-md:w-full max-lg:w-full m-auto grid grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-1">
        <div className="py-10 flex justify-start max-sm:p-2 max-md:p-2 max-lg:p-2">
          <img src="https://gramentheme.com/wp/rooftek/wp-content/uploads/2024/01/choose-2.jpg" />
        </div>
        <div className="flex flex-col py-10 justify-between max-sm:py-2 max-md:py-2 max-lg:p-2 gap-2">
          <div className="flex gap-2 items-center text-red-600 font-semibold text-balance uppercase text-lg">
            <div className="h-2 bg-red-600 w-5 rounded-2xl"></div> why choose us
          </div>
          <p className="text-slate-900 text-3xl font-medium">
          A Few Reasons to Choose Our Company
          </p>
          <p className="text-slate-600 font-normal text-justify w-full">
          We are committed to delivering high-quality electrical solutions with safety, efficiency, and customer satisfaction as our top priorities. Our team of certified electricians ensures every project meets the highest industry standards.
          </p>
          <div className="grid grid-cols-2 gap-4 font-medium text-slate-800 w-full">
            <div className="flex bg-white shadow border-b hover:border-b-red-600 border-b-white cursor-pointer h-14 items-center justify-center p-2 text-sm">Quality Materials</div>
            <div className="flex bg-white shadow border-b hover:border-b-red-600 border-b-white cursor-pointer h-14 items-center justify-center p-2 text-sm">Certified & Experienced Electricians</div>
            <div className="flex bg-white shadow border-b hover:border-b-red-600 border-b-white cursor-pointer h-14 items-center justify-center p-2 text-sm">Reliable Service & Warranty</div>
            <div className="flex bg-white shadow border-b hover:border-b-red-600 border-b-white cursor-pointer h-14 items-center justify-center p-2 text-sm">Trusted & Highly Rated Company</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Section1;
