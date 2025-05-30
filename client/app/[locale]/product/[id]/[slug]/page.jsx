import DetailCard from "@/components/details/DetailCard";
import Left from "@/components/details/Left";
import Right from "@/components/details/Right";
import AllReviews from "@/components/shared/review/AllReviews";

const ProductDetailPage = async ({ params }) => {
  const { id, locale } = await params;

  const api =
    `${process.env.NEXT_PUBLIC_BASE_URL}` + `/product/get-product/${id}`;
  const response = await fetch(api, {
    cache: "no-store",
    next: { tags: ["product", `product/${id}`] },
    headers: {
      "Accept-Language": locale
    }
  });
  const res = await response.json();
  const product = res.data;

  return (
    <>
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
