import {
    IoLogoFacebook,
    IoLogoTwitter,
    IoLogoInstagram,
    IoLogoLinkedin,
    IoLogoYoutube,
    IoLogoWhatsapp,
  } from "react-icons/io5";
  import { MdKeyboardDoubleArrowRight } from "react-icons/md";
  import Link from "next/link";
  const Foot = () => {
    return (
      <div className="w-full bg-slate-800 pt-5 px-2">
        <div className="w-[70rem] max-sm:w-full max-md:w-full max-lg:w-full m-auto grid grid-cols-2 gap-10 max-sm:grid-cols-1 max-md:grid-cols-1">
          <div className="flex flex-col items-start gap-4">
            <p className="text-slate-100 font-semibold text-3xl">KÖNIG <label className="text-xl">Eletrical</label></p>
            <p className="text-slate-400 text-justify">
              Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
              lacinia curabitur lacinia mollis
            </p>
            <div className="flex gap-1 hover:">
              <Link
                href="https://www.facebook.com/profile.php?id=100063700464845&mibextid=wwXIfr&rdid=5JPXaGpYzlPikpKA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1WTkCgZsSH%2F%3Fmibextid%3DwwXIfr"
                className="border border-slate-600 p-1 hover:border-red-700 hover:text-red-700 hover:bg-red-700 group"
              >
                <IoLogoFacebook className="text-slate-500  size-5 group-hover:text-slate-100" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100063700464845&mibextid=wwXIfr&rdid=5JPXaGpYzlPikpKA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1WTkCgZsSH%2F%3Fmibextid%3DwwXIfr"
                className="border border-slate-600 p-1 hover:border-red-700 hover:bg-red-700 group"
              >
                <IoLogoTwitter className="text-slate-500  size-5 group-hover:text-slate-100" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100063700464845&mibextid=wwXIfr&rdid=5JPXaGpYzlPikpKA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1WTkCgZsSH%2F%3Fmibextid%3DwwXIfr"
                className="border border-slate-600 p-1 hover:border-red-700 hover:bg-red-700 group"
              >
                <IoLogoInstagram className="text-slate-500  size-5 group-hover:text-slate-100" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100063700464845&mibextid=wwXIfr&rdid=5JPXaGpYzlPikpKA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1WTkCgZsSH%2F%3Fmibextid%3DwwXIfr"
                className="border border-slate-600 p-1 hover:border-red-700 hover:bg-red-700 group"
              >
                <IoLogoLinkedin className="text-slate-500  size-5 group-hover:text-slate-100" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100063700464845&mibextid=wwXIfr&rdid=5JPXaGpYzlPikpKA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1WTkCgZsSH%2F%3Fmibextid%3DwwXIfr"
                className="border border-slate-600 p-1 hover:border-red-700 hover:bg-red-700 group"
              >
                <IoLogoYoutube className="text-slate-500  size-5 group-hover:text-slate-100" />
              </Link>
              <Link
                href="https://www.facebook.com/profile.php?id=100063700464845&mibextid=wwXIfr&rdid=5JPXaGpYzlPikpKA&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1WTkCgZsSH%2F%3Fmibextid%3DwwXIfr"
                className="border border-slate-600 p-1 hover:border-red-700 hover:bg-red-700 group"
              >
                <IoLogoWhatsapp className="text-slate-500  size-5 group-hover:text-slate-100" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col items-start gap-2">
            <p className="text-slate-100 font-semibold text-2xl gap-2 pb-2">
              Quick Links
            </p>
            <Link href="/" className="flex items-center text-slate-400 gap-2 hover:text-red-700">
              <MdKeyboardDoubleArrowRight /> Home
            </Link>
            <Link href="/" className="flex items-center text-slate-400 gap-2 hover:text-red-700">
              <MdKeyboardDoubleArrowRight /> About as
            </Link>
            <Link href="/" className="flex items-center text-slate-400 gap-2 hover:text-red-700">
              <MdKeyboardDoubleArrowRight /> Our Services
            </Link>
            <Link href="/" className="flex items-center text-slate-400 gap-2 hover:text-red-700">
              <MdKeyboardDoubleArrowRight /> Our Proyect
            </Link>
            <Link href="/" className="flex items-center text-slate-400 gap-2 hover:text-red-700">
              <MdKeyboardDoubleArrowRight /> Team Members
            </Link>
            <Link
              href="/"
              className="flex items-center text-slate-400 gap-2 pb-2"
            >
              <MdKeyboardDoubleArrowRight /> Contact Us
            </Link>
          </div>
        </div>
        <div className="border-t border-t-slate-600 ">
          <div className="w-[70rem] max-sm:w-full max-md:w-full max-lg:w-full m-auto flex justify-between items-center max-sm:flex-col max-md:flex-col p-2 ">
            <p className="text-slate-100">Copyright ©2025 Könin Eletrical. All Rights Reserved</p>
            <div className="text-slate-100 flex gap-5">
              <Link className="hover:text-red-700" href="/">Terms & Condition</Link>
              <Link className="hover:text-red-700" href="/">Privacy Policy </Link>
            </div>
          </div>
        </div>
      </div>
    );
  };
  export default Foot;
  