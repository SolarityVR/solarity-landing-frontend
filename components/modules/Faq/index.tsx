import React from "react";

import Accordion from "../../common/Accordion";

import { Faqs } from "../../../data/faqs";
export const Faq = () => {
  return (
    <>
        <div className="mt-[85px] sm:mt-[100px] relative w-[100%] sm:w-[90%]" >
            <div className="my-1 relative">
                <div className="absolute w-[300px] h-[350px] -top-[150px] -left-[150px] -z-50 bg-light-gradient-radial from-purple-500 via-pink-500 to-red-500"></div>
                <div className="text-center sm:text-left">
                    <span className="text-white text-[22px] sm:text-5xl font-semibold tracking-wider leading-[3.7rem]">NFTs<label className="text-lightprimary"> FAQ&apos;s</label></span>
                </div>
            </div>
            <div className="my-15 mt-[100px]">
                <div>
                    {Faqs.map((faq) => 
                        <Accordion title={faq.title} description={faq.description} />
                    )}
                </div>
            </div>
        </div>
    </>
  );
};
