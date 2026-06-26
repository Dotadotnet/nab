import DetailCard from "@/components/details/DetailCard";
import Left from "@/components/details/Left";
import Right from "@/components/details/Right";
import AllReviews from "@/components/shared/review/AllReviews";
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

async function getProduct(id, locale) {
  return fetchJson(`/product/get-product/${id}`, locale, {
    next: { tags: ["product", `product/${id}`] }
  });
}

export async function generateMetadata({ params }) {
  const { id, locale, slug } = await params;
  const product = await getProduct(id, locale);
  const fields = getTranslationFields(product, locale);
  const title = fields.title || product?.title;
  const description = fields.metaDescription || fields.summary || fields.description;
  const canonical = localizedPath(
    locale,
    `/product/${product?.productId || id}/${fields.slug || slug}`
  );

  return buildMetadata({
    title: fields.metaTitle || title,
    description,
    canonical,
    image: product?.thumbnail?.url,
    locale,
    type: "website",
    noIndex:
      product?.publishStatus !== "approved" ||
      product?.status !== "active" ||
      product?.isDeleted,
    alternates: buildAlternates((targetLocale) => {
      const targetFields = getTranslationFields(product, targetLocale);
      return `/product/${product?.productId || id}/${targetFields.slug || fields.slug || slug}`;
    })
  });
}

const ProductDetailPage = async ({ params }) => {
  const { id, locale } = await params;
  const product = await getProduct(id, locale);
  const fields = getTranslationFields(product, locale);
  const price = product?.variations?.[0]?.price;
  const discountedPrice =
    price && product?.discountAmount > 0
      ? Math.round(price * (1 - product.discountAmount / 100))
      : price;

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Product",
          name: fields.title || product?.title,
          description: stripHtml(fields.summary || fields.description || ""),
          image: product?.thumbnail?.url ? [absoluteUrl(product.thumbnail.url)] : undefined,
          sku: String(product?.productId || product?._id || ""),
          url: absoluteUrl(
            localizedPath(locale, `/product/${product?.productId}/${fields.slug || ""}`)
          ),
          brand: {
            "@type": "Brand",
            name: "نقل و حلوای ناب"
          },
          offers: discountedPrice
            ? {
                "@type": "Offer",
                priceCurrency: "IRR",
                price: discountedPrice,
                availability:
                  product?.stockStatus === "out-of-stock"
                    ? "https://schema.org/OutOfStock"
                    : "https://schema.org/InStock",
                url: absoluteUrl(
                  localizedPath(locale, `/product/${product?.productId}/${fields.slug || ""}`)
                )
              }
            : undefined
        }}
      />
      <Left product={product} />
      <Right product={product} />
      <div className="  flex  flex-col gap-y-2.5 md:col-span-6 col-span-12">
        {product?.tags?.map((tag, index) => (
          <DetailCard
            key={index}
            icon={"🏷️"}
            title={
              tag.translations?.find(
                (tr) => tr.translation?.language === locale
              )?.translation?.fields.title
            }
            content={
              tag?.translations?.find(
                (tr) => tr.translation?.language === locale
              )?.translation?.fields.keynotes
            }
          />
        ))}
      </div>
      <AllReviews
        targetId={product._id}
        targetType="product"
        reviews={product.reviews}
      />
    </>
  );
};

export default ProductDetailPage;
