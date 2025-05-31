import React from "react";
import Right from "./Right";
import Left from "./Left";

const Banner1 = async ({ params }) => {
  const { locale } = await params;

  const api = `${process.env.NEXT_PUBLIC_BASE_URL}/featuredProduct/get-featuredProducts`;
  let featuredProducts = [];
  let error = null;

  try {
    const response = await fetch(api, {
      cache: "no-store",
      next: { tags: ["featuredProduct"] },
      headers: {
        "Accept-Language": locale
      }
    });
    if (!response.ok) {
      throw new Error("Failed to fetch featuredProducts");
    }
    const res = await response.json();
    featuredProducts = res.data || [];
  } catch (err) {
    error = err.message;
  }
  console.log("featuredProducts", featuredProducts);
  return (
    <div className="grid md:grid-cols-3   justify-center grid-cols-1 gap-y-2 md:gap-4 ">
      <Right options={featuredProducts} />
      <Left />
    </div>
  );
};

export default Banner1;
