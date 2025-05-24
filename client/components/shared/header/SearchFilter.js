"use client";
import Search from "@/components/icons/Search";
import React, { useEffect, useMemo, useState } from "react";
import Modal from "../Modal";
import { useGetProductsQuery } from "@/services/product/productApi";
import Image from "next/image";
import { useRouter } from "next/navigation";
import SearchCard from "../skeletonLoading/SearchCard";
import { toast } from "react-hot-toast";
import Inform from "@/components/icons/Inform";
import { useLocale, useTranslations } from "next-intl";

const SearchFilter = () => {
  const locale = useLocale();
  const t = useTranslations("Tools");
  const n = useTranslations("Navbar");

  const [open, setOpen] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const {
    data: productsData,
    error: productsError,
    isLoading: productsLoading
  } = useGetProductsQuery({ locale });
  const products = useMemo(() => productsData?.data || [], [productsData]);

  useEffect(() => {
    if (productsError) {
      toast.error(productsError?.data?.description, { id: "search-filter" });
    }
  }, [productsError]);

  const handleSearch = (event) => {
    setSearchTerm(event?.target?.value?.toLowerCase());
  };

  const filteredProducts = searchTerm?.length
    ? products.filter(({ title, summary }) => {
        const lowerTitle = title?.toLowerCase();
        const lowerSummary = summary?.toLowerCase();

        return (
          lowerTitle?.includes(searchTerm) || lowerSummary?.includes(searchTerm)
        );
      })
    : products;

  const highlightMatch = (text, keyword) => {
    if (!keyword) {
      return text;
    }

    const escapedKeyword = keyword.replace(/[.*+?^${}()|[\]\\]/gi, "\\$&");
    const regex = new RegExp(escapedKeyword, "gi");

    let match;
    let result = text;

    while ((match = regex.exec(text)) !== null) {
      const startPos = match.index;
      const endPos = regex.lastIndex;
      const highlighted = `<mark>${text.substring(startPos, endPos)}</mark>`;
      result =
        result.substring(0, startPos) + highlighted + result.substring(endPos);
    }

    return result;
  };

  return (
    <>
      <button
        aria-label={t("Search")}
        className="p-2 rounded-secondary bg-slate-100  dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors"
        onClick={() => setOpen(!open)}
      >
        <Search className="h-6 w-6" />
      </button>

      <Modal
        isOpen={open}
        onClose={() => setOpen(false)}
        className="lg:w-1/3 md:w-3/4 w-full h-96 md:mx-0 mx-4 !z-[9999] bg-white dark:bg-slate-900 p-8 drop-shadow-2xl"
      >
        <div className="flex flex-col gap-y-4 h-full">
          <input
            type="search"
            name="search"
            id="search"
            placeholder={n("PlaceholderSearch")}
            className="!rounded w-full text-center dark:bg-gray-900"
            onChange={handleSearch}
          />
          <div className="flex flex-row items-center gap-x-2 text-xs">
            <hr className="flex-1" />
            {t("YourResultSearch")}
            <hr className="flex-1" />
          </div>
          <div className="overflow-y-auto scrollbar-hide flex flex-col gap-y-8 h-full">
            {filteredProducts?.length === 0 ? (
              <p className="text-sm flex flex-row gap-x-1 items-center justify-center">
                <Inform /> {t("NotFountProducts")}
              </p>
            ) : (
              <>
                {productsLoading ? (
                  <>
                    {[1, 2, 3, 4].map((_, index) => (
                      <SearchCard key={index} />
                    ))}
                  </>
                ) : (
                  <>
                    {filteredProducts?.map((product) => {
                      const { title, summary, slug } =
                        product?.translations?.find(
                          (tr) => tr.translation?.language === locale
                        )?.translation?.fields || {};
                      const highlightedTitle = highlightMatch(
                        title,
                        searchTerm
                      );
                      const highlightedSummary = highlightMatch(
                        summary,
                        searchTerm
                      );

                      return (
                        <div
                          key={product?._id}
                          className="flex flex-row gap-x-2 cursor-pointer"
                        >
                          <Image
                            src={product?.thumbnail?.url}
                            alt={product?.thumbnail?.public_id}
                            width={50}
                            height={50}
                            className="rounded h-[50px] w-[50px] object-cover"
                          />
                          <article className="flex flex-col gap-y-2">
                            <div className="flex flex-col gap-y-0.5">
                              <h2
                                className="text-base"
                                dangerouslySetInnerHTML={{
                                  __html: highlightedTitle
                                }}
                              />
                              <p
                                className="text-xs line-clamp-2"
                                dangerouslySetInnerHTML={{
                                  __html: highlightedSummary
                                }}
                              />
                            </div>
                            <div className="flex flex-row justify-between gap-x-4 items-center">
                              <span className="text-xs gap-x-2 flex flex-row items-baseline">
                                {product?.variations?.[0]?.price &&
                                product?.discountAmount > 0 ? (
                                  <>
                                    <p className="text-xs text-red-500 line-through">
                                      {new Intl.NumberFormat(locale).format(
                                        product?.variations?.[0]?.price
                                      )}{" "}
                                      {t("Rial")}
                                    </p>
                                    <p className="text-xs mr-4 text-green-500 font-semibold">
                                      {new Intl.NumberFormat(locale).format(
                                        product?.variations?.[0]?.price *
                                          (1 - product?.discountAmount / 100)
                                      )}{" "}
                                      {t("Rial")}
                                    </p>
                                  </>
                                ) : (
                                  <p className="text-xs text-orange-500 ">
                                    {product?.variations?.[0]?.price
                                      ? new Intl.NumberFormat(locale).format(
                                          product?.variations?.[0]?.price
                                        ) + t("Rial")
                                      : t("HaveNotPrice")}
                                  </p>
                                )}
                              </span>
                              <div className="flex flex-row gap-x-1">
                                <span className="whitespace-nowrap text-sm bg-orange-100 dark:text-orange-500 text-orange-500 border border-orange-500 px-1.5 rounded">
                                  {
                                    product?.category?.translations?.find(
                                      (tr) =>
                                        tr.translation?.language === locale
                                    )?.translation?.fields.title
                                  }
                                </span>
                              </div>
                            </div>
                          </article>
                        </div>
                      );
                    })}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </Modal>
    </>
  );
};

export default SearchFilter;
