"use client"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import Link from "next/link";
import { BsLayoutTextSidebar } from "react-icons/bs";
import {
  IoMailOutline,
  IoLogoFacebook,
  IoLogoTwitter,
  IoLogoInstagram,
  IoLogoLinkedin,
  IoTimeOutline,
  IoLogoYoutube,
  IoLogoWhatsapp,
  IoLocationSharp,
  IoCallOutline,
} from "react-icons/io5";
import { usePathname} from "next/navigation";
const Menu = () => {
  const pathname = usePathname(); 
  const paramt = pathname.split("/").filter(Boolean)
  return (
    <div className="h-auto w-full flex  max-md:px-2 items-center justify-between sticky top-0   bg-slate-100 z-10 shadow-lg">
      <div className=" flex justify-center">
        <img
          alt="logo"
          className="w-56 max-sm:w-20 max-md:w-20"
          src="https://res.cloudinary.com/ddgqhpvjd/image/upload/v1741983965/KONIG_Electric/sapgcscsmr5tgfxzorlf.png"
        />
      </div>
      <div className="text-slate-800 font-semibold flex items-center justify-evenly  text-xl w-full pr-56 max-lg:hidden max-sm:hidden max-md:hidden ">
        <Link href="/" className={`hover:text-red-500 ${paramt.length===0?'text-red-500':' '}`}>
          Home
        </Link>
        <Link href="/about" className={`hover:text-red-500 ${paramt[0]==='about'?'text-red-500':' '}`}>
          About Us
        </Link>
        <Link href="/" className="hover:text-red-500">
          Our Services
        </Link>
        <Link href="/" className="hover:text-red-500">
          Our Projects
        </Link>
        <Link href="/" className="hover:text-red-500">
          Team Members
        </Link>
        <Link href="/" className="hover:text-red-500">
          Contact Us
        </Link>
      </div>
      <div className="pr-2 sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <BsLayoutTextSidebar className="size-5 cursor-pointer" />
          </SheetTrigger>
          <SheetContent side="right">
            <div className="text-slate-800 h-full bg-slate-100 font-semibold text-lg">
              <div className=" flex flex-col items-start gap-3 p-2 ">
                <img
                  alt="logo"
                  className="w-20 "
                  src="https://res.cloudinary.com/ddgqhpvjd/image/upload/v1741983965/KONIG_Electric/sapgcscsmr5tgfxzorlf.png"
                />
                <SheetClose asChild>
                  <Link
                    href="/"
                    className="hover:text-red-500 border-b  w-full"
                  >
                    Home
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link
                    href="/about"
                    className="hover:text-red-500 border-b  w-full"
                  >
                    About Us
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/" className="hover:text-red-500 border-b w-full">
                    Our Services
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/" className="hover:text-red-500 border-b w-full">
                    Our Projects
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/" className="hover:text-red-500 border-b w-full">
                    Team Members
                  </Link>
                </SheetClose>
                <SheetClose asChild>
                  <Link href="/" className="hover:text-red-500  w-full">
                    Contact Us
                  </Link>
                </SheetClose>
                <p className="text-2xl pt-5">Contact Info</p>
                <p className="pl-2 flex items-center gap-2">
                  <IoLocationSharp className="size-5" /> moncton/dieppe/shediac
                </p>
                <p className="pl-2 flex items-center gap-2">
                  <IoCallOutline className="size-5" />{" "}
                  <a href="tel:+15062279125"> +1 (506) 227-9125</a>
                </p>
                <p className="pl-2 flex items-center gap-2">
                  <IoMailOutline className="size-5" />{" "}
                  <a href="mailto:Konigelectric.nb@gmail.com">
                    {" "}
                    Konigelectric.nb@gmail.com
                  </a>
                </p>
                <div className="flex gap-2 pl-2 justify-evenly w-full">
                  <a
                    href="https://www.facebook.com/profile.php?id=100063700464845"
                    target="_blank"
                    className=" flex gap-1 items-center"
                  >
                    <IoLogoFacebook className="size-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className=" flex gap-1 items-center"
                  >
                    <IoLogoTwitter className=" size-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className=" flex gap-1 items-center"
                  >
                    <IoLogoInstagram className="  size-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className=" flex gap-1 items-center"
                  >
                    <IoLogoLinkedin className=" size-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className=" flex gap-1 items-center"
                  >
                    <IoLogoYoutube className=" size-5" />
                  </a>
                  <a
                    href="#"
                    target="_blank"
                    className=" flex gap-1 items-center"
                  >
                    <IoLogoWhatsapp className=" size-5" />
                  </a>
                </div>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </div>
  );
};
export default Menu;
