import { notFound } from "next/navigation";

export const siteUrl =
  process.env.NEXT_PUBLIC_CLIENT_URL || "https://noghlenab.com";

export const apiBaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const supportedLocales = ["fa", "en", "tr", "ar"];
export const defaultOgImage = "https://s3-console.noghlenab.com/main/main.jpg";

export function stripHtml(value = "") {
  return String(value)
    .replace(/<script[\s\S]*?>[\s\S]*?<\/script>/gi, "")
    .replace(/<style[\s\S]*?>[\s\S]*?<\/style>/gi, "")
    .replace(/<[^>]*>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

export function truncate(value = "", length = 160) {
  const text = stripHtml(value);
  return text.length > length ? `${text.slice(0, length - 3)}...` : text;
}

export function slugify(value = "") {
  return String(value)
    .trim()
    .toLowerCase()
    .replace(/[\u200B-\u200D\uFEFF]/g, "")
    .replace(/[\sـ]+/g, "-")
    .replace(/[^\u0600-\u06FFa-z0-9-]/g, "")
    .replace(/-+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getTranslationFields(entity, locale) {
  const translations = entity?.translations || [];
  const exact = translations.find((item) => item?.translation?.language === locale);
  const fallback =
    translations.find((item) => item?.translation?.language === "fa") ||
    translations.find((item) => item?.translation?.fields);

  return exact?.translation?.fields || fallback?.translation?.fields || {};
}

export function getMagazineTranslation(magazine, locale) {
  const translations = magazine?.translations || [];
  return (
    translations.find((item) => item.language === locale) ||
    translations.find((item) => item.language === "fa") ||
    translations[0] ||
    {}
  );
}

export function localizedPath(locale, path) {
  const cleanPath = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${cleanPath}`;
}

export function absoluteUrl(pathOrUrl = "") {
  if (!pathOrUrl) return siteUrl;
  if (/^https?:\/\//i.test(pathOrUrl)) return pathOrUrl;
  return `${siteUrl}${pathOrUrl.startsWith("/") ? pathOrUrl : `/${pathOrUrl}`}`;
}

export function buildAlternates(pathBuilder) {
  return {
    languages: Object.fromEntries(
      supportedLocales.map((locale) => [
        locale,
        absoluteUrl(localizedPath(locale, pathBuilder(locale)))
      ])
    )
  };
}

export function buildMetadata({
  title,
  description,
  canonical,
  image,
  locale,
  type = "article",
  publishedTime,
  modifiedTime,
  noIndex = false,
  alternates
}) {
  const cleanTitle = truncate(title, 70) || "نقل و حلوای ناب";
  const cleanDescription =
    truncate(description, 160) || "فروشگاه نقل و حلوای ناب";
  const canonicalUrl = absoluteUrl(canonical);
  const imageUrl = absoluteUrl(image || defaultOgImage);

  return {
    title: cleanTitle,
    description: cleanDescription,
    alternates: {
      canonical: canonicalUrl,
      ...(alternates || {})
    },
    robots: noIndex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: cleanTitle,
      description: cleanDescription,
      url: canonicalUrl,
      siteName: "نقل و حلوای ناب",
      images: [{ url: imageUrl, width: 1200, height: 630, alt: cleanTitle }],
      locale,
      type,
      publishedTime,
      modifiedTime
    },
    twitter: {
      card: "summary_large_image",
      title: cleanTitle,
      description: cleanDescription,
      images: [imageUrl]
    }
  };
}

export async function fetchJson(path, locale, options = {}) {
  if (!apiBaseUrl) {
    throw new Error("NEXT_PUBLIC_BASE_URL is not configured");
  }

  const response = await fetch(`${apiBaseUrl}${path}`, {
    cache: "no-store",
    ...options,
    headers: {
      "Accept-Language": locale,
      "x-lang": locale,
      ...(options.headers || {})
    }
  });

  if (!response.ok) notFound();

  const json = await response.json();
  if (!json?.acknowledgement && json?.message === "Not Found") notFound();

  return json?.data;
}

export function JsonLd({ data }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c")
      }}
    />
  );
}
