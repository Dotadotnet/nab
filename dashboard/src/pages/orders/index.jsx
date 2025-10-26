import React, { useState, useEffect, useMemo } from "react";
import {
  useGetOrdersQuery,
  useDeleteOrderMutation,
  useUpdateOrderStatusToShippedMutation
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
  const [trackingCode, setTrackingCode] = useState("");
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
console.log("orders", orders)
  const [
    removeOrder,
    { isLoading: isRemoving, data: deleteOrder, error: removeError }
  ] = useDeleteOrderMutation();

  const [
    updateOrderStatus,
    { isLoading: isUpdating, data: updateData, error: updateError }
  ] = useUpdateOrderStatusToShippedMutation();

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
    // Handle update status effects
    if (isUpdating) {
      toast.loading("در حال به‌روزرسانی وضعیت...", { id: "order-update" });
    }
    if (updateData && !isUpdating) {
      toast.dismiss("order-update");
      toast.success(updateData?.description, { id: "order-update" });
      // Close modal and refresh data
      setSelectedOrder(null);
      refetch();
    }
    if (updateError?.data) {
      toast.error(updateError?.data?.message, { id: "order-update" });
    }
  }, [data, error, isLoading, isRemoving, removeError, deleteOrder, isUpdating, updateData, updateError, refetch]);

  const handleOrderClick = (order) => {
    setSelectedOrder(order);
    // Pre-fill tracking code if it exists
    setTrackingCode(order.trackingCode || "");
  };

  const closeModal = () => {
    setSelectedOrder(null);
    setTrackingCode("");
  };

  const handleMarkAsShipped = async () => {
    if (!selectedOrder) return;
    
    await updateOrderStatus({
      id: selectedOrder._id,
      body: { trackingCode }
    });
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
                    {order.customer?.name || order.customer?.phone || "بدون اطلاعات مشتری"}
                  </span>
                  <span className="text-xs text-indigo-700 dark:text-indigo-300 bg-indigo-100 dark:bg-indigo-800 rounded-full px-2 py-0.5">
                    شناسه مشتری: {order.customer?._id?.slice(0, 8) || "نامشخص"}
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
                {/* Remove delete button and replace with status indicator */}
                <StatusIndicator isActive={order.orderStatus === "delivered"} />
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
                  <div className="flex flex-col gap-1">
                    <span className="bg-indigo-50 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 px-3 py-1 rounded-lg text-sm">
                      {selectedOrder.customer?.name || selectedOrder.customer?.phone || `شناسه: ${selectedOrder.customer?._id?.slice(0, 8) || "نامشخص"}`}
                    </span>
                    {selectedOrder.customer?.phone && selectedOrder.customer?.name && (
                      <span className="bg-indigo-50 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 px-3 py-1 rounded-lg text-sm">
                        تلفن: {selectedOrder.customer.phone}
                      </span>
                    )}
                  </div>
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
                      {selectedOrder.address?.address || "نامشخص"}
                    </span>
                    <span className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm mt-1 block">
                      {selectedOrder.address?.city}, {selectedOrder.address?.province}
                    </span>
                    {selectedOrder.address?.postalCode && (
                      <span className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm mt-1 block">
                        کد پستی: {selectedOrder.address.postalCode}
                      </span>
                    )}
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
              
              {/* Mark as shipped section */}
              {selectedOrder.orderStatus !== "delivered" && (
                <div className="mt-6 pt-4 border-t border-gray-200 dark:border-gray-700">
                  <h3 className="text-lg font-medium text-gray-800 dark:text-gray-100 mb-3">
                    ارسال سفارش
                  </h3>
                  <div className="flex flex-col gap-3">
                    <label className="text-sm text-gray-700 dark:text-gray-300">
                      کد رهگیری پستی:
                      <input
                        type="text"
                        value={trackingCode}
                        onChange={(e) => setTrackingCode(e.target.value)}
                        className="mt-1 w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                        placeholder="کد رهگیری پستی را وارد کنید"
                      />
                    </label>
                    <div className="flex justify-end gap-3">
                      <button
                        onClick={handleMarkAsShipped}
                        disabled={isUpdating}
                        className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md disabled:opacity-50"
                      >
                        {isUpdating ? "در حال ارسال..." : "علامت‌گذاری به عنوان ارسال شده"}
                      </button>
                      <button
                        onClick={closeModal}
                        className="px-4 py-2 bg-gray-300 hover:bg-gray-400 text-gray-800 dark:text-gray-100 rounded-md"
                      >
                        انصراف
                      </button>
                    </div>
                  </div>
                </div>
              )}
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