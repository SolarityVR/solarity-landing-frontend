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
                        <span className="text-content text-[14px] sm:text-[22px]">Lorem ipsum dolor sit amet, consectetur<br></br> adipiscing elit, sed do eiusmod tempor incididunt.</span>
                    </AnimationOnScroll>
                </div>
            </div>
            <div className="my-15 mt-[100px] mb-[5px] sm:mb-[50px]">
                <div className="py-5">
                    <DeepLookCard image={Deep1} logo={Logo1} title="Metaverse Assistant" description="A revolutionary wallet platform for metaverse wanderers with a native navigator to quickly switch from dao to dao, redesigned to leave ponzi crypto behind and embrace solar punk web3" direction={true} ></DeepLookCard>
                </div>
                <div className="py-5 relative">
                    <div className="absolute w-[500px] h-[500px] -top-[40px] right-[250px] -z-50 bg-light-gradient-radial from-purple-500 via-pink-500 to-red-500"></div>
                    <DeepLookCard image={Deep2} logo={Logo2} title="Fractal DAOs" description="The complete suite to empower any organization with a native internet money layer, from futuristic 4th Industrial Revolution Deep Tech companies to Esports Teams to Decentralized Science Projects, allocating capital efficiently is the key to overcoming great filter existential risks." direction={false} ></DeepLookCard>
                </div>
                <div className="py-5 relative">
                    <div className="absolute w-[250px] sm:w-[500px] h-[500px] top-[40px] left-[250px] -z-50 bg-light-gradient-radial from-purple-500 via-pink-500 to-red-500"></div>
                    <DeepLookCard image={Deep3} logo={Logo3} title="Metaverse Windows" description="The real metaverse will be browser based, it&apos;ll be powered by cloud computing to remove hardware bottlenecks for creators and to let consumers have the highest possible quality experience without the need for expensive computers, for these reasons we&apos;ve been pioneering WebXR Verses to let anyone be part of the Metaverse without the need for inexplicably expensive virtual land." direction={true} ></DeepLookCard>
                </div>
                <div className="py-5 relative">
                    <DeepLookCard image={Deep4} logo={Logo4} title="xNFTs" description="Enjoy pseudonymous identities to maximize creative freedom and be judged by the content of your character and your ideas thanks to our Metaverse Passport that will unlock a whole new layer of content that will live on top of it, one NFT to “role” them all." direction={false} ></DeepLookCard>
                </div>
            </div>
        </div>
    </>
  );
};
