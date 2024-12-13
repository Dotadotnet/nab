@extends('panel.layout.main')
@section('title')
افزایش اعتبار
@endsection
@section('main')
@php
$user = Auth::guard('user')->user();
@endphp

<br>
<br>
<br>
<form method="post" action="/inventory-increase">
    @csrf
    <div class="flex justify-center items-center text">
        <div class="flex input-admin justify-center items-center">
            <button type="button"
                class="text-white plus bg-blue-700 text-2xl ml-2 size-11 sm:size-12 flex justify-center items-center hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <i class="fa fa-plus" aria-hidden="true"></i>
            </button>
            <span class="text  flex w-48 sm:w-64 justify-center items-center mr-2">
                <span class=" w-full relative select-none text-lg  font-bold flex items-center">
                    <input data-type="num" type="number" name="price"
                        class="w-full inventory-increase  bg-gray-50 border pl-14 border-gray-300 text-gray-900 text-base sm:text-lg rounded-lg focus:ring-blue-500 focus:border-blue-500 block outline-none p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        value="100000">
                    <span class="w-12 h-full absolute left-2 top-0 flex justify-center items-center">
                        تومان
                    </span>
                </span>
                <span class="mr-1 select-none text-lg font-bold">
                </span>
            </span>
            <button type="button"
                class="text-white nega mr-2 bg-blue-700  flex justify-center items-center text-2xl size-11  sm:size-12 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg   dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                <i class="fa fa-minus" aria-hidden="true"></i>
            </button>
        </div>
    </div>
    <br>
    <br>
    <p class="price-trenslate price text-center text text-xl sm:text-3xl">

    </p>
    <br>
    <br>
    <div class="flex justify-center w-full">
        <button
            class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">افزایش
            موجودی</button>
    </div>
</form>

@section ('script')
<script>
    const plus_button = document.querySelector('button.plus');
    const nega_button = document.querySelector('button.nega');
    const input_incr_wallet = document.querySelector('input.inventory-increase')

    nega_button.addEventListener('click', () => {
        let value_input = parseInt(input_incr_wallet.value) - 100000;
        if (value_input < 0) {
            value_input = 0
        }
        input_incr_wallet.value = value_input;
        window.function_inventory_increase_translate()
    })

    plus_button.addEventListener('click', () => {
        let value_input = parseInt(input_incr_wallet.value) + 100000;
        input_incr_wallet.value = value_input;
        window.function_inventory_increase_translate()
    })

</script>
@endsection
@endsection