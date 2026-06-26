import { notFound, redirect } from "next/navigation";
import { slugify } from "@/lib/seo";

export default async function LegacyPostPage({ params, searchParams }) {
  const { locale } = await params;
  const query = await searchParams;
  const id = query?.magazine_id;

  if (!id) notFound();

  redirect(`/${locale}/post/${id}/${slugify(query?.magazine_title || "post")}`);
}
