

"use client";

import React, { useEffect, useMemo } from "react";
import {
  useGetFilteredProductsMutation,
} from "@/services/product/productApi";
import { useDispatch, useSelector } from "react-redux";
import ProductCard from "../shared/skeletonLoading/ProductCard";
import { useSearchParams } from "next/navigation";
import { toast } from "react-hot-toast";
import {  setCategory,setPriceRange  } from "@/features/filter/filterSlice";
import { useTranslations } from "next-intl";
import Card from "../shared/card/card/Card";

const FilteredProducts = () => {
  const filter = useSelector((state) => state.filter);
  const f = useTranslations("FillterPage")
  const t = useTranslations("Tools")

  const [
    addFilter,
    { data: productsData, error: productsError, isLoading: productsLoading },
  ] = useGetFilteredProductsMutation();
  const products = useMemo(() => productsData?.data || [], [productsData]);

  const dispatch = useDispatch();
  const searchParams = useSearchParams();
  const category = searchParams.get("category");
  const price = searchParams.get("price");

  // Build query string properly from filter state
  useEffect(() => {
    const params = new URLSearchParams();
    if (filter?.category) params.set("category", filter.category);
    if (filter?.store) params.set("store", filter.store);
    if (filter?.priceRange) {
      if (filter.priceRange.min != null) params.set("minPrice", String(filter.priceRange.min));
      if (filter.priceRange.max != null) params.set("maxPrice", String(filter.priceRange.max));
    }
    if (filter?.dateRange) {
      if (filter.dateRange.startDate) params.set("startDate", filter.dateRange.startDate);
      if (filter.dateRange.endDate) params.set("endDate", filter.dateRange.endDate);
    }
    addFilter(params.toString());
  }, [filter, addFilter]);

  useEffect(() => {
    if (productsLoading) {
      toast.loading(t("Loading"), {
        id: "filtered-products",
      });
    }

    if (productsData) {
      toast.success(productsData?.description, {
        id: "filtered-products",
      });
    }

    if (productsError?.data) {
      toast.error(productsError?.data?.description, {
        id: "filtered-products",
      });
    }

    if (category) dispatch(setCategory(category));
    if (price) {
      const [minStr, maxStr] = String(price).split("-");
      const min = Number(minStr);
      const max = Number(maxStr);
      if (!Number.isNaN(min) && !Number.isNaN(max)) {
        dispatch(setPriceRange({ min, max }));
      }
    }

  }, [
    productsError,
    productsData,
    productsLoading,
    category,
    price,
    dispatch,
  ]);

  return (
    <div className="lg:col-span-9 md:col-span-8 col-span-12 mt-24">
      <div className="flex flex-col gap-y-8">
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:gap-x-6 gap-y-8">
          {productsLoading ||!productsLoading && products?.length === 0? (
            <>
              {[1, 2, 3, 4, 5, 6].map((_, index) => (
                <ProductCard key={index} />
              ))}
            </>
          ) : (
            <>
              {products.map((product, index) => (
                <Card key={index} product={product} />
              ))}
            </>
          )}
        </div>
        
      </div>
    </div>
  );
};

export default FilteredProducts;
