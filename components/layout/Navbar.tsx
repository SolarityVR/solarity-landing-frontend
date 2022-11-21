import React, { useState } from "react";
import Image from "next/image";

import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Button from "../common/Button";

import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    //   navbar goes here
    <>
      <nav className="bg-black/10 ">
        <div className="max-w-[93rem] mx-auto h-24px px-3 sm:px-11 py-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <a href="/" className="flex items-center py-3 px-2 text-white">
                  <Image src={Logo}></Image>
                  <span className="logo-title text-[20px] sm:text-[25px] px-2 py-2 tracking-widest uppercase">Solarity</span>
                </a>
              </div>
            </div>

            {/* secondary nav */}
            <div className="hidden lg:flex items-center space-x-1">
              <a href="#" className="text-[18px] text-[#929298] py-5 px-3.5 text-white hover:text-primary" rel="noreferrer">
                Features
              </a>
              <a href="https://solarity-frontend.vercel.app/iframe/joinModal/plaza" className="text-[18px] text-[#929298] py-5 px-3.5 text-white hover:text-primary" target="_blank" rel="noreferrer">
                Demo
              </a>
              <a href="https://solarityvr.medium.com/" className="text-[18px] text-[#929298] py-5 px-3.5 text-white hover:text-primary" target="_blank" rel="noreferrer">
                Medium
              </a>
              <a href="https://chrome.google.com/webstore/detail/twitter-verse/olmkofkehgfecicmijdhohcgglpnbnnh" target="_blank">
              <div className="px-2"><Button caption="Get extension" icon="" bordered={false} size="sm" onClick={null} /></div>
              </a>
            </div>

            {/* mobile menu */}
            <div className="lg:hidden flex items-center">
              <button onClick={() => setMenuToggle(!menuToggle)}>
                {menuToggle ? (
                  <XIcon className="w-6 h-6 text-white text-[12px]" />
                ) : (
                  <MenuIcon className="w-6 h-6 text-white text-[12px]" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu items */}
        <div className={`${!menuToggle ? "hidden" : ""} lg:hidden absolute bg-black/80 w-[100%] z-10`}>
          <a href="#" className="text-[18px] py-5 px-6 text-white hover:text-primary block">
            Features
          </a>
          <a href="#" className="text-[18px] py-5 px-6 text-white hover:text-primary block">
            Demo
          </a>
          <a href="#" className="text-[18px] py-5 px-6 text-white hover:text-primary block">
            Testimonials
          </a>
          <div className="py-4 px-6"><Button caption="Get extension" icon="" bordered={false} size="sm" onClick={null} /></div>
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
