import React from "react";
import Button from "../../common/Button";

export const BannerText = () => {
  return (
    <>
        <div className="my-5">
            <span className="text-white text-5xl font-semibold tracking-wider leading-[3.7rem]">Solarity, the framework <br /> for your metaverse</span>
        </div>
        <div className="my-5 mb-[56px]">
            <span className="text-content text-[22px]">Building, accelerating and powering <br /> the metaverse, one DAO at a time.</span>
        </div>
        <div className="grid grid-cols-3">
            <div className="pr-5"><Button caption="Explore" icon="" bordered={false} size={22} /></div>
            <div className="pr-[30%] col-span-2"><Button caption="Download extension" icon="chrome" bordered={true} size={20} /></div>
        </div>
    </>
  );
};
