import React from "react";
import Image from "next/image";

import BannerImg from "../../../assets/images/productBanner.png";

export const BannerImage = () => {
  return (
    <>
        <div className="relative text-right -mr-14">
          <img src="/img/productBanner.png" className="" style={{objectFit: "cover"}}></img>
          {/* <Image src={BannerImg} alt="Solarity" objectFit={'cover'} className="!pt-[15px] -mr-[10px]"></Image> */}
          <div className="absolute w-[450px] h-[450px] bottom-[50px] -right-[230px] -z-50 bg-gradient-multi"></div>
          <div className="absolute w-[400px] h-[400px] bottom-[0px] -right-[200px] -z-50 bg-gradient-radial"></div>
          <div className="absolute w-[11px] h-[11px] bottom-[25px] right-[85px] -z-50 bg-gradient-small-radial1 rounded-full"></div>
          <div className="absolute w-[19px] h-[19px] bottom-[0px] right-[50px] -z-50 bg-gradient-small-radial2 rounded-full"></div>
        </div>
    </>
  );
};
