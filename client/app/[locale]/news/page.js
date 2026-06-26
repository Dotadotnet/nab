import Image from "next/image";
import Link from "next/link";
import Container from "@/components/shared/container/Container";
import Main from "@/components/shared/layouts/Main";
import {
  buildMetadata,
  defaultOgImage,
  fetchJson,
  getTranslationFields,
  localizedPath
} from "@/lib/seo";

export async function generateMetadata({ params }) {
  const { locale } = await params;

  return buildMetadata({
    title: "اخبار نقل و حلوای ناب",
    description: "آخرین اخبار، رویدادها و مطالب مرتبط با نقل، شیرینی و سوغات ایرانی",
    canonical: localizedPath(locale, "/news"),
    image: defaultOgImage,
    locale,
    type: "website"
  });
}

export default async function NewsListPage({ params }) {
  const { locale } = await params;
  const newsItems = await fetchJson("/news/get-news?limit=24", locale, {
    next: { tags: ["news"] }
  });

  return (
    <Main>
      <Container>
        <section className="mt-10 md:mt-28 space-y-8">
          <header>
            <h1 className="text-3xl font-bold">اخبار نقل و حلوای ناب</h1>
            <p className="mt-3 text-gray-600 dark:text-gray-300">
              تازه‌ترین خبرها و نوشته‌های خبری
            </p>
          </header>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {(newsItems || []).map((item) => {
              const fields = getTranslationFields(item, locale);
              const href = localizedPath(
                locale,
                `/news/${item.newsId}/${fields.slug || item._id}`
              );
              return (
                <Link
                  key={item._id}
                  href={href}
                  className="rounded-lg border border-gray-200 dark:border-gray-700 overflow-hidden bg-white dark:bg-gray-800 shadow"
                >
                  {item?.thumbnail?.url ? (
                    <Image
                      src={item.thumbnail.url}
                      alt={fields.title || "خبر"}
                      width={700}
                      height={420}
                      className="w-full h-52 object-cover"
                    />
                  ) : null}
                  <div className="p-4">
                    <h2 className="text-lg font-semibold line-clamp-2">
                      {fields.title}
                    </h2>
                    <p className="mt-2 text-sm text-gray-600 dark:text-gray-300 line-clamp-3">
                      {fields.summary}
                    </p>
                  </div>
                </Link>
              );
            })}
          </div>
        </section>
      </Container>
    </Main>
  );
}
