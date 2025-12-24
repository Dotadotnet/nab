"use client";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";
import Container from "@/components/shared/container/Container";
import Image from "next/image";

const AboutContent = ({ locale }) => {
  const t = useTranslations("AboutUs");

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-800">
      <Container>
        {/* Introduction */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                <span className="text-2xl">🏢</span>
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
                {t("introTitle")}
              </h2>
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("introContent")}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/image/login_image_1.jpg"
                alt="کارگاه تولید"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>

        {/* Mission & Vision */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Mission */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center">
                <span className="text-2xl">🎯</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("missionTitle")}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("missionContent")}
            </p>
          </motion.div>

          {/* Vision */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-white dark:bg-gray-900 rounded-2xl p-8 shadow-lg"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 bg-secondary-100 dark:bg-secondary-900 rounded-full flex items-center justify-center">
                <span className="text-2xl">🔮</span>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {t("visionTitle")}
              </h3>
            </div>
            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
              {t("visionContent")}
            </p>
          </motion.div>
        </div>

        {/* Quality Assurance */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-500 to-secondary-500 rounded-2xl p-8 text-white text-center"
        >
          <div className="max-w-3xl mx-auto">
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-3xl">🛡️</span>
              </div>
              <h2 className="text-3xl font-bold">
                {t("qualityTitle")}
              </h2>
            </div>
            <p className="text-xl leading-relaxed opacity-90">
              {t("qualityContent")}
            </p>
          </div>
        </motion.div>

        {/* New Content Section 1 - About Noghl and Halva Nab */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                تولیدی "نقل و حلوای ناب" با هدف تولید محصولات اصیل و باکیفیت در زمینه نقل و حلوا فعالیت خود را آغاز کرده است. این مجموعه با استفاده از بهترین مواد اولیه و تکنیکهای سنتی، توانسته است جایگاه ویژهای در بازار استان آذربایجان غربی پیدا کند. محصولات ما با طعمهای بینظیر و خواص منحصر به فرد خود، نه تنها در میان مردم منطقه محبوبیت دارند، بلکه در سایر استانها نیز شناخته شدهاند.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image/login_image_1.jpg"
                  alt="عکس مرتبط با توضیحات"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* New Content Section 2 - Expert Team */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                تولیدی "نقل و حلوای ناب" با بهرهگیری از تیمی متخصص و با تجربه در زمینه تولید این محصولات سنتی، همواره در تلاش است تا نیازهای مشتریان خود را با بهترین کیفیت و قیمت مناسب برآورده کند. ما در این تولیدی به ارتقاء کیفیت و تنوع محصولات خود توجه ویژهای داریم و همواره در راستای نوآوری و بهبود فرآیندهای تولید گام برمیداریم. هدف ما این است که بهترین تجربه را از طعم نقل و حلوا به مشتریان خود ارائه دهیم.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image/login_image_1.jpg"
                  alt="عکس مرتبط با توضیحات"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>

        {/* New Content Section 3 - Management */}
        <div className="mb-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative lg:order-2"
            >
              <div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/image/login_image_1.jpg"
                  alt="عکس مرتبط با توضیحات"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="space-y-6 lg:order-1"
            >
              <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                مدیریت این تولیدی با دقت و پشتکار بر عهده جناب آقای آقاوردیزاده است که با تجربه و تعهد خود در زمینه تولید نقل و حلوا، این مجموعه را به یکی از تولیدکنندگان نمونه استان آذربایجان غربی تبدیل کرده است. ایشان با هدایت صحیح تیم و توجه ویژه به کیفیت و استانداردها، به موفقیتهای چشمگیری در این صنعت دست یافتهاند.
              </p>
            </motion.div>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default AboutContent;