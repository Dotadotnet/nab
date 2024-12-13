@if (Auth::guard('user')->user())
    <div class="fixed xl:hidden z-40 navbar top-0 p-3 right-0">

        <div class="bg-blue-600 relative size-12 flex justify-center items-center rounded-full">
            <button class="size-full navbar-button  flex justify-center items-center">
                <i class="fa fa-bars font-bold text-2xl text-white" aria-hidden="true"></i>
            </button>
            <div class="absolute top-14 w-12 flex-col ">

                <div
                    class="w-48 hidden py-5 item-navbar-box shadow-custom-navbar flex-col backdrop-blur mt-1  rounded-3xl dark:bg-dark-opacity-30 bg-light-opacity-30">
                    <a href="/" class="w-full hover:text-blue-600 pr-3 flex items-center text   transition-none">
                        <i class="fa text-2xl transition-none fa-home" aria-hidden="true"></i>
                        <span class="pr-2 font-bold text-lg transition-none">خانه</span>
                    </a>
                    <a href="/cart"
                        class="w-full text my-3 hover:text-blue-600 pr-4 flex items-center    transition-none">
                        <i class="fa text-2xl transition-none fa-shopping-bag" aria-hidden="true"></i>
                        <span class="pr-2 font-bold text-lg transition-none">سبد خرید</span>
                    </a>
                    <a href="/orders" class="w-full text hover:text-blue-600 pr-4 flex items-center    transition-none">
                        <i class="fa text-2xl transition-none fa-clock-o" aria-hidden="true"></i>
                        <span class="pr-2 font-bold text-lg transition-none">سفارشات شما</span>
                    </a>
                    <a href="/call"
                        class="w-full text mt-3 hover:text-blue-600 pr-4 flex items-center    transition-none">
                        <i class="fa text-2xl transition-none  fa-phone" aria-hidden="true"></i>
                        <span class="pr-2 font-bold text-lg transition-none">تماس با پشتیبانی</span>
                    </a>
                </div>
                <div
                    class="w-48 mt-3 hidden py-3 px-2 text item-navbar-box shadow-custom-navbar flex-col backdrop-blur mt-1  rounded-3xl dark:bg-dark-opacity-30 bg-light-opacity-30">
                    <p class="text text-lg ">
                        موجودی شما <b class="text-3xl">:</b>
                    </p>
                    <p class="h-full flex wallet-show items-center text mt-1 font-bold mr-2 text-base "></p>
                    <p class="pt-3 text-center px-2">
                        <a href="/inventory-increase"
                            class="text-white justify-center  flex items-center font-bold bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300  rounded-full text-sm px-3 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">
                            <i class="fa text-base fa-credit-card-alt" aria-hidden="true"></i>
                            <span class="mr-2">افزایش موجودی</span>
                        </a>
                    </p>
                </div>
            </div>
            <div class="absolute item-navbar-circle hidden w-96 right-14 h-12 flex">
                <a href="/profile" class="h-12 w-12">
                    <img id="image-profile-navbar" src="{{ Auth::guard('user')->user()->img }}"
                        class="size-12 rounded-full object-cover">
                </a>
                <div
                    class="flex bg-white   flex-shrink-0 mr-1 justify-center items-center size-12 cursor-pointer border-[2px] group dark:border-primary-200 border-primary-300 rounded-full button-dark-mode">
                    <span style="transition:2s" class="scale-[1.8] group-hover:rotate-[360deg]">
                        <svg class="dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                            <path class=" fill-primary-300"
                                d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
                            <path class=" fill-primary-300" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
                        </svg>
                        <svg class=" hidden dark:block" width="16" height="16"
                            xmlns="http://www.w3.org/2000/svg">
                            <path class="fill-primary-200"
                                d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
                            <path class="fill-primary-200"
                                d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
                        </svg>
                    </span>
                </div>
                <button
                    class="h-12 flex justify-center items-center group cursor-pointer  bg-red-600 rounded-full button-logout mr-1 w-12">
                    <i class="fa fa-power-off  text-white text-2xl" aria-hidden="true"></i>
                </button>
            </div>

        </div>
    </div>
@endif
<div class="fixed  hidden xl:inline-block top-0 right-0 w-56 h-full p-3">
    <div
        class="size-full p-2 backdrop-blur  border-x-2 border-x-blue-600 border-y-2 border-y-green-600 rounded-3xl dark:bg-gray-700 bg-white">
        @if (Auth::guard('user')->user())
            <div class="flex justify-around p-3">
                <div
                    class="flex bg-white   flex-shrink-0  justify-center items-center size-12 cursor-pointer border-[2px] group dark:border-primary-200 border-primary-300 rounded-full button-dark-mode">
                    <span style="transition:2s" class="scale-[1.8] group-hover:rotate-[360deg]">
                        <svg class="dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                            <path class=" fill-primary-300"
                                d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
                            <path class=" fill-primary-300" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
                        </svg>
                        <svg class=" hidden dark:block" width="16" height="16"
                            xmlns="http://www.w3.org/2000/svg">
                            <path class="fill-primary-200"
                                d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
                            <path class="fill-primary-200"
                                d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
                        </svg>
                    </span>
                </div>
                <button
                    class="h-12 flex justify-center items-center group cursor-pointer  bg-red-600 rounded-full button-logout mr-1 w-12">
                    <i class="fa fa-power-off  text-white text-2xl" aria-hidden="true"></i>
                </button>
            </div>

            <div class=" flex-col mt-1  rounded-3xl">
                <a href="/" class="w-full hover:text-blue-600 pr-3 flex items-center text   transition-none">
                    <i class="fa text-2xl transition-none fa-home" aria-hidden="true"></i>
                    <span class="pr-2 font-bold text-lg transition-none">خانه</span>
                </a>
                <a href="/cart"
                    class="w-full text my-3 hover:text-blue-600 pr-4 flex items-center    transition-none">
                    <i class="fa text-2xl transition-none fa-shopping-bag" aria-hidden="true"></i>
                    <span class="pr-2 font-bold text-lg transition-none">سبد خرید</span>
                </a>
                <a href="/orders" class="w-full text hover:text-blue-600 pr-4 flex items-center    transition-none">
                    <i class="fa text-2xl transition-none fa-bell" aria-hidden="true"></i>
                    <span class="pr-2 font-bold text-lg transition-none">سفارشات شما</span>
                </a>
                <a href="/call"
                    class="w-full text mt-3 hover:text-blue-600 pr-4 flex items-center    transition-none">
                    <i class="fa text-2xl transition-none  fa-phone" aria-hidden="true"></i>
                    <span class="pr-2 font-bold text-lg transition-none">تماس با پشتیبانی</span>
                </a>
            </div>

            <div>
                <br>
                <a href="/profile" class=" w-full flex items-center p-2 rounded-3xl bg-gray-200 dark:bg-gray-800">
                    <img id="image-profile-navbar" src="{{ Auth::guard('user')->user()->img }}"
                        class="size-12 rounded-full object-cover">
                    <span class="mr-2 text">
                        {{ Auth::guard('user')->user()->name }}
                    </span>
                </a>
                <br>
                <div class="w-full rounded-3xl bg-gray-200 dark:bg-gray-800  py-3 px-2 text flex-col">
                    <p class="text text-lg ">
                        موجودی شما <b class="text-3xl">:</b>
                    </p>
                    <p class="h-full flex wallet-show items-center text mt-1 font-bold mr-2 text-base "></p>
                    <p class="pt-3 text-center px-2">
                        <a href="/inventory-increase"
                            class="text-white justify-center  flex items-center font-bold bg-yellow-400 hover:bg-yellow-500 focus:outline-none focus:ring-4 focus:ring-yellow-300  rounded-full text-sm px-3 py-2.5 text-center me-2 mb-2 dark:focus:ring-yellow-900">
                            <i class="fa text-base fa-credit-card-alt" aria-hidden="true"></i>
                            <span class="mr-2">افزایش موجودی</span>
                        </a>
                    </p>
                </div>
            </div>
        @else
            <div class="h-full pt-12 ">
                <div>

                    <div class="text-yellow-400">
                        <i class="fa fa-exclamation-triangle" aria-hidden="true"></i>
                        خرید های بالای {!! App\Helpers\Helper::price((int) $min) !!} رایگان است
                    </div>
                    <div class="flex flex-col sm:flex-row mt-1   ">
                        <span class="h-full flex-wrap text-base flex items-center text price-all mr-1 pt-[4px]">0
                            تومان</span>
                    </div>
                    <div class="text-green-600 show-price-send mr-3 mt-3">
                        + {!! App\Helpers\Helper::price((int) $price_send) !!} هزینه ارسال
                    </div>
                    <div class="text-green-600 show-free-send mr-3 mt-3">
                        + هزینه ارسال رایگان
                    </div>
                    <div class="flex flex-col mt-1   ">
                        <span class="h-full sm:text-xl text-lg mt-1 select-none  text flex items-center">
                            مبلغ پرداختی و نهایی :
                        </span>
                        <span data-minprice="{{ $min }}" data-sendprice="{{ $price_send }}"
                            class="h-full flex-wrap result-price mt-3 text-base text-green-600 font-bold flex items-center text price-all mr-3 sm:mr-1 pt-[4px]">
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
    </div>
</div>
<div
    class="modal hidden  pt-[25vh] fixed size-full z-[2000000000000] top-0 right-0 p-5  dark:bg-dark-opacity-30 bg-light-opacity-30">
    <div class="flex justify-center">

        <div class="w-96 body  relative  dark:bg-gray-800 bg-white border-2 border-blue-600 rounded-2xl">


            <p class="text sm:text-xl mt-2 sm:mt-4 text-lg p-3">
                آیا از حذف این آیتم مطمئنید ؟
            </p>
            <button type="button"
                class="focus:outline-none mt-2 sm:mt-4 mx-3 accept w-16 text-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 rounded-lg text-base font-bold px-4 py-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">تایید</button>
            <button type="button"
                class="focus:outline-none mt-2 sm:mt-4 cancel text-center w-16 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg text-base font-bold px-4 py-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">لغو</button>
            <br>
            <br>
        </div>
    </div>


</div>
