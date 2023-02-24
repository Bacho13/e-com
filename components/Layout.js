import React from "react";
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  const navBarStyle = {
    position: "-webkit-sticky",
    position: "sticky",
    top: "0",
    zIndex: "+10",
  };

  return (
    <>
      <Navbar styles={navBarStyle} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
