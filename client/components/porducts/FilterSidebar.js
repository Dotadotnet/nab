"use client";

import { useGetCategoriesQuery } from "@/services/category/categoryApi";
import React, { useEffect, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import SelectCard from "../shared/skeletonLoading/SelectCard";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilter,
  setCategory,
  setDateRange,
  setPriceRange
} from "@/features/filter/filterSlice";
import { useRouter, useSearchParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { BiSolidStar } from "react-icons/bi";
import { useTranslations } from "next-intl";

const FilterSidebar = () => {
  const f = useTranslations("FillterPage")
  const t = useTranslations("Tools")
  const [priceRange, setPriceRangeLocal] = useState({ min: 50, max: 5000 });
  const [dateRange, setDateRangeLocal] = useState({
    startDate: null,
    endDate: null,
  });
  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: categoriesLoading
  } = useGetCategoriesQuery();


  const handlePriceRangeChange = (min, max) => {
    setPriceRangeLocal({ min, max });
    dispatch(setPriceRange({ min, max }));
  };

  const handleDateRangeChange = (startDate, endDate) => {
    setDateRangeLocal({ startDate, endDate });
    dispatch(setDateRange({ startDate, endDate }));
  };
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = useSelector((state) => state.filter);

  const category = searchParams.get("category");

  const categories = categoriesData?.data || [];

  useEffect(() => {


    if (categoriesError?.data) {
      toast.error(categoriesError?.data?.description, {
        id: "categories-data"
      });
    }

  }, [categoriesError,]);

  return (
    <aside className="lg:col-span-3 md:col-span-4 mt-24 col-span-12">
      <section className="flex flex-col gap-y-4 md:sticky md:top-32">
        {/* reset */}
        <div className="flex flex-row items-center justify-between border py-2 px-4 rounded">
          <h2 className="text-lg">{f("ResetFillter")}</h2>

          <button
            className="p-1 border rounded-secondary"
            onClick={() => {
              dispatch(clearFilter());

              // Uncheck all checkboxes for categories
              categories.forEach((category) => {
                document.getElementById(category._id).checked = false;
              });





              // Use setTimeout to delay the navigation
              router.push("/products");
            }}
          >
            <AiOutlineReload className="h-5 w-5" />
          </button>
        </div>

        {/* Choose Category */}
        <div className="flex flex-col gap-y-4 border py-2 px-4 rounded-xl max-h-96 overflow-y-auto scrollbar-hide">
          <h2 className="text-lg">{t("Category")} :</h2>
          <div className="flex flex-col gap-y-2.5">
            {categoriesLoading || categories?.length === 0 ? (
              <>
                {[1, 2, 3].map((_, index) => (
                  <SelectCard key={index} />
                ))}
              </>
            ) : (
              <>
                {categories.map((category) => (
                  <Link
                    key={category._id}
                    href={`/products?category=${category._id}`}
                  >
                    <label
                      htmlFor={category._id}
                      className="text-sm flex flex-row items-center gap-x-1.5"
                      onChange={() => dispatch(setCategory(category._id))}
                    >
                      <input
                        type="radio"
                        name="category"
                        id={category._id}
                        value={category._id}
                        checked={
                          category._id === filter.category ||
                          category._id === category
                        }
                        className="rounded-secondary checked:bg-primary checked:text-black checked:outline-none checked:ring-0 checked:border-0 focus:outline-none focus:ring-0 focus:border-1 focus:text-black"
                      />
                      {category.title}
                    </label>
                  </Link>
                ))}
              </>
            )}
          </div>
        </div>
        {/* choose price */}
        <div className="flex flex-col gap-y-4 border py-2 px-4 rounded">
          <h2 className="text-lg">{f("PriceRange")} : </h2>
          <label htmlFor="price" className="flex flex-col gap-y-2">
            <input
              type="range"
              name="price"
              id="price"
              min={50}
              max={5000}
              value={priceRange.min}
              onChange={(e) =>
                handlePriceRangeChange(Number(e.target.value), priceRange.max)
              }
              className="flex-1 bg-green-200 appearance-none h-0 rounded"
            />
            <p className="text-xs flex flex-row items-center justify-between">
              {t("Toman")} {priceRange.min.toFixed(3)}
              <span className="text-xs"> {t("Toman")} {priceRange.max.toFixed(3)}</span>
            </p>
          </label>
        </div>
        {/* باید از بک اند بیاد */}
      <div className="flex flex-col gap-y-4 border py-2 px-4 rounded-xl">
          <h2 className="text-lg flex items-baseline gap-x-1">
            {f("SelectBySize")} <span className="!text-xs">( {t("ComingSoon") + " ... "} )</span>
          </h2>
          <div className="flex flex-col gap-y-2.5">
            <label
              htmlFor="xs"
              className="text-sm flex flex-row items-center gap-x-1.5"
            >
              <input
                type="checkbox"
                name="xs"
                id="xs"
                className="rounded-secondary checked:bg-primary checked:text-black checked:outline-none checked:ring-0 checked:border-0 focus:outline-none focus:ring-0 focus:border-1"
              />
              نیم کیلوئی
            </label>
            <label
              htmlFor="2xl"
              className="text-sm flex flex-row items-center gap-x-1.5"
            >
              <input
                type="checkbox"
                name="2xl"
                id="2xl"
                className="rounded-secondary checked:bg-primary checked:text-black checked:outline-none checked:ring-0 checked:border-0 focus:outline-none focus:ring-0 focus:border-1"
              />
              یک کیولئی
            </label>
            <label
              htmlFor="lg"
              className="text-sm flex flex-row items-center gap-x-1.5"
            >
              <input
                type="checkbox"
                name="lg"
                id="lg"
                className="rounded-secondary checked:bg-primary checked:text-black checked:outline-none checked:ring-0 checked:border-0 focus:outline-none focus:ring-0 focus:border-1"
              />
              دو کیلوئی
            </label>
            <label
              htmlFor="m"
              className="text-sm flex flex-row items-center gap-x-1.5"
            >
              <input
                type="checkbox"
                name="m"
                id="m"
                className="rounded-secondary checked:bg-primary checked:text-black checked:outline-none checked:ring-0 checked:border-0 focus:outline-none focus:ring-0 focus:border-1"
              />
              نیم لیتری
            </label>
            <label
              htmlFor="m"
              className="text-sm flex flex-row items-center gap-x-1.5"
            >
              <input
                type="checkbox"
                name="m"
                id="m"
                className="rounded-secondary checked:bg-primary checked:text-black checked:outline-none checked:ring-0 checked:border-0 focus:outline-none focus:ring-0 focus:border-1"
              />
              یک لیتری
            </label>
            <label
              htmlFor="m"
              className="text-sm flex flex-row items-center gap-x-1.5"
            >
              <input
                type="checkbox"
                name="m"
                id="m"
                className="rounded-secondary checked:bg-primary checked:text-black checked:outline-none checked:ring-0 checked:border-0 focus:outline-none focus:ring-0 focus:border-1"
              />
              یک و نیم لیتری
            </label>
          </div>
        </div> 


      </section>
    </aside>
  );
};

export default FilterSidebar;
