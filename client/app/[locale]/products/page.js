

import Banner3 from "@/components/home/Banner3";
import ExpertChoice from "@/components/home/ExpertChoice";
import FilterSidebar from "@/components/porducts/FilterSidebar";
import FilteredProducts from "@/components/porducts/FilteredProducts";
import Container from "@/components/shared/Container";
import Main from "@/components/shared/layouts/Main";
import React from "react";
import { getTranslations } from "next-intl/server";
import { buildMetadata, defaultOgImage, localizedPath } from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return buildMetadata({
    title: "خرید نقل، حلوا و شیرینی سنتی",
    description:
      "مشاهده و خرید محصولات نقل، حلوا، شیرینی سنتی و سوغات با کیفیت از نقل و حلوای ناب",
    canonical: localizedPath(locale, "/products"),
    image: defaultOgImage,
    locale,
    type: "website"
  });
}

const Products = ({params }) => {

  return (
    <Main>

        <div className="grid grid-cols-12 gap-8 pb-12 md:relative ">
          <FilterSidebar />
          <FilteredProducts />
        </div>
        <ExpertChoice params={params} className="!px-0"  />
        <Banner3 className="!px-0" params={params} />
    </Main>
  );
};

export default Products;
