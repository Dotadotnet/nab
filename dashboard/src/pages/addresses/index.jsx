import React, { useState, useEffect, useMemo } from "react";
import {
  useGetAddressesQuery,
  useDeleteAddressMutation
} from "@/services/address/addressApi";
import DeleteModal from "@/components/shared/modal/DeleteModal";
import Modal from "@/components/shared/modal/Modal";
import { toast } from "react-hot-toast";
import StatusIndicator from "@/components/shared/tools/StatusIndicator";
import SkeletonItem from "@/components/shared/skeleton/SkeletonItem";
import Pagination from "@/components/shared/pagination/Pagination";
import Search from "@/components/shared/search";
import ControlPanel from "../ControlPanel";
import AddButton from "@/components/shared/button/AddButton";

const ListAddress = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [selectedAddress, setSelectedAddress] = useState(null);
  const itemsPerPage = 5;
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");

  const { data, isLoading, error, refetch } = useGetAddressesQuery({
    page: currentPage,
    limit: itemsPerPage,
    status: statusFilter === "all" ? undefined : statusFilter,
    search: searchTerm
  });

  const addresses = useMemo(() => data?.data || [], [data]);
  const totalPages = data ? Math.ceil(data.total / itemsPerPage) : 1;

  const [
    removeAddress,
    { isLoading: isRemoving, data: deleteAddress, error: removeError }
  ] = useDeleteAddressMutation();

  useEffect(() => {
    if (isLoading) {
      toast.loading("در حال دریافت آدرس‌ها...", { id: "address-loading" });
    }
    if (data && data.acknowledgement) {
      toast.success(data?.description, { id: "address-loading" });
    }
    if (data && !data.acknowledgement) {
      toast.error(data?.description, { id: "address-loading" });
    }
    if (error) {
      toast.error(error?.data?.description, { id: "address-loading" });
    }
    if (isRemoving) {
      toast.loading("در حال حذف...", { id: "address-remove" });
    }
    if (deleteAddress && !isRemoving) {
      toast.dismiss("address-remove");
    }
    if (removeError?.data) {
      toast.error(removeError?.data?.message, { id: "address-remove" });
    }
    if (deleteAddress && !isRemoving) {
      toast.success("آدرس با موفقیت حذف شد.", { id: "address-remove" });
    }
  }, [data, error, isLoading, isRemoving, removeError, deleteAddress]);

  const handleAddressClick = (address) => {
    setSelectedAddress(address);
  };

  const closeModal = () => {
    setSelectedAddress(null);
  };

  return (
    <>
      <ControlPanel>
        <Search searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <AddButton link="./add" />

        <div className="mt-8 w-full grid grid-cols-12 text-slate-400 px-4">
          <div className="col-span-11 lg:col-span-3 text-sm">
            <span className="hidden lg:flex">کاربر</span>
            <span className="flex lg:hidden">کاربر و آدرس</span>
          </div>
          <div className="col-span-8 lg:col-span-3 hidden lg:flex text-sm">
            شهر و استان
          </div>
          <div className="lg:col-span-3 hidden lg:flex text-sm">
            کد پستی
          </div>
          <div className="lg:col-span-2 hidden lg:flex text-sm">
            وضعیت
          </div>
          <div className="col-span-1 md:block text-sm">عملیات</div>
        </div>

        {isLoading || (addresses && addresses.length === 0) ? (
          <SkeletonItem repeat={5} />
        ) : (
          addresses.map((address) => (
            <div
              key={address._id}
              onClick={() => handleAddressClick(address)}
              className="mt-4 p-1 grid grid-cols-12 rounded-xl cursor-pointer border border-gray-200 gap-2 dark:border-white/10 dark:bg-slate-800 bg-white px-2 transition-all dark:hover:border-slate-700 hover:border-slate-100 hover:bg-green-100 dark:hover:bg-gray-800 dark:text-slate-100"
            >
              <div className="col-span-10 lg:col-span-3 text-center flex items-center">
                <StatusIndicator isActive={address.isComplete} />
                <div className="py-2 flex justify-center items-center gap-x-2 text-right">
                  <article className="flex-col flex gap-y-2">
                    <span className="line-clamp-1 text-base">
                      <span className="hidden lg:flex">
                        {address.user?.name || "بدون نام"}
                      </span>
                      <span className="lg:hidden">{address.address || "بدون آدرس"}</span>
                    </span>
                    <span className="text-xs hidden lg:flex">
                      {new Date(address.createdAt).toLocaleDateString("fa-IR")}
                    </span>
                    <span className="lg:hidden text-xs line-clamp-1">
                      {address.city || new Date(address.createdAt).toLocaleDateString("fa-IR")}
                    </span>
                  </article>
                </div>
              </div>

              <div className="lg:col-span-3 hidden gap-2 lg:flex justify-left items-center text-right">
                <article className="flex-col flex gap-y-2">
                  <span className="text-sm lg:text-base overflow-hidden text-ellipsis line-clamp-1">
                    {`${address.city}, ${address.province}`}
                  </span>
                </article>
              </div>

              <div className="lg:col-span-3 hidden gap-2 lg:flex justify-left items-center text-right">
                <article className="flex-col flex gap-y-2">
                  <span className="text-sm lg:text-base overflow-hidden text-ellipsis block line-clamp-1 max-h-[1.2em]">
                    {address.postalCode || "نامشخص"}
                  </span>
                </article>
              </div>

              <div className="lg:col-span-2 hidden gap-2 lg:flex justify-left items-center text-right">
                <article className="flex-col flex gap-y-2">
                  <span className="text-sm lg:text-base bg-purple-50 text-purple-700 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-lg">
                    {address.isDefault ? "پیش‌فرض" : "غیر پیش‌فرض"}
                  </span>
                </article>
              </div>

              <div className="col-span-2 md:col-span-1 gap-2 text-center flex justify-center items-center">
                <article className="lg:flex-row flex flex-col justify-center gap-x-2 gap-y-2">
                  <DeleteModal
                    message="آیا از حذف این آدرس اطمینان دارید؟"
                    isLoading={isRemoving}
                    onDelete={() => removeAddress(address?._id)}
                  />
                </article>
              </div>
            </div>
          ))
        )}

        {/* Address Details Modal */}
        <Modal
          isOpen={!!selectedAddress}
          onClose={closeModal}
          className="w-full max-w-lg p-6 bg-white dark:bg-gray-900 rounded-xl shadow-lg"
        >
          {selectedAddress && (
            <div className="text-right space-y-6">
              <h2 className="text-2xl font-bold text-teal-600 dark:text-teal-300">
                جزئیات آدرس
              </h2>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="bg-teal-50 text-teal-700 dark:bg-teal-900 dark:text-teal-200 px-3 py-1 rounded-lg text-sm">
                    شناسه آدرس: {selectedAddress._id}
                  </span>
                  <span className="bg-blue-50 text-blue-700 dark:bg-blue-900 dark:text-blue-200 px-3 py-1 rounded-lg text-sm">
                    تاریخ ثبت: {new Date(selectedAddress.createdAt).toLocaleDateString("fa-IR")}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                    کاربر
                  </h3>
                  <span className="bg-indigo-50 text-indigo-700 dark:bg-indigo-900 dark:text-indigo-200 px-3 py-1 rounded-lg text-sm">
                    {selectedAddress.user?.name || `شناسه: ${selectedAddress.user?._id || "نامشخص"}`}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                    استان
                  </h3>
                  <span className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm">
                    {selectedAddress.province || "نامشخص"}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                    شهر
                  </h3>
                  <span className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm">
                    {selectedAddress.city || "نامشخص"}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                    آدرس
                  </h3>
                  <span className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm">
                    {selectedAddress.address || "نامشخص"}
                  </span>
                </div>

                {selectedAddress.plateNumber && (
                  <div>
                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                      شماره پلاک
                    </h3>
                    <span className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm">
                      {selectedAddress.plateNumber}
                    </span>
                  </div>
                )}

                {selectedAddress.postalCode && (
                  <div>
                    <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                      کد پستی
                    </h3>
                    <span className="bg-gray-50 text-gray-700 dark:bg-gray-800 dark:text-gray-200 px-3 py-1 rounded-lg text-sm">
                      {selectedAddress.postalCode}
                    </span>
                  </div>
                )}

                <div>
                  <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                    وضعیت پیش‌فرض
                  </h3>
                  <span className="bg-purple-50 text-purple-700 dark:bg-purple-900 dark:text-purple-200 px-3 py-1 rounded-lg text-sm">
                    {selectedAddress.isDefault ? "پیش‌فرض" : "غیر پیش‌فرض"}
                  </span>
                </div>

                <div>
                  <h3 className="text-base font-medium text-gray-800 dark:text-gray-100">
                    وضعیت تکمیل
                  </h3>
                  <span className="bg-green-50 text-green-700 dark:bg-green-900 dark:text-green-200 px-3 py-1 rounded-lg text-sm flex items-center gap-2">
                    <StatusIndicator isActive={selectedAddress.isComplete} />
                    {selectedAddress.isComplete ? "تکمیل شده" : "ناقص"}
                  </span>
                </div>
              </div>
              <div className="flex justify-end gap-4">
                <DeleteModal
                  message="آیا از حذف این آدرس اطمینان دارید؟"
                  isLoading={isRemoving}
                  onDelete={() => {
                    removeAddress(selectedAddress?._id);
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

export default ListAddress;