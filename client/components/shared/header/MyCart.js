"use client";

import Cart from "@/components/icons/Cart";
import React, { useEffect, useState } from "react";
import OutsideClick from "../outsideClick/OutsideClick";
import Image from "next/image";
import { useSelector } from "react-redux";
import Trash from "@/components/icons/Trash";
import {
  useDeleteFromCartMutation,
  useGetCartQuery
} from "@/services/cart/cartApi";
import { toast } from "react-hot-toast";
import { useTranslations, useLocale } from "next-intl";
import Spinner from "../Spinner";
import { useRouter } from "next/navigation";
const MyCart = () => {
  const locale = useLocale();
  const t = useTranslations("payment");
  const [handledDelete, setHandledDelete] = useState(false);

  const [isOpen, setIsOpen] = useState(false);
  const { user, session } = useSelector((state) => state.auth);
  const cartId = session?.cart || user?.cart;

  const [
    deleteFromCart,
    { isLoading: removingCart, data: deletedData, error: deleteError, reset }
  ] = useDeleteFromCartMutation();

  const {
    isLoading: loadingCart,
    data: cartData,
    error: cartError
  } = useGetCartQuery(
    { id: cartId, locale },
    {
      skip: !cartId || cartId.length === 0
    }
  );
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

    if (deletedData) {
      if (deletedData.acknowledgement) {
        toast.success(deletedData.description, { id: "removeFromCart" });
      } else {
        toast.error(deletedData.description, { id: "removeFromCart" });
      }
      reset();
    }

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
    <>
      <button
        aria-label={t("buyCart")}
        className="p-2 rounded-secondary bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors relative"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Cart className="h-6 w-6" />
        {cartItems.length > 0 && (
          <span className="flex items-center absolute top-0 right-0">
            <span className="relative ml-3 mr-0.5 flex h-3 w-3">
              <span className="animate-ping bg-red-400 absolute inline-flex h-full w-full rounded-full opacity-75"></span>
              <span className="relative inline-flex h-3 w-3 rounded-full bg-red-400"></span>
            </span>
          </span>
        )}
      </button>

      {isOpen && (
        <OutsideClick
          onOutsideClick={() => setIsOpen(false)}
          className="absolute p-4 md:top-full bottom-full mb-8 ltr:left-0 rtl:right-0 w-80 h-96 overflow-y-auto bg-white dark:bg-slate-900 border border-primary rounded  flex flex-col gap-y-2.5"
        >
          <div className="w-full h-full flex flex-col gap-y-8">
            {cartItems.length === 0 ? (
              <div className="flex flex-col gap-y-2">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="flex flex-row gap-x-2 animate-pulse border border-gray-200 p-2 rounded"
                  >
                    <div className="h-[50px] w-[50px] bg-gray-300 rounded" />
                    <div className="flex flex-col gap-y-2 flex-grow">
                      <div className="h-3 w-3/4 bg-gray-300 rounded" />
                      <div className="h-2 w-1/2 bg-gray-200 rounded" />
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              // بقیه کد...

              <div className="h-full w-full flex flex-col gap-y-4">
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
                        className="flex flex-col gap-y-2 transition-all border border-gray-200  p-2 rounded hover:border-gray-300  group relative"
                      >
                        <div className="flex flex-row gap-x-2">
                          <Image
                            src={product?.thumbnail?.url}
                            alt={product?.thumbnail?.public_id || "product"}
                            width={50}
                            height={50}
                            className="rounded h-[50px] w-[50px] object-cover"
                          />
                          <article className="flex flex-col gap-y-2">
                            <h2 className="text-base line-clamp-1">{title}</h2>
                            <p className="text-xs">
                              {summary || t("anyCaption")}
                            </p>
                          </article>

                          <button
                            type="button"
                            className="opacity-0 cursor-pointer transition-opacity group-hover:opacity-100 absolute top-2 left-2 border p-1 rounded-secondary bg-red-100 text-red-900 border-red-900"
                            onClick={() => deleteFromCart(_id)}
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
                              <span className="text-xs text-green-500 ml-1">
                                {(
                                  variation.price -
                                  variation.price *
                                    (product.discountAmount / 100)
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
                          <div className="flex flex-row gap-x-1">
                            <span className="whitespace-nowrap text-[10px] bg-orange-100 text-orange-500 border border-orange-500  px-1.5 rounded">
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
                <Purchase cart={cartItems} />
              </div>
            )}
          </div>
        </OutsideClick>
      )}
    </>
  );
};

function Purchase({ cart }) {
  const t = useTranslations("payment");
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  return (
    <button
      type="button"
      className="px-8 py-2 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow flex flex-row gap-x-2 items-center justify-center"
      onClick={() => {
        if (cart.length === 0) {
          return;
        } else {
          setIsLoading(true);
          router.push("/checkout");
        }
      }}
    >
      {isLoading && <Spinner />}
      {!isLoading && t("settlement")}
    </button>
  );
}

export default MyCart;
