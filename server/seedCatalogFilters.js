require("dotenv").config();

const mongoose = require("mongoose");
const Admin = require("./models/admin.model");
const Category = require("./models/category.model");
const CategoryTranslation = require("./models/categoryTranslation.model");
const FilterDefinition = require("./models/filterDefinition.model");
const CategoryFilter = require("./models/categoryFilter.model");
const Tag = require("./models/tag.model");
const TagTranslation = require("./models/tagTranslation.model");

const categories = [
  { title: "نقل", sortOrder: 1 },
  { title: "حلوا", sortOrder: 2 },
  { title: "کیک", sortOrder: 3 },
  { title: "عرقیجات", sortOrder: 4 },
  { title: "شربت و بطری", sortOrder: 5 },
];

const filterDefinitions = [
  {
    key: "flavor",
    label: "طعم",
    type: "select",
    options: [
      { label: "وانیل", value: "vanilla" },
      { label: "زعفران", value: "saffron" },
      { label: "هل", value: "cardamom" },
      { label: "گل محمدی", value: "rose" },
    ],
  },
  {
    key: "weight",
    label: "وزن",
    type: "range",
    min: 100,
    max: 5000,
    unit: "گرم",
  },
  {
    key: "packaging",
    label: "نوع بسته‌بندی",
    type: "select",
    options: [
      { label: "جعبه‌ای", value: "box" },
      { label: "کادویی", value: "gift" },
      { label: "کیلویی", value: "bulk" },
    ],
  },
  {
    key: "occasion",
    label: "مناسبت",
    type: "multi_select",
    options: [
      { label: "عروسی", value: "wedding" },
      { label: "مهمانی", value: "party" },
      { label: "سوغات", value: "souvenir" },
      { label: "مراسم مذهبی", value: "religious" },
    ],
  },
  {
    key: "color",
    label: "رنگ",
    type: "color",
    options: [
      { label: "سفید", value: "#ffffff" },
      { label: "صورتی", value: "#f9a8d4" },
      { label: "طلایی", value: "#facc15" },
      { label: "قهوه‌ای", value: "#92400e" },
    ],
  },
  {
    key: "fresh_daily",
    label: "تولید روز",
    type: "boolean",
  },
];

const categoryFilterMap = {
  نقل: ["flavor", "weight", "packaging", "occasion", "color", "fresh_daily"],
  حلوا: ["flavor", "weight", "packaging", "occasion", "fresh_daily"],
  کیک: ["flavor", "weight", "packaging", "occasion", "color", "fresh_daily"],
  عرقیجات: ["flavor", "packaging", "occasion", "color"],
  "شربت و بطری": ["flavor", "packaging", "occasion", "color"],
};

