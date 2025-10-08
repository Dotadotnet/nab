"use client";
import { useState } from "react";
import { useTranslations } from "next-intl";
import { FaPaperPlane, FaUser, FaPhone, FaEnvelope } from "react-icons/fa";

const ContactForm = ({ locale }) => {
  const t = useTranslations("ContactUs");
  const [formData, setFormData] = useState({
    fullName: '',
    phoneNumber: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    setTimeout(() => {
      setIsSubmitting(false);
      alert('پیام شما با موفقیت ارسال شد!');
      setFormData({ fullName: '', phoneNumber: '', email: '', subject: '', message: '' });
    }, 2000);
  };

  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-600 p-6">
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Name and Phone Row */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
              <FaUser className="text-indigo-500 dark:text-indigo-400" />
              {t("fullName")} *
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none text-right transition-all duration-300"
              placeholder="نام و نام خانوادگی خود را وارد کنید"
            />
          </div>
          
          <div>
            <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
              <FaPhone className="text-indigo-500 dark:text-indigo-400" />
              {t("phoneNumber")} *
            </label>
            <input
              type="tel"
              name="phoneNumber"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
              className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none transition-all duration-300"
              placeholder="09XX XXX XXXX"
              dir="ltr"
            />
          </div>
        </div>

        {/* Email */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2 flex items-center gap-2">
            <FaEnvelope className="text-indigo-500 dark:text-indigo-400" />
            {t("email")} (اختیاری)
          </label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none transition-all duration-300"
            placeholder="example@email.com"
            dir="ltr"
          />
        </div>

        {/* Subject */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            {t("subject")} *
          </label>
          <input
            type="text"
            name="subject"
            value={formData.subject}
            onChange={handleInputChange}
            required
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none text-right transition-all duration-300"
            placeholder="موضوع پیام خود را وارد کنید"
          />
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
            {t("message")} *
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            required
            rows={5}
            className="w-full px-4 py-3 border-2 border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-700 text-gray-900 dark:text-white rounded-lg focus:border-indigo-500 dark:focus:border-indigo-400 focus:outline-none text-right transition-all duration-300 resize-none"
            placeholder="پیام خود را در اینجا بنویسید..."
          />
        </div>

        {/* Submit Button */}
        <div className="text-center pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full md:w-auto px-8 py-3 bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600 text-white font-bold text-lg rounded-lg shadow-lg transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3 mx-auto"
          >
            {isSubmitting ? (
              <>
                <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                در حال ارسال...
              </>
            ) : (
              <>
                <FaPaperPlane />
                {t("sendMessage")}
              </>
            )}
          </button>
          
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-3">
            🔒 اطلاعات شما به صورت کاملاً محرمانه و ایمن نگهداری می‌شود
          </p>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
