import HighlightText from "@/components/shared/highlightText/HighlightText";
import Container from "@/components/shared/container/Container";
import Main from "@/components/shared/layouts/Main";
import MagazineContent from "@/components/details/magazine/MagazineContent";
import {
  JsonLd,
  absoluteUrl,
  buildMetadata,
  fetchJson,
  getMagazineTranslation,
  localizedPath,
  slugify,
  stripHtml
} from "@/lib/seo";

async function getMagazine(id, locale) {
  return fetchJson(`/magazine/get-magazine/${id}`, locale, {
    next: { tags: ["magazine", `magazine/${id}`] }
  });
}

export async function generateMetadata({ params }) {
  const { id, locale, slug } = await params;
  const magazine = await getMagazine(id, locale);
  const translation = getMagazineTranslation(magazine, locale);
  const canonicalSlug = translation?.slug || slugify(translation?.title) || slug;

  return buildMetadata({
    title: translation?.metaTitle || translation?.title,
    description: translation?.metaDescription || translation?.summary || translation?.content,
    canonical: localizedPath(locale, `/post/${id}/${canonicalSlug}`),
    image: magazine?.thumbnail?.url,
    locale,
    type: "article",
    publishedTime: magazine?.publishDate,
    modifiedTime: magazine?.updatedAt || magazine?.lastUpdated,
    noIndex:
      magazine?.publishStatus !== "approved" ||
      magazine?.visibility === "private" ||
      magazine?.status !== "active" ||
      magazine?.isDeleted
  });
}

export default async function MagazineDetailPage({ params }) {
  const { id, locale, slug } = await params;
  const magazine = await getMagazine(id, locale);
  const translation = getMagazineTranslation(magazine, locale);
  const canonicalSlug = translation?.slug || slugify(translation?.title) || slug;

  return (
    <Main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: translation?.title,
          description: stripHtml(translation?.summary || translation?.metaDescription || ""),
          image: magazine?.thumbnail?.url ? [absoluteUrl(magazine.thumbnail.url)] : undefined,
          datePublished: magazine?.publishDate || magazine?.createdAt,
          dateModified: magazine?.updatedAt || magazine?.lastUpdated,
          author: {
            "@type": "Person",
            name: magazine?.creator?.name || "نقل و حلوای ناب"
          },
          mainEntityOfPage: absoluteUrl(
            localizedPath(locale, `/post/${id}/${canonicalSlug}`)
          )
        }}
      />
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mt-5 md:mt-28">
          <aside className="md:col-span-2 flex flex-col gap-y-80 col-span-1 order-2 md:order-1">
            <HighlightText title="مکان تبلیغات شما" size="2" />
          </aside>
          <section className="relative md:col-span-7 order-1 md:order-2 bg-white p-6 md:p-12 dark:bg-gray-800 dark:text-gray-100 rounded-lg shadow-lg">
            <MagazineContent magazine={magazine} translation={translation} />
          </section>
          <aside className="md:col-span-3 order-3 md:order-3">
            <HighlightText title="آخرین اخبار نقل و شیرینی" size="2" />
          </aside>
        </div>
      </Container>
    </Main>
  );
}