const tags = [
  {
    title: "نقل بیدمشک",
    group: "نقل",
    description: "تگ مخصوص محصولات نقل با عطر بیدمشک برای دسته‌بندی و جستجوی سریع‌تر.",
    keynotes: ["نقل", "بیدمشک", "سوغات ارومیه", "شیرینی سنتی"],
  },
  {
    title: "نقل گردویی",
    group: "نقل",
    description: "تگ محصولات نقل مغزدار با گردو، مناسب پذیرایی و پک‌های هدیه.",
    keynotes: ["نقل", "گردو", "مغزدار", "پذیرایی"],
  },
  {
    title: "نقل بادامی",
    group: "نقل",
    description: "تگ محصولات نقل بادامی برای فیلتر کردن نقل‌های مغزدار و مجلسی.",
    keynotes: ["نقل", "بادام", "مجلسی", "مغزدار"],
  },
  {
    title: "نقل زعفرانی",
    group: "نقل",
    description: "تگ محصولات نقل زعفرانی با رنگ و عطر زعفران.",
    keynotes: ["نقل", "زعفران", "طلایی", "شیرینی"],
  },
  {
    title: "نقل هل‌دار",
    group: "نقل",
    description: "تگ محصولات نقل با طعم و عطر هل برای دسته‌بندی محصولات معطر.",
    keynotes: ["نقل", "هل", "معطر", "سنتی"],
  },
  {
    title: "نقل گلاب",
    group: "نقل",
    description: "تگ محصولات نقل با عطر گلاب برای نمایش محصولات لطیف و سنتی.",
    keynotes: ["نقل", "گلاب", "معطر", "پذیرایی"],
  },
  {
    title: "حلوا زعفرانی",
    group: "حلوا",
    description: "تگ محصولات حلوای زعفرانی برای مراسم، پذیرایی و سفارش‌های مناسبتی.",
    keynotes: ["حلوا", "زعفران", "مراسم", "پذیرایی"],
  },
  {
    title: "حلوا گردویی",
    group: "حلوا",
    description: "تگ محصولات حلوای گردویی و مغزدار برای جستجوی سریع‌تر در پنل.",
    keynotes: ["حلوا", "گردو", "مغزدار", "سنتی"],
  },
  {
    title: "حلوا هویج",
    group: "حلوا",
    description: "تگ محصولات حلوای هویج با بافت نرم و طعم شیرین سنتی.",
    keynotes: ["حلوا", "هویج", "شیرینی سنتی", "پذیرایی"],
  },
  {
    title: "حلوا ارده",
    group: "حلوا",
    description: "تگ محصولات حلوا ارده برای صبحانه، سوغات و محصولات کنجدی.",
    keynotes: ["حلوا", "ارده", "کنجد", "صبحانه"],
  },
  {
    title: "حلوا خرمایی",
    group: "حلوا",
    description: "تگ محصولات حلوای خرمایی برای دسته‌بندی محصولات مقوی و سنتی.",
    keynotes: ["حلوا", "خرما", "مقوی", "سنتی"],
  },
  {
    title: "حلوا زنجبیلی",
    group: "حلوا",
    description: "تگ محصولات حلوای زنجبیلی با طبع گرم و عطر ادویه‌ای.",
    keynotes: ["حلوا", "زنجبیل", "طبع گرم", "ادویه‌ای"],
  },
  {
    title: "گلاب",
    group: "عرقیجات",
    description: "تگ محصولات گلاب برای عرقیجات، شیرینی‌پزی و مصرف خانگی.",
    keynotes: ["عرقیجات", "گلاب", "گل محمدی", "سنتی"],
  },
  {
    title: "عرق بیدمشک",
    group: "عرقیجات",
    description: "تگ عرق بیدمشک برای محصولات گیاهی معطر و آرام‌بخش.",
    keynotes: ["عرقیجات", "بیدمشک", "گیاهی", "معطر"],
  },
  {
    title: "عرق نعنا",
    group: "عرقیجات",
    description: "تگ عرق نعنا برای محصولات خنک، گیاهی و مناسب مصرف روزانه.",
    keynotes: ["عرقیجات", "نعنا", "گیاهی", "خنک"],
  },
  {
    title: "عرق کاسنی",
    group: "عرقیجات",
    description: "تگ عرق کاسنی برای دسته‌بندی عرقیات سنتی و گیاهی.",
    keynotes: ["عرقیجات", "کاسنی", "سنتی", "گیاهی"],
  },
  {
    title: "عرق بهارنارنج",
    group: "عرقیجات",
    description: "تگ عرق بهارنارنج برای محصولات معطر، سنتی و مناسب نوشیدنی.",
    keynotes: ["عرقیجات", "بهارنارنج", "معطر", "نوشیدنی"],
  },
  {
    title: "عرق هل",
    group: "عرقیجات",
    description: "تگ عرق هل برای عرقیات معطر و کاربردهای شیرینی‌پزی.",
    keynotes: ["عرقیجات", "هل", "معطر", "شیرینی‌پزی"],
  },
];

