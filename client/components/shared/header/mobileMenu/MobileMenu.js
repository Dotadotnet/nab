import React, { useState } from "react";
import { motion } from "framer-motion";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { Link } from "@/i18n/navigation";
import ThemeToggle from "../../ThemeToggle/ThemeToggle";
import LanguageSwitcher from "../../languageSwitch/page";
import { IoClose } from "react-icons/io5";

const MobileMenu = ({ isOpen, setIsOpen }) => {

  return (
    <div className="relative">
      <motion.div
        className="flex md:hidden w-full p-0 gap-0 items-center justify-between"
        initial={{ opacity: 0, x: 200 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 200 }}
      >
          <div className="flex items-center justify-between">
            <motion.div
              whileTap={{ scale: 0.9 }}
              className="flex items-center justify-center cursor-pointer "
              onClick={() => setIsOpen(!isOpen)}
            >
              { 
                isOpen ? <IoClose className="text-headingColor dark:text-gray-100 text-4xl" /> : <HiOutlineMenuAlt2 className="text- -100 (condition) {
                  
                } text-4xl" />
              }
            </motion.div>
            <Link href={"/"}>
              <motion.div
                whileHover={{ scale: 1.1 }}
                className="flex items-center gap-2 cursor-pointer"
              />
            </Link>
          </div>
          <span className="mx-2"></span>
          <ThemeToggle />
          <span className="mx-1"></span>
          <LanguageSwitcher />

      </motion.div>
    </div>
  );
};

export default MobileMenu;
