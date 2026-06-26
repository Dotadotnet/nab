import { notFound, redirect } from "next/navigation";
import { slugify } from "@/lib/seo";

export default async function LegacyBlogPage({ params, searchParams }) {
  const { locale } = await params;
  const query = await searchParams;
  const id = query?.blog_id;

  if (!id) notFound();

  redirect(`/${locale}/blog/${id}/${slugify(query?.blog_title || "blog")}`);
}