const seoProductTags = [
  {
    title: "نقل گردویی وانیلی",
    group: "نقل",
    description: "تگ محصولات نقل گردویی وانیلی ارومیه برای دسته‌بندی نقل مغزدار، تازه و مناسب پذیرایی.",
    keynotes: [
      "نقل گردویی وانیلی",
      "خرید نقل گردویی وانیلی",
      "بهترین نقل گردویی وانیلی",
      "نقل گردویی وانیلی ارومیه",
      "نقل گردویی وانیلی اورمیه",
      "نقل مغزدار وانیلی",
      "قیمت نقل گردویی وانیلی",
      "نقل گردویی وانیلی از کجا بخریم",
      "سوغات ارومیه",
      "سوغات اورمیه",
    ],
  },
  {
    title: "نقل گردویی گل محمدی",
    group: "نقل",
    description: "تگ محصولات نقل گردویی گل محمدی با عطر گل محمدی، مناسب سوغات ارومیه و پذیرایی.",
    keynotes: [
      "نقل گردویی گل محمدی",
      "نقل گردوئی محمدی",
      "خرید نقل گردویی گل محمدی",
      "بهترین نقل گردویی گل محمدی",
      "نقل گردویی گل محمدی ارومیه",
      "نقل گردویی گل محمدی اورمیه",
      "نقل محمدی گردویی",
      "قیمت نقل گردویی محمدی",
      "نقل گردویی محمدی از کجا بخریم",
      "سوغات ارومیه",
      "سوغات اورمیه",
    ],
  },
  {
    title: "نقل گردویی زعفرانی",
    group: "نقل",
    description: "تگ محصولات نقل گردویی زعفرانی ارومیه با مغز گردو و عطر زعفران.",
    keynotes: [
      "نقل گردویی زعفرانی",
      "نقل گردوئی زعفرانی",
      "خرید نقل گردویی زعفرانی",
      "بهترین نقل گردویی زعفرانی",
      "نقل زعفرانی گردویی",
      "نقل گردویی زعفرانی ارومیه",
      "نقل گردویی زعفرانی اورمیه",
      "قیمت نقل گردویی زعفرانی",
      "نقل گردویی زعفرانی از کجا بخریم",
      "سوغات ارومیه",
      "سوغات اورمیه",
    ],
  },
  {
    title: "نقل بیدمشک",
    group: "نقل",
    description: "تگ محصولات نقل بیدمشک ارومیه با عطر بیدمشک، مناسب پذیرایی و سوغات.",
    keynotes: [
      "نقل بیدمشک",
      "خرید نقل بیدمشک",
      "بهترین نقل بیدمشک",
      "نقل بیدمشک ارومیه",
      "نقل بیدمشک اورمیه",
      "قیمت نقل بیدمشک",
      "نقل بیدمشک از کجا بخریم",
      "نقل معطر",
      "سوغات ارومیه",
      "سوغات اورمیه",
    ],
  },
  {
    title: "نقل گل محمدی",
    group: "نقل",
    description: "تگ محصولات نقل گل محمدی با رایحه گل محمدی، مناسب سوغات ارومیه و پذیرایی.",
    keynotes: [
      "نقل گل محمدی",
      "خرید نقل گل محمدی",
      "بهترین نقل گل محمدی",
      "نقل گل محمدی ارومیه",
      "نقل گل محمدی اورمیه",
      "نقل محمدی",
      "قیمت نقل گل محمدی",
      "نقل گل محمدی از کجا بخریم",
      "سوغات ارومیه",
      "سوغات اورمیه",
    ],
  },
  {
    title: "نقل ریز گل محمدی",
    group: "نقل",
    description: "تگ محصولات نقل ریز گل محمدی برای پذیرایی، سوغات و دسته‌بندی نقل‌های ریز معطر.",
    keynotes: [
      "نقل ریز گل محمدی",
      "نقل ریز محمدی",
      "نقل ریز گل محمدی ارومیه",
      "نقل ریز گل محمدی اورمیه",
      "خرید نقل ریز گل محمدی",
      "بهترین نقل ریز محمدی",
      "قیمت نقل ریز گل محمدی",
      "نقل ریز محمدی از کجا بخریم",
      "نقل پذیرایی",
      "سوغات ارومیه",
      "سوغات اورمیه",
    ],
  },
  {
    title: "حلوای گردویی",
    group: "حلوا",
    description: "تگ محصولات حلوای گردویی ارومیه برای دسته‌بندی حلواهای مغزدار، سنتی و مناسب پذیرایی.",
    keynotes: [
      "حلوای گردویی",
      "حلوای گردوئی",
      "خرید حلوای گردویی",
      "بهترین حلوای گردویی",
      "حلوای گردویی ارومیه",
      "حلوای گردویی اورمیه",
      "قیمت حلوای گردویی",
      "حلوای گردویی از کجا بخریم",
      "حلوای سنتی گردویی",
      "حلوا سوغات ارومیه",
      "حلوا سوغات اورمیه",
    ],
  },
  {
    title: "حلوای هویج",
    group: "حلوا",
    description: "تگ محصولات حلوای هویج ارومیه برای جستجوی حلواهای سنتی، تازه و مناسب مهمانی.",
    keynotes: [
      "حلوای هویج",
      "خرید حلوای هویج",
      "بهترین حلوای هویج",
      "حلوای هویج ارومیه",
      "حلوای هویج اورمیه",
      "قیمت حلوای هویج",
      "حلوای هویج از کجا بخریم",
      "حلوای سنتی هویج",
      "حلوا سوغات ارومیه",
      "حلوا سوغات اورمیه",
    ],
  },
  {
    title: "حلوای پسته‌ای",
    group: "حلوا",
    description: "تگ محصولات حلوای پسته‌ای برای دسته‌بندی حلواهای مجلسی، مغزدار و مناسب هدیه.",
    keynotes: [
      "حلوای پسته‌ای",
      "حلوای پسته ای",
      "خرید حلوای پسته‌ای",
      "بهترین حلوای پسته‌ای",
      "حلوای پسته‌ای ارومیه",
      "حلوای پسته‌ای اورمیه",
      "قیمت حلوای پسته‌ای",
      "حلوای پسته‌ای از کجا بخریم",
      "حلوای مجلسی",
      "حلوای مغزدار",
      "حلوا سوغات ارومیه",
    ],
  },
  {
    title: "حلوای لقمه‌ای",
    group: "حلوا",
    description: "تگ محصولات حلوای لقمه‌ای برای پذیرایی، پک هدیه و سفارش‌های مناسبتی.",
    keynotes: [
      "حلوای لقمه‌ای",
      "حلوای لقمه ای",
      "خرید حلوای لقمه‌ای",
      "بهترین حلوای لقمه‌ای",
      "حلوای لقمه‌ای ارومیه",
      "حلوای لقمه‌ای اورمیه",
      "قیمت حلوای لقمه‌ای",
      "حلوای لقمه‌ای از کجا بخریم",
      "حلوای پذیرایی",
      "حلوای مجلسی",
      "حلوا سوغات ارومیه",
    ],
  },
];

