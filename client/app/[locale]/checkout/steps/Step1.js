import { toast } from "react-hot-toast";
import Trash from "@/components/icons/Trash";
import Image from "next/image";
import React, { useEffect } from "react";
import { useTranslations, useLocale } from "next-intl";
import NavigationButton from "@/components/shared/button/NavigationButton";
import {
  useDeleteFromCartMutation,
  useGetCartQuery
} from "@/services/cart/cartApi";
function Step1({ nextStep, cartId, loading }) {
  const locale = useLocale();
  const t = useTranslations("payment");

  const [
    deleteFromCart,
    { isLoading: removingCart, data: deletedData, error: deleteError }
  ] = useDeleteFromCartMutation();

  const {
    isLoading: loadingCart,
    data: cartData,
    error: cartError
  } = useGetCartQuery( { id: cartId, locale }, {
    skip: !cartId
  });
  const cartItems = cartData?.data.items || [];
  useEffect(() => {
    if (loadingCart) {
      toast.loading(t("LoadingCartItems"), { id: "getCart" });
    }

    if (cartData) {
      toast.dismiss("getCart");
    }

    if (cartError) {
      const errorMessage = cartError?.data?.description;
      toast.error(errorMessage, { id: "getCart" });
    }
    if (removingCart)
      toast.loading(t("DeletingCartBuy"), { id: "removeFromCart" });
    if (deletedData)
      toast.success(deletedData?.description, { id: "removeFromCart" });
    if (deleteError?.deletedData)
      toast.error(deleteError?.deletedData?.description, {
        id: "removeFromCart"
      });
  }, [
    removingCart,
    deletedData,
    deleteError,
    loadingCart,
    cartData,
    cartError
  ]);

  return (
    <div className=" !space-y-3 rounded-lg bg-white !px-2 !py-4 sm:!px-6">
      <div className="w-full h-full flex flex-col !gap-y-8">
        {cartItems.length === 0 || loading ? (
          <div className="flex flex-col !gap-y-2">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="flex flex-row !gap-x-2 animate-pulse border border-gray-200 !p-2 rounded"
              >
                <div className="flex flex-col !gap-y-2">
                  <div className="h-[50px] w-[50px] bg-gray-300 rounded" />
                  <div className="h-3 w-3/4 bg-gray-300 rounded" />
                </div>
                <div className="flex flex-col !gap-y-2 flex-grow">
                  <div className="h-3 w-3/4 bg-gray-300 rounded" />
                  <div className="h-2 w-1/2 bg-gray-200 rounded" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="h-full w-full flex flex-col !gap-y-4">
            <div className="h-full overflow-y-auto flex  flex-col gap-y-2 scrollbar-hide">
              {cartItems.map(({ product, variation, _id, quantity }) => {
                const translation =
                  product?.translations?.find(
                    (tr) => tr.translation?.language === locale
                  )?.translation?.fields || {};
                const { title, summary, slug } = translation;

                return (
                  <div
                    key={_id}
                    className="flex flex-col 
                                    !gap-y-2 transition-all border border-gray-200  !p-2 rounded hover:border-gray-300  group relative"
                  >
                    <div className="flex flex-row !gap-x-2">
                      <Image
                        src={product?.thumbnail?.url}
                        alt={product?.thumbnail?.public_id || "product"}
                        width={50}
                        height={50}
                        className="rounded h-[50px] w-[50px] object-cover"
                      />
                      <article className="flex flex-col !gap-y-2">
                        <h2 className="text-base line-clamp-1">{title}</h2>
                        <p className="text-xs">{summary || t("anyCaption")}</p>
                      </article>

                      <button
                        type="button"
                        className="opacity-0 transition-opacity group-hover:opacity-100 absolute top-2 left-2 border p-1 rounded-secondary bg-red-100 text-red-900 border-red-900"
                        onClick={() => removeFromCart(_id)}
                      >
                        <Trash />
                      </button>
                    </div>
                    <p className="text-xs flex flex-row justify-between">
                      <span className="flex flex-row gap-x-0.5 items-baseline">
                        {t("price")} :
                        <span className="text-xs text-red-500 line-through">
                          {variation?.price
                            ? `${variation.price.toLocaleString(
                                locale
                              )} ${t("rial")}`
                            : "?"}
                        </span>
                        {product.discountAmount && variation.price ? (
                          <span className="text-xs text-green-500 !ml-1">
                            {(
                              variation.price -
                              variation.price * (product.discountAmount / 100)
                            ).toLocaleString(locale)}{" "}
                            {t("rial")}
                          </span>
                        ) : null}
                      </span>
                      <span className="flex flex-row gap-x-0.5 items-baseline">
                        {t("count")} :
                        <span className="text-sm ">{quantity}</span>
                      </span>
                    </p>

                    {variation?.unit?.translations && (
                      <div className="flex flex-row !gap-x-1">
                        <span className="whitespace-nowrap text-[10px] bg-orange-100 text-orange-500 border border-orange-500  !px-1.5 rounded">
                          {
                            variation?.unit?.translations?.find(
                              (tr) => tr.translation?.language === locale
                            )?.translation?.fields.title
                          }
                        </span>
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
      <div className="flex justify-start !mt-12 !px-4 ">
        <NavigationButton direction="next" onClick={nextStep} />
      </div>
    </div>
  );
}

export default Step1;
