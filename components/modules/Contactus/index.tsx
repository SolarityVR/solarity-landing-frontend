import React from "react";
import Button from "../../common/Button";
import Image from "next/image";

import Ball1 from "../../../assets/images/contact-us-ball1.png";
import Ball2 from "../../../assets/images/contact-us-ball2.png";
import MobBall1 from "../../../assets/images/contact-us-mob-ball1.png";
import MobBall2 from "../../../assets/images/contact-us-mob-ball2.png";

export const ContactUs = () => {
  return (
    <>
        <div className="mt-[50px] sm:mt-[100px] relative w-[100%] px-9 py-1 contact-us">
            <div className="hidden sm:block absolute right-0 top-0">
              <Image src={Ball1} className="rounded-[14px]"></Image>
            </div>
            <div className="hidden sm:flex absolute right-0 bottom-0">
              <Image src={Ball2} className="rounded-[14px]"></Image>
            </div>
            <div className="flex sm:hidden absolute right-0 bottom-0">
              <Image src={MobBall1} className="rounded-[14px]"></Image>
            </div>
            <div className="flex sm:hidden absolute left-0 bottom-0">
              <Image src={MobBall2} className="rounded-[14px]"></Image>
            </div>
            <div className="mt-[64px] mb-[14px] relative">
                <div className="absolute w-[300px] h-[350px] -top-[150px] -left-[150px] -z-50 bg-light-gradient-radial from-purple-500 via-pink-500 to-red-500"></div>
                <div className="text-center sm:text-left">
                    <span className="text-white text-[22px] sm:text-[40px] font-semibold tracking-wider leading-[3.7rem]">Join our <label className="text-lightprimary">team</label></span>
                </div>
            </div>
            <div className="my-[25px] w-[100%] sm:w-[75%]">
                <p className="text-white text-[14px] sm:text-[22px] text-content text-center sm:text-left">If you&apos;re interested in building the next layer of complexity, reach out to <label className="text-lightprimary font-bold">team@solarity.xyz</label>, we&apos;re engineers-only founders looking for other motivated members of society that refuse to give up on humanity.</p>
            </div>
            <div className="mt-[55px] mb-[200px] sm:mb-[50px] w-[100%] sm:w-[35%] md:w-[25%]">
                <Button caption="Get in touch" icon="" bordered={false}></Button>
            </div>
            
        </div>
    </>
  );
};
