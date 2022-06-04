import React from "react";
import Image from "next/image";

import FunctionMap from "../../../assets/images/map-desktop.png";
import FunctionMapMobile from "../../../assets/images/map-phone.png";

export const FunctionalMap = () => {
  return (
    <>
        <div className="relative hidden sm:block text-center">
            <Image src={FunctionMap}></Image>
        </div>
        <div className="relative block sm:hidden text-center">
            <Image src={FunctionMapMobile}></Image>
        </div>
    </>
  );
};
