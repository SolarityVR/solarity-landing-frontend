import React from "react";
import Image from "next/image";

import BannerImg from "../../../assets/images/bannerImg.png";

export const BannerImage = () => {
  return (
    <>
        <div className="grid grid-cols-1">
            <Image src={BannerImg} alt="Solarity" objectFit={'contain'}></Image>
        </div>
    </>
  );
};
