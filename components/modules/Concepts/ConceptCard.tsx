import React from "react";
import Image from "next/image";

export interface ConceptCardProps {
    image: any;
    title: string;
    description: string;
}

export const ConceptCard = (props: ConceptCardProps) => {
  return (
    <>
        <div>
            <Image src={props.image} width={80} height={80} className="!p-[19px] mb-5 bg-gradient-radial"></Image>
            <p className="pl-[15px] text-white text-[18px] sm:text-[30px] mb-5 font-semibold tracking-wider">{props.title}</p>
            <p className="pl-[15px] text-content text-[14px] sm:text-[18px] mb-5">{props.description}</p>
        </div>
    </>
  );
};
