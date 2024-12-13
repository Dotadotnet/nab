@extends('admin.layout.main')
@section('title')
کاربران
@endsection
@section('main')
<style>
     table b {
        color: blue;
        font-weight: bolder !important;
    }
    .dark table b {
        color: #3838ff;
        font-weight: bolder !important;
    }
</style>
@if(count($users))
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
                <th scope="col" class="px-6 py-3">
                    آیدی
                </th>
                <th scope="col" class="px-6 py-3">
                    عکس
                </th>
                <th scope="col" class="px-6 py-3">
                    اسم
                </th>
                <th scope="col" class="px-6 py-3">
                    شماره تلفن
                </th>
                <th scope="col" class="px-6 py-3">
                    کیف پول
                </th>
                <th scope="col" class="px-6 py-3">
                    رمز عبور
                </th>
                <th scope="col" class="px-6 py-3">
                    مسدود کردن
                </th>
            </tr>
        </thead>
        <tbody>
            @foreach ($users as $user)
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td data-value="{{$user->id}}" class="w-4 p-4">
                    {{$user->id}}
                </td>
                <th class="px-6 py-2">
                    <div class="size-16 border-2 overflow-hidden border-blue-600  rounded-full">
                        <img class="size-full object-cover" src="{{$user->img}}" alt="">
                    </div>
                </th>
                <td data-value="{{$user->name}}" class="px-6 text- py-4">
                    {{$user->name}}
                </td>
                <td data-value="{{$user->phone}}" class="px-6 py-4">
                    {{$user->phone}}
                </td>
                <td class="px-6 py-4">
                    @if($user->wallet === 0)
                    خالی
                    @else
                    {!! App\Helpers\Helper::price((int)$user->wallet) !!}
                    @endif
                </td>
                <td class="px-6 py-4">
                    {{$user->password}}
                </td>
                <td class="px-6 py-4">
                    <form action="/panel/block" method="post">
                        @csrf
                        <input type="text" class="hidden" name="id" value="{{$user->id}}">
                        <button
                            class="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-lg rounded-lg text-sm size-11 flex justify-center items-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">
                            <i class="fa text-2xl fa-ban" aria-hidden="true"></i>
                        </button>
                    </form>
                </td>
            </tr>
            @endforeach
        </tbody>
    </table>
</div>
@else
<h1 class="text text-center">
 کاربری وجود ندارد
</h1>
@endif
<script>
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', (event) =>{
            event.preventDefault()
            if (confirm("آیا از مسدود کردن این کاربر مطمئن هستید ؟؟؟") == true) {
                form.submit()
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


            tds[3].innerHTML = tds[3].dataset.value;
            for (let i = 0; i < words.length; i++) {
                const word = words[i];
                let selected = false;
                if (tds[3].dataset.value.includes(word)) {
                    tds[3].innerHTML = tds[3].innerHTML.replace(word, '<b>' + word + '</b>')
                    selected = true
                }
                if (i + 1 == words.length && !selected) {
                    tds[3].innerHTML = tds[3].dataset.value;
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