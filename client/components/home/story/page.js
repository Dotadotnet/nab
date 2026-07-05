import StoriesSkeleton from "@/components/shared/skeletonLoading/StoriesSkeleton";
import StoriesSectionClient from "./StoriesSectionClient";

export default async function StoriesSectionServer({ params }) {
  const { locale } = await params;
  const limit = 15;
  const page = 1;
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;
  let banners = [];

  if (baseUrl) {
    try {
      const api = `${baseUrl}/banner/get-banners/?page=${page}&limit=${limit}`;
      const response = await fetch(api, {
        cache: "no-store",
        next: { tags: ["banner"] },
        headers: {
          "Accept-Language": locale
        }
      });

      if (!response.ok) {
        throw new Error(`Failed to fetch banners: ${response.status}`);
      }

      const res = await response.json();
      banners = res.data || [];
    } catch {}
  }

  return (
    <>
      {banners?.length === 0 ? (
        <section className="pt-40 overflow-auto md:max-w-7xl max-w-screen mx-auto ">
          <StoriesSkeleton />
        </section>
      ) : (
        <StoriesSectionClient banners={banners} />
      )}
    </>
  );
}
