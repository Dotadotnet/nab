// pages/new-arrivals.tsx
import React from "react";
import HighlightText from "@/components/shared/highlightText/HighlightText";
import Container from "@/components/shared/Container";
import ProductCard from "@/components/shared/skeletonLoading/ProductCard";
import NewArrivalsCarousel from "./NewArrivalsCarousel";
import Card from "@/components/shared/card/card/Card";
import { getTranslations } from "next-intl/server";

const NewArrivals = async ({ params }) => {
  const { locale } = await params;

  const api = `${process.env.NEXT_PUBLIC_BASE_URL}/product/get-products`;
  let products = [];
  let error = null;

  try {
    const response = await fetch(api, {
      cache: "no-store",
      next: { tags: ["product"] },
      headers: {
        "Accept-Language": locale
      }
    });
    if (!response.ok) {
      throw new Error("Failed to fetch products");
    }
    const res = await response.json();
    products = res.data || [];
  } catch (err) {
    error = err.message;
  }

  const t = await getTranslations("HomePage");
  console.log(products);

  return (
    <Container>
      <section className="flex flex-col gap-y-10">
        <div className="lg:text-5xl md:text-4xl text-3xl w-fit whitespace-normal">
          <HighlightText title={t("ProductsnNewUs")} /> {/* Fixed typo */}
        </div>

        <div>
          {error ? (
            <p className="text-red-500">Error: {error}</p>
          ) : products.length === 0 ? (
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-6 gap-y-8">
              {[1, 2, 3, 4].map((_, index) => (
                <ProductCard key={index} />
              ))}
            </div>
          ) : (
            <>
              <div className="hidden md:grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-6 gap-y-8">
                {products.map((product, index) => (
                  <Card key={index} index={index} product={product} />
                ))}
              </div>
              <div className="block md:hidden">
                <NewArrivalsCarousel products={products} />
              </div>
            </>
          )}
        </div>
      </section>
    </Container>
  );
};

export default NewArrivals;
