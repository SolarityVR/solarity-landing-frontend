import React from "react";
import Image from "next/image";

import SideImg1 from "../../../assets/images/vector1.png";
import SideImg2 from "../../../assets/images/vector2.png";
import SideImg3 from "../../../assets/images/vector3.png";
import Logo1 from "../../../assets/images/bannericon_1.png";
import Logo2 from "../../../assets/images/bannericon_2.png";
import Logo3 from "../../../assets/images/bannericon_3.png";

import { DeepLookCard } from "./DeepLookCard";

import { AnimationOnScroll } from 'react-animation-on-scroll';

export const ProductDeepLook = () => {
    const Deep1 = "/img/look1.png";
    const Deep2 = "/img/look2.png";
    const Deep3 = "/img/look3.png";
    const bubbles1 = <><div className="absolute w-[19px] h-[19px] -bottom-[50px] left-[0px] -z-50 bg-gradient-small-radial2 rounded-full"></div>
    <div className="absolute w-[11px] h-[11px] -bottom-[70px] left-[25px] -z-50 bg-gradient-small-radial1 rounded-full"></div></>;
    const bubbles2 = <><div className="absolute w-[19px] h-[19px] bottom-[50px] right-[0px] -z-50 bg-gradient-small-radial1 rounded-full"></div>
    <div className="absolute w-[11px] h-[11px] bottom-[35px] right-[25px] -z-50 bg-gradient-small-radial2 rounded-full"></div></>;
    const bubbles3 = <><div className="absolute w-[11px] h-[11px] -bottom-[50px] left-[0px] -z-50 bg-gradient-small-radial1 rounded-full"></div>
    <div className="absolute w-[19px] h-[19px] -bottom-[75px] left-[20px] -z-50 bg-gradient-small-radial2 rounded-full"></div></>;
  return (
    <>
        <div className="mt-[10px] relative">
            <div className="absolute -top-[30px] -right-[43px] w-[210px] sm:-top-[110px] sm:-right-[170px] sm:w-[400px] -z-10">
                <Image src={SideImg1}></Image>
            </div>
            <div className="absolute top-[900px] -left-[43px] w-[210px] sm:top-[690px] lg:top-[580px] sm:-left-[100px] sm:w-[400px] -z-10">
                <Image src={SideImg2}></Image>
            </div>
            <div className="absolute top-[1800px] -right-[43px] w-[210px] sm:top-[1200px] lg:top-[1000px] sm:-right-[170px] sm:w-[400px] -z-10">
                <Image src={SideImg3}></Image>
            </div>
            <div className="my-15 mt-[100px] mb-[5px] sm:mb-[50px]">
                <div className="py-5">
                    <DeepLookCard image={Deep1} logo={Logo1} caption="Verses" title="Bring your games and experiences anywhere" description="Bring your games and experiences anywhere on the web, with one click! Play the games you always loved, and start earning directly from Twitter. Looking for players on a game? Post your request as a Twitter post, and let users join there." direction={false} bubbles={bubbles1} ></DeepLookCard>
                </div>
                <div className="py-5 relative">
                    <DeepLookCard image={Deep2} logo={Logo2} caption="Quests" title="Earn from your games" description="Are you a game dev tired of having to focus more on building a community then building your game? Or a user tired of having to change 15 different platforms to do some P2E? Quests brings the best and easiest User Experience for anybody to earn from your game just by scrolling Twitter, and an easy way for new games to get tested and acquire visibility." direction={true} bubbles={bubbles2} ></DeepLookCard>
                </div>
                <div className="py-5 relative">
                    <DeepLookCard image={Deep3} logo={Logo3} caption="Flocks" title="Play with your friends" description="Gaming is always more fun with friends. Getting them to join should be as easy as liking a post. That&apos;s why with our GameTag you are not forced to use an unpolished web3 UX but by aggregating your web3 wallets to your web2 identities you are bringing the metaverse anywhere you go!" direction={false} bubbles={bubbles3} ></DeepLookCard>
                </div>
            </div>
        </div>
    </>
  );
};
