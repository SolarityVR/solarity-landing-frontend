import React from "react";
import Image from "next/image";

import SideImg2 from "../../../assets/images/sideImg-2.png";
import Logo1 from "../../../assets/images/dl1.png";
import Logo2 from "../../../assets/images/dl2.png";
import Logo3 from "../../../assets/images/dl3.png";
import Logo4 from "../../../assets/images/dl4.png";

import Deep1 from "../../../assets/images/metaverse-assistant.png";
import Deep2 from "../../../assets/images/fractal-daos.png";
import Deep3 from "../../../assets/images/metaverse-windows.png";
import Deep4 from "../../../assets/images/xnfts.png";

import { DeepLookCard } from "./DeepLookCard";

import { AnimationOnScroll } from 'react-animation-on-scroll';

export const DeepLook = () => {
  return (
    <>
        <div className="mt-[10px] relative" >
            <div className="absolute -top-[140px] -right-[43px] w-[230px] sm:-top-[350px] sm:-right-[100px] sm:w-[500px] -z-10">
                <Image src={SideImg2} className="custom-animation-bounce-3"></Image>
            </div>
            <div className="my-5 relative">
                <div className="absolute w-[500px] h-[500px] -top-[40px] -left-[190px] -z-50 bg-light-gradient-radial from-purple-500 via-pink-500 to-red-500"></div>
                <div className="text-center sm:text-left">
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fade">
                        <span className="text-white text-[22px] sm:text-5xl font-semibold tracking-wider leading-[3.7rem]">Let&apos;s look deeper</span>
                    </AnimationOnScroll>
                </div>
            </div>
            <div className="my-15 mt-[36px] grid grid-cols-5">
                <div className="col-span-5 text-center sm:col-span-4 sm:text-left">
                    <AnimationOnScroll animateOnce={true} animateIn="animate__fade">
                        <span className="text-content text-[14px] sm:text-[22px]">Discover our products and learn<br></br>  about the new metaverse standards.</span>
                    </AnimationOnScroll>
                </div>
            </div>
            <div className="my-15 mt-[100px] mb-[5px] sm:mb-[50px]">
                <div className="py-5">
                    <DeepLookCard image={Deep1} logo={Logo1} title="Twitter Verse" description="Bring your games and experiences anywhere on the web, with one click! Add our extension, play the games you always loved, and start earning directly from Twitter. Looking for a game? Post your request as a Twitter post, and let users join there." direction={true} ></DeepLookCard>
                </div>
                <div className="py-5 relative">
                    <div className="absolute w-[500px] h-[500px] -top-[40px] right-[250px] -z-50 bg-light-gradient-radial from-purple-500 via-pink-500 to-red-500"></div>
                    <DeepLookCard image={Deep2} logo={Logo2} title="GameFi Aggregator" description="Your web3 games, in one place, with any account. Log in through a DID and start playing and earn more, more easily. Solving the visibility problem of web3 games by providing the library of games accessible anywhere with Quests rewarding system." direction={false} ></DeepLookCard>
                </div>
                <div className="py-5 relative">
                    <div className="absolute w-[250px] sm:w-[500px] h-[500px] top-[40px] left-[250px] -z-50 bg-light-gradient-radial from-purple-500 via-pink-500 to-red-500"></div>
                    <DeepLookCard image={Deep3} logo={Logo3} title="Flocks" description="Sociality and work are becoming more and more digital, and there is a high demand for immediate interaction and content. Create shared browsing sessions, watch a movie, play games, work and share any experiences with whoever you want, with just one click." direction={true} ></DeepLookCard>
                </div>
                <div className="py-5 relative">
                    <DeepLookCard image={Deep4} logo={Logo4} title="Experiences Engine" description="Building games should be as easy as editing a video, and as immediate as a youtube link. That is why through webXR we are powering creator tools available on any device that runs a browser with Remix functions so that anybody can customize even the most complex games." direction={false} ></DeepLookCard>
                </div>
            </div>
        </div>
    </>
  );
};
