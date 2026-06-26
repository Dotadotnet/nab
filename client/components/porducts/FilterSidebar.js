"use client";

import { useGetCategoriesQuery } from "@/services/category/categoryApi";
import { useGetCategoryFiltersQuery } from "@/services/category/categoryFilterApi";
import React, { useEffect, useMemo, useState } from "react";
import { AiOutlineReload } from "react-icons/ai";
import SelectCard from "../shared/skeletonLoading/SelectCard";
import { toast } from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import {
  clearFilter,
  setCategory,
  setDynamicFilter,
  setPriceRange,
} from "@/features/filter/filterSlice";
import { useRouter, useSearchParams } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";

const inputClass =
  "rounded-secondary checked:bg-primary checked:text-black checked:outline-none checked:ring-0 checked:border-0 focus:outline-none focus:ring-0 focus:border-1";

function getFilterValue(filter, values) {
  return values?.[filter.key];
}

function DynamicFilterControl({ filter, value, onChange }) {
  const options = filter.options || [];

  if (filter.type === "multi_select" || filter.type === "color") {
    const selectedValues = Array.isArray(value) ? value : [];

    return (
      <div className="flex flex-col gap-y-2.5">
        {options.map((option) => {
          const checked = selectedValues.includes(option.value);

          return (
            <label
              className="text-sm flex flex-row items-center gap-x-1.5"
              htmlFor={`${filter.key}-${option.value}`}
              key={option.value}
            >
              <input
                checked={checked}
                className={inputClass}
                id={`${filter.key}-${option.value}`}
                onChange={() => {
                  const next = checked
                    ? selectedValues.filter((item) => item !== option.value)
                    : [...selectedValues, option.value];
                  onChange(next);
                }}
                type="checkbox"
              />
              {filter.type === "color" ? (
                <span
                  className="h-3 w-3 rounded-full border border-gray-200"
                  style={{ backgroundColor: option.value }}
                />
              ) : null}
              {option.label}
            </label>
          );
        })}
      </div>
    );
  }

  if (filter.type === "select") {
    return (
      <select
        className="w-full rounded border border-gray-100 bg-white px-3 py-2 text-sm outline-none"
        onChange={(event) => onChange(event.target.value)}
        value={value || ""}
      >
        <option value="">همه</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    );
  }

  if (filter.type === "boolean") {
    return (
      <label className="text-sm flex flex-row items-center gap-x-1.5">
        <input
          checked={value === true}
          className={inputClass}
          onChange={(event) => onChange(event.target.checked ? true : null)}
          type="checkbox"
        />
        فعال
      </label>
    );
  }

  if (filter.type === "range") {
    const rangeValue = value || {};

    return (
      <div className="grid grid-cols-2 gap-2">
        <input
          className="w-full rounded border border-gray-100 px-2 py-2 text-sm outline-none"
          max={filter.max ?? undefined}
          min={filter.min ?? undefined}
          onChange={(event) =>
            onChange({ ...rangeValue, min: event.target.value || null })
          }
          placeholder={filter.min ?? "حداقل"}
          type="number"
          value={rangeValue.min || ""}
        />
        <input
          className="w-full rounded border border-gray-100 px-2 py-2 text-sm outline-none"
          max={filter.max ?? undefined}
          min={filter.min ?? undefined}
          onChange={(event) =>
            onChange({ ...rangeValue, max: event.target.value || null })
          }
          placeholder={filter.max ?? "حداکثر"}
          type="number"
          value={rangeValue.max || ""}
        />
      </div>
    );
  }

  return (
    <input
      className="w-full rounded border border-gray-100 px-3 py-2 text-sm outline-none"
      onChange={(event) => onChange(event.target.value)}
      type={filter.type === "number" ? "number" : "text"}
      value={value || ""}
    />
  );
}

