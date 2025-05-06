import React from "react";

import Favorites from "../ThemeToggle/ThemeToggle";
import Cart from "../cart/Cart";
import Search from "../searchTrio/Search";
import Auth from "../auth/Auth";

function ToolBar() {


  return (
    <>
      <div className="px-6 sm:px-25 z-[9999] fixed w-full bottom-4">
        <div className=" md:hidden  p-2  w-full  bg-white dark:bg-gray-900 shadow-3xl text-gray-500 rounded-2xl cursor-pointer">
          <div className=" p-2 rounded-2xl flex items-center justify-between">
            <Search forToolbar={true} />
            <Cart forToolbar={true} />
            <Favorites />
            <Auth />
          </div>
        </div>
      </div>
    </>
  );
}

export default ToolBar;
