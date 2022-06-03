import Head from "next/head";
import { Banner } from "../modules/Banner";

export default function Landing() {
  return (
    <div className="py-2">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" max-w-[93rem] mx-auto flex-1 px-11">
        <Banner />
      </main>
    </div>
  );
}