import React, { useState, useEffect, useMemo } from "react";
import {
  useGetPaymentsQuery,
  useDeletePaymentMutation
} from "@/services/payment/paymentApi";
import DeleteModal from "@/components/shared/modal/DeleteModal";
import Modal from "@/components/shared/modal/Modal";
import { toast } from "react-hot-toast";
import StatusPay from "@/components/shared/tools/StatusPay";
import SkeletonItem from "@/components/shared/skeleton/SkeletonItem";
import Pagination from "@/components/shared/pagination/Pagination";
import Search from "@/components/shared/search";
import ControlPanel from "../ControlPanel";

const ListPayment = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedPayment, setSelectedPayment] = useState(null);
  const itemsPerPage = 5;
  const [searchTerm, setSearchTerm] = useState("");

  const { data, isLoading, error } = useGetPaymentsQuery({
    page: currentPage,
    limit: itemsPerPage,
    search: searchTerm
  });

  const payments = useMemo(() => data?.data || [], [data]);
  const totalPages = data ? Math.ceil(data.total / itemsPerPage) : 1;

  const [
    removePayment,
    { isLoading: isRemoving, data: deletePayment, error: removeError }
  ] = useDeletePaymentMutation();

  useEffect(() => {
    if (isLoading) {
      toast.loading("در حال دریافت کارتهای خرید...", { id: "get-payments" });
    }
    if (data && data.acknowledgement) {
      toast.success(data?.description, { id: "get-payments" });
    }
    if (data && !data.acknowledgement) {
      toast.error(data?.description, { id: "get-payments" });
    }
    if (error) {
      toast.error(error?.data?.description, { id: "get-payments" });
    }
    if (isRemoving) {
      toast.loading("در حال حذف  ...", { id: "payment-remove" });
    }
    if (deletePayment && !isRemoving) {
      toast.dismiss("payment-remove");
    }
    if (removeError?.data) {
      toast.error(removeError?.data?.message, { id: "payment-remove" });
    }
    if (deletePayment && !isRemoving) {
      toast.success("کارتهای خرید با موفقیت حذف شد.", { id: "payment-remove" });
    }
  }, [data, error, isLoading, isRemoving, removeError, deletePayment]);

  const handlePaymentClick = (payment) => {
    setSelectedPayment(payment);
  };

  const closeModal = () => {
    setSelectedPayment(null);
  };
  console.log(payments);
  const paymentStatusMap = {
    pending: "در انتظار پرداخت",
    paid: "پرداخت شده",
    failed: "ناموفق",
    expired: "منقضی شده",
    refunded: "بازپرداخت شده",
    canceled: "لغو شده"
  };
  const shippingStatusMap = {
    pending: "در انتظار ارسال",
    shipped: "ارسال شده",
    failed: "ناموفق"
  };

  return (
    <>
      <ControlPanel>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

        <div className="mt-8 w-full grid grid-cols-12 text-slate-400 px-4">
          <div className="col-span-11 lg:col-span-2 text-sm">شماره پرداخت</div>
          <div className="col-span-8 lg:col-span-5 hidden lg:flex text-sm">
            محصولات
          </div>
          <div className="lg:col-span-2 hidden lg:flex text-sm">
            مبلغ کل (با تخفیف)
          </div>
          <div className="lg:col-span-1 hidden lg:flex text-sm">
            مبلغ کل (بدون تخفیف)
          </div>
          <div className="col-span-1 md:block text-sm">عملیات</div>
        </div>

        {isLoading || (payments && payments.length === 0) ? (
          <SkeletonItem repeat={5} />
        ) : (
          payments.map((payment) => (
            <div
              key={payment._id}
              onClick={() => handlePaymentClick(payment)}
              className="mt-4 p-1 grid grid-cols-12 rounded-xl cursor-pointer border border-gray-200 gap-2 dark:border-white/10 dark:bg-slate-800 bg-white px-2 transition-all dark:hover:border-slate-700 hover:border-slate-100 hover:bg-green-100 dark:hover:bg-gray-800 dark:text-slate-100"
            >
              <div className="col-span-2 text-center flex items-center">
                <StatusPay paymentStatus={payment.paymentStatus || "pending"} />
                <div className="py-2 flex justify-center items-center gap-x-2 text-right">
                  <article className="flex-col flex gap-y-2">
                    <span className="line-clamp-1 text-base">
                      {payment.fullName}{" "}
                    </span>
                    <span className="text-xs flex">
                      {new Date(payment.createdAt).toLocaleDateString("fa-IR")}
                    </span>
                  </article>
                </div>
              </div>

              <div className="lg:col-span-5 col-span-8 gap-2 lg:flex justify-left items-center text-right">
                <article className="flex-col flex gap-y-2 max-h-32 overflow-y-auto">
                  {payment.products && payment.products.length > 0 ? (
                    payment.products.map((item) => (
                      <div
                        key={item._id}
                        className="flex flex-wrap gap-2 items-center bg-gradient-to-r from-teal-50 to-emerald-50 dark:from-teal-900/50 dark:to-emerald-900/50 rounded-md px-3 py-2"
                      >
                        <span className="font-medium text-sm lg:text-base text-emerald-800 dark:text-emerald-200">
                          {item.product?.title}
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
                <span className="text-sm lg:text-base">
                  {payment.totalAmountWithDiscount?.toLocaleString("fa-IR") ||
                    0}{" "}
                  تومان
                </span>
              </div>

              <div className="lg:col-span-2 hidden gap-2 lg:flex justify-left items-center text-right">
                <span className="text-sm lg:text-base">
                  {payment.totalAmountWithoutDiscount?.toLocaleString(
                    "fa-IR"
                  ) || 0}{" "}
                  تومان
                </span>
              </div>

              <div className="col-span-2 md:col-span-1 gap-2 text-center flex justify-center items-center">
                <DeleteModal
                  message="آیا از حذف این پرداخت اطمینان دارید؟"
                  isLoading={isRemoving}
                  onDelete={() => removePayment(payment?._id)}
                />
              </div>
            </div>
          ))
        )}

        {/* Payment Details Modal */}
        {/* Payment Details Modal */}
        <Modal
          isOpen={!!selectedPayment}
          onClose={closeModal}
          className="w-full max-w-lg p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
        >
          {selectedPayment && (
            <div className="text-right space-y-6">
              <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-300">
                جزئیات پرداخت
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-teal-50 text-teal-700 dark:bg-teal-900 dark:text-teal-200 px-3 py-1 rounded-lg text-sm">
                    شماره پرداخت :{" "}
                    {selectedPayment.purchaseId || selectedPayment._id}
                  </span>
                  <span className="bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-lg text-sm">
                    تاریخ:{" "}
                    {new Date(selectedPayment.createdAt).toLocaleDateString(
                      "fa-IR"
                    )}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                    وضعیت پرداخت
                  </h3>
                  <span className="bg-purple-50 text-purple-700 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-lg text-sm flex items-center gap-2">
                    <StatusPay
                      paymentStatus={selectedPayment.paymentStatus || "pending"}
                    />
                    {paymentStatusMap[selectedPayment.paymentStatus] ||
                      "در انتظار پرداخت"}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                    کاربر
                  </h3>
                  <span className="bg-indigo-50 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 px-3 py-1 rounded-lg text-sm">
                    {selectedPayment.fullName ||
                      `شناسه: ${selectedPayment.guest}`}
                  </span>
                </div>
                {selectedPayment.customerId && (
                  <div>
                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                      شناسه مشتری در پرداخت
                    </h3>
                    <span className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm">
                      {selectedPayment.customerId}
                    </span>
                  </div>
                )}

                {selectedPayment.saleReferenceId && (
                  <div>
                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                      ارجاع فروش
                    </h3>
                    <span className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm">
                      {selectedPayment.saleReferenceId}
                    </span>
                  </div>
                )}

                {selectedPayment.paymentId && (
                  <div>
                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                      شناسه پرداخت در درگاه
                    </h3>
                    <span className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm">
                      {selectedPayment.paymentId}
                    </span>
                  </div>
                )}

                {selectedPayment.shippingStatus && (
                  <div>
                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                      وضعیت ارسال
                    </h3>
                    <span className="bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-lg text-sm">
                      {shippingStatusMap[selectedPayment.shippingStatus] ||
                        "در انتظار ارسال"}
                    </span>
                  </div>
                )}

                {selectedPayment.ResCode && (
                  <div>
                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                      کد پاسخ درگاه
                    </h3>
                    <span className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm">
                      {selectedPayment.ResCode}
                    </span>
                  </div>
                )}

                {selectedPayment.gateway && (
                  <div>
                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                      درگاه پرداخت
                    </h3>
                    <span className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm">
                      {selectedPayment.gateway}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                    محصولات
                  </h3>
                  <div className="space-y-3 max-h-56 overflow-y-auto">
                    {selectedPayment.products &&
                    selectedPayment.products.length > 0 ? (
                      selectedPayment.products.map((item) => (
                        <div
                          key={item._id}
                          className="flex flex-wrap gap-3 items-center bg-gray-50 dark:bg-gray-800 rounded-lg px-3 py-2"
                        >
                          <span className="text-sm text-gray-800 dark:text-gray-100">
                            {item.product?.title || "بدون عنوان"}
                          </span>
                          <span className="bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-lg text-xs">
                            تعداد: {item.quantity}
                          </span>
                          <span className="bg-teal-50 text-teal-700 dark:bg-teal-900 dark:text-teal-200 px-3 py-1 rounded-lg text-xs">
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
                <div className="flex gap-4">
                  <div>
                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                      قیمت کل (با تخفیف)
                    </h3>
                    <span className="bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-lg text-sm">
                      {selectedPayment.totalAmountWithDiscount?.toLocaleString(
                        "fa-IR"
                      ) || 0}{" "}
                      تومان
                    </span>
                  </div>
                  <div>
                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                      قیمت کل (بدون تخفیف)
                    </h3>
                    <span className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm">
                      {selectedPayment.totalAmountWithoutDiscount?.toLocaleString(
                        "fa-IR"
                      ) || 0}{" "}
                      تومان
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <DeleteModal
                  message="آیا از حذف این پرداخت اطمینان دارید؟"
                  isLoading={isRemoving}
                  onDelete={() => {
                    removePayment(selectedPayment?._id);
                    closeModal();
                  }}
                />
              </div>
            </div>
          )}
        </Modal>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </ControlPanel>
    </>
  );
};

export default ListPayment;
