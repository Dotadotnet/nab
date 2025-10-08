"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Container from "@/components/shared/container/Container";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaHeartbeat, FaShieldAlt, FaStar, FaUsers } from "react-icons/fa";
import Image from "next/image";

const ContactHero = ({ locale }) => {
  const t = useTranslations("ContactUs");

  const floatingElements = [
    { x: 10, y: 10, delay: 0 },
    { x: 85, y: 20, delay: 0.5 },
    { x: 5, y: 70, delay: 1 },
    { x: 90, y: 80, delay: 1.5 },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-orange-50 to-red-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-amber-400/20 to-orange-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-gradient-to-br from-red-400/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-gradient-to-br from-yellow-400/10 to-orange-400/10 rounded-full blur-3xl animate-pulse delay-500"></div>
        
        {/* Floating Food Icons */}
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute"
            style={{ left: `${element.x}%`, top: `${element.y}%` }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0.3, 0.7, 0.3], 
              scale: [1, 1.2, 1],
              y: [-10, 10, -10]
            }}
            transition={{ 
              duration: 4, 
              delay: element.delay, 
              repeat: Infinity,
              repeatType: "reverse"
            }}
          >
            <div className="text-4xl">
              {index === 0 && '🥜'}
              {index === 1 && '🍯'}
              {index === 2 && '🧁'}
              {index === 3 && '🌰'}
            </div>
          </motion.div>
        ))}
      </div>
      
      <Container>
        <div className="relative z-10 grid lg:grid-cols-2 gap-16 items-center min-h-screen py-20">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-3 bg-gradient-to-r from-amber-500 to-orange-500 text-white px-6 py-3 rounded-full text-sm font-bold shadow-lg"
            >
              <FaHeartbeat className="animate-pulse" />
              {t("pageTitle")} • نقل و حلوای ناب
            </motion.div>
            
            {/* Main Heading */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="space-y-6"
            >
              <h1 className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white leading-tight">
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">با ما</span>
                <br />
                <span className="text-gray-900 dark:text-white">در ارتباط</span>
                <br />
                <span className="bg-gradient-to-r from-red-500 to-pink-500 bg-clip-text text-transparent">باشید</span>
              </h1>
              
              <p className="text-xl lg:text-2xl text-gray-700 dark:text-gray-300 leading-relaxed max-w-xl">
                طعم اصیل و خوشمزه نقل و حلوای سنتی را با ما تجربه کنید. ما آماده پاسخگویی و خدمت‌رسانی به شما هستیم.
              </p>
            </motion.div>

            {/* Quick Contact Actions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <a
                href="tel:+989999935106"
                className="group flex items-center gap-3 bg-white dark:bg-gray-800 hover:bg-gradient-to-r hover:from-green-500 hover:to-emerald-500 text-gray-900 dark:text-white hover:text-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <FaPhone className="text-green-500 group-hover:text-white transition-colors duration-300" />
                <span className="font-bold">تماس فوری</span>
              </a>
              
              <a
                href="mailto:info@noghlenab.com"
                className="group flex items-center gap-3 bg-white dark:bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-cyan-500 text-gray-900 dark:text-white hover:text-white px-6 py-4 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <FaEnvelope className="text-blue-500 group-hover:text-white transition-colors duration-300" />
                <span className="font-bold">ارسال ایمیل</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Visual Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="relative"
          >
            {/* Main Image Card */}
            <div className="relative group">
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400 to-orange-500 rounded-3xl blur-2xl group-hover:blur-3xl transition-all duration-300 opacity-30 group-hover:opacity-50"></div>
              <div className="relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-2xl transform group-hover:scale-105 transition-all duration-500">
                <div className="aspect-square relative">
                  <Image
                    src="/image/login_image_1.jpg"
                    alt="نقل و حلوای ناب"
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                  
                  {/* Overlay Content */}
                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                      <span className="text-sm font-medium">آنلاین و آماده پاسخگویی</span>
                    </div>
                    <h3 className="text-2xl font-bold mb-2">فروشگاه نقل و حلوای ناب</h3>
                    <p className="text-amber-200">بیش از ۳۰ سال تجربه در خدمت شما</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Stats Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center">
                  <FaStar className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">۴.۹</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">رضایت مشتریان</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-gradient-to-br from-green-400 to-emerald-500 rounded-full flex items-center justify-center">
                  <FaUsers className="text-white" />
                </div>
                <div>
                  <p className="text-2xl font-bold text-gray-900 dark:text-white">۱۰۰۰+</p>
                  <p className="text-sm text-gray-600 dark:text-gray-400">مشتری راضی</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactHero;