import React, { useState, useEffect, useMemo } from "react";
import {
  useGetOrdersQuery,
  useDeleteOrderMutation
} from "@/services/order/orderApi";
import DeleteModal from "@/components/shared/modal/DeleteModal";
import Modal from "@/components/shared/modal/Modal";
import { toast } from "react-hot-toast";
import StatusIndicator from "@/components/shared/tools/StatusIndicator";
import SkeletonItem from "@/components/shared/skeleton/SkeletonItem";
import Pagination from "@/components/shared/pagination/Pagination";
import Search from "@/components/shared/search";
import ControlPanel from "../ControlPanel";
import AddButton from "@/components/shared/button/AddButton";

const ListOrder = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedOrder, setSelectedOrder] = useState(null);
  const itemsPerPage = 5;
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const { data, isLoading, error, refetch } = useGetOrdersQuery({
    page: currentPage,
    limit: itemsPerPage,
    status: statusFilter === "all" ? undefined : statusFilter,
    search: searchTerm
  });

  const orders = useMemo(() => data?.data || [], [data]);
  const totalPages = data ? Math.ceil(data.total / itemsPerPage) : 1;

  const [
    removeOrder,
    { isLoading: isRemoving, data: deleteOrder, error: removeError }
  ] = useDeleteOrderMutation();

  useEffect(() => {
    if (isLoading) {
      toast.loading("در حال دریافت سفارشات...", { id: "order-loading" });
    }
    if (data && data.acknowledgement) {
      toast.success(data?.description, { id: "order-loading" });
    }
    if (data && !data.acknowledgement) {
      toast.error(data?.description, { id: "order-loading" });
    }
    if (error) {
      toast.error(error?.data?.description, { id: "order-loading" });
    }
    if (isRemoving) {
      toast.loading("در حال حذف...", { id: "order-remove" });
    }
    if (deleteOrder && !isRemoving) {
      toast.dismiss("order-remove");
    }
    if (removeError?.data) {
      toast.error(removeError?.data?.message, { id: "order-remove" });
    }
    if (deleteOrder && !isRemoving) {
      toast.success("سفارش با موفقیت حذف شد.", { id: "order-remove" });
    }
  }, [data, error, isLoading, isRemoving, removeError, deleteOrder]);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
  };

  const closeModal = () => {
    setSelectedOrder(null);
  };

  const orderStatusMap = {
    awaiting_address: "در انتظار آدرس",
    final_review: "بازبینی نهایی",
    cancelled: "لغو شده",
    delivered: "تحویل شده"
  };

  return (
    <>
      <ControlPanel>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <AddButton link="./add" />

        <div className="mt-8 w-full grid grid-cols-12 text-slate-400 px-4">
          <div className="col-span-11 lg:col-span-2 text-sm">شماره سفارش</div>
          <div className="col-span-8 lg:col-span-5 hidden lg:flex text-sm">
            اطلاعات مشتری
          </div>
          <div className="lg:col-span-2 hidden lg:flex text-sm">
            وضعیت سفارش
          </div>
          <div className="lg:col-span-2 hidden lg:flex text-sm">
            تاریخ تحویل
          </div>
          <div className="col-span-1 md:block text-sm">عملیات</div>
        </div>

        {isLoading || (orders && orders.length === 0) ? (
          <SkeletonItem repeat={5} />
        ) : (
          orders.map((order) => (
            <div
              key={order._id}
              onClick={() => handleOrderClick(order)}
              className="mt-4 p-1 grid grid-cols-12 rounded-xl cursor-pointer border border-gray-200 gap-2 dark:border-white/10 dark:bg-slate-800 bg-white px-2 transition-all dark:hover:border-slate-700 hover:border-slate-100 hover:bg-green-100 dark:hover:bg-gray-800 dark:text-slate-100"
            >
              <div className="col-span-2 text-center flex items-center">
                <StatusIndicator isActive={order.orderStatus === "delivered"} />
                <div className="py-2 flex justify-center items-center gap-x-2 text-right">
                  <article className="flex-col flex gap-y-2">
                    <span className="line-clamp-1 text-base">
                      {order.orderId}
                    </span>
                    <span className="text-xs flex">
                      {new Date(order.createdAt).toLocaleDateString("fa-IR")}
                    </span>
                  </article>
                </div>
              </div>

              <div className="lg:col-span-5 col-span-8 gap-2 lg:flex justify-left items-center text-right">
                <article className="flex-col flex gap-y-2">
                  <span className="font-medium text-sm lg:text-base text-emerald-800 dark:text-emerald-200">
                    {order.customer?.name || "بدون نام"}
                  </span>
                  <span className="text-xs text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-800 rounded-full px-2 py-0.5">
                    شناسه مشتری: {order.customer?._id || "نامشخص"}
                  </span>
                </article>
              </div>

              <div className="lg:col-span-2 hidden gap-2 lg:flex justify-left items-center text-right">
                <span className="text-sm lg:text-base bg-purple-50 text-purple-700 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-lg">
                  {orderStatusMap[order.orderStatus] || "در انتظار آدرس"}
                </span>
              </div>

              <div className="lg:col-span-2 hidden gap-2 lg:flex justify-left items-center text-right">
                <span className="text-sm lg:text-base">
                  {order.deliveryDate
                    ? new Date(order.deliveryDate).toLocaleDateString("fa-IR")
                    : "نامشخص"}
                </span>
              </div>

              <div className="col-span-2 md:col-span-1 gap-2 text-center flex justify-center items-center">
                <DeleteModal
                  message="آیا از حذف این سفارش اطمینان دارید؟"
                  isLoading={isRemoving}
                  onDelete={() => removeOrder(order?._id)}
                />
              </div>
            </div>
          ))
        )}

        {/* Order Details Modal */}
        <Modal
          isOpen={!!selectedOrder}
          onClose={closeModal}
          className="w-full max-w-lg p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
        >
          {selectedOrder && (
            <div className="text-right space-y-6">
              <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-300">
                جزئیات سفارش
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-teal-50 text-teal-700 dark:bg-teal-900 dark:text-teal-200 px-3 py-1 rounded-lg text-sm">
                    شماره سفارش: {selectedOrder.orderId || selectedOrder._id}
                  </span>
                  <span className="bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-lg text-sm">
                    تاریخ ثبت: {new Date(selectedOrder.createdAt).toLocaleDateString("fa-IR")}
                  </span>
                </div>
                <div>
                  <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                    وضعیت سفارش
                  </h3>
                  <span className="bg-purple-50 text-purple-700 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-lg text-sm flex items-center gap-2">
                    <StatusIndicator isActive={selectedOrder.orderStatus === "delivered"} />
                    {orderStatusMap[selectedOrder.orderStatus] || "در انتظار آدرس"}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                    مشتری
                  </h3>
                  <span className="bg-indigo-50 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 px-3 py-1 rounded-lg text-sm">
                    {selectedOrder.customer?.name || `شناسه: ${selectedOrder.customer?._id || "نامشخص"}`}
                  </span>
                </div>

                {selectedOrder.trackingCode && (
                  <div>
                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                      کد رهگیری
                    </h3>
                    <span className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm">
                      {selectedOrder.trackingCode}
                    </span>
                  </div>
                )}

                {selectedOrder.paymentRefId && (
                  <div>
                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                      شناسه مرجع پرداخت
                    </h3>
                    <span className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm">
                      {selectedOrder.paymentRefId}
                    </span>
                  </div>
                )}

                {selectedOrder.shippingDate && (
                  <div>
                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                      تاریخ ارسال
                    </h3>
                    <span className="bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-lg text-sm">
                      {new Date(selectedOrder.shippingDate).toLocaleDateString("fa-IR")}
                    </span>
                  </div>
                )}

                {selectedOrder.deliveryDate && (
                  <div>
                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                      تاریخ تحویل
                    </h3>
                    <span className="bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-lg text-sm">
                      {new Date(selectedOrder.deliveryDate).toLocaleDateString("fa-IR")}
                    </span>
                  </div>
                )}

                {selectedOrder.address && (
                  <div>
                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                      آدرس
                    </h3>
                    <span className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm">
                      {selectedOrder.address?.street || "نامشخص"}
                    </span>
                  </div>
                )}

                {selectedOrder.userNote && (
                  <div>
                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                      یادداشت کاربر
                    </h3>
                    <span className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm">
                      {selectedOrder.userNote}
                    </span>
                  </div>
                )}

                {selectedOrder.adminNote && (
                  <div>
                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                      یادداشت مدیر
                    </h3>
                    <span className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm">
                      {selectedOrder.adminNote}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                    خرید مرتبط
                  </h3>
                  <span className="bg-teal-50 text-teal-700 dark:bg-teal-900 dark:text-teal-200 px-3 py-1 rounded-lg text-sm">
                    شناسه خرید: {selectedOrder.purchase?._id || "نامشخص"}
                  </span>
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <DeleteModal
                  message="آیا از حذف این سفارش اطمینان دارید؟"
                  isLoading={isRemoving}
                  onDelete={() => {
                    removeOrder(selectedOrder?._id);
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

export default ListOrder;