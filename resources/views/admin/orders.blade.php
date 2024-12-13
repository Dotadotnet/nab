@extends('admin.layout.main')
@section('title')
    کاربران
@endsection
@section('main')
    @php
        $colors = [
            ['name_fa' => 'سبز', 'name_en' => 'green'],
            ['name_fa' => 'زرد', 'name_en' => 'yellow'],
            ['name_fa' => 'قرمز', 'name_en' => 'red'],
            ['name_fa' => 'آبی', 'name_en' => 'blue'],
            ['name_fa' => 'نارنجی', 'name_en' => 'orange'],
            ['name_fa' => 'بنفش', 'name_en' => 'purple'],
        ];
    @endphp
    <style>
        table b {
            color: blue;
            font-weight: bolder !important;
        }

        .dark table b {
            color: #0055ff;
            font-weight: bolder !important;
        }
    </style>

    @if (count($orders))
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <div class="flex flex-column sm:flex-row flex-wrap space-y-4 sm:space-y-0 items-center justify-between pb-4">

                <label for="table-search" class="sr-only">Search</label>
                <div class="relative">
                    <div class="absolute inset-y-0 left-2 top-2 ">
                        <svg class="w-5 h-5 text-gray-500 dark:text-gray-400" aria-hidden="true" fill="currentColor"
                            viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd"
                                d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                                clip-rule="evenodd"></path>
                        </svg>
                    </div>
                    <input type="text" autocomplete="off" id="table-search"
                        class="block p-2  text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="سرچ کنید ...">
                </div>
            </div>
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="px-4 py-3">
                            آیدی
                        </th>
                        <th scope="col" class="px-4 py-3">
                            نام کاربر
                        </th>
                        <th scope="col" class="px-4 py-3">
                            شماره تلفن کاربر
                        </th>
                        <th scope="col" class="px-4 py-3">
                            وضعیت
                        </th>
                        <th scope="col" class="px-4 py-3">
                            رنگ
                        </th>
                        <th scope="col" class="px-4 py-3">
                            کپشن
                        </th>
                        <th scope="col" class="px-4 py-3">
                            دیدن سفارش
                        </th>
                        <th scope="col" class="px-4 py-3">
                            فاکتور
                        </th>
                        <th scope="col" class="px-4 py-3">
                            به اتمام رسیده
                        </th>


                    </tr>
                </thead>
                <tbody>
                    @foreach ($orders as $order)
                        <tr
                            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                            <td data-value="{{ $order['id'] }}" class="w-4 p-4">
                                {{ $order['id'] }}
                            </td>
                            <td data-value="{{ $order['name'] }}" class="px-4 text-nowrap py-4">
                                {{ $order['name'] }}
                            </td>
                            <td data-value="{{ $order['phone'] }}" class="px-4 py-4">
                                <span class="text-nowrap">
                                    {{ $order['phone'] }}
                                </span>
                            </td>
                            <th class="px-4 py-2">
                                <select name="color"
                                    class="bg-gray-50 border w-20 group border-gray-300 text-gray-900 text-sm  rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                    @foreach ($colors as $color)
                                        <option value="{{ $color['name_en'] }}"
                                            {{ isset($order['color']) && $order['color'] == $color['name_en'] ? 'selected' : '' }}>
                                            {{ $color['name_fa'] }}</option>
                                    @endforeach
        </div>
        </select>
        </th>
        <th class="px-4 py-2">
            <div class="flex items-center">
                <div class="w-28">
                    <div class="text opacity-50 w-full p-2 rounded-lg text  uppercase bg-gray-200 dark:bg-gray-700 ">
                        {{ $order['status'] }}
                    </div>
                    <input type="text" name="status"
                        class="text w-full hidden p-2 rounded-lg text uppercase bg-gray-200 dark:bg-gray-700"
                        value="{{ $order['status'] }}">
                </div>
                <button
                    class="focus:outline-none change-value mr-2 text-white bg-cyan-400 hover:bg-cyan-500 focus:ring-4 focus:ring-cyan-200 font-lg rounded-lg text-sm size-9 flex justify-center items-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-900">
                    <i class="fa text-lg fa-pencil-square-o" aria-hidden="true"></i>
                </button>
            </div>
        </th>
        <th class="px-4 py-2">
            <div class="flex items-center">
                <div class="w-56">
                    <div class="text opacity-50  w-full p-2 rounded-lg text  uppercase bg-gray-200 dark:bg-gray-700 ">
                        {{ $order['caption'] }}
                    </div>
                    <input type="text" name="caption"
                        class="text w-full hidden p-2 rounded-lg text uppercase bg-gray-200 dark:bg-gray-700"
                        value="{{ $order['caption'] }}">
                </div>
                <button
                    class="focus:outline-none change-value mr-2 text-white bg-cyan-400 hover:bg-cyan-500 focus:ring-4 focus:ring-cyan-200 font-lg rounded-lg text-sm size-9 flex justify-center items-center dark:bg-cyan-600 dark:hover:bg-cyan-700 dark:focus:ring-cyan-900">
                    <i class="fa text-lg fa-pencil-square-o" aria-hidden="true"></i>
                </button>
            </div>
        </th>
        <th class="px-4 py-2">
            <button data-id="{{ $order['id'] }}"
                class="focus:outline-none show-order-info text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-lg rounded-lg text-sm size-11 flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">
                <i class="fa text-2xl fa-eye" aria-hidden="true"></i>
            </button>
        </th>
        <th class="px-4 py-2 ">
            <div class="flex justify-center items-center">
                @if ($order['invoice'] == 'none')
                    <b class="text-red-600">هنوز فاکتور وارد نکرده</b>
                @elseif ($order['invoice'])
                    <button onclick="this.parentNode.children[1].classList.remove('hidden')"
                        class="focus:outline-none invoice text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-lg rounded-lg text-sm size-11 flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">
                        <i class="fa fa-file-image-o text-2xl" aria-hidden="true"></i>
                    </button>
                    <div onclick="openInvoice(this,event)"
                        class="fixed hidden flex top-0 text items-center justify-center size-full z-[10000] right-0 backdrop-blur dark:bg-dark-opacity-30 bg-light-opacity-30">
                        <div class="bg-white w-[400px] p-7 rounded-lg dark:bg-gray-800 border-2 border-blue-600">
                            <h1 class="text-center text text-lg">
                                {!! $order['price'] !!}
                            </h1>
                            <div class="flex justify-between">
                                <a href="/panel/order/{{ $order['id'] }}/invoice/null"
                                    class="focus:outline-none cursor-pointer text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">تایید
                                    فاکتور</a>
                                <a href="/panel/order/{{ $order['id'] }}/invoice/none"
                                    class="focus:outline-none cursor-pointer text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-base px-5 py-2.5 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">رد
                                    فاکتور</a>
                            </div>
                            <br>
                            <div class="justify-center flex rounded-lg">
                                <img class="max-h-[50vh]  rounded-lg border-2 border-blue-600 "
                                    src="{{ $order['invoice'] }}" alt="">
                            </div>
                        </div>
                    </div>
                @else
                    ---
                @endif
            </div>
        </th>

        <th class="px-4 py-2">
            <button data-id="{{ $order['id'] }}"
                class="focus:outline-none remove-order text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-lg rounded-lg text-sm size-11 flex justify-center items-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-900">
                <i class="fa  text-2xl fa-check" aria-hidden="true"></i>
            </button>
        </th>

        {{-- <td class="px-4 py-4">
                    <form action="/panel/block" method="post">
                        @csrf
                        <input type="text" class="hidden" name="id" value="{{$order->id}}">
                        <button
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-lg rounded-lg text-sm size-11 flex justify-center items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            <i class="fa text-2xl fa-ban" aria-hidden="true"></i>
                        </button>
                    </form>
                </td> --}}
        </tr>
    @endforeach
    </tbody>
    </table>
    </div>
