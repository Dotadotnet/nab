// pages/new-arrivals.tsx
import React from "react";

import { getTranslations } from "next-intl/server";
import SearchFilter from "../SearchFilter";

const Search = async ({params}) => {
  const { locale } = params;

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
console.log("paramas",params)
console.log("products",products)

  return (
    <>
      <SearchFilter products={products} productsError={error} />
    </>
  );
};

export default Search;