const FilterSidebar = () => {
  const locale = useLocale();
  const f = useTranslations("FillterPage");
  const t = useTranslations("Tools");
  const [priceRange, setPriceRangeLocal] = useState({ min: 500, max: 50000 });
  const dispatch = useDispatch();
  const router = useRouter();
  const searchParams = useSearchParams();
  const filter = useSelector((state) => state.filter);
  const category = searchParams.get("category");

  const {
    data: categoriesData,
    error: categoriesError,
    isLoading: categoriesLoading,
  } = useGetCategoriesQuery(locale);

  const selectedCategory = filter.category || category || "";
  const {
    data: categoryFiltersData,
    error: categoryFiltersError,
    isFetching: categoryFiltersLoading,
  } = useGetCategoryFiltersQuery(
    { category: selectedCategory, limit: 100 },
    { skip: !selectedCategory }
  );

  const categories = categoriesData?.data || [];
  const categoryFilters = useMemo(
    () =>
      (categoryFiltersData?.data || []).filter(
        (item) => item.status !== "inactive"
      ),
    [categoryFiltersData]
  );

  const handlePriceRangeChange = (min, max) => {
    setPriceRangeLocal({ min, max });
    dispatch(setPriceRange({ min, max }));
  };

  useEffect(() => {
    if (category) {
      dispatch(setCategory(category));
    }
  }, [category, dispatch]);

  useEffect(() => {
    if (categoriesError?.data) {
      toast.error(categoriesError?.data?.description, {
        id: "categories-data",
      });
    }

    if (categoryFiltersError?.data) {
      toast.error(categoryFiltersError?.data?.description, {
        id: "category-filters-data",
      });
    }
  }, [categoriesError, categoryFiltersError]);

  return (
    <aside className="lg:col-span-3 md:col-span-4 mt-40 col-span-12">
      <section className="flex flex-col gap-y-4 md:sticky md:top-32">
        <div className="flex flex-row items-center justify-between border py-2 px-4 rounded border-gray-100">
          <h2 className="text-lg">{f("ResetFillter")}</h2>

          <button
            className="p-1 border rounded-secondary border-gray-100"
            onClick={() => {
              dispatch(clearFilter());
              setPriceRangeLocal({ min: 500, max: 50000 });
              router.push("/products");
            }}
            type="button"
          >
            <AiOutlineReload className="h-5 w-5" />
          </button>
        </div>

        <div className="flex flex-col gap-y-4 border border-gray-100 py-2 px-4 rounded-xl max-h-96 overflow-y-auto scrollbar-hide">
          <h2 className="text-lg">{t("Category")} :</h2>
          <div className="flex flex-col gap-y-2.5">
            {categoriesLoading || categories?.length === 0 ? (
              [1, 2, 3].map((_, index) => <SelectCard key={index} />)
            ) : (
              categories.map((item) => (
                <Link key={item._id} href={`/products?category=${item._id}`}>
                  <label
                    className="text-sm flex flex-row items-center gap-x-1.5"
                    htmlFor={item._id}
                  >
                    <input
                      checked={item._id === selectedCategory}
                      className={inputClass}
                      id={item._id}
                      name="category"
                      onChange={() => dispatch(setCategory(item._id))}
                      type="radio"
                      value={item._id}
                    />
                    {item.title}
                  </label>
                </Link>
              ))
            )}
          </div>
        </div>

        <div className="flex flex-col gap-y-4 border border-gray-100 py-2 px-4 rounded">
          <h2 className="text-lg">{f("PriceRange")} : </h2>
          <label className="flex flex-col gap-y-2" htmlFor="price">
            <input
              className="flex-1 bg-green-200 appearance-none h-0 rounded"
              id="price"
              max={50000}
              min={500}
              name="price"
              onChange={(event) =>
                handlePriceRangeChange(
                  Number(event.target.value),
                  priceRange.max
                )
              }
              type="range"
              value={priceRange.min}
            />
            <p className="text-xs flex flex-row items-center justify-between">
              {t("Toman")} {priceRange.min.toLocaleString("fa-IR")}
              <span className="text-xs">
                {t("Toman")} {priceRange.max.toLocaleString("fa-IR")}
              </span>
            </p>
          </label>
        </div>

        {selectedCategory ? (
          <div className="flex flex-col gap-y-4 border border-gray-100 py-2 px-4 rounded-xl">
            {categoryFiltersLoading ? (
              [1, 2].map((_, index) => <SelectCard key={index} />)
            ) : categoryFilters.length ? (
              categoryFilters.map((item) => (
                <div className="flex flex-col gap-y-2.5" key={item._id}>
                  <h2 className="text-lg flex items-baseline gap-x-1">
                    {item.label}
                    {item.unit ? (
                      <span className="!text-xs">({item.unit})</span>
                    ) : null}
                  </h2>
                  <DynamicFilterControl
                    filter={item}
                    onChange={(value) =>
                      dispatch(setDynamicFilter({ key: item.key, value }))
                    }
                    value={getFilterValue(item, filter.dynamicFilters)}
                  />
                </div>
              ))
            ) : null}
          </div>
        ) : null}
      </section>
    </aside>
  );
};

export default FilterSidebar;
