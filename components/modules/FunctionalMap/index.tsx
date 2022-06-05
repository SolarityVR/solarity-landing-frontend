import React from "react";
import Image from "next/image";

import FunctionMap from "../../../assets/images/map-desktop.png";
import FunctionMapMobile from "../../../assets/images/map-phone.png";
import FunctionImg1 from "../../../assets/images/function1.png";
import FunctionImg2 from "../../../assets/images/function2.png";
import FunctionImg3 from "../../../assets/images/function3.png";
import FunctionImg4 from "../../../assets/images/function4.png";
import FunctionImg5 from "../../../assets/images/function5.png";
import FunctionImg6 from "../../../assets/images/function6.png";

import { AnimationOnScroll } from 'react-animation-on-scroll';
import { FunctionCard } from "./FunctionCard";

export const FunctionalMap = () => {
  return (
    <>
      <AnimationOnScroll animateIn="animate__fadeIn">
        <div className="relative hidden sm:block text-center function-desktop">
          <div className="grid grid-cols-5 mt-[80px] mb-[150px]">
            <div className="relative">
              <div className="absolute top-0 left-0 right-0 text-center"><FunctionCard image={FunctionImg1} title="NFT minting UI" padding="" /></div>
              <div className="absolute top-[38%] left-0 right-0 text-center"><FunctionCard image={FunctionImg2} title="DAO provider" padding=" !py-[2vw] !px-[1.5vw] " /></div>
              <div className="absolute bottom-0 left-0 right-0 text-center"><FunctionCard image={FunctionImg3} title={(<><span>Make any website</span><p>web3 and 3D</p></>)} padding=" !py-[2vw] !px-[1.9vw] " /></div>
            </div>
            <div className="col-span-3 py-[4vw]">
              <Image src={FunctionMap}></Image>
            </div>
            <div className="relative">
              <div className="absolute top-0 left-0 right-0 text-center"><FunctionCard image={FunctionImg4} title="Chrome extension" padding="" /></div>
              <div className="absolute top-[38%] left-0 right-0 text-center"><FunctionCard image={FunctionImg5} title="Launch your verse" padding="" /></div>
              <div className="absolute bottom-0 left-0 right-0 text-center"><FunctionCard image={FunctionImg6} title="Blockchain activity" padding="" /></div>
            </div>
          </div>
        </div>
        <div className="relative block sm:hidden text-center function-mobile">
          <div className="grid grid-cols-1 mt-[80px] mb-[150px]">
            <div className="relative">
              <div className="absolute top-6 left-0 text-center"><FunctionCard image={FunctionImg1} title={(<><span>NFT</span><p>minting UI</p></>)} padding="" /></div>
              
              <div className="absolute left-[36%] top-0 text-center"><FunctionCard image={FunctionImg3} title={(<><span>Make any website</span><p>web3 and 3D</p></>)} padding=" !py-[3.8vw] !px-[3.6vw] " /></div>
              <div className="absolute right-0 top-5 text-center "><FunctionCard image={FunctionImg2} title={(<><span>DAO</span><p>provider</p></>)} padding=" !py-[3.8vw] !px-[2.6vw] " /></div>
            </div>
            <div className="py-[34vw]">
              <Image src={FunctionMapMobile}></Image>
            </div>
            <div className="relative">
              <div className="absolute bottom-6 left-0 text-center"><FunctionCard image={FunctionImg4} title={(<><span>Chrome</span><p>extension</p></>)} padding="" /></div>
              <div className="absolute bottom-0 left-[41%] text-center"><FunctionCard image={FunctionImg5} title={(<><span>Launch</span><p>your verse</p></>)} padding="" /></div>
              <div className="absolute bottom-6 right-0 text-center"><FunctionCard image={FunctionImg6} title={(<><span>Blockchain</span><p>activity</p></>)} padding="" /></div>
            </div>
          </div>
        </div>
      </AnimationOnScroll>
    </>
  );
};
