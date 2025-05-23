"use client"
import React, { useState } from "react";
import SearchFilter from "./SearchFilter";
import MyCart from "./MyCart";
import Auth from "./Auth";
import CustomChat from "../chat/CustomChat";
import Chat from "../chat/Chat";
import { Crisp } from "crisp-sdk-web";

function Navigation() {
  const [chatState, setChatState] = useState("loading");


  if (chatState == "close") {
    Crisp.chat.close();
  } else if (chatState == "open") {
    Crisp.chat.open()
  }

if (typeof document !== 'undefined') {
  if (document.querySelector("span.cc-157aw.cc-1kgzy") && chatState == "loading") {
    const chatBox = document.querySelector("div.cc-1no03");
    if (chatBox && chatBox.dataset.visible === "true") {
      setChatState("open");
    } else {
      setChatState("close");
    }
  }
}

  return (
    <>
      <Chat chatState={chatState} setChatState={setChatState} />
      <div className="px-6 sm:px-25 z-50 fixed w-full bottom-4">
        <div className=" md:hidden  p-2  w-full  bg-white dark:bg-gray-900 shadow-3xl text-gray-500 rounded-2xl cursor-pointer">
          <div className=" p-2 rounded-2xl flex items-center justify-between">
            <MyCart />

            <SearchFilter />

            <div className="flex flex-col items-center  hover:text-blue-400 ">
              <CustomChat chatState={chatState} setChatState={setChatState} />
            </div>
            <div className="flex flex-col items-center transition ease-in duration-200 hover:text-blue-400 ">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                ></path>
              </svg>
            </div>
            <div className="relative">
              <Auth />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navigation;
