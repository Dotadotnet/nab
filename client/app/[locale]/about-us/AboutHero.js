"use client";
import { motion } from "framer-motion";
import { getTranslations } from "next-intl/server";
import { useTranslations } from "next-intl";
import Container from "@/components/shared/container/Container";
import Image from "next/image";

const AboutHero = ({ locale }) => {
  const t = useTranslations("AboutUs");

  return (
    <section className="relative py-32 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50 dark:from-primary-900/20 dark:via-gray-900 dark:to-secondary-900/20">
        <div className="absolute inset-0 bg-[url('/pattern.svg')] opacity-5"></div>
      </div>
      
      <Container>
        <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-primary-100 dark:bg-primary-900/50 text-primary-700 dark:text-primary-300 px-4 py-2 rounded-full text-sm font-medium"
              >
                <span>🍯</span>
                {t("pageTitle")}
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white leading-tight"
              >
                {t("heroTitle")}
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-xl text-gray-600 dark:text-gray-300 leading-relaxed"
              >
                {t("heroSubtitle")}
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">بیش از ۳۰ سال تجربه</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">محصولات طبیعی</span>
              </div>
              <div className="flex items-center gap-2 bg-white dark:bg-gray-800 px-4 py-2 rounded-lg shadow-sm">
                <span className="text-green-600">✓</span>
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">تولید سنتی</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/image/login_image_1.jpg"
                alt="نقل و حلوای ناب"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
            </div>
            
            {/* Floating Cards */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-primary-600 dark:text-primary-400">30+</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">سال تجربه</div>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -top-6 -right-6 bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-secondary-600 dark:text-secondary-400">100%</div>
                <div className="text-sm text-gray-600 dark:text-gray-400">طبیعی</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default AboutHero;