import React from "react";
import Image from "next/image";

export interface AdvantageCardProps {
    image: any;
    title: any;
    description: string;
}

export const AdvantageCard = (props: AdvantageCardProps) => {
  return (
    <>
        <div>
            <div className="mb-5"><Image src={props.image}></Image></div>
            <p className="text-white text-[18px] sm:text-[30px] mb-5 font-semibold tracking-wider">{props.title}</p>
            <p className="text-content text-[14px] sm:text-[18px] mb-5">{props.description}</p>
        </div>
    </>
  );
};
