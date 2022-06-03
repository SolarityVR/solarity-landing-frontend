import React, { useState } from "react";
import Image from "next/image";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

import Logo from "../../assets/images/logo.png";

const Navbar = () => {
  const [menuToggle, setMenuToggle] = useState(false);

  return (
    //   navbar goes here
    <>
      <nav className="bg-black/10 ">
        <div className="max-w-[93rem] mx-auto h-24px px-11 py-4">
          <div className="flex justify-between">
            <div className="flex space-x-4">
              {/* logo */}
              <div>
                <a href="/" className="flex items-center py-3 px-2 text-white">
                  <Image src={Logo}></Image>
                  <span className="font-bold text-3xl px-2 tracking-widest uppercase">Solarity</span>
                </a>
              </div>
            </div>

            {/* secondary nav */}
            <div className="hidden md:flex items-center space-x-1">
              <a href="#" className="py-5 px-3.5 text-white hover:text-primary">
                Discord
              </a>
              <a href="#" className="py-5 px-3.5 text-white hover:text-primary">
                Medium
              </a>
              <a href="#" className="py-5 px-3.5 text-white hover:text-primary">
                Twitter
              </a>
            </div>

            {/* mobile menu */}
            <div className="md:hidden flex items-center">
              <button onClick={() => setMenuToggle(!menuToggle)}>
                {menuToggle ? (
                  <XIcon className="w-8 h-8 text-white text-xl" />
                ) : (
                  <MenuIcon className="w-8 h-8 text-white text-xl" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* mobile menu items */}
        <div className={`${!menuToggle ? "hidden" : ""} md:hidden absolute`}>
          <a href="#" className="py-5 px-4 text-white hover:text-primary block">
            Discord
          </a>
          <a href="#" className="py-5 px-4 text-white hover:text-primary block">
            Medium
          </a>
          <a href="#" className="py-5 px-4 text-white hover:text-primary block">
            Twitter
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
