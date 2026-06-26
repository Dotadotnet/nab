import Container from "@/components/shared/container/Container";
import Main from "@/components/shared/layouts/Main";
import NewsContent from "@/components/details/news/NewsContent";
import {
  JsonLd,
  absoluteUrl,
  buildAlternates,
  buildMetadata,
  fetchJson,
  getTranslationFields,
  localizedPath,
  stripHtml
} from "@/lib/seo";

async function getNews(id, locale) {
  return fetchJson(`/news/get-news/${id}`, locale, {
    next: { tags: ["news", `news/${id}`] }
  });
}

export async function generateMetadata({ params }) {
  const { id, locale, slug } = await params;
  const news = await getNews(id, locale);
  const fields = getTranslationFields(news, locale);

  return buildMetadata({
    title: fields.metaTitle || fields.title,
    description: fields.metaDescription || fields.summary || fields.content,
    canonical: localizedPath(locale, `/news/${news?.newsId || id}/${fields.slug || slug}`),
    image: news?.thumbnail?.url,
    locale,
    type: "article",
    publishedTime: news?.publishDate,
    modifiedTime: news?.updatedAt,
    noIndex:
      news?.publishStatus !== "approved" ||
      news?.visibility === "private" ||
      news?.status !== "active" ||
      news?.isDeleted,
    alternates: buildAlternates((targetLocale) => {
      const targetFields = getTranslationFields(news, targetLocale);
      return `/news/${news?.newsId || id}/${targetFields.slug || fields.slug || slug}`;
    })
  });
}

export default async function NewsDetailPage({ params }) {
  const { id, locale, slug } = await params;
  const news = await getNews(id, locale);
  const fields = getTranslationFields(news, locale);
  const canonicalSlug = fields.slug || slug;

  return (
    <Main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          headline: fields.title,
          description: stripHtml(fields.summary || fields.metaDescription || ""),
          image: news?.thumbnail?.url ? [absoluteUrl(news.thumbnail.url)] : undefined,
          datePublished: news?.publishDate || news?.createdAt,
          dateModified: news?.updatedAt,
          author: {
            "@type": "Person",
            name: news?.creator?.name || "نقل و حلوای ناب"
          },
          mainEntityOfPage: absoluteUrl(
            localizedPath(locale, `/news/${news?.newsId || id}/${canonicalSlug}`)
          )
        }}
      />
      <Container>
        <section className="max-w-4xl mx-auto mt-10 md:mt-28 bg-white dark:bg-gray-800 dark:text-gray-100 rounded-lg shadow-lg p-6 md:p-12">
          <NewsContent news={news} fields={fields} />
        </section>
      </Container>
    </Main>
  );
}
