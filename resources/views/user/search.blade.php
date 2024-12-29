@extends('user.layout.main')
@section('main')
    <br>
    <div class="w-full text text-2xl px-5">
        سرچ کنید ...
    </div>
    <br>
    <form class="redirect">
        <div class="px-6">
            <div class="relative sm:w-1/2 text  w-full">
                <div class="h-full cursor-pointer flex absolute left-3 items-center">
                    <i class="fa fa-search text-xl" aria-hidden="true"></i>
                </div>
                <input type="search" value="{{ $input }}" placeholder="جست و جو کنید ..."
                    class=" pl-10 bg-white dark:bg-gray-700  outline-none dark:ring-white ring-primary-200 focus:ring-2  w-full p-3 rounded-lg ">
            </div>
        </div>
    </form>
    @if ($sentence !== $input)
        <div class="p-8">
            <a href="/search/1/{{ $sentence }}"
                class=" block text cursor-pointer bg-gradient-to-l  text-white from-primary-200 rounded-lg  relative p-2 hover:font-bold">
                <span class="mr-2 similer-text-inner">
                    آیا منطوری شما این بود : <b>{{ $sentence }}</b>
                </span>
            </a>
        </div>
    @endif


    <br>

    @if (count($data))
        <div class="flex justify-center sm:justify-around flex-wrap px-2">
            @foreach ($data as $item)
                <div class="bg-white relative m-3 dark:bg-gray-800 p-3 flex flex-col h-[365px] w-60  rounded-lg">
                   
                    <div class="w-full justify-center flex relative">
                        <img class="rounded-lg h-48 w-full object-cover" src="{{ '/storage/' . $item['img'] }}"
                            alt="">
                            @if ($item['off'])
                            <div class='absolute z-30 sm:top-2 sm:right-2 top-1 right-1'><span
                                    class='text-white  flex items-center flex-row-reverse bg-red-600 px-1 sm:px-2 rounded-3xl'><span
                                        class="text-xs sm:text-sm font-bold flex  items-center mr-0.5">%</span><span
                                        class="flex text-sm sm:text-base items-center mt-0 sm:mt-[1.5px] font-bold">
                                        {{ $item['off'] }}
                                    </span></span></div>
                        @endif
                    </div>
                    <div class="flex flex-col h-full justify-between">
                        <div>
                            <h1 class="text mt-3 pr-2 text-lg">
                                {{ $item['name'] }}
                            </h1>
                            <h3 class="text mt-3 pr-2 text-base">
                                {!! $item['price'] !!}
                            </h3>
                        </div>
                        <div class="flex justify-between items-center">

                            <a href="/product/{{ $item['id'] }}"
                                class="p-2 rounded-lg bg-primary-200 text-sm text-white">
                                توضیحات بیشتر
                            </a>
                            @component('user.components.add_card', ['id' => $item['id']])
                            @endcomponent
                        </div>
                    </div>
                </div>
            @endforeach
        </div>


        <div class="justify-center flex flex-wrap mt-3 ">
            <!-- this_page -->
            @if ($pagintion - $this_page < 0)
                <a href="/search/{{ $this_page - 1 }}/{{ $input }}"
                    class="bg-primary-200 mx-2 text-lg rounded-lg select-none flex size-10 hover:font-bold border-2 border-primary-200 cursor-pointer hover:border-primary-100 justify-center items-center text-white">
                    <i class="fa fa-caret-right" aria-hidden="true"></i>
                </a>
            @endif
            @for ($i = -2; $i <= 2; $i++)
                @if ($i + $this_page > 0 && $this_page + $i <= $pagintion)
                    <a href='/search/{{ $this_page + $i }}/{{ $input }}'
                        class="bg-primary-200 {{ $i + $this_page == $this_page ? 'scale-125' : '' }} mx-2 text-lg rounded-lg select-none flex size-10 hover:font-bold border-2 border-primary-200 cursor-pointer hover:border-primary-100 justify-center items-center text-white">
                        {{ $i + $this_page }}
                    </a>
                @endif
            @endfor

            @if ($this_page + 1 <= $pagintion)
                <a href="/search/{{ $this_page + 1 }}/{{ $input }}"
                    class="bg-primary-200 mx-2 text-lg rounded-lg select-none flex size-10 hover:font-bold border-2 border-primary-200 cursor-pointer hover:border-primary-100 justify-center items-center text-white">
                    <i class="fa fa-caret-left" aria-hidden="true"></i>
                </a>
            @endif
        </div>
    @else
        <style>
            .dark h1.link-home {
                text-shadow: 2px 2px 1px blue, -2px -2px 1px green
            }

            h1.link-home {
                text-shadow: 2px 2px 1px blue, -2px -2px 1px red
            }
        </style>
        <h1 class="sm:text-6xl link-home text3xl text py-32 text-center">
            نتیجه ای یافت نشد
        </h1>
    @endif
@endsection
@section('script')
    <style>
        /* HTML: <div class="loader"></div> */
        .loader-custom {
            width: 50px;
            aspect-ratio: 1;
            display: grid;
        }

        .loader-custom::before,
        .loader-custom::after {
            content: "";
            grid-area: 1/1;
            --c: no-repeat radial-gradient(farthest-side, #25b09b 92%, #0000);
            background:
                var(--c) 50% 0,
                var(--c) 50% 100%,
                var(--c) 100% 50%,
                var(--c) 0 50%;
            background-size: 12px 12px;
            animation: l12 1s infinite;
        }

        .loader-custom::before {
            margin: 4px;
            filter: hue-rotate(45deg);
            background-size: 8px 8px;
            animation-timing-function: linear
        }

        @keyframes l12 {
            100% {
                transform: rotate(.5turn)
            }
        }
    </style>
    <script>
        const form_ridirect = document.querySelector('form.redirect')
        form_ridirect.addEventListener('submit', (event) => {
            event.preventDefault();
            window.location.href = '/search/1/' + form_ridirect.querySelector('input').value;
            form_ridirect.querySelector('i').parentNode.innerHTML =
                '<span class="scale-75"><span class="loader-custom"></span></span>'
        })
        form_ridirect.querySelector('i').parentNode.addEventListener('click', () => {
            window.location.href = '/search/1/' + form_ridirect.querySelector('input').value;
            form_ridirect.querySelector('i').parentNode.innerHTML =
                '<span class="scale-75"><span class="loader-custom"></span></span>'
        })
    </script>
@endsection