const relatedSeoTags = [
  {
    title: "نقل گردویی",
    group: "نقل",
    description: "تگ عمومی نقل گردویی برای اتصال به همه محصولات نقل گردویی با طعم‌ها و مدل‌های مختلف.",
    keynotes: [
      "نقل گردویی",
      "نقل گردوئی",
      "خرید نقل گردویی",
      "بهترین نقل گردویی",
      "نقل گردویی ارومیه",
      "نقل گردویی اورمیه",
      "نقل مغزدار گردویی",
      "قیمت نقل گردویی",
      "نقل گردویی از کجا بخریم",
      "سوغات ارومیه",
    ],
  },
  {
    title: "نقل مغزدار",
    group: "نقل",
    description: "تگ مرتبط برای نقل‌های مغزدار مثل نقل گردویی، بادامی و پسته‌ای.",
    keynotes: [
      "نقل مغزدار",
      "خرید نقل مغزدار",
      "بهترین نقل مغزدار",
      "نقل مغزدار ارومیه",
      "نقل مغزدار اورمیه",
      "نقل گردویی",
      "نقل بادامی",
      "نقل پسته‌ای",
      "سوغات ارومیه",
    ],
  },
  {
    title: "نقل وانیلی",
    group: "نقل",
    description: "تگ مرتبط برای محصولات نقل با طعم وانیل و نقل‌های مناسب پذیرایی.",
    keynotes: [
      "نقل وانیلی",
      "خرید نقل وانیلی",
      "بهترین نقل وانیلی",
      "نقل وانیلی ارومیه",
      "نقل وانیلی اورمیه",
      "نقل گردویی وانیلی",
      "قیمت نقل وانیلی",
    ],
  },
  {
    title: "نقل محمدی",
    group: "نقل",
    description: "تگ مرتبط برای نقل‌های گل محمدی و محمدی، از جمله نقل ریز و نقل گردویی محمدی.",
    keynotes: [
      "نقل محمدی",
      "نقل گل محمدی",
      "نقل ریز محمدی",
      "نقل گردویی محمدی",
      "خرید نقل محمدی",
      "بهترین نقل محمدی",
      "نقل محمدی ارومیه",
      "نقل محمدی اورمیه",
    ],
  },
  {
    title: "نقل زعفرانی",
    group: "نقل",
    description: "تگ مرتبط برای همه محصولات نقل زعفرانی، ساده یا مغزدار.",
    keynotes: [
      "نقل زعفرانی",
      "نقل گردویی زعفرانی",
      "خرید نقل زعفرانی",
      "بهترین نقل زعفرانی",
      "نقل زعفرانی ارومیه",
      "نقل زعفرانی اورمیه",
      "قیمت نقل زعفرانی",
    ],
  },
  {
    title: "نقل ریز",
    group: "نقل",
    description: "تگ مرتبط برای نقل‌های ریز مخصوص پذیرایی، شیرینی‌خوری و سوغات.",
    keynotes: [
      "نقل ریز",
      "خرید نقل ریز",
      "بهترین نقل ریز",
      "نقل ریز ارومیه",
      "نقل ریز اورمیه",
      "نقل ریز گل محمدی",
      "نقل پذیرایی",
      "سوغات ارومیه",
    ],
  },
  {
    title: "نقل ارومیه",
    group: "نقل",
    description: "تگ جغرافیایی برای محصولات نقل مرتبط با ارومیه و اورمیه.",
    keynotes: [
      "نقل ارومیه",
      "نقل اورمیه",
      "خرید نقل ارومیه",
      "بهترین نقل ارومیه",
      "نقل اصل ارومیه",
      "سوغات ارومیه",
      "سوغات اورمیه",
      "نقل از کجا بخریم",
    ],
  },
  {
    title: "نقل پذیرایی",
    group: "نقل",
    description: "تگ مرتبط برای نقل‌های مناسب پذیرایی، مهمانی، مراسم و هدیه.",
    keynotes: [
      "نقل پذیرایی",
      "نقل مهمانی",
      "نقل مجلسی",
      "خرید نقل پذیرایی",
      "بهترین نقل پذیرایی",
      "نقل برای مراسم",
      "نقل هدیه",
      "نقل ارومیه",
    ],
  },
  {
    title: "نقل سنتی",
    group: "نقل",
    description: "تگ مرتبط برای نقل‌های سنتی و سوغات اصیل ارومیه.",
    keynotes: [
      "نقل سنتی",
      "خرید نقل سنتی",
      "بهترین نقل سنتی",
      "نقل سنتی ارومیه",
      "نقل سنتی اورمیه",
      "سوغات سنتی ارومیه",
      "شیرینی سنتی",
    ],
  },
  {
    title: "سوغات ارومیه",
    group: "سوغات",
    description: "تگ عمومی برای محصولات سوغات ارومیه مثل نقل، حلوا و عرقیجات.",
    keynotes: [
      "سوغات ارومیه",
      "سوغات اورمیه",
      "خرید سوغات ارومیه",
      "بهترین سوغات ارومیه",
      "سوغات ارومیه از کجا بخریم",
      "نقل ارومیه",
      "حلوا ارومیه",
      "عرقیجات ارومیه",
    ],
  },
  {
    title: "سوغات اورمیه",
    group: "سوغات",
    description: "تگ جایگزین املایی برای سوغات اورمیه و محصولات محلی شهر.",
    keynotes: [
      "سوغات اورمیه",
      "سوغات ارومیه",
      "خرید سوغات اورمیه",
      "بهترین سوغات اورمیه",
      "نقل اورمیه",
      "حلوا اورمیه",
      "عرقیجات اورمیه",
    ],
  },
  {
    title: "حلوای سنتی",
    group: "حلوا",
    description: "تگ مرتبط برای همه محصولات حلوای سنتی مثل گردویی، هویج، پسته‌ای و لقمه‌ای.",
    keynotes: [
      "حلوای سنتی",
      "خرید حلوای سنتی",
      "بهترین حلوای سنتی",
      "حلوای سنتی ارومیه",
      "حلوای سنتی اورمیه",
      "حلوا سوغات ارومیه",
      "حلوا سوغات اورمیه",
    ],
  },
  {
    title: "حلوای مغزدار",
    group: "حلوا",
    description: "تگ مرتبط برای حلواهای مغزدار مثل حلوای گردویی و حلوای پسته‌ای.",
    keynotes: [
      "حلوای مغزدار",
      "خرید حلوای مغزدار",
      "بهترین حلوای مغزدار",
      "حلوای گردویی",
      "حلوای پسته‌ای",
      "حلوای مغزدار ارومیه",
      "حلوا مجلسی",
    ],
  },
  {
    title: "حلوای مجلسی",
    group: "حلوا",
    description: "تگ مرتبط برای حلواهای مناسب پذیرایی، مهمانی، مراسم و هدیه.",
    keynotes: [
      "حلوای مجلسی",
      "خرید حلوای مجلسی",
      "بهترین حلوای مجلسی",
      "حلوای پذیرایی",
      "حلوای لقمه‌ای",
      "حلوای پسته‌ای",
      "حلوا برای مراسم",
    ],
  },
  {
    title: "حلوای پذیرایی",
    group: "حلوا",
    description: "تگ مرتبط برای حلواهای مناسب پذیرایی و مراسم.",
    keynotes: [
      "حلوای پذیرایی",
      "خرید حلوای پذیرایی",
      "بهترین حلوای پذیرایی",
      "حلوای لقمه‌ای",
      "حلوای مجلسی",
      "حلوا برای مهمانی",
      "حلوا برای مراسم",
    ],
  },
  {
    title: "حلوای ارومیه",
    group: "حلوا",
    description: "تگ جغرافیایی برای حلواهای سنتی ارومیه و اورمیه.",
    keynotes: [
      "حلوای ارومیه",
      "حلوای اورمیه",
      "خرید حلوای ارومیه",
      "بهترین حلوای ارومیه",
      "حلوای ارومیه از کجا بخریم",
      "حلوا سوغات ارومیه",
      "حلوا سوغات اورمیه",
    ],
  },
  {
    title: "عرقیجات ارومیه",
    group: "عرقیجات",
    description: "تگ جغرافیایی برای عرقیجات سنتی ارومیه و اورمیه.",
    keynotes: [
      "عرقیجات ارومیه",
      "عرقیجات اورمیه",
      "خرید عرقیجات ارومیه",
      "بهترین عرقیجات ارومیه",
      "عرقیجات ارومیه از کجا بخریم",
      "گلاب ارومیه",
      "عرق بیدمشک ارومیه",
      "سوغات ارومیه",
    ],
  },
  {
    title: "عرقیجات سنتی",
    group: "عرقیجات",
    description: "تگ مرتبط برای عرقیجات گیاهی و سنتی مثل گلاب، بیدمشک، نعنا و کاسنی.",
    keynotes: [
      "عرقیجات سنتی",
      "خرید عرقیجات سنتی",
      "بهترین عرقیجات سنتی",
      "عرقیجات گیاهی",
      "گلاب",
      "عرق نعنا",
      "عرق کاسنی",
      "عرق بیدمشک",
    ],
  },
];

