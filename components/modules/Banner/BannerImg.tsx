import React from "react";
import Image from "next/image";

import BannerImg from "../../../assets/images/bannerImg.webp";

export const BannerImage = () => {
  return (
    <>
        <div className="grid grid-cols-1 relative text-right">
          <Image src={BannerImg} alt="SGN" objectFit={'contain'} className="custom-animation-bounce !pt-[15px]"></Image>
          <div className="absolute w-[450px] h-[450px] -bottom-[50px] left-0 -z-50 bg-gradient-radial from-purple-500 via-pink-500 to-red-500"></div>
        </div>
    </>
  );
};
