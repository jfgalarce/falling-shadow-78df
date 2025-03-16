"use client";
import Link from "next/link";
import React from "react";
import { useState } from "react";
import { IoArrowForward, IoCheckmarkCircleOutline } from "react-icons/io5";

const Services = () => {
  const [tab, setTab] = useState([true, false, false, false]);
  const handlerState = (state: number) => {
    setTab(tab.map((_, index) => index === state));
  };
  return (
    <div className="bg-slate-800 w-full">
      <div className="w-[70rem] max-sm:w-full max-md:w-full m-auto flex flex-col max-lg:w-full">
        <div className="flex items-center gap-2 w-full py-2">
          <div className="h-2 bg-red-600 w-5 rounded-2xl"></div>
          <label className="text-red-600 font-medium text-base">
            WHAT WE DO
          </label>
        </div>
        <div className="flex w-full py-2 justify-between">
          <label className="text-3xl text-slate-100 font-bold uppercase">
            WHAT WE DO
            <br />
            Delivering High Quality
          </label>
          <Link
            href="/services"
            className="border border-slate-100 flex items-center justify-center h-10 text-slate-100 font-medium p-2 gap-2 hover:bg-red-500"
          >
            SERVICES <IoArrowForward />
          </Link>
        </div>
        <div className="flex w-full py-10 gap-24 max-sm:flex-col max-sm:gap-0 max-md:flex-col max-md:gap-0 max-lg:px-2 ">
          <div className="flex flex-col justify-between max-sm:gap-2 max-sm:rotate-90 max-md:gap-2 max-md:rotate-90 max-lg:gap-2 ">
            <div
              onClick={() => handlerState(0)}
              className={` h-20 w-72 relative flex items-center cursor-pointer  ${
                tab[0]
                  ? "bg-red-600 text-slate-100"
                  : "bg-slate-100 text-sky-900"
              }`}
            >
              <div
                className={`absolute size-14  rotate-45 top-3 -right-4 ${
                  tab[0] ? "bg-red-600" : "bg-slate-100"
                }`}
              ></div>
              <label className="font-medium text-xl pl-5">
                Electrical Installation
              </label>
            </div>
            <div
              onClick={() => handlerState(1)}
              className={` h-20 w-72 relative flex items-center cursor-pointer ${
                tab[1]
                  ? "bg-red-600 text-slate-100"
                  : "bg-slate-100 text-sky-900"
              }`}
            >
              <div
                className={`absolute size-14  rotate-45 top-3 -right-4 ${
                  tab[1] ? "bg-red-600" : "bg-slate-100"
                }`}
              ></div>
              <label className="font-medium text-xl pl-5">
                Electrical Renovation
              </label>
            </div>
            <div
              onClick={() => handlerState(2)}
              className={` h-20 w-72 relative flex items-center cursor-pointer ${
                tab[2]
                  ? "bg-red-600 text-slate-100"
                  : "bg-slate-100 text-sky-900"
              }`}
            >
              <div
                className={`absolute size-14  rotate-45 top-3 -right-4 ${
                  tab[2] ? "bg-red-600" : "bg-slate-100"
                }`}
              ></div>
              <label className="font-medium text-xl pl-5">Electrical Repair</label>
            </div>
            <div
              onClick={() => handlerState(3)}
              className={` h-20 w-72 relative flex items-center cursor-pointer ${
                tab[3]
                  ? "bg-red-600 text-slate-100"
                  : "bg-slate-100 text-sky-900"
              }`}
            >
              <div
                className={`absolute size-14  rotate-45 top-3 -right-4 ${
                  tab[3] ? "bg-red-600" : "bg-slate-100"
                }`}
              ></div>
              <label className="font-medium text-xl pl-5 ">
              Electrical Wiring
              </label>
            </div>
          </div>
          <div className=" w-full h-96">
            <div
              className={`w-full bg-slate-100 h-full ${
                tab[0] ? " " : "hidden"
              } grid grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-1`}
            >
              <div className="max-sm:hidden max-md:hidden">
                <img
                  alt="ima"
                  className="p-5 object-cover h-96 max-sm:px-1 max-md:px-1 max-lg:px-1"
                  src="https://res.cloudinary.com/ddgqhpvjd/image/upload/v1742157335/KONIG_Electric/kw9f098xh3aojioq8qrf.jpg"
                />
              </div>
              <div className="flex flex-col p-5 justify-between max-sm:px-1 max-md:px-1 max-lg:px-1">
                <p className="text-xl font-medium">Electrical Installation</p>
                <p className="text-justify text-slate-500 font-normal">
                Reliable and efficient electrical installation services for homes, apartments, and buildings. Our experts ensure safe and high-quality wiring, panels, and lighting solutions.
                </p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> Safe & Code-Compliant Installations</p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> High-Quality Materials & Workmanship</p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> 95% Satisfaction Guarantee</p>
                <div>
                  <Link href={'/services'} className="flex items-center justify-center text-slate-100 gap-2 p-2 bg-red-600  w-36 hover:bg-slate-800 font-medium">READ MORE <IoArrowForward />  </Link>
                </div>
              </div>
            </div>
            <div
              className={`w-full bg-slate-100 h-full ${
                tab[1] ? " " : "hidden"
              } grid grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-1`}
            >
              <div className="max-sm:hidden max-md:hidden">
                <img
                  alt="ima"
                  className="p-5 object-cover h-96 max-sm:px-1 max-lg:px-1"
                  src="https://res.cloudinary.com/ddgqhpvjd/image/upload/v1742157335/KONIG_Electric/jrxs03jcrnr7mrss3d0e.jpg"
                />
              </div>
              <div className="flex flex-col p-5 justify-between max-sm:px-1 max-md:px-1 max-lg:px-1">
                <p className="text-xl font-medium">Electrical Renovation</p>
                <p className="text-justify text-slate-500 font-normal">
                Upgrade and modernize your electrical systems with our expert renovation services. We enhance safety, efficiency, and functionality for residential and commercial properties.
                </p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> Modern & Energy-Efficient Solutions</p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> Upgrade Wiring, Panels & Outlets</p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> Certified & Experienced Electricians</p>
                <div>
                  <Link href={'/services'} className="flex items-center justify-center text-slate-100 gap-2 p-2 bg-red-600  w-36 hover:bg-slate-800 font-medium">READ MORE <IoArrowForward />  </Link>
                </div>
              </div>
            </div>
            <div
              className={`w-full bg-slate-100 h-full ${
                tab[2] ? " " : "hidden"
              } grid grid-cols-2  max-sm:grid-cols-1 max-md:grid-cols-1`}
            >
              <div className="max-sm:hidden max-md:hidden">
                <img
                  alt="ima"
                  className="p-5 object-cover h-96 max-sm:px-1 max-md:px-1 max-lg:px-1"
                  src="https://res.cloudinary.com/ddgqhpvjd/image/upload/v1742157335/KONIG_Electric/nwqfxtvbq4h24k1q17di.jpg"
                />
              </div>
              <div className="flex flex-col p-5 justify-between max-sm:px-1 max-md:px-1 max-lg:px-1">
                <p className="text-xl font-medium">Electrical Repair</p>
                <p className="text-justify text-slate-500 font-normal">
                Fast and reliable electrical repair services to keep your home or business running safely. From minor fixes to major system repairs, we've got you covered.
                </p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> Quick & Effective Troubleshooting</p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> Emergency Repair Services Available</p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> Long-Lasting & Safe Solutions</p>
                <div>
                  <Link href={'/services'} className="flex items-center justify-center text-slate-100 gap-2 p-2 bg-red-600  w-36 hover:bg-slate-800 font-medium">READ MORE <IoArrowForward />  </Link>
                </div>
              </div>
            </div>
            <div
              className={`w-full bg-slate-100 h-full ${
                tab[3] ? " " : "hidden"
              } grid grid-cols-2  max-sm:grid-cols-1 max-md:grid-cols-1`}
            >
              <div className="max-sm:hidden max-md:hidden">
                <img
                  alt="ima"
                  className="p-5 object-cover h-96 max-sm:px-1 max-md:px-1 max-lg:px-1"
                  src="https://res.cloudinary.com/ddgqhpvjd/image/upload/v1742157335/KONIG_Electric/h76h7qdahnneow0pg6k1.jpg"
                />
              </div>
              <div className="flex flex-col p-5 justify-between max-sm:px-1 max-md:px-1 max-lg:px-1">
                <p className="text-xl font-medium">Electrical Wiring</p>
                <p className="text-justify text-slate-500 font-normal">
                Expert wiring solutions for homes, apartments, and buildings. We ensure safe, organized, and efficient electrical connections for new and existing systems.
                </p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> High-Quality & Durable Wiring</p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> Safe & Code-Compliant Installations</p>
                <p className="text-slate-900 font-medium flex gap-2 items-center"><IoCheckmarkCircleOutline className="size-5 text-red-600"/> Customized Solutions for Every Project</p>
                <div>
                  <Link href={'/services'} className="flex items-center justify-center text-slate-100 gap-2 p-2 bg-red-600  w-36 hover:bg-slate-800 font-medium">READ MORE <IoArrowForward />  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Services;