function slugify(value) {
  return String(value || "")
    .trim()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\u0600-\u06FFa-z0-9-_]/g, "");
}

function categoryFilterOverrides(categoryTitle, definition) {
  if (definition.key !== "flavor") return {};

  if (categoryTitle === "حلوا") {
    return {
      options: [
        { label: "زعفرانی", value: "saffron" },
        { label: "دارچینی", value: "cinnamon" },
        { label: "زنجبیلی", value: "ginger" },
      ],
    };
  }

  if (categoryTitle === "عرقیجات" || categoryTitle === "شربت و بطری") {
    return {
      options: [
        { label: "بهارنارنج", value: "orange_blossom" },
        { label: "گلاب", value: "rose_water" },
        { label: "زعفران", value: "saffron" },
      ],
    };
  }

  return {};
}

async function upsertCategory(category) {
  const existing = await Category.findOne({
    title: category.title,
    isDeleted: false,
  });

  if (existing) {
    await ensureCategoryTranslation(existing, category);
    return existing;
  }

  const created = await Category.create({
    title: category.title,
    status: "active",
    isDeleted: false,
  });

  await ensureCategoryTranslation(created, category);
  return created;
}

async function ensureCategoryTranslation(categoryDoc, categorySeed) {
  const slug = slugify(categorySeed.title);
  const translation = await CategoryTranslation.findOneAndUpdate(
    { category: categoryDoc._id, language: "fa" },
    {
      $set: {
        category: categoryDoc._id,
        language: "fa",
        title: categorySeed.title,
        description: categorySeed.description || "",
        slug,
        canonicalUrl: "",
        tags: [],
        keynotes: [],
      },
    },
    { new: true, upsert: true, runValidators: true }
  );

  const hasTranslation = (categoryDoc.translations || []).some(
    (item) => String(item.translation) === String(translation._id)
  );

  if (!hasTranslation) {
    await Category.findByIdAndUpdate(categoryDoc._id, {
      $addToSet: {
        translations: {
          translation: translation._id,
          language: "fa",
        },
      },
    });
  }
}

