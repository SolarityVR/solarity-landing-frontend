import React from "react";
import Button from "../../common/Button";
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { useRouter } from "next/router";

export const BannerText = () => {
  const router = useRouter();
  return (
    <>
        <div className="my-5 relative text-center sm:text-left">
            <div className="absolute w-[400px] h-[400px] -top-[180px] -left-[200px] -z-50 bg-gradient-radial"></div>
            <div className="absolute w-[19px] h-[19px] -top-[100px] left-[0px] -z-50 bg-gradient-small-radial1 rounded-full"></div>
            <div className="absolute w-[11px] h-[11px] -top-[75px] left-[25px] -z-50 bg-gradient-small-radial2 rounded-full"></div>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn">
              <div className="banner-title">
                <span className="text-white text-[36px] md:text-[65px] font-semibold tracking-wider leading-[2.7rem] md:leading-[4.6rem]">The Solana<br /> Gaming Network</span>
              </div>
            </AnimationOnScroll>
        </div>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fadeIn" >
          <div className="my-5 mb-[56px] text-center sm:text-left">
              <span className="text-content text-[14px] md:text-[22px]">{"What if Uniswap met PSN? Bring your favorite games anywhere, play with your guilds and earn!"}</span>
          </div>
          <div className="grid grid-cols-1 xl:grid-cols-3" >
              <div className="pr-5 mb-5"><Button caption="Get extension" icon="" bordered={false} onClick={() => router.push('https://chrome.google.com/webstore/detail/twitter-verse/olmkofkehgfecicmijdhohcgglpnbnnh')} /></div>
              <div className="pr-5 xl:pr-[30%] col-span-2"><Button caption="Launch Alpha" icon="play" bordered={true} onClick={() => router.push('https://solarity-new-frontend.vercel.app/')} /></div>
          </div>
        </AnimationOnScroll>
    </>
  );
};
