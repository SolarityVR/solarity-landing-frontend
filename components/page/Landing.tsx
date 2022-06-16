import Head from "next/head";
import { Advantage } from "../modules/Advantage";
import { Banner } from "../modules/Banner";
import { Concepts } from "../modules/Concepts";
import { DeepLook } from "../modules/DeepLook";
import { FunctionalMap } from "../modules/FunctionalMap";
import { VideoPlayer } from "../modules/VideoPlayer";
import { LoveSolarity } from "../modules/LoveSolarity";
import { Faq } from "../modules/Faq";
import { ContactUs } from "../modules/Contactus";
import { MultiPlatform } from "../modules/MultiPlatform";

export default function Landing() {
  return (
    <div className="py-2">
      <main className="max-w-[93rem] mx-auto flex-1 px-5 sm:px-11">
        <Banner />
        <Concepts />
        <FunctionalMap />
        <DeepLook />
        <VideoPlayer />
        <Advantage />
        <MultiPlatform />
        <LoveSolarity />
        <Faq />
        <ContactUs />
      </main>
    </div>
  );
}