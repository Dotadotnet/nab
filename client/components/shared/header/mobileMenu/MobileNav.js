import { motion } from "framer-motion";
import Link from "next/link";
import Shop from "@/components/icons/Shop";
import Home from "@/components/icons/Home";
import User from "@/components/icons/User";
import Category from "@/components/icons/Category";
import Rules from "@/components/icons/Rules";
import About from "@/components/icons/About";
import Phone from "@/components/icons/Phone";
import { useLocale, useTranslations } from "next-intl";
import language from "@/app/language";

const MobileNav = ({ isOpen, setIsOpen }) => {
  const t = useTranslations("Tools");
  const n = useTranslations("Navbar");
 const lang = useLocale();
  const class_lang = new language(lang);
  const move_side = class_lang.getInfo().dir == "ltr" ? -200 : 200;

  return (
    <motion.div
      initial={{ opacity: 0, x: move_side }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: move_side }}
      className={"fixed  z-50  inset-0 flex-col backdrop-blur-sm items-start justify-start w-screen h-screen overflow-y-hidden" + ' ' + (isOpen ? 'flex' : "hidden")}

    >
      <section className="relative w-full h-full">
        <div
          className="relative z-[999999] w-full h-full"
          onClick={(e) => {
            setIsOpen(false)
            e.stopPropagation()
          }}
        >
          {isOpen ?

            <div className="flex absolute overflow-y-auto overflow-x-hidden w-2/3 h-2/3 items-center rounded-lg bg-white justify-start dark:bg-gray-900 gap-10 flex-col top-1/2 left-5  rtl:right-5 transform py-8 -translate-y-1/2">
              {[{ href: "/menu", icon: <Home className={"text-primary"} />, text: n("MainPage") },
              { href: "/menu", icon: <Category className={"text-primary"} />, text: n("CategoriesServices") },
              { href: "/store", icon: <Shop />, text: n("Store") },
              { href: "/services", icon: <User className={"text-primary"} />, text: t("AccountUser") },
              { href: "/terms", icon: <Rules />, text: n("Rules") },
              { href: "/about", icon: <About />, text: n("AboutUs") },
              { href: "/contact", icon: <Phone color={"#ed1945"} />, text: n("CallUs") },].map((item, index) => (
                <motion.div
                  key={index}
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.1 }}
                  initial={{ opacity: 0, x: move_side }}
                  animate={{ opacity: 1, x: 0, transition: { delay: index * 0.1 } }}
                  exit={{ opacity: 0, x: move_side }}
                  className="w-full"
                >
                  <Link
                    onClick={() => setIsOpen(false)} // Close the menu when a link is clicked
                    href={item.href}
                    className="flex items-center text-base text-textColor cursor-pointer hover:text-headingColor w-full px-5 gap-3 duration-100 transition-all ease-in-out"
                  >
                    {item.icon}
                    {item.text}
                  </Link>
                </motion.div>
              ))}
              
            </div>
            :
            ''
          }
        </div>
      </section>
    </motion.div>
  );
};

export default MobileNav;
