"use client";

import { useForm } from "react-hook-form";
import { useCompleteOrderMutation } from "@/services/payment/paymentApi";
import { motion } from "framer-motion";
import Spinner from "@/components/shared/Spinner";
import { toast } from "react-hot-toast";
import { useEffect } from "react";
import { useParams } from "next/navigation";

export default function OrderAddress() {
  const params = useParams();
  const orderId = params?.orderId;
  console.log(orderId)
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({ mode: "onChange" });

  const [completeOrder, { isLoading, data, error }] =
    useCompleteOrderMutation();

  useEffect(() => {
    if (isLoading) {
      toast.loading("در حال ارسال", { id: "add-address" });
    }

    if (data) {
      toast.success(data?.description, { id: "add-address" });
    }

    if (error?.data) {
      toast.error(error?.data?.description, { id: "add-address" });
    }
  }, [isLoading, data, error]);
  const onSubmit = async (formDataInput) => {
    const formData = new FormData();
    formData.append("postalCode", formDataInput.postalCode);
    formData.append("address", formDataInput.address);
    formData.append("plateNumber", formDataInput.plateNumber);
    formData.append("orderId", orderId);
    formData.append("userNote", formDataInput.userNote);
     for (let pair of formData.entries()) {
    console.log(`${pair[0]}: ${pair[1]}`);
  }
  await completeOrder({id: orderId, body: formData });
  };

  return (
    <section className="w-screen h-screen flex justify-center items-center p-4 relative overflow-hidden">
      <div className="wave wave1" />
      <div className="wave wave2" />
      <div className="wave wave3" />

      <div className="max-w-md w-full  bg-white dark:bg-gray-900 z-50 p-6 rounded-lg shadow-lg">
        <div className="bg-green-100 mb-4 border-r-4 border-green-500 text-green-700 p-4 rounded-lg">
          {orderId && (
            <p className="text-sm">
              سفارش شما با شماره{" "}
              <span className="font-semibold">{orderId}</span> ثبت شد.
            </p>
          )}{" "}
          <p>لطفا آدرس خود را کامل کنید</p>
        </div>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm mb-1">* کد پستی</label>
            <input
              {...register("postalCode", { required: "کد پستی الزامی است" })}
              className="form-control block w-full h-12 !px-4  text-gray-700 bg-white dark:text-gray-100 dark:bg-slate-800 border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700  dark:focus:text-gray-100 focus:bg-white focus:border-green-600 focus:outline-none text-left "
              placeholder="کد پستی"
            />
            {errors.postalCode && (
              <span className="text-red-500 text-sm">
                {errors.postalCode.message}
              </span>
            )}
          </div>

          {/* آدرس */}
          <div>
            <label className="block text-sm mb-1">* آدرس</label>
            <input
              {...register("address", { required: "آدرس الزامی است" })}
              className="form-control block w-full h-12 !px-4  text-gray-700 bg-white dark:text-gray-100 dark:bg-slate-800 border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700  dark:focus:text-gray-100 focus:bg-white focus:border-green-600 focus:outline-none text-left "
              placeholder="آدرس"
            />
            {errors.address && (
              <span className="text-red-500 text-sm">
                {errors.address.message}
              </span>
            )}
          </div>

          {/* پلاک */}
          <div>
            <label className="block text-sm mb-1">* پلاک</label>
            <input
              {...register("plateNumber", { required: "پلاک الزامی است" })}
              className="form-control block w-full h-12 !px-4  text-gray-700 bg-white dark:text-gray-100 dark:bg-slate-800 border border-solid border-gray-300 rounded transition ease-in-out focus:text-gray-700  dark:focus:text-gray-100 focus:bg-white focus:border-green-600 focus:outline-none text-left "
              placeholder="پلاک"
            />
            {errors.plateNumber && (
              <span className="text-red-500 text-sm">
                {errors.plateNumber.message}
              </span>
            )}
          </div>

          <div>
            <label className="block text-sm mb-1">توضیحات</label>
            <textarea
              {...register("userNote")}
              rows={3}
              className="form-control block w-full h-12 !px-4  text-gray-700 bg-white dark:text-gray-100 dark:bg-slate-800 !border !border-solid !border-gray-300 rounded transition ease-in-out focus:text-gray-700  dark:focus:text-gray-100 focus:bg-white focus:!border-green-600 focus:!outline-none text-left "
              placeholder="توضیحات (اختیاری)"
            />
          </div>

          <motion.button
            className="cursor-pointer flex items-center justify-center px-7 py-3 bg-gradient-to-br from-green-400 to-green-500 text-white font-medium text-sm leading-snug  rounded shadow-md hover:bg-green-600 hover:shadow-lg focus:bg-green-600 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-800 active:shadow-lg transition duration-150 ease-in-out w-full mt-3"
            whileHover={!isLoading ? { scale: 1.05 } : {}}
            whileTap={!isLoading ? { scale: 0.95 } : {}}
            disabled={isLoading}
          >
            {isLoading ? <Spinner /> : "ارسال"}
          </motion.button>
        </form>
      </div>
    </section>
  );
}
