import React from "react";
import { BannerText } from "./BannerText";
import { BannerImage } from "./BannerImg";

export const ProductBanner = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 mt-[20px] min-h-[410px] md:min-h-[590px] items-center">
        <div className="block sm:hidden"><BannerImage /></div>
          <div><BannerText /></div>
        <div className="hidden sm:block"><BannerImage /></div>
      </div>
    </>
  );
};
