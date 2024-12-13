@extends('panel.layout.main')
@section('title')
    سبد خرید
@endsection
@section('main')
    @php
        $user = Auth::guard('user')->user();
    @endphp

    <div class="flex-col cart-shoping-main mt-4">

    </div>
    <br>
    @if ($user)
        <div class="w-full justify-center mt-5 flex">

            <div
                class="lg:p-5 p-3 w-full md:w-[500px] rounded-lg bg-white shadow-lg   dark:shadow-[rgba(255,255,255,0.5)] dark:bg-gray-700">
                <div class="text-yellow-400">
                    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                    خرید های بالای {!! App\Helpers\Helper::price((int) $min) !!} رایگان است
                </div>
                <div class="flex flex-col sm:flex-row mt-1   ">
                    <span class="h-full sm:text-lg text-base flex items-center text price-all mr-1 pt-[4px]"></span>
                </div>
                <div class="text-green-600 show-price-send mr-3 mt-3">
                    + {!! App\Helpers\Helper::price((int) $price_send) !!} هزینه ارسال
                </div>
                <div class="text-green-600 hidden show-free-send mr-3 mt-3">
                    + هزینه ارسال رایگان
                </div>
                <div class="flex flex-col sm:flex-row mt-1   ">
                    <span class="h-full sm:text-xl text-lg mt-1 select-none  text flex items-center">
                        مبلغ پرداختی و نهایی :
                    </span>
                    <span data-minprice="{{ $min }}" data-sendprice="{{ $price_send }}"
                        class="h-full result-price sm:text-xl text-lg flex items-center text price-all mr-3 sm:mr-1 pt-[4px]">

                    </span>
                </div>
                <div class="flex flex-col box-buttons justify-around items-center pt-8">
                    <span class="mt-2 w-full sm:w-3/4">
                        <button
                            class="relative w-full pay-online inline-flex self-baseline items-center justify-center p-0.5 me-2 overflow-hidden text-xs  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span
                                class="relative w-full text-center font-shabnam px-2 sm:text-base py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                پرداخت از طریق درگاه پرداخت آنلاین (پیشنهادی)
                            </span>
                        </button>
                    </span>
                    <span class="mt-2 w-full sm:w-3/4">
                        <button
                            class="relative w-full  pay-atm self-baseline inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-xs  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span
                                class="relative w-full text-center font-shabnam px-2 py-2 sm:text-base transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                پرداخت از طریق ارسال فیش ( دستگاه ATM )
                            </span>
                        </button>
                    </span>
                    <span class=" mt-2 w-full sm:w-3/4">
                        <button
                            class="relative w-full self-baseline pay-wallet inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-xs sm:text-base font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span
                                class="relative w-full text-center font-shabnam px-2 sm:px-5 py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                پرداخت از کیف پول
                            </span>
                        </button>
                    </span>

                </div>
            </div>
        </div>
    @else
        <div class="w-full justify-center xl:hidden mt-5 flex">
            <div
                class="lg:p-5 p-3 w-full md:w-[500px] rounded-lg bg-white shadow-lg   dark:shadow-[rgba(255,255,255,0.5)] dark:bg-gray-700">
                <div class="text-yellow-400">
                    <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                    خرید های بالای {!! App\Helpers\Helper::price((int) $min) !!} رایگان است
                </div>
                <div class="flex flex-col sm:flex-row mt-1   ">
                    <span class="h-full sm:text-lg text-base flex items-center text price-all mr-1 pt-[4px]">0
                        تومان</span>
                </div>
                <div class="text-green-600 show-price-send mr-3 mt-3">
                    + {!! App\Helpers\Helper::price((int) $price_send) !!} هزینه ارسال
                </div>
                <div class="text-green-600 hidden show-free-send mr-3 mt-3">
                    + هزینه ارسال رایگان
                </div>
                <div class="flex flex-col sm:flex-row mt-1   ">
                    <span class="h-full sm:text-xl text-lg mt-1 select-none  text flex items-center">
                        مبلغ پرداختی و نهایی :
                    </span>
                    <span data-minprice="{{ $min }}" data-sendprice="{{ $price_send }}"
                        class="h-full result-price sm:text-xl text-lg flex items-center text price-all mr-3 sm:mr-1 pt-[4px]">

                    </span>
                </div>
                <br>
                <p class="text-yellow-400">
                    لطفا برای تکمیل فرایند خرید ثبت نام کنید !!!
                </p>
                <div class="flex flex-col box-buttons justify-around items-center pt-4">
                    <span class="mt-2 w-full sm:w-3/4">
                        <a href="/register"
                            class="relative w-full inline-flex self-baseline items-center justify-center p-0.5 me-2 overflow-hidden text-xs  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span
                                class="relative w-full text-center font-shabnam px-2 sm:text-base py-2 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                ثبت نام
                            </span>
                        </a>
                    </span>
                    <span class="mt-2 w-full sm:w-3/4">
                        <a href="/login"
                            class="relative w-full  self-baseline inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-xs  font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                            <span
                                class="relative w-full text-center font-shabnam px-2 py-2 sm:text-base transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                ورود
                            </span>
                        </a>
                    </span>


                </div>
            </div>
        </div>
    @endif

    <br>
    <br>
@endsection
