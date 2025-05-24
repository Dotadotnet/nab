"use client";

import Cart from "@/components/icons/Cart";
import React, { useEffect, useState } from "react";
import OutsideClick from "../outsideClick/OutsideClick";
import Image from "next/image";
import { useSelector } from "react-redux";
import Trash from "@/components/icons/Trash";
import { useDeleteFromCartMutation } from "@/services/cart/cartApi";
import { toast } from "react-hot-toast";
import Inform from "@/components/icons/Inform";
import { useCreatePaymentMutation } from "@/services/payment/paymentApi";
import { Link } from "@/i18n/navigation";
import { useTranslations, useLocale } from "next-intl";

const MyCart = () => {
  const locale = useLocale();
  const n = useTranslations("Navbar");
  const t = useTranslations("Tools");

  const [isOpen, setIsOpen] = useState(false);
  const { user, session } = useSelector((state) => state.auth);
  const [removeFromCart, { isLoading, data, error }] =
    useDeleteFromCartMutation();

  useEffect(() => {
    if (isLoading)
      toast.loading(n("DeletingCartBuy"), { id: "removeFromCart" });
    if (data) toast.success(data?.description, { id: "removeFromCart" });
    if (error?.data)
      toast.error(error?.data?.description, { id: "removeFromCart" });
  }, [isLoading, data, error]);

  const cartItems = session?.cart || user?.cart || [];
  return (
    <>
      <button
        aria-label={n("BuyCart")}
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
          className="absolute p-4 md:top-full bottom-full mb-8 ltr:left-0 rtl:right-0 w-80 h-96 overflow-y-auto bg-white dark:bg-slate-900 border border-primary rounded p-1 flex flex-col gap-y-2.5"
        >
          <div className="w-full h-full flex flex-col gap-y-8">
            {cartItems.length === 0 ? (
              <p className="text-sm flex flex-row gap-x-1 items-center justify-center h-full w-full">
                <Inform /> {n("NotFountProducts")}
              </p>
            ) : (
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
                        <div className="flex flex-row gap-x-2" >
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
                              {summary || t("AnyCaption")}
                            </p>
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
                            {t("Price")} :
                            <span className="text-xs text-red-500 line-through">
                              {variation?.price
                                ? `${variation.price.toLocaleString(
                                    locale
                                  )} ${t("Rial")}`
                                : "?"}
                            </span>
                            {product.discountAmount && variation.price ? (
                              <span className="text-xs text-green-500 ml-1">
                                {(
                                  variation.price -
                                  variation.price *
                                    (product.discountAmount / 100)
                                ).toLocaleString(locale)}{" "}
                                {t("Rial")}
                              </span>
                            ) : null}
                          </span>
                          <span className="flex flex-row gap-x-0.5 items-baseline">
                            {t("Count")} :
                            <span className="text-sm ">
                              {quantity}
                            </span>
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
  const [createPayment, { isLoading, data, error }] =
    useCreatePaymentMutation();
  const t = useTranslations("Tools");

  useEffect(() => {
    if (isLoading)
      toast.loading(t("RedirectingToPayment"), {
        id: "createPayment"
      });
    if (data) {
      toast.success(data?.description, { id: "createPayment" });
      window.open(data?.url, "_blank");
    }
    if (error?.data)
      toast.error(error?.data?.description, { id: "createPayment" });
  }, [isLoading, data, error]);

  return (
    <Link
      href={`/checkout`}
      type="button"
      className="px-8 py-2 border border-black rounded-secondary bg-black hover:bg-black/90 text-white transition-colors drop-shadow flex flex-row gap-x-2 items-center justify-center"
    >
      {t("Settlement")}
    </Link>
  );
}

export default MyCart;
