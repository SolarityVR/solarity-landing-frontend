import React from "react";
import Image from "next/image";

import { AnimationOnScroll } from 'react-animation-on-scroll';

export interface FunctionCardProps {
    image: any;
    title: any;
    padding: string;
}

export const FunctionCard = (props: FunctionCardProps) => {
  return (
    <>
        {/* <AnimationOnScroll animateIn="animate__fade"> */}
        <div className={"function-card block" + props.padding}>
            <Image src={props.image} ></Image>
        </div>
        <span className="function-card-caption">{props.title}</span>
        {/* </AnimationOnScroll> */}
    </>
  );
};
