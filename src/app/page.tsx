import About from "@/components/home/About";
import Galeria from "@/components/home/Galeria";
import Help from "@/components/home/Help";
import Section1 from "@/components/home/Section1";
import Services from "@/components/home/Services";
import Image from "next/image";

export default function Home() {
  return (
    <div className="w-full">
      
      <Galeria />
      <About />
      <Help />
      <Services />
      <Section1 />
    </div>
  );
}
