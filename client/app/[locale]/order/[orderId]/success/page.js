"use client";

import { useParams, useRouter } from "next/navigation";

export default function Success() {
  const params = useParams();
  const router = useRouter();
  const orderId = params?.orderId;

  return (
    <section className="w-screen h-screen flex justify-center items-center p-4 relative overflow-hidden">
      <div className="wave wave1" />
      <div className="wave wave2" />
      <div className="wave wave3" />

      <div className="max-w-md w-full bg-white dark:bg-gray-900 z-50 p-6 rounded-lg shadow-lg space-y-4">
        <div className="bg-green-100 border-r-4 border-green-500 text-green-700 p-4 rounded-lg">
          {orderId && (
            <p className="text-sm">
              سفارش شما با شماره{" "}
              <span className="font-semibold">{orderId}</span> ثبت شد. 
              از خرید و انتخاب شما سپاس‌گزاریم.
            </p>
          )}
        </div>

        <div className="bg-yellow-100 border-r-4 border-yellow-500 text-yellow-700 p-4 rounded-lg">
          <p className="text-sm">
            سفارش شما به آدرس سابق شما ارسال خواهد شد. در صورت افزودن آدرس متفاوت، روی{" "}
            <a
              href="/profile/address"
              className="text-blue-600 underline"
            >
              این لینک
            </a>{" "}
            کلیک کنید.
          </p>
        </div>

        <div className="flex justify-center mt-4">
          <button
            onClick={() => router.push("/")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            بازگشت به صفحه اصلی
          </button>
        </div>
      </div>
    </section>
  );
}
