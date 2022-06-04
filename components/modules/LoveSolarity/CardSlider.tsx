import React, {useState, useEffect} from "react";
import Image from "next/image";
import { Users } from "../../../data/users";

export const CardSlider = () => {
  const [curId, setCurId] = useState(0);
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
  return (
    <>
        <div className="rounded-2xl bg-gradient-linear p-[24px] min-h-[308px] relative">
            {Users.map((user, index) => 
                {
                    return (<div className={(index != curId?"slider-inactive":"slider-active")}>
                        <div className="grid grid-cols-3">
                            <div>
                                <div className="mb-5"><Image src={user.image} className="rounded"></Image></div>
                            </div>
                            <div className="col-span-2">
                                <p className="text-white text-[18px] sm:text-[20px] mb-2 font-semibold tracking-wider">{user.title}</p>
                                <p className="text-white text-[14px] sm:text-[16px] mb-2 tracking-wider">{user.address}</p>
                            </div>
                        </div>
                        <p className="text-content text-[14px] sm:text-[18px] leading-8">{user.description}</p>
                    </div>)
                }
            )}
            
            <div className="grid grid-cols-3 absolute bottom-4 pr-[45px] w-[100%]">
                <div className="relative text-left hover:ml-1 hover:cursor-pointer" onClick={prevUser}>
                    <a className="my-7 left-arrow"></a>
                </div>
                <div>
                    <div className="my-5 text-center">
                        <a className={"slider-dot"+(curId==0?"-active":"")}></a>
                        <a className={"slider-dot"+(curId==1?"-active":"")}></a>
                        <a className={"slider-dot"+(curId==2?"-active":"")}></a>
                    </div>
                </div>
                <div className="relative text-left hover:mr-1 hover:cursor-pointer" onClick={nextUser}>
                    <div className="my-7 right-arrow"></div>
                </div>
            </div>
        </div>
    </>
  );
};
