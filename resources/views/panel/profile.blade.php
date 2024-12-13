@extends('panel.layout.main')
@section('title')
    پروفایل
@endsection
@section('main')
    @php
        $user = Auth::guard('user')->user();
    @endphp
    <div class="flex  flex-col sm:flex-row w-full ">
        <div class="w-full flex justify-center items-center sm:w-1/2">
            <div class="size-64 relative">
                <label class="cursor-pointer" for="image">
                    <input class="hidden" accept="image/*" name="profile" id="image" type="file">
                    <img class="size-full rounded-full object-cover border-2 border-blue-600" src="{{ $user->img }}"
                        alt="">
                    <div
                        class="bg-blue-600 absolute bottom-2 left-4 text-white rounded-full size-14 flex justify-center items-center">
                        <i class="fa fa-refresh text-4xl" aria-hidden="true"></i>
                    </div>
                </label>
            </div>
        </div>
        <div class="w-full sm:w-1/2">
            @if (!$user->name)
            <div class="border-2 mt-7  sm:mt-16 border-red-500 bg-red-600 p-3 text-white rounded-xl">
                 لطفا برای خود نام انتخاب کنید
            </div>
            @endif
            <form action="/change-info-user" method="POST">
                @csrf
             
                <div class="relative input-admin password-div mt-7 ">
                    <input value="{{ $user->name }}" name="name" type="text" data-type="fa" id="floating_outlined"
                        class="block border-2 text border-blue-600  pl-12 pr-2.5 pb-2.5 pt-4 w-full text-md text-gray-900 bg-transparent rounded-lg border-1 border-blue-500 appearance-none focus:outline-0 focus:border-blue-600 peer"
                        placeholder=" " />
                    <label for="floating_outlined"
                        class="absolute text-[16px] dark:bg-dark-60 bg-light-60 text-blue-600 after:content-[':'] -translate-x-4 after:mr-1 after:font-bold duration-300 transform -translate-y-4 scale-[1] font-bold top-[0px] z-10 origin-[0] peer-placeholder-shown:-translate-x-0 peer-placeholder-shown:after:content-none peer-placeholder-shown:text-gray-500 peer-placeholder-shown:after:text-gray-500 px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100  peer-placeholder-shown:font-light  peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:font-bold peer-focus:top-[0px]   peer-focus:text-blue-600 peer-focus:after:content-[':'] peer-focus:-translate-x-4 peer-focus:after:mr-1 peer-focus:after:text-blue-600 peer-focus:after:font-bold peer-focus:scale-[1] peer-focus:-translate-y-4  rtl:peer-focus:left-auto start-1">
                        نام و نام خانوادگی</label>
                </div>
                <div class="relative opacity-60 cursor-not-allowed input-admin password-div mt-7">
                    <input value="{{ $user->phone }}" disabled name="phone" type="text" data-type="fa"
                        id="floating_outlined"
                        class="block border-2 text border-blue-600  pl-12 pr-2.5 pb-2.5 pt-4 w-full text-md text-gray-900 bg-transparent rounded-lg border-1 border-blue-500 appearance-none focus:outline-0 focus:border-blue-600 peer"
                        placeholder=" " />
                    <label for="floating_outlined"
                        class="absolute text-[16px] dark:bg-dark-60 bg-light-60 text-blue-600 after:content-[':'] -translate-x-4 after:mr-1 after:font-bold duration-300 transform -translate-y-4 scale-[1] font-bold top-[0px] z-10 origin-[0] peer-placeholder-shown:-translate-x-0 peer-placeholder-shown:after:content-none peer-placeholder-shown:text-gray-500 peer-placeholder-shown:after:text-gray-500 px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100  peer-placeholder-shown:font-light  peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:font-bold peer-focus:top-[0px]   peer-focus:text-blue-600 peer-focus:after:content-[':'] peer-focus:-translate-x-4 peer-focus:after:mr-1 peer-focus:after:text-blue-600 peer-focus:after:font-bold peer-focus:scale-[1] peer-focus:-translate-y-4  rtl:peer-focus:left-auto start-1">
                        شماره تلفنی که ثبت کردید</label>
                </div>
                <br>
                <div class="w-full flex justify-center items-center">
                    <button
                        class="relative change-info-user inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-cyan-500 to-blue-500 group-hover:from-cyan-500 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-cyan-200 dark:focus:ring-cyan-800">
                        <span
                            class="relative font-shabnam px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                            ثبت تغییرات
                        </span>
                    </button>
                </div>
            </form>





        </div>

    </div>
    @if (!$user->name)
   <script>
      document.querySelector('input[name~=name]').focus()
   </script>
    @endif
@endsection
