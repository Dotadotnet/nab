"use client";
import { useTranslations } from "next-intl";
import Container from "@/components/shared/container/Container";
import Main from "@/components/shared/layouts/Main";
import { FaStar, FaAward, FaUsers, FaHeart, FaLeaf, FaCertificate, FaHandsHelping, FaClock } from "react-icons/fa";
import { MdTimeline, MdVerified, MdFactory } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";

export default function About({ params }) {
  const t = useTranslations("AboutUs");

  const stats = [
    { number: "30+", label: "سال تجربه", icon: MdTimeline, color: "from-blue-500 to-blue-600" },
    { number: "1000+", label: "مشتری راضی", icon: FaUsers, color: "from-green-500 to-green-600" },
    { number: "50+", label: "نوع محصول", icon: FaStar, color: "from-yellow-500 to-yellow-600" },
    { number: "100%", label: "طبیعی", icon: FaLeaf, color: "from-emerald-500 to-emerald-600" }
  ];

  const timeline = [
    { year: "1993", title: "آغاز فعالیت", desc: "شروع تولید نقل و حلوا در مقیاس کوچک" },
    { year: "2000", title: "گسترش تولید", desc: "افزایش ظرفیت تولید و تنوع محصولات" },
    { year: "2010", title: "مدرن‌سازی", desc: "به‌روزرسانی تجهیزات و فرآیندهای تولید" },
    { year: "2020", title: "حضور آنلاین", desc: "راه‌اندازی فروشگاه اینترنتی" }
  ];

  const values = [
    { title: "کیفیت", desc: "تولید بهترین محصولات با مواد اولیه درجه یک", icon: FaAward },
    { title: "اصالت", desc: "حفظ طعم و کیفیت سنتی در تمام محصولات", icon: FaCertificate },
    { title: "اعتماد", desc: "جلب رضایت و اعتماد مشتریان عزیز", icon: FaHeart },
    { title: "نوآوری", desc: "ترکیب تکنولوژی مدرن با روش‌های سنتی", icon: HiSparkles }
  ];

  const features = [
    { title: "طبیعی و خالص", desc: "بدون مواد نگهدارنده و افزودنی‌های مصنوعی", icon: FaLeaf },
    { title: "دست‌ساز سنتی", desc: "تولید با روش‌های اصیل و سنتی ارومیه", icon: FaHandsHelping },
    { title: "مواد اولیه مرغوب", desc: "استفاده از بهترین و مرغوب‌ترین مواد اولیه", icon: MdVerified },
    { title: "تولید روزانه", desc: "تازگی و کیفیت در هر محصول", icon: FaClock }
  ];

  return (
    <Main>
      <div className="md:max-w-7xl mt-40 max-w-screen mx-auto">
        {/* Header Section */}
        <div className="flex px-8 items-center gap-4 py-8">
          <div className="text-right">
            <h1 className="text-4xl font-bold mb-1 text-gray-900 dark:text-white">درباره ما - نقل و حلوای ناب؛ بیش از ۳۰ سال تجربه در تولید محصولات سنتی</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="overflow-hidden transition-all duration-500">
          <div className="p-6 space-y-8">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-4 rounded-xl shadow-sm border border-gray-200 dark:border-gray-600">
                  <div className="flex items-center gap-3">
                    <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${stat.color} flex items-center justify-center text-white`}>
                      <stat.icon className="text-xl" />
                    </div>
                    <div className="flex-1">
                      <div className="text-xl font-bold text-gray-900 dark:text-white">{stat.number}</div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Introduction */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border-r-4 border-indigo-500 dark:border-indigo-400">
              <h3 className="text-2xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">
                {t("introTitle")}
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {t("introContent")}
              </p>
            </div>

            {/* Mission */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl border-r-4 border-green-500 dark:border-green-400">
              <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
                {t("missionTitle")}
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {t("missionContent")}
              </p>
            </div>

            {/* Vision */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-r-4 border-blue-500 dark:border-blue-400">
              <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">
                {t("visionTitle")}
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {t("visionContent")}
              </p>
            </div>

            {/* Features */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 p-6 rounded-xl border-r-4 border-purple-500 dark:border-purple-400">
              <h3 className="text-2xl font-bold text-purple-800 dark:text-purple-200 mb-4">
                {t("featuresTitle")}
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-purple-200 dark:bg-purple-800 flex items-center justify-center text-purple-800 dark:text-purple-200">
                        <feature.icon className="text-xl" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="font-bold text-gray-900 dark:text-white">{feature.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{feature.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Timeline */}
            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 p-6 rounded-xl border-r-4 border-orange-500 dark:border-orange-400">
              <h3 className="text-2xl font-bold text-orange-800 dark:text-orange-200 mb-4">
                {t("historyTitle")}
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                {t("historyContent")}
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {timeline.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-orange-200 dark:bg-orange-800 flex items-center justify-center text-orange-800 dark:text-orange-200 font-bold">
                        {item.year.slice(-2)}
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="font-bold text-gray-900 dark:text-white">{item.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values */}
            <div className="bg-gradient-to-r from-teal-50 to-green-50 dark:from-teal-900/20 dark:to-green-900/20 p-6 rounded-xl border-r-4 border-teal-500 dark:border-teal-400">
              <h3 className="text-2xl font-bold text-teal-800 dark:text-teal-200 mb-4">
                ارزش‌های ما
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300 mb-4">
                اصولی که در طول این سال‌ها راهنمای ما بوده و همچنان بر اساس آن فعالیت می‌کنیم
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-teal-200 dark:bg-teal-800 flex items-center justify-center text-teal-800 dark:text-teal-200">
                        <value.icon className="text-xl" />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="font-bold text-gray-900 dark:text-white">{value.title}</div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">{value.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quality Assurance */}
            <div className="bg-gradient-to-r from-emerald-50 to-green-50 dark:from-emerald-900/20 dark:to-green-900/20 p-6 rounded-xl border-r-4 border-emerald-500 dark:border-emerald-400">
              <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-200 mb-4">
                {t("qualityTitle")}
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {t("qualityContent")}
              </p>
            </div>

            {/* Team */}
            <div className="bg-gradient-to-r from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20 p-6 rounded-xl border-r-4 border-violet-500 dark:border-violet-400">
              <h3 className="text-2xl font-bold text-violet-800 dark:text-violet-200 mb-4">
                {t("teamTitle")}
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {t("teamContent")}
              </p>
            </div>

            {/* Certificates */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 p-6 rounded-xl border-r-4 border-yellow-500 dark:border-yellow-400">
              <h3 className="text-2xl font-bold text-yellow-800 dark:text-yellow-200 mb-4">
                {t("certificatesTitle")}
              </h3>
              <p className="text-base text-gray-700 dark:text-gray-300">
                {t("certificatesContent")}
              </p>
            </div>

            {/* New Content Section 1 - Awards */}
            <div className="bg-gradient-to-r from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 p-6 rounded-xl border-r-4 border-amber-500 dark:border-amber-400">
              <h3 className="text-2xl font-bold text-amber-800 dark:text-amber-200 mb-4">
                تولیدکننده نمونه استان
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
                <div className="flex-1">
                  <p className="text-base text-justify text-gray-700 dark:text-gray-300">
                    تولیدی "نقل و حلوای ناب" با تولید محصولات باکیفیت و اصیل در زمینه نقل و حلوا، موفق به کسب عنوان "تولیدکننده نمونه استان آذربایجان غربی" گردیده است. این مجموعه با استفاده از بهترین مواد اولیه و به کارگیری روشهای سنتی و نوآورانه در تولید، توانسته است جایگاه ویژهای در بازار استان پیدا کند. محصولات ما با طعمهای منحصر به فرد و خواص بینظیر خود در میان مردم استان و سایر نقاط کشور شناخته شده و محبوبیت فراوانی پیدا کردهاند. کسب این عنوان افتخارآمیز نتیجه تلاشهای مستمر در جهت رعایت استانداردهای بالا، کیفیت عالی محصولات و رضایت مشتریان میباشد.
                  </p>
                </div>
                <div className="flex-1 flex flex-col md:flex-row gap-4">
                  <div className="min-w-[300px] h-96 rounded-xl overflow-hidden ">
                    <img 
                      src="/assets/home/about/1.png"
                      alt="تصویر مرتبط با کسب جوایز"
                      className="w-full h-full object-cover"
                      width={300}
                      height={200}
                    />
                  </div>
                  <div className="min-w-[300px] h-96 rounded-xl overflow-hidden ">
                    <img 
                      src="/assets/home/about/2.jpg"
                      alt="تصویر مرتبط با کسب جوایز"
                      className="w-full h-full object-cover"
                      width={300}
                      height={200}
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* New Content Section 2 - Management */}
            <div className="bg-gradient-to-r from-sky-50 to-blue-50 dark:from-sky-900/20 dark:to-blue-900/20 p-6 rounded-xl border-r-4 border-sky-500 dark:border-sky-400">
              <h3 className="text-2xl font-bold text-sky-800 dark:text-sky-200 mb-4">
                مدیریت تولیدی
              </h3>
              <div className="flex flex-col md:flex-row items-center gap-6 mt-4">
                <div className="flex-1">
                  <p className="text-base text-justify text-gray-700 dark:text-gray-300">
                    مدیریت این تولیدی با هدایت جناب آقای آقاوردیزاده، که با تلاش و پشتکار خود این مجموعه را به عنوان تولیدکننده نمونه استان آذربایجان غربی معرفی کرده است، انجام میشود. ایشان با داشتن تجربه و تخصص در صنعت تولید نقل و حلوا، توانستهاند این مجموعه را به موفقیتهای چشمگیری برسانند و جایگاه آن را در صنعت ارتقا دهند.
                  </p>
                </div>
                <div className="flex-1 min-w-[300px] h-96 rounded-xl overflow-hidden ">
                  <img 
                    src="/assets/home/about/3.jpg"
                    alt="تصویر مرتبط با مدیریت تولیدی"
                    className="w-full h-full object-cover"
                    width={300}
                    height={250}
                  />
                </div>
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20 p-6 rounded-xl border-r-4 border-rose-500 dark:border-rose-400">
              <h2 className="text-2xl font-bold text-rose-800 dark:text-rose-200 mb-4">آماده تجربه طعم اصیل؟</h2>
              <p className="text-base text-gray-700 dark:text-gray-300 mb-4">محصولات ما را امتحان کنید و طعم واقعی نقل و حلوای سنتی ارومیه را تجربه کنید</p>
              <div className="text-center">
                <a
                  href="/products"
                  className="bg-rose-600 hover:bg-rose-700 dark:bg-rose-500 dark:hover:bg-rose-600 text-white font-bold px-8 py-3 rounded-lg transition-colors duration-300 inline-block"
                >
                  مشاهده محصولات
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Main>
  );
}