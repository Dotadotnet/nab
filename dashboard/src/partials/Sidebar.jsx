import React, { useState, useEffect, useRef } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SidebarItem from "./SidebarItem";
import Post from "@/components/icons/Post";
import Blog from "@/components/icons/Blog";
import Gallery from "@/components/icons/Gallery";
import Expand from "@/components/icons/Expand";
import Dashboard from "@/components/icons/Dashboard";
import User from "@/components/icons/User";
import Category from "@/components/icons/Category";
import Tag from "@/components/icons/Tag";
import Setting from "@/components/icons/Setting";
import News from "@/components/icons/News";
import logo from "/logo.png";
import Social from "@/components/icons/Social";
import Country from "@/components/icons/Country";
import PSale from "@/components/icons/PSale";
import Product from "@/components/icons/Products";

function Sidebar({ sidebarOpen, setSidebarOpen, variant = "default" }) {
  const location = useLocation();
  const { pathname } = location;

  const trigger = useRef(null);
  const sidebar = useRef(null);

  const storedSidebarExpanded = localStorage.getItem("sidebar-expanded");
  const [sidebarExpanded, setSidebarExpanded] = useState(
    storedSidebarExpanded === null ? false : storedSidebarExpanded === "true"
  );

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener("click", clickHandler);
    return () => document.removeEventListener("click", clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener("keydown", keyHandler);
    return () => document.removeEventListener("keydown", keyHandler);
  });

  useEffect(() => {
    localStorage.setItem("sidebar-expanded", sidebarExpanded);
    if (sidebarExpanded) {
      document.querySelector("body").classList.add("sidebar-expanded");
    } else {
      document.querySelector("body").classList.remove("sidebar-expanded");
    }
  }, [sidebarExpanded]);

  const sidebarItems = [
    {
      title: "داشبورد",
      icon: Dashboard,
      path: "/",
      subItems: [
        { title: "آنالیز", path: "/" },
        { title: "پروفایل من", path: "/my-profile" }
      ]
    },
    { title: "کاربران", icon: User, path: "/users" },
    { title: " دسته بندی", icon: Category, path: "/categories" },
    { title: "َشبکه های اجتماعی", icon: Social, path: "/socialLinks" },
    { title: "تگها", icon: Tag, path: "/tags" },
    { title: "پست ها ", icon: Post, path: "/posts" },
    { title: "محصولات", icon: Product, path: "/products" },
    { title: "مجله", icon: Blog, path: "/blogs" },
    { title: "گالری", icon: Gallery, path: "/galleries" },
    { title: "تنظیمات", icon: Setting, path: "/settings" },
    {
      title: "اخبار",
      icon: News,
      subItems: [
        { title: "لیست اخبار", icon: News, path: "/news" },
        { title: "کشور خبر", icon: Country, path: "/news-countries" },
        { title: "نوع خبر", icon: PSale, path: "/news-types" }
      ]
    }
  ];

  return (
    <div className="min-w-fit">
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-30 z-40 lg:hidden lg:z-auto transition-opacity duration-200 ${
          sidebarOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        aria-hidden="true"
      ></div>

      {/* Sidebar */}
      <div
        id="sidebar"
        ref={sidebar}
        className={`flex lg:!flex flex-col absolute z-40 right-0 top-0 lg:static lg:right-auto lg:top-auto lg:translate-x-0 h-auto  overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-20 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-white dark:bg-gray-800 p-3 transition-all duration-200 ease-in-out ${
          sidebarOpen ? "translate-x-0" : "translate-x-64"
        }`}
      >
        {/* Sidebar header */}
        <div className="flex md:justify-center justify-between mb-10 pr-3 sm:px-2">
          {/* Close button */}
          <NavLink end to="/" className=" flex justify-center">
            <img
              src={logo}
              alt="logo"
              width={141}
              height={40}
              className="max-w-full cursor-pointer"
            />{" "}
          </NavLink>
          <button
            ref={trigger}
            className="lg:hidden text-gray-500 hover:text-gray-400"
            onClick={() => setSidebarOpen(!sidebarOpen)}
            aria-controls="sidebar"
            aria-expanded={sidebarOpen}
          >
            <span className="sr-only">Close sidebar</span>
            <svg
              className="w-6 h-6 fill-current"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M10.7 18.7l1.4-1.4L7.8 13H20v-2H7.8l4.3-4.3-1.4-1.4L4 12z" />
            </svg>
          </button>
          {/* Logo */}
        </div>

        {/* Links */}
        <div className="space-y-8">
          {/* Pages group */}
          <div>
            <h3 className="text-xs uppercase text-gray-400 dark:text-gray-500 font-semibold pl-3">
              <span
                className="hidden lg:block lg:sidebar-expanded:hidden 2xl:hidden text-center w-6"
                aria-hidden="true"
              >
                •••
              </span>
              <span className="lg:hidden lg:sidebar-expanded:block 2xl:block">
                صفحات
              </span>
            </h3>
            <ul className="mt-3">
              {sidebarItems.map((item, index) => (
                <SidebarItem
                  key={index}
                  item={item}
                  sidebarExpanded={sidebarExpanded}
                />
              ))}
            </ul>{" "}
          </div>
        </div>

        {/* Expand / collapse button */}
        <div className="pt-3 hidden lg:inline-flex 2xl:hidden justify-end mt-auto">
          <div className="w-12 pl-4 pr-3 py-2">
            <button
              className="text-gray-400 hover:text-gray-500 dark:text-gray-500 dark:hover:text-gray-400"
              onClick={() => setSidebarExpanded(!sidebarExpanded)}
            >
              <span className="sr-only">Expand / collapse sidebar</span>
              <Expand />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
