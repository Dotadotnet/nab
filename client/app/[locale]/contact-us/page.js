import Main from "@/components/shared/layouts/Main";
import { getTranslations } from "next-intl/server";
import Container from "@/components/shared/container/Container";
import { FaPhone, FaMapMarkerAlt, FaEnvelope, FaClock, FaInstagram, FaTelegram, FaUser, FaComments, FaPaperPlane } from "react-icons/fa";
import Image from "next/image";
import Link from "next/link";
import ContactForm from "./ContactForm";

export const metadata = {
  title: "تماس با ما - نقل و حلوای ناب",
  description: "با ما در تماس باشید. آدرس، شماره تماس و راه‌های ارتباطی نقل و حلوای ناب در ارومیه"
};

export default async function Contact({ params }) {
    const { locale } = await params;
    const c = await getTranslations("ContactUs");
    
    const locationData = {
        country: c("CityUrmia"),
        address: c("Address"),
        mapUrl: "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d373.15305293723105!2d45.07099440279554!3d37.561305347499825!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2s!4v1747496405393!5m2!1sen!2s",
        image: "/image/login_image_1.jpg",
    };

    const contactItems = [
        {
            icon: <FaPhone className="text-2xl" />,
            title: "تماس مستقیم",
            items: ["09144455602", "09141874462", "04432769494"],
            links: ["tel:+989144455602", "tel:+989141874462", "tel:+984432769494"],
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
            items: [c("Address")],
            links: ["#"],
            color: "from-red-500 to-pink-500"
        }
    ];

    return (
        <Main>
            <div className="md:max-w-7xl mt-40 max-w-screen mx-auto">
                {/* Header Section */}
                <div className="flex px-8 items-center gap-4 py-8">
                    <div className="text-right">
                        <h1 className="text-4xl font-bold mb-1 text-gray-900 dark:text-white">تماس با ما - نقل و حلوای ناب؛ آماده پاسخگویی به شما هستیم</h1>
                    </div>
                </div>

                {/* Main Content */}
                <div className="overflow-hidden transition-all duration-500">
                    <div className="p-6 space-y-8">
                        {/* Contact Form and Map Section - Side by side on desktop, stacked on mobile */}
                        <div className="grid lg:grid-cols-2 gap-8">
                            {/* Contact Form */}
                            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20 p-6 rounded-xl border-r-4 border-indigo-500 dark:border-indigo-400">
                                <h3 className="text-2xl font-bold text-indigo-800 dark:text-indigo-200 mb-4">
                                    پیام خود را برای ما بفرستید
                                </h3>
                                <p className="text-base mb-4 text-gray-700 dark:text-gray-300">ما آماده پاسخگویی به سوالات و راهنمایی شما هستیم.</p>
                                
                                <ContactForm locale={locale} />
                            </div>

                            {/* Map Section */}
                            <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl border-r-4 border-green-500 dark:border-green-400">
                                <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
                                    موقعیت فروشگاه
                                </h3>
                                <p className="text-base mb-4 text-gray-700 dark:text-gray-300">موقعیت فروشگاه ما را روی نقشه مشاهده کنید و راحت به ما سر بزنید</p>
                                
                                <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 overflow-hidden">
                                    <div className="p-4 bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-700 dark:to-gray-600">
                                        <div className="flex flex-col gap-2">
                                            <h4 className="font-bold text-gray-900 dark:text-white">
                                                {locationData.country}
                                            </h4>
                                            <p className="text-sm text-gray-600 dark:text-gray-300">
                                                {locationData.address}
                                            </p>
                                            <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                                                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                                                فعال و آماده پذیرایی
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
                            </div>
                        </div>

                        {/* Contact Info Section */}
                        <div className="bg-gradient-to-r from-green-50 to-teal-50 dark:from-green-900/20 dark:to-teal-900/20 p-6 rounded-xl border-r-4 border-green-500 dark:border-green-400">
                            <h3 className="text-2xl font-bold text-green-800 dark:text-green-200 mb-4">
                                راه‌های ارتباط با ما
                            </h3>
                            <p className="text-base mb-4 text-gray-700 dark:text-gray-300">با ما در تماس باشید و از بهترین نقل و حلوای سنتی لذت ببرید</p>
                            
                            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
                                {contactItems.map((item, index) => (
                                    <div key={index} className="bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-4 rounded-xl border border-gray-200 dark:border-gray-600">
                                        <div className="flex items-center gap-3">
                                            <div className="w-12 h-12 rounded-lg bg-green-200 dark:bg-green-800 flex items-center justify-center text-green-800 dark:text-green-200">
                                                {item.icon}
                                            </div>
                                            <div className="flex-1 space-y-2">
                                                <div className="font-bold text-gray-900 dark:text-white">{item.title}</div>
                                                {item.items.map((itemText, itemIndex) => (
                                                    <div key={itemIndex}>
                                                        {item.links[itemIndex].startsWith('tel:') || item.links[itemIndex].startsWith('mailto:') ? (
                                                            <a href={item.links[itemIndex]} className="text-sm text-gray-600 dark:text-gray-300 hover:text-green-600 dark:hover:text-green-400">
                                                                {itemText}
                                                            </a>
                                                        ) : (
                                                            <span className="text-sm text-gray-600 dark:text-gray-300">{itemText}</span>
                                                        )}
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Section */}
                        <div className="bg-gradient-to-r from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 p-6 rounded-xl border-r-4 border-blue-500 dark:border-blue-400">
                            <h3 className="text-2xl font-bold text-blue-800 dark:text-blue-200 mb-4">آماده پاسخگویی به شما هستیم</h3>
                            <p className="text-base mb-4 text-gray-700 dark:text-gray-300">{c("AcceptYourOrdersInMedias")}</p>
                        </div>
                    </div>
                </div>
            </div>
        </Main>
    );
}
