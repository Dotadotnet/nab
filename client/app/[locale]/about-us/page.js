import { useTranslations } from "next-intl";
import Container from "@/components/shared/container/Container";
import Main from "@/components/shared/layouts/Main";
import { FaStar, FaAward, FaUsers, FaHeart, FaLeaf, FaCertificate } from "react-icons/fa";
import { MdTimeline, MdVerified } from "react-icons/md";
import { HiSparkles } from "react-icons/hi";

export default function AboutUs({ params }) {
  const t = useTranslations("AboutUs");

  const stats = [
    { number: "30+", label: "سال تجربه", icon: MdTimeline, color: "text-blue-600" },
    { number: "1000+", label: "مشتری راضی", icon: FaUsers, color: "text-green-600" },
    { number: "50+", label: "نوع محصول", icon: FaStar, color: "text-yellow-600" },
    { number: "100%", label: "طبیعی", icon: FaLeaf, color: "text-emerald-600" }
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

  return (
    <Main>
      <div className="md:max-w-7xl max-w-screen mx-auto">
        {/* Header Section */}
        <div className="flex px-8 items-center gap-4 py-8">
          <div className="text-right">
            <h1 className="text-4xl font-bold mb-1">درباره ما - نقل و حلوای ناب؛ بزرگ‌ترین کارگاه نقل و حلوای ایران</h1>
          </div>
        </div>

        {/* Main Content */}
        <div className="overflow-hidden transition-all duration-500">
          <div className="p-6 space-y-8">
            {/* Stats Section */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl">
                  <div className="flex items-center gap-3">
                    <stat.icon className={`text-2xl ${stat.color}`} />
                    <div className="flex-1">
                      <div className="text-xl font-bold">{stat.number}</div>
                      <div className="text-sm text-gray-600">{stat.label}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Story Timeline */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-r-4 border-indigo-500">
              <h3 className="text-2xl font-bold text-indigo-800 mb-4">داستان ما</h3>
              <p className="text-base mb-4">سفری که از یک کارگاه کوچک شروع شد و امروز به یکی از معتبرترین تولیدکنندگان نقل و حلوا تبدیل شده</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {timeline.map((item, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-indigo-200 flex items-center justify-center text-indigo-800 font-bold">{item.year.slice(-2)}</div>
                      <div className="flex-1 space-y-2">
                        <div className="font-bold text-gray-900">{item.title}</div>
                        <div className="text-sm text-gray-600">{item.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Values Section */}
            <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border-r-4 border-green-500">
              <h3 className="text-2xl font-bold text-green-800 mb-4">ارزش‌های ما</h3>
              <p className="text-base mb-4">اصولی که در طول این سال‌ها راهنمای ما بوده و همچنان بر اساس آن فعالیت می‌کنیم</p>
              
              <div className="grid md:grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl">
                    <div className="flex items-center gap-3">
                      <div className="w-12 h-12 rounded-lg bg-green-200 flex items-center justify-center text-green-800">
                        <value.icon />
                      </div>
                      <div className="flex-1 space-y-2">
                        <div className="font-bold text-gray-900">{value.title}</div>
                        <div className="text-sm text-gray-600">{value.desc}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Call to Action */}
            <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-r-4 border-purple-500">
              <h2 className="text-2xl font-bold text-purple-800 mb-4">آماده تجربه طعم اصیل؟</h2>
              <p className="text-base mb-4">محصولات ما را امتحان کنید و طعم واقعی نقل و حلوای سنتی ارومیه را تجربه کنید</p>
              <div className="text-center">
                <a
                  href="/products"
                  className="bg-purple-600 text-white font-bold px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-300 inline-block"
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