import React from "react";
import ReactPlayer from "react-player/youtube";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const ProductVideoPlayer = () => {
  return (
    <>
      <div className="text-center">
          <AnimationOnScroll animateOnce={true} animateIn="animate__fade">
              <span className="text-white text-center text-[22px] sm:text-5xl font-semibold tracking-wider leading-[3.7rem]">Demo</span>
          </AnimationOnScroll>
      </div>
      <div className="p-[20px] sm:p-[100px] relative">
          <ReactPlayer
              controls = {true}
              className='react-player fixed-bottom'
              url='https://youtu.be/s3ktYTdV6gw'
          />
      </div>
    </>
  );
};
