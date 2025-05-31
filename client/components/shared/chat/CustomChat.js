// pages/_app.js
"use client";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { useEffect, useState } from "react";
import Spinner from "../Spinner";

export default function CustomChat({ chatState, setChatState }) {
      const [showPing, setShowPing] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => setShowPing(false), 1000); 
    return () => clearTimeout(timer);
  }, []);
  return (
    <div
      onClick={() => {
        if (chatState !== "loading") {
          if (chatState == "open") {
            setChatState("close");
          } else {
            setChatState("open");
          }
        }
      }}
      className="cursor-pointer absolute bottom-8 group text-center flex items-center justify-center rounded-full  text-3xl dark:bg-gray-900 bg-white w-18 h-18 p-[5px] text-white transition ease-in duration-200 "
    >
      <div className="bg-primary  rounded-full flex w-full h-full items-center justify-center">
         {chatState == "loading" ? (
         <Spinner />
        ) : chatState == "open" ? (
          <IoClose className="w-12  transition-all h-12" />
        ) : (
          <TfiHeadphoneAlt className="w-10  transition-all h-12" />
        )}
        {showPing && (
          <span className="animate-ping border-primary absolute inline-flex h-full w-full rounded-full border-4 opacity-50"></span>
        )}
     
      </div>
    </div>
  );
}
