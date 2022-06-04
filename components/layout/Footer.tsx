import React, {useState} from "react";
import Image from "next/image";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

import LogoGrey from "../../assets/images/logo-greyscale.png";
import Discord from "../../assets/images/discord.png";
import Medium from "../../assets/images/medium.png";
import Twitter from "../../assets/images/twitter.png";

export default function Footer() {
  return (
    <>
        <div className="footer h-[150px] sm:h-[200px] md:h-[320px]">
        </div>
        <div className="">
          <nav className="bg-black/10 ">
            <div className="max-w-[93rem] mx-auto h-24px px-2 sm:px-11 py-4">
            <div className="flex justify-between">
                <div className="flex space-x-4">
                {/* logo */}
                <div>
                    <a href="/" className="flex items-center py-3 px-2 text-white">
                    <Image src={LogoGrey}></Image>
                    <span className="font-bold text-[18px] sm:text-[20px] sm:text-3xl px-2 tracking-widest uppercase text-footer">Solarity</span>
                    </a>
                </div>
                </div>

                {/* secondary nav */}
                <div className="items-center space-x-1 pt-1 pb-1">
                <a href="#" className="inline-flex py-5 px-3.5 text-white hover:text-primary">
                    <Image src={Discord} width={32} height={25} />
                </a>
                <a href="#" className="py-5 px-3.5 text-white hover:text-primary">
                    <Image src={Medium} width={32} height={25} />
                </a>
                <a href="#" className="py-5 px-3.5 text-white hover:text-primary">
                    <Image src={Twitter} width={32} height={25} />
                </a>
                </div>
            </div>
            </div>
        </nav>
        </div>
    </>
  );
}
