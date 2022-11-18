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
        
    </>
  );
};
