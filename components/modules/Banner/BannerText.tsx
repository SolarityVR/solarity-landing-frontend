import React from "react";
import Button from "../../common/Button";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useRouter } from "next/router";

export const BannerText = () => {
  const router = useRouter();
  return (
    <>
        <div className="my-5 relative text-center sm:text-left">
            <div className="absolute w-[400px] h-[400px] -top-[180px] -left-[200px] -z-50 bg-gradient-radial from-purple-500 via-pink-500 to-red-500"></div>
              <span className="text-white text-[26px] md:text-5xl font-semibold tracking-wider leading-[2.7rem] md:leading-[3.7rem]">Solarity, Your Social <br /> GameFi Aggregator</span>
        </div>
          <div className="my-5 mb-[56px] text-center sm:text-left">
              <span className="text-content text-[14px] md:text-[22px]">Your Games, Your Friends <br /> Your Quests. Anywhere</span>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3">
              <div className="pr-5 mb-5"><Button caption="Start App" icon="" bordered={false} onClick={() => router.push('https://solarity-stage.vercel.app')} /></div>
              <div className="pr-5 xl:pr-[30%] col-span-2"><Button caption="Download extension" icon="chrome" bordered={true} onClick={() => router.push('https://chrome.google.com/webstore/detail/twitter-verse/olmkofkehgfecicmijdhohcgglpnbnnh')} /></div>
          </div>
    </>
  );
};
