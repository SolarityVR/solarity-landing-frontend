import React from "react";
import { BannerText } from "./BannerText";
import { BannerImage } from "./BannerImg";

export const Banner = () => {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 min-h-[420px] md:min-h-[680px] items-center">
        <div className="block sm:hidden"><BannerImage /></div>
        <div><BannerText /></div>
        <div className="hidden sm:block"><BannerImage /></div>
      </div>
    </>
  );
};
