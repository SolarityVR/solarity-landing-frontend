import React from "react";
import Image from "next/image";

import { ConceptCard } from "./ConceptCard";
import Concept1 from "../../../assets/images/concept1.png";
import Concept2 from "../../../assets/images/concept2.png";
import Concept3 from "../../../assets/images/concept3.png";
import Concept4 from "../../../assets/images/concept4.png";
import SideImg from "../../../assets/images/sideImg.png";

import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Concepts = () => {
  return (
    <>
        <div className="mt-[100px] relative" >
            <div className="absolute top-[200px] -right-[43px] w-[230px] sm:bottom-0 sm:-right-[100px] sm:w-[420px]">
                <Image src={SideImg} className="custom-animation-bounce-2"></Image>
            </div>
            <div className="my-5 relative">
                <div className="absolute w-[300px] h-[400px] -top-[160px] -left-[180px] -z-50 bg-light-gradient-radial from-purple-500 via-pink-500 to-red-500"></div>
                    <div className="text-center sm:text-left">
                        <AnimationOnScroll animateIn="animate__fade">
                            <span className="text-white text-[22px] sm:text-5xl font-semibold tracking-wider leading-[3.7rem]">What is <label className="text-lightprimary">Solarity?</label></span>
                        </AnimationOnScroll>
                    </div>
            </div>
            <AnimationOnScroll animateIn="animate__fade">
                <div className="my-15 mt-[36px] grid grid-cols-5">
                    <div className="col-span-5 text-center sm:col-span-4 sm:text-left">
                        <span className="text-content text-[14px] sm:text-[22px]">Solarity is an autopoietic modular metaverse that consists of many applications built on top of a new standard of crypto-economic systems to accelerate blockchain adoption by increasing productivity and efficiency for any kind of organization and to assist builders embarking on the web3 journey.</span>
                    </div>
                </div>
            </AnimationOnScroll>
            <div className="my-15 mt-[100px] grid grid-cols-5">
                <div className="col-span-5 text-left lg:col-span-4 pr-[20px]">
                    <div className="grid grid-cols-1 sm:grid-cols-2">
                        <div className="pr-[1rem] sm:pr-[8rem] mb-14">
                            <ConceptCard image={Concept1} title="Create" description="Create your presence in the metaverse for the cheapest possible price, whether it’s NFTs or DAOs." />
                        </div>
                        <div className="pr-[1rem] sm:pr-[8rem] mb-14">
                            <ConceptCard image={Concept2} title="Connect" description="Establish symbiotic relationships in open ecosystems to compound network effects to extents that Web2 walled gardens cannot compete with." />
                        </div>
                        <div className="pr-[1rem] sm:pr-[8rem] mb-14 relative">
                            <div className="absolute w-[400px] h-[400px] -top-[180px] -left-[200px] -z-50 bg-light-gradient-radial from-purple-500 via-pink-500 to-red-500"></div>
                            <ConceptCard image={Concept3} title="Cultivate" description="Grow your project with your community through flawless continuous funding for DAOs and native recursive sub DAOs to create unseen organizational structures that can scale without compromising on decentralization, efficiency and transparency." />
                        </div>
                        <div className="pr-[1rem] sm:pr-[8rem] mb-14">
                            <ConceptCard image={Concept4} title="Compose" description="Have complete freedom in mixing ingredients to create new components for the systems of the future, welcome to the exponential age." />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
};
