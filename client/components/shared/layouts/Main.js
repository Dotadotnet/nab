import React from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import Navigation from "../header/Navigation";
import Chat from "../chat/Chat";

const Main = ({ children }) => {
  return (
    <>
      <Header />
      <div className="flex flex-col gap-y-7">{children}</div>
      <Footer />
      <Navigation />
    </>
  );
};

export default Main;
