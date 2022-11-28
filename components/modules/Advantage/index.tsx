import React from "react";
import Image from "next/image";

import { AdvantageCard } from "./AdvantageCard";
import Ad1 from "../../../assets/images/ad1.png";
import Ad2 from "../../../assets/images/ad2.png";
import Ad3 from "../../../assets/images/ad3.png";
import Ad4 from "../../../assets/images/ad4.png";
import SideLeft from "../../../assets/images/sideLeft.png";

import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Advantage = () => {
  return (
    <>
        <div className="mt-[100px] relative" >
            <div className="absolute w-[150px] -top-[50px] -left-[100px] sm:-top-[0px] sm:w-[420px]">
                <Image src={SideLeft} className="custom-animation-bounce-2"></Image>
            </div>
            <div className="my-5 relative">
                <div className="absolute w-[300px] sm:w-[300px] h-[400px] -top-[160px] -right-[0px] sm:-right-[180px] -z-50 bg-light-gradient-radial from-purple-500 via-pink-500 to-red-500"></div>
                <div className="text-center">
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fade">
                        <span className="text-white text-center text-[22px] sm:text-5xl font-semibold tracking-wider leading-[3.7rem]">What is SGN&apos;s <label className="text-lightprimary">mesh?</label></span>
                    </AnimationOnScroll>
                </div>
            </div>
            <div className="my-15 mt-[100px] grid grid-cols-5">
                <div className="hidden lg:block lg:col-span-1">

                </div>
                <div className="col-span-5 text-left lg:col-span-4 pl-[30px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        
                        <div className="mb-14 sm:pr-[8rem] mb-14">
                            <AdvantageCard image={Ad1} title={(<><span className="text-lightprimary">Build</span> the metaverse</>)} description="Starting to build the metaverse by innovating its economic infrastructure through academic-grade daos engineered to be magnetically self-organizing to compose the new global organizational mesh" />
                        </div>
                        <div className="pr-[1rem] sm:pr-[8rem] mb-14">
                            <AdvantageCard image={Ad2} title={(<><span className="text-lightprimary">Express</span> yourself</>)} description="We have developed the most complete and efficient way to express any kind of organization and to directly govern programs associated with them, it would be a waste not to share this with the rest of humanity" />
                        </div>
                        <div className="pr-[1rem] sm:pr-[8rem] mb-14 relative">
                            <AdvantageCard image={Ad3} title={(<><span className="text-lightprimary">Expand</span> the world</>)} description="Our standard for virtual worlds enable both scarcity and abundance by natively integrating a fully democratic way to expand the world, therefore a coordinated way to bring abundance to the ecosystem, when needed, in a decentralized algorithmical way." />
                        </div>
                        <div className="pr-[1rem] sm:pr-[8rem] mb-14">
                            <AdvantageCard image={Ad4} title={(<><span className="text-lightprimary">Improve</span> the process</>)} description="Web2 is awesome, it only misses a value layer, we&apos;re adding it" />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    </>
  );
};
