import { IoMailOutline,IoLogoFacebook,IoLogoTwitter,IoLogoInstagram,IoLogoLinkedin, IoTimeOutline,IoLogoYoutube,IoLogoWhatsapp} from "react-icons/io5";
const Header = () => {
  return (
    <div className="bg-red-600 h-16  w-full flex  text-white items-center justify-between px-4 max-md:hidden -mb-1">
      <div className="text-base flex gap-2 items-center">
      <a href="mailto:Konigelectric.nb@gmail.com" className=" flex gap-1 items-center"><IoMailOutline className="size-5" />Konigelectric.nb@gmail.com</a> 
      <div className="flex gap-1 items-center"><IoTimeOutline className="size-5" /> Hours: Mon - Sat: 10.00 AM - 4.00 PM</div>
      </div>
      <div className="text-sm flex gap-3 py-2">        
        <a href="https://www.facebook.com/profile.php?id=100063700464845" target="_blank" className=" flex gap-1 items-center"><IoLogoFacebook className="size-5" /></a>
        <a href="#" target="_blank" className=" flex gap-1 items-center"><IoLogoTwitter className=" size-5" /></a>
        <a href="#" target="_blank" className=" flex gap-1 items-center"><IoLogoInstagram className="  size-5" /></a>
        <a href="#" target="_blank" className=" flex gap-1 items-center"><IoLogoLinkedin className=" size-5" /></a>
        <a href="#" target="_blank" className=" flex gap-1 items-center"><IoLogoYoutube className=" size-5" /></a>
        <a href="#" target="_blank" className=" flex gap-1 items-center"><IoLogoWhatsapp className=" size-5" /></a>
      </div>
    </div>
  );
};
export default Header;
