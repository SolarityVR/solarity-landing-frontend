import React from "react";
import Image from "next/image";

import { AnimationOnScroll } from 'react-animation-on-scroll';
// import Image from "../../common/Image";

export interface DeepLookCardProps {
    image: any;
    logo: any;
    title: string;
    caption: string;
    description: string;
    direction: boolean;
    bubbles: any;
}

export const DeepLookCard = (props: DeepLookCardProps) => {
  return (
    <>
        <AnimationOnScroll animateOnce={true} animateIn="animate__fade">
        <div className="grid grid-cols-12 hidden sm:grid">
            <div className={props.direction?"col-span-12 sm:col-span-5 p-5 text-center sm:text-left":"col-span-12 sm:col-span-7 p-5"}>
                {props.direction?
                    <div><img src={props.image} className="" style={{objectFit: "cover"}}></img></div>:
                    <>
                        <div className="mb-4"><Image src={props.logo} /></div>
                        <div className="pr-[10px] sm:pr-[80px] relative">
                            <div className="absolute w-[400px] h-[400px] -top-[180px] -left-[200px] -z-50 bg-gradient-radial"></div>
                            {props.bubbles}
                            <span className="look-caption text-[18px] sm:text-[32px] font-semibold tracking-wider">{props.caption}</span>
                            <br></br>
                            <div className="look-title">
                                <span className="text-white text-[22px] sm:text-[48px] mb-5 font-semibold tracking-wider">{props.title}</span>
                            </div>
                            <br></br>
                            <p className="text-content text-[14px] sm:text-[18px] mb-5 font-['Montserrat']">{props.description}</p>
                        </div>
                    </>
                }
            </div>
            <div className={props.direction?"col-span-12 p-5 sm:col-span-7":"col-span-12 p-5 sm:col-span-5 "}>
                {props.direction?
                    <>
                        <div className="mb-4"><Image src={props.logo} /></div>
                        <div className="pr-[10px] sm:pr-[80px]">
                            <div className="absolute w-[400px] h-[400px] -top-[50px] -right-[250px] -z-50 bg-gradient-red-radial"></div>
                            {props.bubbles}
                            <span className="look-caption text-[18px] sm:text-[32px] mb-5 font-semibold tracking-wider">{props.caption}</span>
                            <div className="look-title">
                                <span className="text-white text-[22px] sm:text-[48px] mb-5 font-semibold tracking-wider">{props.title}</span>
                            </div>
                            <br></br>
                            <p className="text-content text-[14px] sm:text-[18px] mb-5 font-['Montserrat']">{props.description}</p>
                        </div>
                    </>:
                    <div><img src={props.image} className="" style={{objectFit: "cover"}}></img></div>
                }
            </div>
        </div>
        <div className="grid grid-cols-12 grid sm:hidden mb-[50px]">
            <div className="col-span-12 text-center">
                <img src={props.image} className="" style={{objectFit: "cover"}}></img>
            </div>
            <div className="col-span-12 p-5">
                <>
                    <div className="mb-4"><Image src={props.logo} /></div>
                    <div className="pr-[10px] sm:pr-[80px]">
                        <span className="look-caption text-[18px] sm:text-[32px] mb-5 font-semibold tracking-wider">{props.caption}</span>
                        <p className="text-white text-[22px] sm:text-[48px] mb-5 font-semibold tracking-wider">{props.title}</p>
                        <p className="text-content text-[14px] sm:text-[18px] mb-5 font-['Montserrat']">{props.description}</p>
                    </div>
                </>
            </div>
        </div>
        </AnimationOnScroll>
    </>
  );
};
