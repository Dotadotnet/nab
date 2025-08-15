"use client";

import { useSearchParams } from "next/navigation";
import React from "react";

function PaymentFailurePage() {
  const searchParams = useSearchParams();
  const reason = searchParams.get("reason");

  return (
    <section className="w-screen h-screen flex justify-center items-center p-4 relative overflow-hidden">
      <div className="wave wave1" />
      <div className="wave wave2" />
      <div className="wave wave3" />

      <div className="max-w-md w-full bg-white dark:bg-gray-900 z-50 p-6 rounded-lg shadow-lg">
        <div className="bg-red-100 border-r-4 border-red-500 text-red-700 p-4 rounded-lg space-y-3">
          <p className="text-lg font-bold">پرداخت موفقیت‌آمیز نبود ❌</p>

          {reason && (
            <p className="text-sm">
              <span className="font-semibold">علت خطا:</span>{" "}
              <span>{decodeURIComponent(reason)}</span>
            </p>
          )}

          <p className="text-sm">
            در صورتی که مبلغی از حساب شما کسر شده اما سفارش ثبت نشده است،
            لطفاً با پشتیبانی تماس بگیرید تا پیگیری لازم انجام شود.
          </p>

          <div className="text-sm text-blue-700">
            شماره تماس پشتیبانی:{" "}
            <a
              href="tel:+989123456789"
              className="underline hover:text-blue-900"
            >
              09144455602
            </a>
          </div>
          
        </div>
      </div>
       <div className="flex justify-center mt-4">
          <button
            onClick={() => router.push("/")}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            بازگشت به صفحه اصلی
          </button>
        </div>
    </section>
  );
}

export default PaymentFailurePage;
