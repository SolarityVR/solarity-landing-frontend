import React from "react";
import Image from "next/image";

import { AnimationOnScroll } from 'react-animation-on-scroll';

export interface DeepLookCardProps {
    image: any;
    logo: any;
    title: string;
    description: string;
    direction: boolean;
}

export const DeepLookCard = (props: DeepLookCardProps) => {
  return (
    <>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fade">
        <div className="grid grid-cols-12 hidden sm:grid">
            <div className={props.direction?"col-span-12 sm:col-span-5 p-5 text-center sm:text-left":"col-span-12 sm:col-span-7 p-5"}>
                {props.direction?
                    <Image src={props.image} className=""></Image>:
                    <>
                        <div className="mb-4"><Image src={props.logo}></Image></div>
                        <div className="pr-[10px] sm:pr-[80px] relative">
                            <p className="text-white text-[18px] sm:text-[30px] mb-5 font-semibold tracking-wider">{props.title}</p>
                            <p className="text-content text-[14px] sm:text-[18px] mb-5">{props.description}</p>
                        </div>
                    </>
                }
            </div>
            <div className={props.direction?"col-span-12 p-5 sm:col-span-7":"col-span-12 p-5 sm:col-span-5 "}>
                {props.direction?
                    <>
                        <div className="mb-4"><Image src={props.logo}></Image></div>
                        <div className="pr-[10px] sm:pr-[80px]">
                            <p className="text-white text-[18px] sm:text-[30px] mb-5 font-semibold tracking-wider">{props.title}</p>
                            <p className="text-content text-[14px] sm:text-[18px] mb-5">{props.description}</p>
                        </div>
                    </>:
                    <Image src={props.image} className=""></Image>
                }
            </div>
        </div>
        <div className="grid grid-cols-12 grid sm:hidden mb-[50px]">
            <div className="col-span-12 text-center">
                <Image src={props.image} className=""></Image>
            </div>
            <div className="col-span-12 p-5">
                <>
                    <div className="mb-4"><Image src={props.logo}></Image></div>
                    <div className="pr-[10px] sm:pr-[80px]">
                        <p className="text-white text-[18px] sm:text-[30px] mb-5 font-semibold tracking-wider">{props.title}</p>
                        <p className="text-content text-[14px] sm:text-[18px] mb-5">{props.description}</p>
                    </div>
                </>
            </div>
        </div>
        </AnimationOnScroll>
    </>
  );
};
