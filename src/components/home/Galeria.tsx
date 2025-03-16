"use client";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import React from "react";
const Galeria = () => {
  return (
    <div className="grid grid-cols-2 max-sm:grid-cols-1 max-md:grid-cols-1">
      <div className="bg-slate-800 text-slate-100 pl-50 max-sm:p-5 max-md:p-5 max-lg:p-5  flex flex-col items-start justify-center">
        <div className="text-5xl font-bold flex gap-2 items-center">
          <div className="h-2 bg-red-600 w-5 rounded-2xl"></div>
          <label className="text-slate-100 font-medium text-lg">
            Professional Electrical Services
          </label>
        </div>
        <div className="text-5xl font-bold">
          We Provide Complete Electrical Installation & Renovation Solutions.
        </div>
      </div>
      <Carousel
        className="w-full relative "
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent>
          <CarouselItem>
            <img
              className="w-full object-contain "
              src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/417178107_877768554356485_7409912922430453028_n.jpg?stp=dst-jpg_s960x960_tt6&_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_ohc=OoMMQuQl6Y4Q7kNvgEtMoPZ&_nc_oc=AdgApG2tTSM30_3zRgpKw_1LiC-eVfL-_ZdnnrgzK9Tua46GMRCyqBaINXl4w7fAzxA&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=MBxlMO_Flhq7s-nLpSmpJA&oh=00_AYHxGbxqJg4qxRXkuet_9OJwgVhwmrzoNi-E5XY7bEnf-A&oe=67DA784A"
            />
          </CarouselItem>
      
          <CarouselItem>
            <img
              className="w-full object-contain "
              src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/338315473_227965676383572_5697402474078378711_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=pxj5665kFvIQ7kNvgEQk_U-&_nc_oc=AdiroWf0yw2u6DRh34FyCxR--RVzWc3yTzmjMMYYYHxV4vuksUNhWiAhA58cJyRk9zg&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=k1FS5EPksOR_-KDn_TL4ew&oh=00_AYGiBrlSk6-utNh3GckldgfzcvK94tK8CIfg3mTkcKkUow&oe=67DA8096"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="w-full object-contain "
              src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/471149055_1254853072350020_6031624168134761676_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=833d8c&_nc_ohc=_WK1g_pY1j4Q7kNvgFDVvBb&_nc_oc=AdhQFzZkXnrpuLCacf8-snqwnthNQtK8O-ZTAcF70RtVFyfOz5Vjwf9UoV-bXlR5Ow0&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=diD6euofIQbixkuN26FSbA&oh=00_AYE9i1TIpJieS_6JK5P7ps1WTJhYvZVg9lHHgQ92tC8aYQ&oe=67DA9023"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="w-full object-contain "
              src="https://scontent-lga3-2.xx.fbcdn.net/v/t39.30808-6/434263931_935449485255058_4662313460692918870_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=833d8c&_nc_ohc=Suhsz5W04IIQ7kNvgFyVgcO&_nc_oc=AdiKKn4kgOHRrop53V6ldSGc_5R-4gAFsSTVBY5n483p2hjKvLxduP0a_29P1CWaDBY&_nc_zt=23&_nc_ht=scontent-lga3-2.xx&_nc_gid=8k9XT4ETBc81dWpFLaqc-w&oh=00_AYEq_fKJfFBzSXRkuaVhRbrqWJv6-ZL__fHkxSGAKhYK2w&oe=67DA8571"
            />
          </CarouselItem>
          <CarouselItem>
            <img
              className="w-full object-contain "
              src="https://scontent-lga3-1.xx.fbcdn.net/v/t39.30808-6/480812517_1197702592363078_708225305399038100_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=833d8c&_nc_ohc=NLKJ9TpQrJMQ7kNvgHy9WNe&_nc_oc=AdggPI_TJUq_1DyYLn7BtIwmaFG6ka4trtm61uDinDnA9RsDAxwdPShekkF0Iq2pzaQ&_nc_zt=23&_nc_ht=scontent-lga3-1.xx&_nc_gid=nipPRBEFH9YPa4SgY-24fg&oh=00_AYE2y-FlJCH-NduDdlTBwYtRx1IFTVHBVvij-Xc7uueXfw&oe=67DBD0A9"
            />
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious className="absolute top-1/2 left-5  text-white" />
        <CarouselNext className="absolute top-1/2 right-5 text-white" />
      </Carousel>
    </div>
  );
};
export default Galeria;
