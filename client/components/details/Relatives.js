import React from "react";
import ProductCard from "../shared/skeletonLoading/ProductCard";
import Card from "../shared/card/card/Card";
import { getTranslations } from "next-intl/server"; // Import getTranslations for Server Components
import HighlightText from "../shared/highlightText/HighlightText";

const Relatives = async ( ) => {
  const api = `${process.env.NEXT_PUBLIC_BASE_URL}/product/get-products`;
  const response = await fetch(api, {
    cache: "no-store",
    next: { tags: ["product", `product`] },
  });
  const res = await response.json();
  const products = res.data;

  const h = await getTranslations("HomePage");

  return (
    <section className="flex flex-col gap-y-10">
      <HighlightText title={h("similarProduct")} center />
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-x-6 gap-y-8">
        {products?.length === 0 ? (
          <>
            {[1, 2, 3, 4].map((_, index) => (
              <ProductCard key={index} />
            ))}
          </>
        ) : (
          <>
            {products?.slice(0, 8)?.map((product, index) => (
              <Card key={index} product={product} />
            ))}
          </>
        )}
      </div>
    </section>
  );
};

export default Relatives;