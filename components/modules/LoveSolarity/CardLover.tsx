import React from "react";
import Image from "next/image";

export interface CardLoverProps {
    image: any;
    title: any;
    address: string;
    description: string;
}

export const CardLover = (props: CardLoverProps) => {
  return (
    <>
        <div className="rounded-2xl bg-gradient-linear p-[24px] min-h-[278px]">
            <div className="">
                <div className="inline-block">
                    <div className="mb-5"><Image src={props.image} className="rounded"></Image></div>
                </div>
                <div className="align-text-bottom inline-block ml-4 mt-1">
                    <p className="text-white text-[18px] sm:text-[20px] mb-2 font-semibold tracking-wider">{props.title}</p>
                    <p className="text-white text-[14px] sm:text-[16px] mb-2 tracking-wider">{props.address}</p>
                </div>
            </div>
            <p className="text-content text-[14px] sm:text-[18px] leading-8">{props.description}</p>
        </div>
    </>
  );
};
