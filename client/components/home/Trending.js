import React from "react";
import Container from "../shared/Container";
import Spinner from "../shared/Spinner";
import ProductCard from "../shared/skeletonLoading/ProductCard";
import HighlightText from "../shared/highlightText/HighlightText";
import Link from "next/link";
import Card from "../shared/card/card/Card";
import { getTranslations } from "next-intl/server"; // For server components

const Trending = async ({ params }) => {
  const { locale } = await params;

  const api = `${process.env.NEXT_PUBLIC_BASE_URL}` + `/product/get-products`;
  const response = await fetch(api, {
    cache: "no-store",
    next: { tags: ["product", `product`] },
    headers: {
      "Accept-Language": locale
    }
  });
  const res = await response.json();
  const products = res.data;
  const t = await getTranslations("HomePage");

  return (
    <Container>
      <div className="flex flex-col gap-y-10">
        <div className="lg:text-5xl md:text-4xl text-3xl w-fit whitespace-normal">
          <HighlightText title={t("TrendingProductsToDay")} />
        </div>
        <div className="flex flex-col gap-y-12">
          <div className="grid lg:grid-cols-4 gap-x-2 md:grid-cols-2 grid-cols-2  gap-y-8">
            {products?.length === 0 ? (
              <>
                {[1, 2, 3, 4].map((_, index) => (
                  <ProductCard key={index} />
                ))}
              </>
            ) : (
              <>
                {products?.slice(-8)?.map((product, index) => (
                  <div className="scale-90">
                  <Card key={index} product={product} />
                  </div>
                ))}
              </>
            )}
          </div>
          <Link
            className="px-8 py-4 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow w-fit mx-auto flex flex-row gap-x-2 items-center"
            href={`${locale}/products`}
          >
            {t("seeMore")}
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Trending;
