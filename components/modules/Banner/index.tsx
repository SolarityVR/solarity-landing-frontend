import React from "react";
import { BannerText } from "./BannerText";
import { BannerImage } from "./BannerImg";

export const Banner = () => {
  return (
    <>
      <div className="grid grid-cols-2 min-h-[620px] items-center">
        <div><BannerText /></div>
        <div><BannerImage /></div>
      </div>
    </>
  );
};
