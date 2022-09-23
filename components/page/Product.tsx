import Head from "next/head";
import { Feedback } from "../modules/Feedback";
import { ProductBanner } from "../modules/ProductBanner";
import { ProductDeepLook } from "../modules/ProductDeepLook";
import { ProductVideoPlayer } from "../modules/ProductDemoVid";

export default function Product() {
  return (
    <div className="py-2">
      <main className="max-w-[93rem] mx-auto flex-1 px-5 sm:px-11">
        <ProductBanner />
        <ProductDeepLook />
        <ProductVideoPlayer />
        <Feedback />
      </main>
    </div>
  );
}