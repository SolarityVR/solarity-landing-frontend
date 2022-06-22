import React from "react";
import Image from "next/image";

import { AnimationOnScroll } from 'react-animation-on-scroll';

import deviceImg from "../../../assets/images/vr.png";

export const MultiPlatform = () => {
  return (
    <>
        <div className="my-[0px] sm:my-[120px] relative" >
            <div className="my-5 relative">
                <div className="absolute w-[300px] h-[400px] -top-[160px] -right-[0px] sm:-right-[180px] -z-50 bg-light-gradient-radial from-purple-500 via-pink-500 to-red-500"></div>
                <div className="hidden sm:block absolute w-[300px] h-[400px] -top-[100px] -left-[180px] -z-50 bg-light-gradient-radial from-purple-500 via-pink-500 to-red-500"></div>
                <div className="text-center">
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fade">
                        <span className="text-white text-center text-[22px] sm:text-5xl font-semibold tracking-wider leading-[3.7rem]">Easy to use on <label className="text-lightprimary">any device </label></span>
                    </AnimationOnScroll>
                </div>
            </div>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fade">
                <div className="my-15 mt-[100px] text-center">
                    <Image src={deviceImg} />
                </div>
            </AnimationOnScroll>
        </div>
    </>
  );
};
