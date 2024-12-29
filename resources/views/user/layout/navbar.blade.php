@php $nav_items = [['icon' => 'shopping-bag', 'text' => 'محصولات ما', 'link' => '#category'], ['icon' => 'info-circle', 'text' => 'درباره ما', 'link' => '/about'], ['icon' => 'phone', 'text' => 'تماس با ما', 'link' => '/call']]; @endphp
<nav class=" fixed right-0 top-0 p-3 z-40 w-full justify-center items-center">
    @php
        $user = Auth::guard('user')->user();
        if ($user) {
            array_push($nav_items, ['icon' => 'bell', 'text' => 'سفارشات شما', 'link' => '/orders']);
        }
    @endphp
    <div
        class=" z-40 w-full backdrop-blur flex-none transition-colors duration-500
        dark:bg-dark-opacity-30 bg-light-opacity-30 
       px-2 shadow-xl shadow-primary-200 rounded-lg flex justify-between items-center overflow-hidden ">
        <a href="#bar">
            <button type="button"
                class="text-white bg-gradient-to-br button-bar
              from-primary-200 to-primary-100 dark:from-primary-200 dark:to-primary-100 hover:bg-gradient-to-bl
              focus:ring-4 focus:outline-none focus:border-none focus:ring-primary-200
              font-medium rounded-lg  flex lg:hidden
              sm:px-4 sm:py-2 p-2 text-center">
                <i class="fa fa-bars font-bold text-md sm:text-lg" aria-hidden="true"></i>
            </button>
        </a>
        <a href="{{ env('APP_URL') }}" class=" flex justify-center  w-32 ">
            <img id="logo" src="{{ asset('image/Logo light.png') }}"
                class="  size-12 sm:size-16 ">
        </a>
        <div id="item_navbar" class=" hidden lg:flex w-full px-4">
            @foreach ($nav_items as $nav_item)
                <a class=" group mx-2  text-black hover:after:w-full after:transition-all after:w-0 after:content-[''] after:rounded-md after:right-1.5 after:bg-primary-200 after:h-1 relative after:absolute after:-bottom-1 group-hover:font-bold dark:text-white justify-around text-md sm:text-lg
                 items-center flex hover:font-bold"
                    href="{{ $nav_item['link'] }} ">
                    <i style="transition: 0s !important"
                        class=" fa-{{ $nav_item['icon'] }}  group-hover:font-bold {{ str_contains($nav_item['icon'], 'info') ? '' : '-scale-x-100' }} fa mx-2 text-lg sm:text-xl"
                        aria-hidden="true"></i>
                    <span class="group-hover:font-bold ">{{ $nav_item['text'] }}</span>
                </a>
            @endforeach
        </div>

        <div class=" flex justify-between lg:w-auto items-center">
            <a href="#cart"
                class="flex ml-1 relative flex-shrink-0  sm:ml-2 justify-center items-center  size-8 sm:size-10 cursor-pointer 
             bg-primary-200 shadow-[0px_0px_4px_1px_rgba(0,0,0,0.7)] dark:shadow-[0px_0px_4px_1px_rgba(255,255,255,1)]  hover:bg-[#06777b] hover:dark:bg-[#09adb3] rounded-full">
                <i class="fa font-bold text-white  fa-shopping-cart sm:text-xl text-md" aria-hidden="true"></i>
                <span
                    class="absolute text-xs sm:text-sm count-shoping-cart text-white bg-red-600 size-5 sm:size-6 pt-[1.5px] font-bold flex justify-center items-center rounded-full -top-1.5 -right-2.5">
                    0
                </span>
            </a>

            <a href=" #search"
                class="flex ml-1 flex-shrink-0  sm:ml-2 justify-center items-center  size-8 sm:size-10 cursor-pointer 
                 bg-primary-200 shadow-[0px_0px_4px_1px_rgba(0,0,0,0.7)] dark:shadow-[0px_0px_4px_1px_rgba(255,255,255,1)]  hover:bg-[#06777b] hover:dark:bg-[#09adb3] rounded-full button-search-open">
                <i class="fa font-bold text-white  fa-search sm:text-xl text-md" aria-hidden="true"></i>
            </a>

            @if ($user)
                <a href="/profile" class="flex justify-around ml-1 size-8 sm:size-10 items-center">
                    <img src="{{ $user->img }}"
                        class="size-8 rounded-full object-cover border-2 border-primary-100 dark:border-primary-200 sm:size-10"
                        alt="" title="{{ $user->name }}">

                </a>
                <a href="/profile" style="text-align: right !important"
                    class="text-right hidden sm:inline-block font-bold text-[10px] text ml-2 mr-1 sm:text-xs text-nowrap">
                    {{ $user->name }}
                </a>
            @else
                <div class=" sm:ml-2 flex justify-center items-center ml-1 h-full w-16 sm:w-24  relative">
                    <a href="/login"
                        class="p-1 flex justify-center items-center text-white w-full rounded-full shadow-[0px_0px_4px_1px_rgba(0,0,0,0.7)] dark:shadow-[0px_0px_4px_1px_rgba(255,255,255,1)]  hover:bg-[#06777b] hover:dark:bg-[#09adb3] bg-primary-200">
                        <i class="fa fa-user-plus text-sm sm:text-xl" aria-hidden="true"></i>
                        <span class="font-vazir mt-0.5 sm:mt-0 text-[12px] sm:text-base mr-1 sm:mr-2 font-bold">
                            ورود
                        </span>
                    </a>
                </div>
                {{-- <i class="fa fa-user-plus" aria-hidden="true"></i> --}}
                {{-- <div class=" ml-2 sm:ml-2 h-full w-20 sm:w-32  relative">
                    <a class="rounded-s-lg hover:w-full sm:text-center hover:rounded-lg hover:text-center hover:font-bold hover:z-10
                 -bottom-[13.5px] sm:-bottom-5 w-2/4 right-0  absolute overflow-hidden px-2 py-1.5 sm:p-2 text-white
                  bg-primary-100  text-[10px] sm:text-base "
                        href="/login">
                        ورود
                    </a>
                    <a style="word-spacing:-2.8px"
                        class=" text-[10px] sm:text-base rounded-lg hover:w-full hover:font-bold text-center sm:-bottom-5
                -bottom-[13.5px] w-3/5	 left-0 absolute overflow-hidden px-1 py-1.5 sm:p-2   text-white bg-primary-200"
                        href="/register">
                        ثبت نام
                    </a>
                </div> --}}
            @endif
            <div
                class="flex flex-shrink-0 justify-center items-center size-8 sm:size-10 cursor-pointer border-[2px]
             group dark:border-primary-200 border-primary-300 rounded-full button-dark-mode">
                <span style="transition:2s" class="scale-125 sm:scale-150 group-hover:rotate-[360deg]">
                    <svg class="dark:hidden" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path class=" fill-primary-300"
                            d="M7 0h2v2H7zM12.88 1.637l1.414 1.415-1.415 1.413-1.413-1.414zM14 7h2v2h-2zM12.95 14.433l-1.414-1.413 1.413-1.415 1.415 1.414zM7 14h2v2H7zM2.98 14.364l-1.413-1.415 1.414-1.414 1.414 1.415zM0 7h2v2H0zM3.05 1.706 4.463 3.12 3.05 4.535 1.636 3.12z" />
                        <path class=" fill-primary-300" d="M8 4C5.8 4 4 5.8 4 8s1.8 4 4 4 4-1.8 4-4-1.8-4-4-4Z" />
                    </svg>
                    <svg class=" hidden dark:block" width="16" height="16" xmlns="http://www.w3.org/2000/svg">
                        <path class="fill-primary-200"
                            d="M6.2 1C3.2 1.8 1 4.6 1 7.9 1 11.8 4.2 15 8.1 15c3.3 0 6-2.2 6.9-5.2C9.7 11.2 4.8 6.3 6.2 1Z" />
                        <path class="fill-primary-200"
                            d="M12.5 5a.625.625 0 0 1-.625-.625 1.252 1.252 0 0 0-1.25-1.25.625.625 0 1 1 0-1.25 1.252 1.252 0 0 0 1.25-1.25.625.625 0 1 1 1.25 0c.001.69.56 1.249 1.25 1.25a.625.625 0 1 1 0 1.25c-.69.001-1.249.56-1.25 1.25A.625.625 0 0 1 12.5 5Z" />
                    </svg>
                </span>
            </div>
        </div>
    </div>
</nav>

<div
    class=" search-bar hidden fixed top-0 right-0 z-50 h-full w-full pt-5 px-1 pb-2   sm:p-10 backdrop-blur dark:bg-dark-opacity-30 bg-light-opacity-30 ">
    <a href="#null"
        class=" absolute top-3 right-3 font-bold text-2xl
     cursor-pointer
      dark:border-red-500 dark:text-red-500 
       text-red-700 border-red-700
       hover:border-red-500 hover:text-red-500 
    dark:hover:text-red-700 dark:hover:border-red-700
    border-[3px] size-10 flex items-center justify-center rounded-2xl close-search">
        <i class="fa fa-times" aria-hidden="true"></i>
    </a>
    <br>
    <div class=" h-40 p-5 flex items-center label-text-search">
        <h1 class=" text font-bold text-lg sm:text-2xl">
            دنبال چه چیزی هستید ؟
        </h1>
    </div>
    @component('user.components.input_search')
    @endcomponent
</div>
<div
    class="div-bar  z-50 hidden fixed top-0 right-0 h-full w-full backdrop-blur dark:bg-dark-opacity-30 bg-light-opacity-30 sm:p-10 p-0 pt-14 sm:pt-16 pb-5">
    <div class=" absolute flex px-5 items-center top-0 right-0 w-full h-[54px]">
        <a href="#null">
            <div
                class="font-bold text-2xl
        cursor-pointer
         dark:border-red-500 dark:text-red-500 
          text-red-700 border-red-700
          hover:border-red-500 hover:text-red-500 
       dark:hover:text-red-700 dark:hover:border-red-700
       border-[3px] size-10 flex items-center justify-center rounded-2xl close-search">
                <i class="fa fa-times" aria-hidden="true"></i>
            </div>
        </a>
        <p class=" text mr-5 font-bold text-address-bar ">
        </p>
    </div>
    <div class="overflow-auto p-2 div-bar-item z-50 shadow-primary-200 max-h-full flex-wrap flex sm:justify-around">

    </div>

    <div class="  div-navbar-items grid grid-cols-1 p-4 gap-6 ">

    </div>
</div>

<div
    class="fixed hidden top-0 dark:bg-dark-opacity-30  div-nav-cart bg-light-opacity-30  right-0 size-full z-[5000000000000000000]">
    <div style="transition: 1s" class="bg-white flex slide-nav flex-col fixed  -right-72 z-[5000000000000000000] w-72 h-full top-0 dark:bg-gray-800">
        <div>
            <a href="#null"
            class="mx-4 mt-4 mb-2  font-bold text-2xl
    cursor-pointer 
     dark:border-red-500 dark:text-red-500 
      text-red-700 border-red-700
      hover:border-red-500 hover:text-red-500 
   dark:hover:text-red-700 dark:hover:border-red-700
   border-[3px] size-10 flex items-center justify-center rounded-2xl close-search">

            <i class="fa fa-times" aria-hidden="true"></i>
        </a>

        </div>
       

        <div class="h-full cart-shoping-main pt-2 overflow-y-auto overflow-x-hidden px-3 justify-between">
          {{-- <div class="flex  mt-3 ">
                <div class="w-20" >
                  <img class="size-20 rounded-lg" src="" alt="">
                </div>
                <div style="width: calc(100% - 88px)" class="flex flex-col justify-around pr-2" >
                  <p class="text flex justify-between">
                     <span class="text-sm select-none">کیک خوش مزه</span>
                     <span class=" bg-red-600 cursor-pointer flex justify-center items-center size-7 text-lg rounded-lg">
                        <i class="fa fa-times" aria-hidden="true"></i>
                     </span>
                  </p>
                  <p class="text text-sm">
                    ddd
                  </p>
                  <p class="text text-sm mt-2 ">
                    <div class="flex  items-center">
                        <button type="button"
                            class="text-white plus bg-blue-700 text-lg size-6 flex justify-center items-center hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            <i class="fa fa-plus" aria-hidden="true"></i>
                        </button>
                        <span class="text flex w-16 justify-center items-center mr-2">
                            <span data-type="${item.type}"
                                class="number select-none text-base  font-bold flex items-center">
                                  12
                            </span>
                            <span
                                class="mr-1 mb-1 select-none text-sm font-bold">
                                 کیلو
                            </span>
                        </span>
                        <button type="button"
                            class="text-white nege mr-2 bg-blue-700  flex justify-center items-center text-lg size-6 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                            <i class="fa fa-minus" aria-hidden="true"></i>
                        </button>
                        </div>
                  </p>

                </div>
          </div> --}}


          
        </div>
        <div class="mt-3">
            
            <div class="px-3">
                <a href="/cart"
                class="flex py-2  text-white flex-shrink-0  sm:ml-2 justify-center items-center  w-full  cursor-pointer 
             bg-primary-200 shadow-[0px_0px_4px_1px_rgba(0,0,0,0.7)] dark:shadow-[0px_0px_4px_1px_rgba(255,255,255,1)]  hover:bg-[#06777b] hover:dark:bg-[#09adb3] rounded-lg button-search-open">
                پرداخت صورت حساب
            </a>
             </div>
             
             <div class="px-3 mb-3">
                <a href="/show-all"
                class="flex py-2  mt-3 text-white flex-shrink-0  sm:ml-2 justify-center items-center  w-full  cursor-pointer 
             bg-primary-200 shadow-[0px_0px_4px_1px_rgba(0,0,0,0.7)] dark:shadow-[0px_0px_4px_1px_rgba(255,255,255,1)]  hover:bg-[#06777b] hover:dark:bg-[#09adb3] rounded-lg button-search-open">
             اضافه کردن محصول
            </a>
             </div>
             
           </div>
     

    </div>
</div>
