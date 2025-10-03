import StoriesSkeleton from "@/components/shared/skeletonLoading/StoriesSkeleton";
import StoriesSectionClient from "./StoriesSectionClient";
import { getTranslations } from "next-intl/server";

export default async function StoriesSectionServer({ params }) {
  const { locale } = await params;
  const limit = 15;
  const page = 1;
console.log("locale",locale)
  const api = `${process.env.NEXT_PUBLIC_BASE_URL}/banner/get-banners/?page=${page}&limit=${limit}`;
console.log("api",api)
  const response = await fetch(api, {
    cache: "no-store",
    next: { tags: ["banner"] },
    headers: {
      "Accept-Language": locale
    }
  });

  const res = await response.json();
  const banners = res.data;
  const t = await getTranslations("HomePage", locale);

  return (
    <>
      {banners.length === 0 ? (
        <section className="pt-40 overflow-auto md:max-w-7xl max-w-screen mx-auto px-4">
          <StoriesSkeleton />
        </section>
      ) : (
        <StoriesSectionClient banners={banners} />
      )}
    </>
  );
}
