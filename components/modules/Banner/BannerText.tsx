import React from "react";
import Button from "../../common/Button";

export const BannerText = () => {
  return (
    <>
        <div className="my-5 relative text-center sm:text-left">
            <div className="absolute w-[400px] h-[400px] -top-[180px] -left-[200px] -z-50 bg-gradient-radial from-purple-500 via-pink-500 to-red-500"></div>
            <span className="text-white text-[26px] md:text-5xl font-semibold tracking-wider leading-[2.7rem] md:leading-[3.7rem]">Solarity, the framework <br /> for your metaverse</span>
        </div>
        <div className="my-5 mb-[56px] text-center sm:text-left">
            <span className="text-content text-[14px] md:text-[22px]">Building, accelerating and powering <br /> the metaverse, one DAO at a time.</span>
        </div>
        <div className="grid grid-cols-1 xl:grid-cols-3">
            <div className="pr-5 mb-5"><Button caption="Explore" icon="" bordered={false} /></div>
            <div className="pr-5 xl:pr-[30%] col-span-2"><Button caption="Download extension" icon="chrome" bordered={true} /></div>
        </div>
    </>
  );
};
