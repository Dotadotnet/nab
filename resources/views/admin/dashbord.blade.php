@extends('admin.layout.main')
@section('main')

<div class="grid grid-cols-2 gap-3">
    <label class="w-full">
        <span class=" dark:text-white text-black">حداقل قیمت خرید :</span>
        <br>
        <div class="input-admin ">
            <div style=" width: 70px; justify-content:space-between;" class="flex items-start flex-row-reverse">
                <div
                    class=" flex justify-center items-center p-1 rounded-full dark:hover:opacity-100 hover:opacity-100 cursor-pointer">
                    <i class="fa fa-times " aria-hidden="true"></i>
                </div>
                <span class=" mx-1 flex justify-center items-center">
                    <span>تومان</span>
                </span>
            </div>
            <input value="{{ $configs[0]->amount }}" style=" width: calc(100% - 70px); " class="currency font-parastoo"
                type="text" name="{{ $configs[0]->key }}" data-type="num" placeholder="1,000,000">
        </div>
    </label>
    <label class="w-full">
        <span class=" dark:text-white text-black">هزینه ارسال :</span>
        <br>
        <div class="input-admin ">
            <div style=" width: 70px; justify-content:space-between;" class="flex items-start flex-row-reverse">
                <div
                    class=" flex justify-center items-center p-1 rounded-full dark:hover:opacity-100 hover:opacity-100 cursor-pointer">
                    <i class="fa fa-times " aria-hidden="true"></i>
                </div>
                <span class=" mx-1 flex justify-center items-center">
                    <span>تومان</span>
                </span>
            </div>
            <input value="{{ $configs[1]->amount }}" style=" width: calc(100% - 70px); " class="currency font-parastoo"
                type="text" name="{{ $configs[1]->key }}" data-type="num" placeholder="1,000,000">
        </div>
    </label>
</div>
<br>
<div class="flex flex-wrap justify-around">
    <div
        class="m-2 shadow-gray-400 shadow-[0px_0px_5px_2px] dark:shadow-white relative  bg-amber-400  rounded-lg text-white w-96 h-36">
        <div class=" z-20 flex justify-end items-center pl-4 absolute top-0 right-0 size-full ">
            <i class="fa fa-comments text-8xl text-gray-100 opacity-50" aria-hidden="true"></i>
        </div>
        <div class=" z-30 absolute top-0 right-0 p-3 size-full ">
            <h3 class="text-white text-lg">
                تعداد کامنت های خوانده نشده :
            </h3>
            <h1 style="font-weight: bolder;" class="pr-14 text-5xl mt-7  h-full text-white ">
                {{ count($comments) }}
            </h1>
        </div>
    </div>
    <div
        class="m-2 shadow-gray-400 shadow-[0px_0px_5px_2px] dark:shadow-white relative  bg-blue-600  rounded-lg text-white w-80 h-36">
        <div class=" z-20 flex justify-end items-center pl-4 absolute top-0 right-0 size-full ">
            <i class="fa fa-shopping-bag text-8xl text-gray-100 opacity-50" aria-hidden="true"></i>
        </div>
        <div class=" z-30 absolute top-0 right-0 p-3 size-full ">
            <h3 class="text-white text-lg">
                تعداد محصولات :
            </h3>
            <h1 style="font-weight: bolder;" class="pr-14 text-5xl mt-7  h-full text-white ">
                {{ count($products) }}
            </h1>
        </div>
    </div>
    <div
        class="m-2 shadow-gray-400 shadow-[0px_0px_5px_2px] dark:shadow-white relative  bg-blue-500  rounded-lg text-white w-80 h-36">
        <div class=" z-20 flex justify-end items-center pl-4 absolute top-0 right-0 size-full ">
            <i class="fa fa-folder text-8xl text-gray-100 opacity-50" aria-hidden="true"></i>
        </div>
        <div class=" z-30 absolute top-0 right-0 p-3 size-full ">
            <h3 class="text-white text-lg">
                تعداد دسته بندی ها :
            </h3>
            <h1 style="font-weight: bolder;" class="pr-14 text-5xl mt-7  h-full text-white ">
                {{ count($categorys) }}
            </h1>
        </div>
    </div>
    <div
        class="m-2 shadow-gray-400 shadow-[0px_0px_5px_2px] dark:shadow-white relative  bg-green-600  rounded-lg text-white w-80 h-36">
        <div class=" z-20 flex justify-end items-center pl-4 absolute top-0 right-0 size-full ">
            <i class="fa fa-user-circle text-8xl text-gray-100 opacity-50" aria-hidden="true"></i>
        </div>
        <div class=" z-30 absolute top-0 right-0 p-3 size-full ">
            <h3 class="text-white text-lg">
                تعداد کاربران فعال :
            </h3>
            <h1 style="font-weight: bolder;" class="pr-14 text-5xl mt-7  h-full text-white ">
                {{ count($users) }}
            </h1>
        </div>
    </div>
    <div
        class="m-2 shadow-gray-400 shadow-[0px_0px_5px_2px] dark:shadow-white relative  bg-red-500  rounded-lg text-white w-96 h-36">
        <div class=" z-20 flex justify-end items-center pl-4 absolute top-0 right-0 size-full ">
            <i class="fa fa-ban text-8xl text-gray-100 opacity-50" aria-hidden="true"></i>
        </div>
        <div class=" z-30 absolute top-0 right-0 p-3 size-full ">
            <h3 class="text-white text-lg">
                تعداد شماره های بلاک شده :
            </h3>
            <h1 style="font-weight: bolder;" class="pr-14 text-5xl mt-7  h-full text-white ">
                {{ count($blocks) }}
            </h1>
        </div>
    </div>
    <div
        class="m-2 shadow-gray-400 shadow-[0px_0px_5px_2px] dark:shadow-white relative  bg-green-500  rounded-lg text-white w-80 h-36">
        <div class=" z-20 flex justify-end items-center pl-4 absolute top-0 right-0 size-full ">
            <i class="fa fa-cogs text-8xl text-gray-100 opacity-50" aria-hidden="true"></i>
        </div>
        <div class=" z-30 absolute top-0 right-0 p-3 size-full ">
            <h3 class="text-white text-lg">
                تعداد ادمین ها :
            </h3>
            <h1 style="font-weight: bolder;" class="pr-14 text-5xl mt-7  h-full text-white ">
                {{ count($admins) }}
            </h1>
        </div>
    </div>
    <div
        class="m-2 shadow-gray-400 shadow-[0px_0px_5px_2px] dark:shadow-white relative  bg-blue-500  rounded-lg text-white w-96 h-36">
        <div class=" z-20 flex justify-end items-center pl-4 absolute top-0 right-0 size-full ">
            <i class="fa fa-bell text-8xl text-gray-100 opacity-50" aria-hidden="true"></i>
        </div>
        <div class=" z-30 absolute top-0 right-0 p-3 size-full ">
            <h3 class="text-white text-lg">
                تعداد سفارشات :
            </h3>
            <h1 style="font-weight: bolder;" class="pr-14 text-5xl mt-7  h-full text-white ">
                {{ count($orders) }}
            </h1>
        </div>
    </div>
</div>

<script>
    const inputs = document.querySelectorAll('div.input-admin input')
    inputs.forEach(input => {
        input.addEventListener('keyup', () => {
            window.axios({
                method: 'post',
                url: `/panel/config/` + input.name + '/' + input.value,
            }).then(function (response) { }).catch(function (error) { }).then(function () { });
        })
    });
</script>


@endsection