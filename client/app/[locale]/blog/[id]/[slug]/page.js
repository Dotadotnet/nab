import BlogsContent from "@/components/details/blog/BlogContent";
import HighlightText from "@/components/shared/highlightText/HighlightText";
import Main from "@/components/shared/layouts/Main";
import {
  JsonLd,
  absoluteUrl,
  buildMetadata,
  fetchJson,
  localizedPath,
  slugify,
  stripHtml
} from "@/lib/seo";

async function getBlog(id, locale) {
  return fetchJson(`/blog/get-blog/${id}`, locale, {
    next: { tags: ["blog", `blog/${id}`] }
  });
}

export async function generateMetadata({ params }) {
  const { id, locale, slug } = await params;
  const blog = await getBlog(id, locale);
  const canonicalSlug = blog?.slug || slugify(blog?.title) || slug;

  return buildMetadata({
    title: blog?.metaTitle || blog?.title,
    description: blog?.metaDescription || blog?.description || blog?.content,
    canonical: localizedPath(locale, `/blog/${id}/${canonicalSlug}`),
    image: blog?.thumbnail?.url,
    locale,
    type: "article",
    publishedTime: blog?.publishDate,
    modifiedTime: blog?.updatedAt || blog?.lastUpdated,
    noIndex:
      blog?.publishStatus !== "approved" ||
      blog?.visibility === "private" ||
      blog?.status !== "active" ||
      blog?.isDeleted
  });
}

export default async function BlogDetailPage({ params }) {
  const { id, locale, slug } = await params;
  const blog = await getBlog(id, locale);
  const canonicalSlug = blog?.slug || slugify(blog?.title) || slug;

  return (
    <Main>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BlogPosting",
          headline: blog?.title,
          description: stripHtml(blog?.description || blog?.metaDescription || ""),
          image: blog?.thumbnail?.url ? [absoluteUrl(blog.thumbnail.url)] : undefined,
          datePublished: blog?.publishDate || blog?.createdAt,
          dateModified: blog?.updatedAt || blog?.lastUpdated,
          author: {
            "@type": "Person",
            name: blog?.creator?.name || "نقل و حلوای ناب"
          },
          mainEntityOfPage: absoluteUrl(
            localizedPath(locale, `/blog/${id}/${canonicalSlug}`)
          )
        }}
      />
      <div className="relative grid grid-cols-1 md:grid-cols-12 gap-4">
        <div className="md:col-span-2 pr-2 flex flex-col gap-y-80 col-span-1 order-2 md:order-1">
          <div className="mt-[520px] w-fit">
            <HighlightText title="مکان تبلیغات شما" size="2" />
          </div>
        </div>
        <div className="md:col-span-7 order-1 md:order-2 bg-white dark:bg-gray-800 dark:text-gray-100 rounded-lg shadow-lg">
          <BlogsContent blog={blog} />
        </div>
        <div className="md:col-span-3 order-3 md:order-3 pr-2">
          <div className="mt-[520px] w-fit">
            <HighlightText title="آخرین اخبار نقل و شیرینی" size="2" />
          </div>
        </div>
      </div>
    </Main>
  );
}