@else
    <h1 class="text text-center">
        سفارشی وجود ندارد
    </h1>
    @endif
    <script>
        const remove_buttons = document.querySelectorAll('button.remove-order')
        remove_buttons.forEach(remove_button => {
            remove_button.addEventListener('click', () => {
                if (confirm("آیا از حذف و تکمیل این سفارش اطمینان کامل دارید ؟؟؟") == true) {
                    remove_button.parentNode.parentNode.classList.add('animate__animated')
                    remove_button.parentNode.parentNode.classList.add('animate__zoomOut')
                    setTimeout(() => {
                        remove_button.parentNode.parentNode.remove();
                    }, 1000);
                    window.axios({
                        method: 'delete',
                        url: `/panel/order/${remove_button.dataset.id}`,
                    }).then(function(response) {}).catch(function(error) {}).then(function() {});
                }
            })
        });

        function openInvoice(el, event) {
            if (event.target == el) {
                el.classList.add('hidden')
            }
        }
        const selects_color = document.querySelectorAll('select[name~=color]')
        selects_color.forEach(select_color => {
            select_color.addEventListener('change', () => {
                let id = select_color.parentNode.parentNode.children[0].innerHTML.trim();
                window.axios({
                    method: 'get',
                    url: `/panel/order/${id}/${select_color.name}/${select_color.value}`,
                }).then(function(response) {}).catch(function(error) {}).then(
                    function() {});
            })
        });
        const change_value_buttons = document.querySelectorAll('button.change-value')
        change_value_buttons.forEach(change_value_button => {
            let icon = change_value_button.querySelector('i');
            let input = change_value_button.parentNode.querySelector('input');
            let text = change_value_button.parentNode.querySelector('div.text');
            let id = change_value_button.parentNode.parentNode.parentNode.children[0].innerHTML.trim();
            const function_change_value = () => {
                if (icon.classList.contains('fa-pencil-square-o')) {
                    icon.classList.remove('fa-pencil-square-o')
                    icon.classList.add('fa-check');
                    text.classList.add('hidden')
                    input.classList.remove('hidden')
                    input.focus()
                } else {
                    text.innerHTML = input.value;
                    icon.classList.add('fa-pencil-square-o')
                    icon.classList.remove('fa-check');
                    text.classList.remove('hidden')
                    input.classList.add('hidden')
                    window.axios({
                        method: 'get',
                        url: `/panel/order/${id}/${input.name}/${input.value}`,
                    }).then(function(response) {}).catch(function(error) {}).then(
                        function() {});
                }
            };
            change_value_button.addEventListener('click', () => {
                function_change_value()
            })
            input.addEventListener('keydown', (event) => {
                if (event.key === 'Enter') {
                    function_change_value()
                }
            })

        });

        const table_search = document.getElementById('table-search');
        const trs = document.querySelectorAll('tbody tr');

        table_search.addEventListener('keyup', () => {
            let text = table_search.value;
            let words = text.split(' ');
            trs.forEach(tr => {
                let tds = tr.children;
                tds[2].innerHTML = tds[2].dataset.value;
                for (let i = 0; i < words.length; i++) {
                    const word = words[i];
                    let selected = false;
                    if (tds[2].dataset.value.includes(word)) {
                        tds[2].innerHTML = tds[2].innerHTML.replace(word, '<b>' + word + '</b>')
                        selected = true
                    }
                    if (i + 1 == words.length && !selected) {
                        tds[2].innerHTML = tds[2].dataset.value;
                    }
                }

                tds[4].querySelector('div.text').innerHTML = tds[4].querySelector('input').value;
                for (let i = 0; i < words.length; i++) {
                    const word = words[i];
                    let selected = false;
                    if (tds[4].querySelector('input').value && table_search.value) {
                        tds[4].querySelector('div.text').innerHTML = tds[4].querySelector('div.text')
                            .innerHTML.replace(word, '<b>' + word + '</b>')
                        selected = true
                    }
                    if (i + 1 == words.length && !selected) {
                        tds[4].querySelector('div.text').innerHTML = tds[4].querySelector('input').value;
                    }
                }

                tds[5].querySelector('div.text').innerHTML = tds[5].querySelector('input').value;
                for (let i = 0; i < words.length; i++) {
                    const word = words[i];
                    let selected = false;
                    if (tds[5].querySelector('input').value && table_search.value) {
                        tds[5].querySelector('div.text').innerHTML = tds[5].querySelector('div.text')
                            .innerHTML.replace(word, '<b>' + word + '</b>')
                        selected = true
                    }
                    if (i + 1 == words.length && !selected) {
                        tds[5].querySelector('div.text').innerHTML = tds[5].querySelector('input').value;
                    }
                }

                tds[0].innerHTML = tds[0].dataset.value;
                for (let i = 0; i < words.length; i++) {
                    const word = words[i];
                    let selected = false;
                    if (tds[0].dataset.value.includes(word)) {
                        tds[0].innerHTML = tds[0].innerHTML.replace(word, '<b>' + word + '</b>')
                        selected = true
                    }
                    if (i + 1 == words.length && !selected) {
                        tds[0].innerHTML = tds[0].dataset.value;
                    }
                }


                tds[1].innerHTML = tds[1].dataset.value;
                for (let i = 0; i < words.length; i++) {
                    const word = words[i];
                    let selected = false;
                    if (tds[1].dataset.value.includes(word)) {
                        tds[1].innerHTML = tds[1].innerHTML.replace(word, '<b>' + word + '</b>')
                        selected = true
                    }
                    if (i + 1 == words.length && !selected) {
                        tds[1].innerHTML = tds[1].dataset.value;
                    }
                }

                if (!tr.innerHTML.includes('<b>') && !tr.innerHTML.includes('</b>')) {
                    tr.classList.add('hidden')
                } else {
                    tr.classList.remove('hidden')
                }



            });
        })
    </script>
@endsection
