@extends('admin.layout.main')
@section('title')
    شماره های مسدود شده
@endsection
@section('main')
@if (count($users))
<table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
        <tr>
            <th scope="col" class="px-6 py-3">
                آیدی
            </th>
            <th scope="col" class="px-6 py-3">
                شماره تلفن
            </th>
            <th class="px-6 py-4">
                رفع انسداد
            </th>
        </tr>
    </thead>
    <tbody>
        @foreach ($users as $user)
            <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td class="w-4 p-4">
                    {{ $user->id }}
                </td>
                <td class="px-6 py-4">
                    {{ $user->phone }}
                </td>
                <td class="px-6 py-4">
                    <form action="/panel/delete/block" method="post">
                        @csrf
                        <input type="text" class="hidden" name="id" value="{{ $user->id }}">
                        <button
                            class="focus:outline-none flex items-center text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            بازگردانی شماره
                            <i class="fa fa-recycle mr-2 text-lg" aria-hidden="true"></i>
                        </button>

                    </form>
                </td>
            </tr>
        @endforeach
    </tbody>
</table>
@else
    <h1 class="text text-center">شماره مسدود شده ای وجود ندارد !!!</h1>
@endif
   
@endsection
