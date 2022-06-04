import React from "react";
import NavBar from "./Navbar";
import Footer from "./Footer";

type Props = {
  children: React.ReactNode;
};

export default function Layout(props: Props) {
  return (
    <div className="p-0 mobile-galaxy">
      <NavBar />
      {props.children}
      <Footer />
    </div>
  );
}
