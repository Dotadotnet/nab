import Image from "next/image";

export default function MagazineContent({ magazine, translation }) {
  const title = translation?.title || "از ما بخوانید";
  const summary = translation?.summary || "";
  const content = translation?.content || "";

  return (
    <article className="space-y-6">
      <header className="border-b pb-4">
        <h1 className="text-3xl font-bold leading-10">{title}</h1>
        <div className="text-sm text-gray-500 mt-3">
          {magazine?.creator?.name ? `نویسنده: ${magazine.creator.name}` : null}
          {magazine?.publishDate
            ? ` | تاریخ: ${new Date(magazine.publishDate).toLocaleDateString("fa-IR")}`
            : null}
          {magazine?.readTime ? ` | زمان مطالعه: ${magazine.readTime}` : null}
        </div>
        {summary ? <p className="mt-4 text-gray-600 dark:text-gray-300">{summary}</p> : null}
      </header>

      {magazine?.thumbnail?.url ? (
        <Image
          src={magazine.thumbnail.url}
          alt={title}
          width={1200}
          height={630}
          className="w-full max-h-[520px] object-cover rounded-lg"
          priority
        />
      ) : null}

      {magazine?.whatYouWillLearn?.length ? (
        <section className="rounded-lg border border-gray-200 dark:border-gray-700 p-4">
          <h2 className="text-xl font-semibold mb-3">در این مطلب می‌خوانید</h2>
          <ul className="list-disc pr-5 space-y-2">
            {magazine.whatYouWillLearn.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </section>
      ) : null}

      <div
        className="prose prose-lg max-w-none dark:prose-invert text-justify leading-8"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </article>
  );
}
