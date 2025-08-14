import React, { useState, useEffect, useMemo } from "react";
import {
  useGetCartsQuery,
  useDeleteCartMutation
} from "@/services/cart/cartApi";
import DeleteModal from "@/components/shared/modal/DeleteModal";
import Modal from "@/components/shared/modal/Modal";
import { toast } from "react-hot-toast";
import StatusPay from "@/components/shared/tools/StatusPay";
import SkeletonItem from "@/components/shared/skeleton/SkeletonItem";
import Pagination from "@/components/shared/pagination/Pagination";
import Search from "@/components/shared/search";
import ControlPanel from "../ControlPanel";

const ListCart = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedCart, setSelectedCart] = useState(null);
  const itemsPerPage = 5;
  const [statusFilter, setStatusFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");
  const { data, isLoading, error, refetch } = useGetCartsQuery({
    page: currentPage,
    limit: itemsPerPage,
    status: statusFilter === "all" ? undefined : statusFilter,
    search: searchTerm
  });
  const totalPages = data ? Math.ceil(data.total / itemsPerPage) : 1;
  console.log("data", data);
  const carts = useMemo(() => data?.data || [], [data]);
  const [
    removeCart,
    { isLoading: isRemoving, data: deleteCart, error: removeError }
  ] = useDeleteCartMutation();

  useEffect(() => {
    if (isLoading) {
      toast.loading("در حال دریافت کارتهای خرید...", { id: "get-carts" });
    }
    if (data && data.acknowledgement) {
      toast.success(data?.description, { id: "get-carts" });
    }
    if (data && !data.acknowledgement) {
      toast.error(data?.description, { id: "get-carts" });
    }
    if (error) {
      toast.error(error?.data?.description, { id: "get-carts" });
    }
    if (isRemoving) {
      toast.loading("در حال حذف  ...", { id: "cart-remove" });
    }
    if (deleteCart && !isRemoving) {
      toast.dismiss("cart-remove");
    }
    if (removeError?.data) {
      toast.error(removeError?.data?.message, { id: "cart-remove" });
    }
    if (deleteCart && !isRemoving) {
      toast.success("کارتهای خرید با موفقیت حذف شد.", { id: "cart-remove" });
    }
  }, [data, error, isLoading, isRemoving, removeError, deleteCart]);

  const handleCartClick = (cart) => {
    setSelectedCart(cart);
  };

  const closeModal = () => {
    setSelectedCart(null);
  };
  console.log("carts", carts);
  return (
    <>
      <ControlPanel>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <div className="mt-8 w-full grid grid-cols-12 text-slate-400 px-4">
          <div className="col-span-11 lg:col-span-2 text-sm">
            <span className="hidden lg:flex">شماره کارت</span>
            <span className="flex lg:hidden">نویسنده و عنوان</span>
          </div>
          <div className="col-span-8 lg:col-span-4 hidden lg:flex text-sm">
            محصولات
          </div>
          <div className="lg:col-span-2 hidden lg:flex text-sm">کاربر</div>
          <div className="lg:col-span-2 hidden lg:flex text-sm">
            قیمت کل (با تخفیف)
          </div>
          <div className="lg:col-span-1 hidden lg:flex text-sm">
            قیمت کل (بدون تخفیف)
          </div>
          <div className="col-span-1 md:block text-sm">عملیات</div>
        </div>

        {/* نمایش داده‌های دسته‌بندی‌ها */}
        {isLoading || (carts && carts.length === 0) ? (
          <SkeletonItem repeat={5} />
        ) : (
          carts.map((cart) => (
            <div
              key={cart._id}
              onClick={() => handleCartClick(cart)}
              className="mt-4 p-1 grid grid-cols-12 rounded-xl cursor-pointer border border-gray-200 gap-2 dark:border-white/10 dark:bg-slate-800 bg-white px-2 transition-all dark:hover:border-slate-700 hover:border-slate-100 hover:bg-green-100 dark:hover:bg-gray-800 dark:text-slate-100"
            >
              <div className="col-span-2 text-center flex items-center">
                <StatusPay paymentStatus={cart.paymentStatus || "pending"} />
                <div className="py-2 flex justify-center items-center gap-x-2 text-right">
                  <article className="flex-col flex gap-y-2">
                    <span className="line-clamp-1 text-base">
                      {cart.cartId || cart._id}
                      <span className="lg:hidden"></span>
                    </span>
                    <span className="text-xs flex">
                      {new Date(cart.createdAt).toLocaleDateString("fa-IR")}
                    </span>
                    <span className="lg:hidden text-xs line-clamp-1"></span>
                  </article>
                </div>
              </div>
              <div className="lg:col-span-4 col-span-8 gap-2 lg:flex justify-left items-center text-right">
                <article className="flex-col flex gap-y-2 max-h-32 overflow-y-auto">
                  {cart.items && cart.items.length > 0 ? (
                    cart.items.map((item, index) => (
                      <div
                        key={item._id}
                        className="flex flex-wrap gap-2 items-center bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/50 dark:to-emerald-900/50 rounded-md px-3 py-2 hover:from-teal-100 hover:to-emerald-100 dark:hover:from-teal-800 dark:hover:to-emerald-800 transition-colors"
                      >
                        <span className="font-medium text-sm lg:text-base text-emerald-800 dark:text-emerald-200">
                          {item.product?.translations?.find(
                            (t) => t.language === "fa"
                          )?.translation?.fields?.title || "بدون عنوان"}
                        </span>
                        <span className="text-xs text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-800 rounded-full px-2 py-0.5">
                          تعداد: {item.quantity}
                        </span>
                        <span className="text-xs text-orange-700 dark:text-orange-300 bg-orange-100 dark:bg-orange-800 rounded-full px-2 py-0.5">
                          قیمت: {item.variation?.price?.toLocaleString("fa-IR")}{" "}
                          تومان
                        </span>
                      </div>
                    ))
                  ) : (
                    <span className="text-sm lg:text-base text-slate-500">
                      بدون محصول
                    </span>
                  )}
                </article>
              </div>
              <div className="lg:col-span-2 hidden gap-2 lg:flex justify-left items-center text-right">
                <article className="flex-col flex gap-y-2">
                  <span className="text-sm lg:text-base overflow-hidden text-ellipsis line-clamp-1">
                    {cart.user?.name || "مهمان"}
                  </span>
                </article>
              </div>
              <div className="lg:col-span-2 hidden gap-2 lg:flex justify-left items-center text-right">
                <article className="flex-col flex gap-y-2">
                  <span className="text-sm lg:text-base">
                    {cart.totalAmountWithDiscount?.toLocaleString("fa-IR") || 0}{" "}
                    تومان
                  </span>
                </article>
              </div>
              <div className="lg:col-span-1 hidden gap-2 lg:flex justify-left items-center text-right">
                <article className="flex-col flex gap-y-2">
                  <span className="text-sm lg:text-base">
                    {cart.totalAmountWithoutDiscount?.toLocaleString("fa-IR") ||
                      0}{" "}
                    تومان
                  </span>
                </article>
              </div>
              <div className="col-span-2 md:col-span-1 gap-2 text-center flex justify-center items-center">
                <article className="lg:flex-row flex flex-col justify-center gap-x-2 gap-y-2">
                  <DeleteModal
                    message="آیا از حذف این کارتهای خرید اطمینان دارید؟"
                    isLoading={isRemoving}
                    onDelete={() => removeCart(cart?._id)}
                  />
                </article>
              </div>
            </div>
          ))
        )}

        {/* Cart Details Modal */}
        <Modal
          isOpen={!!selectedCart}
          onClose={closeModal}
          className="w-full max-w-lg p-4"
        >
          {selectedCart && (
            <div className="text-right space-y-4">
              <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-200">
                جزئیات کارت خرید
              </h2>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <span className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 px-2 py-0.5 rounded text-sm">
                    شماره کارت: {selectedCart.cartId || selectedCart._id}
                  </span>
                  <span className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 px-2 py-0.5 rounded text-sm">
                    تاریخ:{" "}
                    {new Date(selectedCart.createdAt).toLocaleDateString(
                      "fa-IR"
                    )}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-600 dark:text-gray-300">
                    وضعیت پرداخت
                  </h3>
                  <StatusPay
                    paymentStatus={selectedCart.paymentStatus || "pending"}
                  />
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-600 dark:text-gray-300">
                    کاربر
                  </h3>
                  <span
                    className="bg-blue-100 text-blue-700 dark:bg-blue-700 dark:text-blue ліні

System: blue-200 px-2 py-0.5 rounded text-sm"
                  >
                    {selectedCart.user?.name
                      ? selectedCart.user.name
                      : ` شناسه : ${selectedCart.guest}`}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-600 dark:text-gray-300">
                    محصولات
                  </h3>
                  <div className="space-y-2 max-h-56 overflow-y-auto">
                    {selectedCart.items && selectedCart.items.length > 0 ? (
                      selectedCart.items.map((item) => (
                        <div
                          key={item._id}
                          className="flex flex-wrap gap-2 items-center bg-gray-50 dark:bg-gray-800 rounded px-2 py-1"
                        >
                          <span className="text-sm text-gray-700 dark:text-gray-300">
                            {item.product?.translations?.find(
                              (t) => t.language === "fa"
                            )?.translation?.fields?.title || "بدون عنوان"}
                          </span>
                          <span className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 px-2 py-0.5 rounded text-xs">
                            تعداد: {item.quantity}
                          </span>
                          <span className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 px-2 py-0.5 rounded text-xs">
                            قیمت:{" "}
                            {item.variation?.price?.toLocaleString("fa-IR")}{" "}
                            تومان
                          </span>
                        </div>
                      ))
                    ) : (
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        بدون محصول
                      </span>
                    )}
                  </div>
                </div>
                <div className="flex gap-3">
                  <div>
                    <h3 className="text-base font-medium text-gray-600 dark:text-gray-300">
                      قیمت کل (با تخفیف)
                    </h3>
                    <span className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 px-2 py-0.5 rounded text-sm">
                      {selectedCart.totalAmountWithDiscount?.toLocaleString(
                        "fa-IR"
                      ) || 0}{" "}
                      تومان
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-600 dark:text-gray-300">
                      قیمت کل (بدون تخفیف)
                    </h3>
                    <span className="bg-gray-100 text-gray-700 dark:bg-gray-700 dark:text-gray-300 px-2 py-0.5 rounded text-sm">
                      {selectedCart.totalAmountWithoutDiscount?.toLocaleString(
                        "fa-IR"
                      ) || 0}{" "}
                      تومان
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-3">
                <DeleteModal
                  message="آیا از حذف این کارتهای خرید اطمینان دارید؟"
                  isLoading={isRemoving}
                  onDelete={() => {
                    removeCart(selectedCart?._id);
                    closeModal();
                  }}
                />
              </div>
            </div>
          )}
        </Modal>

        {/* Pagination */}
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </ControlPanel>
    </>
  );
};

export default ListCart;
