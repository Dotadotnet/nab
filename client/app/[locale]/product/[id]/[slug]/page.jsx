import Left from "@/components/details/Left";
import Right from "@/components/details/Right";

const ProductDetailPage = async ({params }) => {
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
    </>
  );
};

export default ProductDetailPage;