async function upsertFilterDefinition(definition) {
  return FilterDefinition.findOneAndUpdate(
    { key: definition.key, isDeleted: false },
    {
      $set: {
        ...definition,
        status: "active",
        isDeleted: false,
        updatedAt: Date.now(),
      },
      $setOnInsert: { createdAt: Date.now() },
    },
    { new: true, upsert: true, runValidators: true }
  );
}

async function upsertCategoryFilter(category, definition, sortOrder) {
  const overrides = categoryFilterOverrides(category.title, definition);
  const payload = {
    category: category._id,
    filter: definition._id,
    key: definition.key,
    label: definition.label,
    type: definition.type,
    options: overrides.options || definition.options || [],
    min: definition.min ?? null,
    max: definition.max ?? null,
    unit: definition.unit || "",
    isRequired: false,
    sortOrder,
    status: "active",
    isDeleted: false,
    updatedAt: Date.now(),
  };

  if (!["select", "multi_select", "color"].includes(payload.type)) {
    payload.options = [];
  }

  if (!["number", "range"].includes(payload.type)) {
    payload.min = null;
    payload.max = null;
    payload.unit = "";
  }

  return CategoryFilter.findOneAndUpdate(
    { category: category._id, filter: definition._id, isDeleted: false },
    { $set: payload, $setOnInsert: { createdAt: Date.now() } },
    { new: true, upsert: true, runValidators: true }
  );
}

