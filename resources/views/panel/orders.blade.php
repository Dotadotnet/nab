@extends('panel.layout.main')
@section('title')
    سفارشات شما
@endsection
@section('main')
    @php
        $user = Auth::guard('user')->user();
    @endphp
    <br>
    @if (count($orders))
        @for ($i = 0; $i < count($orders); $i++)
            <div id="{{$orders[$i]['id']}}" class="dark:bg-gray-800 order-div bg-white border-blue-600 border-2 mt-2 p-3 rounded-lg dark:border-black">
                <span class="text sm:text-xl flex items-center text-lg">
                    @if (count($orders) == 1)
                        سفارش شما :
                    @else
                        سفارش {{ App\Helpers\Helper::numberFaChar($i + 1) }} :
                    @endif
                </span>

                <div class="flex items-center justify-end w-full">
                    <a href="{{ route('order_set_location', $orders[$i]['id']) }}"
                        class="text-white cursor-pointer  ml-2 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-bold rounded-lg text-sm sm:text-base sm:px-4 px-3 py-1.5 sm:py-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">
                        @if ($orders[$i]['invoice'] === 'none')
                            ارسال فاکتور
                        @elseif ($orders[$i]['lat'] || $orders[$i]['postal_code'])
                            تغییر مکان
                        @else
                            ثبت مکان
                        @endif
                    </a>
                    @if ($orders[$i]['invoice'] !== 'none')
                        <button type="button"
                            class="focus:outline-none remove-order text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg  text-sm sm:text-base sm:px-4 px-3 py-1.5 sm:py-2 font-bold  dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            مرجوع کردن سفارش
                        </button>
                    @else
                        <button type="button"
                            class="focus:outline-none cancel-order text-center text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 rounded-lg  text-sm sm:text-base sm:px-4 px-3 py-1.5 sm:py-2 font-bold dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800">
                            انصراف از سفارش
                        </button>
                    @endif
                </div>
                <div class="flex mr-2 mt-3 items-center text">
                    <span class="flex   font-bold items-center">
                        <div style="background-color: {{ $orders[$i]['color'] }}" class="size-3 sm:size-4 rounded-full">
                        </div>
                        <span class="mr-1 text-nowrap text-base sm:text-lg">
                            {{ $orders[$i]['status'] }}
                        </span>
                    </span>
                    @if ($orders[$i]['time_send'])
                        <div
                            class="mx-2 shadow-blue-600 bg-blue-600 dark:shadow-white dark:bg-white shadow-[0px_0px_2px_1px] rounded-md     w-[1px] h-5">
                        </div>
                        <span class="text text-nowrap flex items-center">
                            {{ $orders[$i]['time_send'] }}
                        </span>
                    @endif

                </div>
                <p style="color: {{ $orders[$i]['color'] }}" class="sm:text-base font-bold text mr-4 text-sm mt-2">
                    {{ $orders[$i]['caption'] }}
                </p>
                <div
                    class="mb-2 mt-4 p-2  shadow-gray-600 shadow-[0px_0px_5px_1px] rounded-lg bg-gray-100 dark:bg-gray-700 dark:shadow-gray-300">
                    <table
                        class="w-full  rounded-lg  overflow-hidden text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                        <tbody>
                            @foreach ($orders[$i]['data'] as $item)
                                <tr class="bg-gray-100 py-3  dark:bg-gray-700 dark:border-gray-700  ">
                                    <th scope="row" class="flex h-full  text-gray-900 whitespace-nowrap dark:text-white">
                                        <img class="size-14 my-1 sm:size-20 object-cover rounded-full"
                                            src="{{ '/storage/' . json_decode($item['img'])[0] }}" alt="Jese image">
                                    </th>
                                    <td class=" sm:text-lg text-base text px-4 ">
                                        {{ $item['name'] }}
                                    </td>
                                    <td class=" sm:text-lg text-base text ">
                                        {!! $item['count'] . ' ' . '<span class="pb-4">' . $item['type'] . '</span>' !!}
                                    </td>
                                </tr>
                            @endforeach
                        </tbody>
                    </table>
                </div>
            </div>
        @endfor
    @else
        <br>
        <br>
        <br>
        <h1 style="text-shadow: 2px 2px 2px #2563eb" class="text  text-center text-5xl">
            هنوز سفارشی ثبت نکردید
        </h1>
        <br>
        <style>
            .dark a.link-home {
                text-shadow: 2px 2px 1px blue, -2px -2px 1px green
            }

            a.link-home {
                text-shadow: 2px 2px 1px blue, -2px -2px 1px red
            }
        </style>
        <a href="/cart" class="text link-home block text-center mt-16 text-2xl sm:text-4xl">
            برای ثبت سفارش کلیک کنید
        </a>
    @endif
    <br>
@endsection
