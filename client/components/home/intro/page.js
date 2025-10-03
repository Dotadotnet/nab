import React from "react";
import ProductCard from "@/components/shared/skeletonLoading/ProductCard";
import ProductsSlider from "./ProductsSlider";
import KeyFeaturesSlider from "./KeyFeaturesSlider";
import {
  FiChevronDown as ChevronDown,
  FiChevronUp as ChevronUp,
  FiTruck as Truck,
  FiGift as Gift,
  FiShield as Shield,
  FiStar as Star,
  FiHeart as Heart
} from "react-icons/fi";
import SEOHead from "./SEOHead";
import {
  siteConfig,
  heroContent,
  keyFeatures,
  aboutContent,
  productCategories,
  additionalCategories,
  conclusion
} from "./Data";

export default async function HomeIntroSection({params}) {
  const { locale } = await params;

  const api = `${process.env.NEXT_PUBLIC_BASE_URL}/product/get-products`;
  let products = [];
  try {
    const res = await fetch(api, { cache: "no-store", next: { tags: ["product"] }, headers: { "Accept-Language": locale } });
    if (res.ok) {
      const json = await res.json();
      products = json?.data || [];
    }
  } catch {}
  const colors = [
    "orange",
    "green",
    "pink",
    "yellow",
    "blue",
    "teal",
    "purple",
    "indigo",
    "cyan",
    "red"
  ];


  return (
    <>
      <SEOHead
        title={heroContent.title}
        description={heroContent.subtitle}
        keywords="حلوا, شیرینی سنتی, حلوا ارده, سوهان, گز اصفهان, شیرینی ایرانی, حلواپزی ناب"
      />

        <div className="md:max-w-7xl max-w-screen mx-auto">

   
              <div className="flex px-8 items-center gap-4">
         
                <div className="text-right">
                <h1 className="text-4xl font-bold mb-1">نقل و حلوای ناب؛ بزرگ‌ترین کارگاه نقل و حلوای ایران</h1>
    
                </div>
              </div>


            {/* Collapsible Content */}
            <div
              className={`overflow-hidden transition-all duration-500 `}
            >
              <div className="p-6 space-y-8">
                {/* Key Features */}
                <div role="region" aria-label="ویژگی‌های کلیدی" className="mb-8">
                  <KeyFeaturesSlider features={keyFeatures} />
                </div>

                {/* Main Content */}
                <div className="prose prose-lg max-w-none text-gray-700 leading-relaxed space-y-6">
                  {/* Introduction */}
                  <div className="bg-gradient-to-r from-indigo-50 to-purple-50 p-6 rounded-xl border-r-4 border-indigo-500">
                    <h3 className="text-2xl font-bold text-indigo-800 mb-4">
                      {aboutContent.introduction.title}
                    </h3>
                    <p className="text-base">
                      {aboutContent.introduction.content}
                    </p>
                  </div>

                  {/* Key Features Section */}
                  <div className="bg-gradient-to-r from-green-50 to-teal-50 p-6 rounded-xl border-r-4 border-green-500">
                    <h3 className="text-2xl font-bold text-green-800 mb-4">
                      {aboutContent.features.title}
                    </h3>
                    <p className="text-base">{aboutContent.features.content}</p>
                  </div>

                  {/* Fast Delivery Section */}
                  <div className="bg-gradient-to-r from-blue-50 to-cyan-50 p-6 rounded-xl border-r-4 border-blue-500">
                    <h3 className="text-2xl font-bold text-blue-800 mb-4">
                      {aboutContent.delivery.title}
                    </h3>
                    <p className="text-base">{aboutContent.delivery.content}</p>
                  </div>

                  {/* Special Offers Section */}
                  <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-xl border-r-4 border-purple-500">
                    <h3 className="text-2xl font-bold text-purple-800 mb-4">
                      {aboutContent.offers.title}
                    </h3>
                    <p className="text-base">{aboutContent.offers.content}</p>
                  </div>

                  {/* New Arrivals (replaces Product Categories) */}
                  <div
                    className=" gap-6 overflow-hidden px-4"
                    role="region"
                    aria-label="محصولات جدید"
                  >
                    {products.length === 0 ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {[1, 2, 3, 4].map((_, idx) => (
                          <div
                            key={idx}
                            className={`bg-gradient-to-br from-gray-50 to-gray-100 p-4 rounded-xl`}
                          >
                            <div className="flex items-center gap-3 animate-pulse">
                              <div className="w-12 h-12 rounded-lg bg-gray-200" />
                              <div className="flex-1 space-y-2">
                                <div className="h-3 bg-gray-200 rounded w-2/3" />
                                <div className="h-3 bg-gray-200 rounded w-5/6" />
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <ProductsSlider products={products} locale={locale} />
                    )}
                  </div>

                

               
              </div>
            </div>
            </div>
          </div>

       
    </>
  );
}
