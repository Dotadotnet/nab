"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Container from "@/components/shared/container/Container";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaInstagram, FaTelegram } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";

const ContactInfo = ({ locale }) => {
  const t = useTranslations("ContactUs");
  const a = useTranslations("Apps");

  const contactItems = [
    {
      icon: <FaPhone className="text-2xl" />,
      title: "تماس مستقیم",
      items: ["09999935106", "09917240849"],
      links: ["tel:+989999935106", "tel:+989917240849"],
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: <FaEnvelope className="text-2xl" />,
      title: "ایمیل",
      items: ["info@noghlenab.com"],
      links: ["mailto:info@noghlenab.com"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <FaClock className="text-2xl" />,
      title: "ساعات کاری",
      items: ["شنبه تا پنج‌شنبه: ۸:۰۰ - ۲۰:۰۰", "جمعه: ۹:۰۰ - ۱۸:۰۰"],
      links: ["#", "#"],
      color: "from-purple-500 to-violet-500"
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl" />,
      title: "آدرس فروشگاه",
      items: [t("Address")],
      links: ["#"],
      color: "from-red-500 to-pink-500"
    }
  ];

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-secondary-50/30 via-white to-primary-50/30 dark:from-secondary-900/10 dark:via-gray-900 dark:to-primary-900/10">
      <Container>
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/image/login_image_1.jpg"
                alt="فروشگاه نقل و حلوای ناب"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              
              {/* Overlay Content */}
              <div className="absolute bottom-8 left-8 right-8 text-white">
                <h3 className="text-2xl lg:text-3xl font-bold mb-2">نقل و حلوای ناب</h3>
                <p className="text-lg opacity-90">بیش از ۳۰ سال تجربه در خدمت شما</p>
                <div className="flex items-center gap-2 mt-4">
                  <span className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></span>
                  <span className="text-sm">آماده پذیرایی از شما</span>
                </div>
              </div>
            </div>
            
            {/* Social Media Floating Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-xl border border-gray-100 dark:border-gray-700"
            >
              <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-4 text-center">
                ما را دنبال کنید
              </h4>
              <div className="flex items-center justify-center gap-4">
                <Link href="#" className="group">
                  <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-rose-500 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-300">
                    <FaInstagram />
                  </div>
                </Link>
                <Link href="#" className="group">
                  <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center text-white transform group-hover:scale-110 transition-all duration-300">
                    <FaTelegram />
                  </div>
                </Link>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Info Side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="text-center lg:text-right">
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="inline-flex items-center gap-3 bg-secondary-100 dark:bg-secondary-900/30 text-secondary-700 dark:text-secondary-300 px-6 py-3 rounded-full text-sm font-medium mb-6"
              >
                <FaPhone className="text-lg" />
                اطلاعات تماس
              </motion.div>
              
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4"
              >
                راه‌های ارتباط با ما
              </motion.h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {contactItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <div className="bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 h-full">
                    <div className={`w-14 h-14 bg-gradient-to-br ${item.color} rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform duration-300`}>
                      {item.icon}
                    </div>
                    
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-3">
                      {item.title}
                    </h3>
                    
                    <div className="space-y-2">
                      {item.items.map((itemText, itemIndex) => (
                        <div key={itemIndex}>
                          {item.links[itemIndex].startsWith('tel:') || item.links[itemIndex].startsWith('mailto:') ? (
                            <a
                              href={item.links[itemIndex]}
                              className="text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 transition-colors duration-200 block text-sm leading-relaxed"
                            >
                              {itemText}
                            </a>
                          ) : (
                            <span className="text-gray-600 dark:text-gray-300 block text-sm leading-relaxed">
                              {itemText}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-6 text-white text-center"
            >
              <h3 className="text-xl font-bold mb-2">آماده پاسخگویی به شما هستیم</h3>
              <p className="opacity-90 mb-4">
                {t("AcceptYourOrdersInMedias")}
              </p>
              <div className="flex justify-center gap-4">
                <Link
                  href="tel:+989999935106"
                  className="bg-white/20 hover:bg-white/30 rounded-xl px-6 py-3 transition-all duration-300 hover:scale-105 flex items-center gap-2"
                >
                  <FaPhone />
                  تماس فوری
                </Link>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ContactInfo;