async function getSeedCreator() {
  const admin = await Admin.findOne({
    isDeleted: false,
    role: { $in: ["superAdmin", "admin", "operator"] },
  }).select("_id");

  if (!admin) {
    throw new Error("برای seed تگ‌ها حداقل یک ادمین فعال لازم است.");
  }

  return admin._id;
}

async function ensureTagTranslation(tagDoc, tagSeed) {
  const slug = slugify(tagSeed.title);
  const canonicalUrl = `${process.env.NEXT_PUBLIC_CLIENT_URL || ""}/tag/${tagDoc.tagId || tagDoc._id}/${slug}`;

  const translation = await TagTranslation.findOneAndUpdate(
    { tag: tagDoc._id, language: "fa" },
    {
      $set: {
        tag: tagDoc._id,
        language: "fa",
        title: tagSeed.title,
        description: tagSeed.description,
        slug,
        canonicalUrl,
        metaTitle: tagSeed.title,
        metaDescription: tagSeed.description,
        keynotes: tagSeed.keynotes || [],
        group: tagSeed.group,
      },
    },
    { new: true, upsert: true, runValidators: true }
  );

  const hasTranslation = (tagDoc.translations || []).some(
    (item) => String(item.translation) === String(translation._id)
  );

  if (!hasTranslation) {
    await Tag.findByIdAndUpdate(tagDoc._id, {
      $addToSet: {
        translations: {
          translation: translation._id,
          language: "fa",
        },
      },
    });
  }
}

