import Image from "next/image";

export default function NewsContent({ news, fields }) {
  const title = fields?.title || "خبر";
  const summary = fields?.summary || "";
  const content = fields?.content || "";

  return (
    <article className="space-y-6">
      <header className="space-y-4">
        <h1 className="text-3xl md:text-4xl font-bold leading-10">{title}</h1>
        <div className="text-sm text-gray-500">
          {news?.creator?.name ? `نویسنده: ${news.creator.name}` : null}
          {news?.publishDate
            ? ` | تاریخ انتشار: ${new Date(news.publishDate).toLocaleDateString("fa-IR")}`
            : null}
          {news?.readTime ? ` | زمان مطالعه: ${news.readTime}` : null}
        </div>
        {summary ? (
          <p className="text-lg text-gray-600 dark:text-gray-300">{summary}</p>
        ) : null}
      </header>

      {news?.thumbnail?.url ? (
        <Image
          src={news.thumbnail.url}
          alt={title}
          width={1200}
          height={630}
          className="w-full max-h-[520px] object-cover rounded-lg"
          priority
        />
      ) : null}

      <div
        className="prose prose-lg max-w-none dark:prose-invert text-justify leading-8"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
