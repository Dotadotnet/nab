"use client"
import { motion } from "framer-motion";
import Instagram from "./Instagram";
import Telegram from "./Telegram";
import WhatsApp from "./WhatsApp";
import Image from "next/image";
import { FaPhone, FaMapMarkerAlt } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { MdOutlineMailOutline } from "react-icons/md";

const fadeIn = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const ContactForm = () => {
  const c = useTranslations("ContactUs")
  const a = useTranslations("Apps") ;
  return (
    <section
      className="pt-24 mt-12 rtl"
      initial="hidden"
      animate="visible"
      viewport={{ once: false }}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 grid-cols-1">
          <div className="lg:mb-0  mb-10 h-fit">
            <div className="group w-full h-full">
              <div className="h-full relative">
                <motion.div
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  className="absolute bottom-1/4 md:left-0 md:translate-x-0 translate-x-72 rtl:-right-8 left-24 dark:bg-gray-800 bg-white shadow-xl lg:p-6 p-4 rounded-2xl w-80 rtl"
                >
                  <div className="space-y-4" style={{ direction: 'ltr' }}>
                    {/* شماره‌های تماس */}
                    <a href="tel:+989999935106" className="flex items-center space-x-3">
                      <FaPhone className="dark:text-white text-gray-700" size={20} />
                      <h5 className="text-black dark:text-white text-base font-normal">09999935106</h5>
                    </a>
                    <a href="tel:+989917240849" className="flex items-center space-x-3">
                      <FaPhone className="text-gray-700 dark:text-white" size={20} />
                      <h5 className="text-black dark:text-white text-base font-normal">09917240849</h5>
                    </a>


                    <div className="border-t border-gray-100 pt-4 space-y-4" style={{ direction: 'ltr' }}>
                      <a href="mailto: info@noghlenab.com" className="flex items-center space-x-3">
                        <MdOutlineMailOutline className="dark:text-white text-gray-700" size={20} />
                        <h5 className="text-black dark:text-white text-base font-normal">info@noghlenab.com</h5>
                      </a>
                    </div>

                    <div className="border-t border-gray-100 pt-4 space-y-4" style={{ direction: 'ltr' }}>
                      <div className="flex items-center space-x-3">
                        <FaMapMarkerAlt className="text-gray-700 dark:text-white" size={40} />
                        <h5 style={{ lineHeight: "1.6em" }} className="text-black  dark:text-white text-base font-normal">{c("Address")}</h5>
                      </div>
                    </div>
                  </div>



                  <div className="flex items-center justify-center mt-4 border-t border-gray-100 pt-6">
                    <a href="" className="mr-6">
                      <Instagram />
                    </a>
                    <a href="" className="mr-6">
                      <Telegram />
                    </a>
                    <a href="" className="mr-6">
                      <WhatsApp />
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  viewport={{ once: false, amount: 0.5 }}
                  variants={{
                    initial: { opacity: 0, x: 100 },
                    animate: { opacity: 1, x: 0 },
                  }}
                  className=" flex items-center justify-center"
                  initial="initial"
                  animate="animate"
                  transition={{ duration: 0.5 }}
                >
                  <Image
                    src="/image/login_image_1.jpg"
                    alt="📞 تماس با ما"
                    height={600}
                    width={400}
                    className="md:w-2/3 md:h-1/2 w-full h-full lg:rounded-r-2xl rounded-2xl object-cover"
                  />
                </motion.div>
              </div>
            </div>

          </div>


          <div className="md:pt-24">
            <h2 className="text-xl my-4  font-bold sm:text-2xl">
              {c("PhoneNumbers")} :
            </h2>
            <div className="flex md:flex-row flex-col justify-around items-center">
              <a href="tel:+989999935106">
                <div
                  className="flex m-4 border-2 text border-primary-200 dark:border-black rounded-lg text-2xl justify-around text w-72 md:w-80 p-4 bg-slate-300  dark:bg-gray-700  items-center">
                  09999935106
                  <FaPhone className="rtl:-scale-100 rtl:-rotate-[80deg] text-2xl" />
                </div>
              </a>
              <a className="mt-3 md:mt-0" href="tel:+989917240849">
                <div
                  className="flex border-2 text border-primary-200 w-72  dark:border-black rounded-lg text-2xl justify-around text md:w-80 p-4 bg-slate-300  dark:bg-gray-700  items-center">
                  09917240849
                  <FaPhone className="rtl:-scale-100 rtl:-rotate-[80deg] text-2xl" />
                </div>
              </a>
            </div>

            <h2 className="text-xl  font-bold my-4 sm:text-2xl">
              {c("AcceptYourOrdersInMedias")} :
            </h2>
            <div className="flex md:flex-row flex-col justify-around items-center">
              <a href="" className="m-4">
                <div style={{ backgroundColor: "rgb(238, 125, 33)" }}
                  className="flex text-white  rounded-lg text-2xl sm:text-3xl justify-around text w-72 md:w-80  items-center">
                  <Image src="/app/eitaa.jpg" width={200} height={200} className="size-16 sm:size-24" alt="" />
                  {a("eitaa")}
                </div>
              </a>
              <a className="m-4 " href="">
                <div style={{ backgroundColor: "rgb(41, 168, 235)" }}
                  className="flex text-white  rounded-lg text-2xl sm:text-3xl justify-around text w-72 md:w-80  items-center">
                  <Image src="/app/telegram.jpg" width={200} height={200} className="size-16 sm:size-24" alt="" />
                  {a("telegram")}
                </div>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactForm;
