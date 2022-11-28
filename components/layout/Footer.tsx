import React, {useState} from "react";
import Image from "next/image";

import { MenuIcon, XIcon } from "@heroicons/react/outline";

import LogoGrey from "../../assets/images/logo.png";
import Discord from "../../assets/images/discord.png";
import Medium from "../../assets/images/medium.png";
import Twitter from "../../assets/images/twitter.png";

export default function Footer() {
  return (
    <>
        <footer className="p-6 sm:px-14 dark:bg-gray-900">
            <div className="md:flex md:justify-between">
                <div className="mb-6 md:mb-0">
                    <a href="#" className="flex items-center">
                        <Image src={LogoGrey}></Image>
                        <span className="self-center text-[26px] whitespace-nowrap text-white tracking-wide">&nbsp;SGN</span>
                    </a>
                    <p className="mt-8 text-white text-[18px] mr-10">Join our mailing list for more updates</p>
                    
                    <form className="mt-5">   
                        <label className="mb-2 text-[18px] font-medium text-gray-900 sr-only dark:text-gray-300">Your Email</label>
                        <div className="relative">
                            <input type="search" id="search" className="block h-12 px-2 w-full placeholder-primary text-[18px] outline-none text-primary bg-transparent rounded-lg border border-3 border-primary text-primary" placeholder="Email" ></input>
                            <button type="submit" className="text-white absolute h-12 right-0 bottom-0 bg-primary hover:bg-darkprimary font-medium rounded-lg text-[18px] px-4 py-2">Submit</button>
                        </div>
                    </form>

                </div>
                <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 className="mb-6 text-[19px] text-white font-semibold font-['Montserrat']">Company</h2>
                        <ul className="text-gray-300">
                            <li className="mb-3">
                                <a href="#" className="hover:underline font-['Montserrat'] text-[16px]">About us</a>
                            </li>
                            <li className="mb-3">
                                <a href="#" className="hover:underline font-['Montserrat'] text-[16px]">Team</a>
                            </li>
                            <li className="mb-3">
                                <a href="#" className="hover:underline font-['Montserrat'] text-[16px]">Jobs</a>
                            </li>
                            <li className="mb-3">
                                <a href="#" className="hover:underline font-['Montserrat'] text-[16px]">Investors</a>
                            </li>
                            <li className="mb-3">
                                <a href="#" className="hover:underline font-['Montserrat'] text-[16px]">Contact us</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-[19px] text-white font-semibold font-['Montserrat']">Learn</h2>
                        <ul className="text-gray-300">
                            <li className="mb-3">
                                <a href="#" className="hover:underline font-['Montserrat'] text-[16px]">FAQ</a>
                            </li>
                            <li className="mb-3">
                                <a href="#" className="hover:underline font-['Montserrat'] text-[16px]">Blog</a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h2 className="mb-6 text-[19px] text-white font-semibold font-['Montserrat']">Connect</h2>
                        <ul className="text-gray-300">
                            <li className="mb-3">
                                <a href="#" className="text-white">
                                    <svg className="w-5 h-5 mt-2 float-left" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
                                </a><span className="hover:underline font-['Montserrat'] text-[16px]">&nbsp;Twitter</span>
                            </li>
                            <li className="mb-3">
                                <a href="#" className="text-white">
                                    <svg className="w-6 h-6 mt-2 float-left" fill="currentColor" viewBox="0 0 22 22" aria-hidden="true"><path d="M13.545 2.907a13.227 11.227 0 0 0-3.257-1.011.05.05 0 0 0-.052.025c-.141.25-.297.577-.406.833a12.19 12.19 0 0 0-3.658 0 8.258 8.258 0 0 0-.412-.833.051.051 0 0 0-.052-.025c-1.125.194-2.22.534-3.257 1.011a.041.041 0 0 0-.021.018C.356 6.024-.213 9.047.066 12.032c.001.014.01.028.021.037a13.276 13.276 0 0 0 3.995 2.02.05.05 0 0 0 .056-.019c.308-.42.582-.863.818-1.329a.05.05 0 0 0-.01-.059.051.051 0 0 0-.018-.011 8.875 8.875 0 0 1-1.248-.595.05.05 0 0 1-.02-.066.051.051 0 0 1 .015-.019c.084-.063.168-.129.248-.195a.05.05 0 0 1 .051-.007c2.619 1.196 5.454 1.196 8.041 0a.052.052 0 0 1 .053.007c.08.066.164.132.248.195a.051.051 0 0 1-.004.085 8.254 8.254 0 0 1-1.249.594.05.05 0 0 0-.03.03.052.052 0 0 0 .003.041c.24.465.515.909.817 1.329a.05.05 0 0 0 .056.019 13.235 13.235 0 0 0 4.001-2.02.049.049 0 0 0 .021-.037c.334-3.451-.559-6.449-2.366-9.106a.034.034 0 0 0-.02-.019Zm-8.198 7.307c-.789 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.45.73 1.438 1.613 0 .888-.637 1.612-1.438 1.612Zm5.316 0c-.788 0-1.438-.724-1.438-1.612 0-.889.637-1.613 1.438-1.613.807 0 1.451.73 1.438 1.613 0 .888-.631 1.612-1.438 1.612Z" /></svg>
                                </a><span className="hover:underline font-['Montserrat'] text-[16px]">Discord</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="flex items-center justify-center mt-5">
                <span className="text-[15px] text-gray-400 text-center">© 2022 <a href="#" className="hover:underline">SGN</a>. All Rights Reserved.
                </span>
            </div>
        </footer>
    </>
  );
}


