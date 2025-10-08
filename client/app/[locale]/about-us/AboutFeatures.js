"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Container from "@/components/shared/container/Container";

const AboutFeatures = ({ locale }) => {
  const t = useTranslations("AboutUs");

  const features = [
    {
      icon: "🍯",
      title: t("feature1Title"),
      description: t("feature1Desc"),
      color: "bg-green-100 dark:bg-green-900/20 text-green-600 dark:text-green-400"
    },
    {
      icon: "👨‍🍳",
      title: t("feature2Title"),
      description: t("feature2Desc"),
      color: "bg-blue-100 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
    },
    {
      icon: "⭐",
      title: t("feature3Title"),
      description: t("feature3Desc"),
      color: "bg-yellow-100 dark:bg-yellow-900/20 text-yellow-600 dark:text-yellow-400"
    },
    {
      icon: "🎁",
      title: t("feature4Title"),
      description: t("feature4Desc"),
      color: "bg-purple-100 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400"
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("featuresTitle")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10, transition: { duration: 0.2 } }}
              className="group"
            >
              <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-700 text-center h-full">
                <div className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-2xl">{feature.icon}</span>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};

export default AboutFeatures;