import React from "react";
import Image from "next/image";

import { CardLover } from "./CardLover";
import { CardSlider } from "./CardSlider";
import User1 from "../../../assets/images/user11.png";
import User2 from "../../../assets/images/user22.png";
import User3 from "../../../assets/images/user33.png";

import { AnimationOnScroll } from 'react-animation-on-scroll';

export const LoveSolarity = () => {
  return (
    <>
        <div className="my-[0px] sm:my-[100px] relative" >
            <div className="my-5 relative">
                <div className="absolute w-[300px] h-[400px] -top-[160px] -right-[0px] sm:-right-[180px] -z-50 bg-light-gradient-radial from-purple-500 via-pink-500 to-red-500"></div>
                <div className="hidden sm:block absolute w-[300px] h-[400px] -top-[100px] -left-[180px] -z-50 bg-light-gradient-radial from-purple-500 via-pink-500 to-red-500"></div>
                <div className="text-center">
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fade">
                        <span className="text-white text-center text-[22px] sm:text-5xl font-semibold tracking-wider leading-[3.7rem]"><label className="text-lightprimary">People love </label>using SGN</span>
                    </AnimationOnScroll>
                </div>
            </div>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fade">
                <div className="my-15 mt-[100px] grid grid-cols-3">
                    <div className="col-span-3 lg:hidden">
                        <CardSlider  />
                    </div>
                    <div className="hidden lg:block lg:col-span-1 pl-[30px]">
                        <CardLover image={User1} title="MoneyBoy0x •$•" address="@MoneyBoy0x" description="NFTs are not just PFP, they are the strongest communities I have been in, and SGN is the home for them." />
                    </div>
                    <div className="hidden lg:block lg:col-span-1 pl-[30px]">
                        <CardLover image={User2} title="Kuleen ◎" address="@knimkar" description="These guys work hard, tinker a lot and never cease to amaze me on how much they work. Can't wait for the future." />
                    </div>
                    <div className="hidden lg:block lg:col-span-1 pl-[30px]">
                        <CardLover image={User3} title="Dirkk0" address="@dirkk0" description="WebXR is the essence of an open and composable metaverse. And SGN is building the infrastructure for it." />
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
    </>
  );
};
