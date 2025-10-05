

import Banner3 from "@/components/home/Banner3";
import ExpertChoice from "@/components/home/ExpertChoice";
import FilterSidebar from "@/components/porducts/FilterSidebar";
import FilteredProducts from "@/components/porducts/FilteredProducts";
import Container from "@/components/shared/Container";
import Main from "@/components/shared/layouts/Main";
import React from "react";
import { getTranslations } from "next-intl/server";

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
