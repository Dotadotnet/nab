"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Container from "@/components/shared/container/Container";

const ContactMap = ({ locationData }) => {
  const t = useTranslations("ContactUs");

  return (
    <section className="py-16 bg-white dark:bg-gray-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("location")}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            موقعیت فروشگاه ما را روی نقشه مشاهده کنید و راحت به ما سر بزنید
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-700">
            <div className="p-6 bg-gradient-to-r from-primary-50 to-secondary-50 dark:from-primary-900/20 dark:to-secondary-900/20">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div>
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {locationData.country}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {locationData.address}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  فعال و آماده ملاقات شما هستیم
                </div>
              </div>
            </div>
            
            <div className="aspect-video">
              <iframe
                src={locationData.mapUrl}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="w-full h-full"
              />
            </div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default ContactMap;