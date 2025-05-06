// pages/_app.js
"use client";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";
import { ClipLoader } from "react-spinners";


export default function CustomChat({ chatState, setChatState }) {
    return (
        
        <div onClick={() => {
            if (chatState !== "loading") {
                if (chatState == "open") {
                    setChatState("close")
                } else {
                    setChatState("open")
                }
            }
        }}
            className="cursor-pointer absolute bottom-8 group text-center flex items-center justify-center rounded-full  text-3xl shadow-[0_0_10px_2px_rgba(0,0,0,1)] dark:shadow-[0_0_10px_2px_rgba(255,255,255,1)]  bg-primary w-16 h-16 p-2 text-white transition ease-in duration-200 ">
            {chatState == "loading" ?
                <div className="size-full flex justify-center items-center">
                    <ClipLoader
                        color={"white"}
                        aria-label="Loading Spinner"
                        size={40}
                        cssOverride={{borderWidth : "3px"}}  
                        data-testid="loader" />
                </div>
                : chatState == "open" ?
                    <IoClose className="w-12 group-hover:-rotate-12 transition-all h-12" /> :
                    <TfiHeadphoneAlt className="w-12 group-hover:-rotate-12 transition-all h-12" />}
            <span className="animate-ping   border-primary absolute inline-flex h-full w-full rounded-full border-4 opacity-50"></span>
        </div>
    );
}