async function upsertTag(tagSeed, creator) {
  const existing = await Tag.findOne({
    title: tagSeed.title,
    isDeleted: false,
  });

  if (existing) {
    await Tag.findByIdAndUpdate(existing._id, {
      $set: {
        title: tagSeed.title,
        creator: existing.creator || creator,
        status: "active",
        isDeleted: false,
        updatedAt: Date.now(),
      },
    });
    await ensureTagTranslation(existing, tagSeed);
    return existing;
  }

  const created = await Tag.create({
    title: tagSeed.title,
    creator,
    status: "active",
    isDeleted: false,
  });

  await ensureTagTranslation(created, tagSeed);
  return created;
}

async function run() {
  await mongoose.connect(process.env.ATLAS_URI, {
    dbName: process.env.DB_NAME,
  });

  const seedCreator = await getSeedCreator();

  const createdCategories = new Map();
  for (const category of categories) {
    const doc = await upsertCategory(category);
    createdCategories.set(category.title, doc);
  }

  const createdDefinitions = new Map();
  for (const definition of filterDefinitions) {
    const doc = await upsertFilterDefinition(definition);
    createdDefinitions.set(definition.key, doc);
  }

  let categoryFilterCount = 0;
  for (const [categoryTitle, filterKeys] of Object.entries(categoryFilterMap)) {
    const category = createdCategories.get(categoryTitle);
    if (!category) continue;

    for (const [index, filterKey] of filterKeys.entries()) {
      const definition = createdDefinitions.get(filterKey);
      if (!definition) continue;

      await upsertCategoryFilter(category, definition, index);
      categoryFilterCount += 1;
    }
  }

  const allTags = [...tags, ...seoProductTags, ...relatedSeoTags];
  let tagCount = 0;
  for (const tag of allTags) {
    await upsertTag(tag, seedCreator);
    tagCount += 1;
  }

  console.log(
    `Seeded ${createdCategories.size} categories, ${createdDefinitions.size} filter definitions, ${categoryFilterCount} category filters, ${tagCount} tags.`
  );

  await mongoose.disconnect();
}

run().catch(async (error) => {
  console.error(error);
  await mongoose.disconnect();
  process.exit(1);
});
