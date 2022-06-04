import React from "react";
import Image from "next/image";

import FunctionMap from "../../../assets/images/map-desktop.png";
import FunctionMapMobile from "../../../assets/images/map-phone.png";
import { AnimationOnScroll } from 'react-animation-on-scroll';

export const FunctionalMap = () => {
  return (
    <>
      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="relative hidden sm:block text-center">
            <Image src={FunctionMap}></Image>
        </div>
        <div className="relative block sm:hidden text-center">
            <Image src={FunctionMapMobile}></Image>
        </div>
      </AnimationOnScroll>
    </>
  );
};
