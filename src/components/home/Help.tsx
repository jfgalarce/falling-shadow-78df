import React from "react"

const Help = () => {
  return (
    <div className="sm:relative">
      <div className="bg-slate-100 w-full h-48 max-sm:h-10 max-md:h-10"></div>
      <div className="sm:absolute w-full h-full top-0 flex items-center justify-center">
        <div className="w-[70rem] max-md:w-full sm:h-60 bg-red-600 max-sm:pb-10 max-md:pb-10 ">
          <p className="text-4xl p-10 text-center text-white font-medium">Need Any Roofling Help?</p>
          <form className="w-full flex items-center justify-evenly max-sm:flex-col max-sm:gap-2 max-md:flex-col max-md:gap-2 p-2">
            <input type="text" placeholder="Your name" className="border border-slate-100 rounded-full p-4 text-slate-100 focus:outline-none font-medium w-52 max-sm:w-full max-md:w-full" />
            <input type="text" placeholder="Your Phone"  className="border border-slate-100 rounded-full p-4 text-slate-100 focus:outline-none font-medium  w-52 max-sm:w-full max-md:w-full" />
            <input type="text" placeholder="Your Message" className="border border-slate-100 rounded-full p-4 text-slate-100 focus:outline-none font-medium  w-52 max-sm:w-full max-md:w-full" />
            <button type="submit" className=" rounded-full font-medium bg-slate-100 p-4   cursor-pointer hover:bg-slate-800 hover:text-slate-100 shadow-lg w-52 max-sm:w-full max-md:w-full" >SUBMIT REQUES</button>
          </form>
        </div>
      </div>
      <div className="bg-slate-800 w-full h-48 max-sm:h-10 max-md:h-10"></div>
    </div>
  )
}
export default Help