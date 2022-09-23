import React, {useState,useEffect} from "react";
import Image from "next/image";

import { CardLover } from "./CardLover";
import { CardSlider } from "./CardSlider";
import User1 from "../../../assets/images/user11.png";
import User2 from "../../../assets/images/user22.png";
import User3 from "../../../assets/images/user33.png";
import QuoteImage from "../../../assets/images/quote.png";

import { Users } from "../../../data/users";

import { AnimationOnScroll } from 'react-animation-on-scroll';

export const Feedback = () => {
    const [curId, setCurId] = useState(1);
    const marginRate = ["ml-[25%]", "-ml-[21%]", "-ml-[67%]"];
    const prevUser = () => {
        if(curId > 0){
            setCurId(curId - 1)
        }
    }
    const nextUser = () => {
        if(Users.length-1 > curId){
            setCurId(curId + 1)
        }
    }
    useEffect(() => {
        // updateTokens();
          const interval = setInterval(() => {
            setCurId(curId => (curId + 1) %3);
          }, 8000);
          
          return () => clearInterval(interval); // This represents the unmount function, in which you need to clear your interval to prevent memory leaks.
        
    }, []);
  return (
    <>
        <div className="my-[60px] sm:my-[100px] relative">
            <div className="my-5 relative">
                <div className="absolute w-[400px] h-[400px] -top-[120px] -right-[10px] sm:-right-[100px] -z-50 bg-light-gradient-radial"></div>
                <div className="absolute w-[400px] h-[400px] -top-[120px] -right-[250px] -z-50 bg-gradient-red-radial"></div>
                
                <div className="text-center flex justify-center items-center">
                    <Image src={QuoteImage} objectFit={"contain"} width="125px" className="-z-10"></Image>
                    <span className="text-white text-center text-[26px] sm:text-[54px] font-semibold tracking-wider leading-[3.7rem] look-title -ml-[30px]">Real stories from real customers</span>
                </div>
                <div className="absolute w-[19px] h-[19px] bottom-[20px] right-[0px] -z-50 bg-gradient-small-radial1 rounded-full"></div>
                <div className="absolute w-[11px] h-[11px] bottom-[0px] right-[30px] -z-50 bg-gradient-small-radial2 rounded-full"></div>
            </div>
            <AnimationOnScroll animateOnce={true} animateIn="animate__fade">
                <div className="my-15 mt-[70px] grid grid-cols-3 lg:hidden">
                    <div className="col-span-3 lg:hidden">
                        <CardSlider />
                    </div>
                </div>
                <div className={"my-15 mt-[70px] hidden lg:grid lg:grid-cols-3 w-[140%] " +marginRate[curId]}>
                    {Users.map((user, index) => {
                        return(<div className="hidden lg:block lg:col-span-1 pl-[30px]" key={index}>
                            <CardLover image={user.image} title={user.title} address={user.address} description={user.description} />
                        </div>) 
                    })}
                    
                </div>
                <div className="col-span-3 text-center hidden lg:grid">
                    <div>
                        <div className="my-5 text-center">
                            <a className={"slider-dot"+(curId==0?"-active":"")} onClick={() => setCurId(0)}></a>
                            <a className={"slider-dot"+(curId==1?"-active":"")} onClick={() => setCurId(1)}></a>
                            <a className={"slider-dot"+(curId==2?"-active":"")} onClick={() => setCurId(2)}></a>
                        </div>
                    </div>
                </div>
            </AnimationOnScroll>
        </div>
    </>
  );
};
