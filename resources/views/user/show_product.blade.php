@extends('user.layout.main')
@section('title')
    {{ $name }}
@endsection
@section('style')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
@endsection
@section('main')
    <div class="flex min-h-[50vh]  md:flex-row-reverse flex-col-reverse justify-end px-2 md:px-5">
        <div class="w-full md:w-1/2 blog-main product-div">

            <br>
            <div class=" items-center mr-3 sm:mr-0 flex justify-between  ">
                <div class="sm:text-xl text-lg flex items-center font-bold text-black dark:text-white">
                    <a href="#category_{{ $category[1] }}" class="  text-blue-700 hover:text-blue-600 ">
                        {{ $category[0] }} </a>
                    <span class=" pt-1 mx-2 text-2xl  sm:text-3xl  "> / </span>
                    <span class=" sm:text-xl text-lg "> {{ $name }} </span>
                </div>

            </div>

            <br>
            @if ($off)
                <div class=" text pr-7    md:pr-2 mt-6 text-md sm:text-lg ">
                    <span class="relative">
                        <div
                            class=" text pr-0 w-full   absolute flex justify-center -top-8 opacity-50 md:pr-2 text-md sm:text-lg scale-90 ">
                            <span
                                class="before:h-0.5 w-full inline-block scale-90 before:w-full relative">
                                <b class="inline-block">{!! App\Helpers\Helper::price($price) !!}</b>
                            </span>
                        </div>
                        قیمت : {{ $type }} <b>{!! App\Helpers\Helper::price($price - ($price / 100) * $off) !!}</b>
                    </span>
                </div>
            @else
                <div class=" text pr-7  md:pr-2 text-md sm:text-lg ">
                    قیمت : {{ $type }} <b>{!! App\Helpers\Helper::price($price) !!}</b>
                </div>
            @endif
            <br>
            <div class=" text pr-7 md:pr-2 text-md sm:text-lg ">
                توضیحات بیشتر :
            </div>
            <br>
            <div class="text pr-9 md:pr-4 text-xs sm:text-base ">
                {!! $caption !!}
            </div>
            <br>
            <div>
                @component('user.components.share_box', ['url' => env('APP_URL') . '/product/' . $id])
                @endcomponent
            </div>
            <br>
            <p class="sm:text-2xl text-xl mt-2 text ">
                کالا های مشابه :
            </p>
            <br>
            <div>
                <div class="swiper-similer swiper -z-50 w-full relative">
                    <!-- Parallax background element -->
                    <div class="parallax-bg" style="background-image:url(path/to/image.jpg)" data-swiper-parallax="-23%">
                    </div>
                    <div class="swiper-wrapper">
                    </div>
                    <div class="swiper-button-prev swiper-button-prev-similer  	">
                        <i class="fa fa-caret-right text-[30px] sm:text-[40px] text-white" aria-hidden="true"></i>
                    </div>
                    <div class="swiper-button-next 	swiper-button-next-similer ">
                        <i class="fa fa-caret-left text-white text-[30px] sm:text-[40px]" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <br>
            <div class=" flex items-center flex-col justify-center ">

                <div class="w-full p-4 comment">

                    <label for="comment" class="sr-only">Your comment</label>
                    <textarea id="comment" rows="6"
                        class="p-3 mb-3 rounded-lg w-full text-sm text-gray-900 resize-none border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                        placeholder="دیدگاه خود را قرار دهید ..."></textarea>
                    <div class="flex  pr-3 ">
                        <input placeholder="نام (اختیاری)" type="text"
                            class=" text-sm rounded-lg border-gray-400 px-3 text-gray-900 focus:outline-none dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800 dark:border-gray-700 inline-block mx-4 w-full ">

                        <button type="button"
                            class="  flex justify-center ml-4 p-2 sm:p-3  items-center w-28 sm:w-32  text-sm font-medium text-center 
                            text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm
                            ">ارسال</button>
                    </div>
                </div>
                <button
                    class="bg-transparent comment-show sm:text-md text-sm hover:bg-primary-200 text-primary-200 font-semibold hover:text-white py-2 px-4 border border-primary-200 hover:border-transparent rounded">
                    <i class="fa fa-comments" aria-hidden="true"></i>
                    <span> مشاهده کامنت ها </span>
                    <b class="show-count-comments">(0)</b>
                </button>
                <section class=" w-full pt-3 lg:p-5  comment-box antialiased ">

                </section>
            </div>
            <br>



        </div>
        <div class="w-full md:w-1/2 md:absolute nav-blog md:h-full right-0 text-2xl sm:text-3xl text top-32 ">
            <div class="sticky mt-3 top-24">
                <div class="swiper-pro swiper xl:size-96 lg:size-80 md:size-72 size-64 select-none	">
                    <!-- Additional required wrapper -->
                    <div class="swiper-wrapper select-none	 ">
                        <!-- Slides -->
                        @foreach ($imgs as $img)
                            <div class="swiper-slide size-12 select-none	  ">
                                <div class="size-full select-none relative	 flex items-center justify-center">
                                    @if ($off)
                                        <div class='absolute scale-125 sm:scale-150 z-10 sm:top-5 sm:right-7 top-4 right-4'>
                                            <span
                                                class='text-white  flex items-center flex-row-reverse bg-red-600 px-1 sm:px-2 rounded-3xl'><span
                                                    class="text-xs sm:text-sm font-bold flex  items-center mr-0.5">%</span><span
                                                    class="flex text-sm sm:text-base items-center mt-0 sm:mt-[1.5px] font-bold">
                                                    {{ $off }} </span></span>
                                        </div>
                                    @endif
                                    <img class=" select-none border-2 border-primary-100	 rounded-[30px] overflow-hidden size-full object-cover "
                                        src="{{ $img }}" alt="{{ $name }}">
                                </div>
                            </div>
                        @endforeach
                    </div>
                    <div class="swiper-button-prev swiper-button-prev-pro	">
                        <i class="fa fa-caret-right text-[30px] sm:text-[40px] text-white" aria-hidden="true"></i>
                    </div>
                    <div class="swiper-button-next 	swiper-button-next-pro ">
                        <i class="fa fa-caret-left text-white text-[30px] sm:text-[40px]" aria-hidden="true"></i>
                    </div>
                </div>
                <br>
                <div class=" pagination-div flex justify-center items-center">
                    @for ($i = 0; $i < count($imgs); $i++)
                        <div data-slide="{{ $i }}" onclick="swich_to_slide({{ $i }},this)"
                            class=" border-2 border-primary-100 dark:border-primary-200 cursor-pointer
                 size-16 mx-1 overflow-hidden 
                md:size-20 lg:size-24 rounded-md  ">
                            <img class="size-full object-cover " src="{{ $imgs[$i] }}">
                        </div>
                    @endfor
                </div>
                <div
                    class=" fixed top-[70px] sm:top-20 z-[60000000000000000000000000000000000000000000000000]  left-3 animate__animated animate__pulse animate__delay-3s  animate__infinite inline-block">
                    @component('user.components.add_card', ['id' => $id])
                    @endcomponent
                </div>
            </div>
        </div>
        <div class="w-full md:w-1/2 hidden  md:flex "></div>
    </div>
    
    {{-- <div class=" flex flex-col-reverse md:flex-row-reverse  ">
        <div class=" md:w-1/2 w-full pt-1 sm:pt-2 ">
            <br>
            <div class=" items-center mr-3 sm:mr-0 flex justify-between  ">
                <div class="sm:text-xl text-lg flex items-center font-bold text-black dark:text-white">
                    <a href="#category_{{ $category[1] }}" class="  text-blue-700 hover:text-blue-600 ">
                        {{ $category[0] }} </a>
                    <span class=" pt-1 mx-2 text-2xl  sm:text-3xl  "> / </span>
                    <span class=" sm:text-xl text-lg "> {{ $name }} </span>
                </div>

            </div>

            <br>
            <div class=" text pr-7  md:pr-2 text-md sm:text-lg ">
                قیمت : {{ $type }} <b>{!! $price !!}</b>
            </div>
            <br>
            <div class=" text pr-7 md:pr-2 text-md sm:text-lg ">
                توضیحات بیشتر :
            </div>
            <br>
            <div class="text pr-9 md:pr-4 text-xs sm:text-base ">
                {!! $caption !!}
            </div>
            <br>
            <div>
                @component('user.components.share_box', ['url' => env('APP_URL') . '/product/' . $id])
                @endcomponent
            </div>
            <br>
            <p class="sm:text-2xl text-xl mt-2 text ">
                کالا های مشابه :
            </p>
            <br>
            <div>
                <div class="swiper-similer swiper w-full relative">
                    <!-- Parallax background element -->
                    <div class="parallax-bg" style="background-image:url(path/to/image.jpg)" data-swiper-parallax="-23%">
                    </div>
                    <div class="swiper-wrapper">


                    </div>
                    <div class="swiper-button-prev swiper-button-prev-similer  	">
                        <i class="fa fa-caret-right text-[30px] sm:text-[40px] text-white" aria-hidden="true"></i>
                    </div>
                    <div class="swiper-button-next 	swiper-button-next-similer ">
                        <i class="fa fa-caret-left text-white text-[30px] sm:text-[40px]" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <br>
            <div class=" flex items-center flex-col justify-center ">

                <div class="w-full p-4 comment">

                    <label for="comment" class="sr-only">Your comment</label>
                    <textarea id="comment" rows="6"
                        class="p-3 mb-3 rounded-lg w-full text-sm text-gray-900 resize-none border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400 dark:bg-gray-800"
                        placeholder="دیدگاه خود را قرار دهید ..."></textarea>
                    <div class="flex  pr-3 ">
                        <input placeholder="نام (اختیاری)" type="text"
                            class=" text-sm rounded-lg border-gray-400 px-3 text-gray-900 focus:outline-none dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 dark:bg-gray-800 dark:border-gray-700 inline-block mx-4 w-full ">

                        <button type="button"
                            class="  flex justify-center ml-4 p-2 sm:p-3  items-center w-28 sm:w-32  text-sm font-medium text-center 
                            text-white bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm
                            ">ارسال</button>
                    </div>
                </div>
                <button
                    class="bg-transparent comment-show sm:text-md text-sm hover:bg-primary-200 text-primary-200 font-semibold hover:text-white py-2 px-4 border border-primary-200 hover:border-transparent rounded">
                    <i class="fa fa-comments" aria-hidden="true"></i>
                    <span> مشاهده کامنت ها </span>
                    <b class="show-count-comments">(0)</b>
                </button>
                <section class=" w-full pt-3 lg:p-5  comment-box antialiased ">

                </section>
            </div>
            <br>

        </div> --}}

    {{-- <div class=" md:w-1/2 w-full ">
            <div class="swiper-pro swiper xl:size-96 lg:size-80 md:size-72 size-64 select-none	">
                <!-- Additional required wrapper -->
                <div class="swiper-wrapper select-none	 ">
                    <!-- Slides -->
                    @foreach ($imgs as $img)
                        <div class="swiper-slide size-12 select-none	  ">
                            <div class="size-full select-none	 flex items-center justify-center">
                                <img class=" select-none border-2 border-primary-100	 rounded-[30px] overflow-hidden size-full object-cover "
                                    src="{{ $img }}" alt="{{ $name }}">
                            </div>
                        </div>
                    @endforeach
                </div>
                <div class="swiper-button-prev swiper-button-prev-pro	">
                    <i class="fa fa-caret-right text-[30px] sm:text-[40px] text-white" aria-hidden="true"></i>
                </div>
                <div class="swiper-button-next 	swiper-button-next-pro ">
                    <i class="fa fa-caret-left text-white text-[30px] sm:text-[40px]" aria-hidden="true"></i>
                </div>
            </div>
            <br>
            <div class=" pagination-div flex justify-center items-center">
                @for ($i = 0; $i < count($imgs); $i++)
                    <div data-slide="{{ $i }}" onclick="swich_to_slide({{ $i }},this)"
                        class=" border-2 border-primary-100 dark:border-primary-200 cursor-pointer
                 size-16 mx-1 overflow-hidden 
                md:size-20 lg:size-24 rounded-md  ">
                        <img class="size-full object-cover " src="{{ $imgs[$i] }}">
                    </div>
                @endfor
            </div>
            <div
                class=" fixed top-20 z-50  left-3 animate__animated animate__pulse animate__delay-3s  animate__infinite inline-block">
                @component('user.components.add_card', ['id' => $id])
                @endcomponent
            </div>
        </div> --}}
    {{-- </div>  --}}
@endsection
@section('script')
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script>
        const page_id = @json($id);
        window.page_id = page_id;
        const category_id = @json($category[1]);
        const pagination_divs = document.querySelectorAll('div.pagination-div div');
        const swiper = new Swiper(".swiper-pro", {
            effect: "cube",
            grabCursor: true,
            loop: true,
            pauseOnMouseEnter: true,
            speed: 2000,
            autoplay: {
                delay: 0,
                disableOnInteraction: true,
            },
            cubeEffect: {
                shadow: false,
                slideShadows: false,
                shadowOffset: 20,
                shadowScale: 0.94,
            },
            navigation: {
                nextEl: '.swiper-button-next-pro',
                prevEl: '.swiper-button-prev-pro',
            },


        });

        function swich_to_slide(id, move = true) {
            let div_selected = null;
            for (let i = 0; i < pagination_divs.length; i++) {
                let pagination_div = pagination_divs[i];
                if (pagination_div.dataset.slide == id) {
                    pagination_div.classList.add('active-slide');
                } else {
                    pagination_div.classList.remove('active-slide')
                }
            }
            if (move) {
                console.log(id)
                swiper.slideToLoop(id, 2000)
            }
        }
        swiper.on('slideChange', function() {
            swich_to_slide(swiper.realIndex, false);
        });

        function pricee(price) {
            price = Math.ceil(price / 1000) * 1000;    
            const type = ['', 'هزار', 'میلیون', 'میلیارد', 'تیلیارد'];
            const priceLen = String(price).length;
            const select3_3 = Math.ceil(priceLen / 3);
            const resultArray = [];

            for (let i = 0; i < select3_3; i++) {
                const num = String(price).split('').reverse().join('').substring(i * 3, (i + 1) * 3);
                if (parseInt(num)) {
                    resultArray.push('<span style="white-space: nowrap;" class="price"><span> ' + parseInt(num.split('')
                        .reverse().join('')) + ' </span>' + type[i] + '</span>');
                }
            }
            let result = resultArray.reverse().join(
                    "<span style='text-align:center; white-space:nowrap; margin:0px 4px'> و </span>") +
                '<span>تومان<span/>';
            return result.trim() === '<span>تومان<span/>' ? '0 تومان' : result.trim();
        }

        window.addEventListener('load',() =>{
   window.axios({
                method: 'get',
                url: '/api/product/category/' + category_id,
            }).then(function(response) {
                // console.log(price(1200));

                let data = response.data;
                data.forEach(item => {
                    if (item.id !== page_id) {
                        document.querySelector('div.swiper-similer div.swiper-wrapper').innerHTML += `    
<div class="swiper-slide p-2">
<div class=" bg-white border relative border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   ${item.off ? "<div class='absolute z-10 sm:top-2 sm:right-2 top-1 right-1'><span class='text-white  flex items-center flex-row-reverse bg-red-600 px-1 sm:px-2 rounded-3xl'><span class='text-xs sm:text-sm font-bold flex  items-center mr-0.5'>%</span><span class='flex text-sm sm:text-base items-center mt-0 sm:mt-[1.5px] font-bold'>" + item.off + "</span></span></div>" : ''}
    <div class="absolute top-2 left-2">
    <button data-id="${ item.id }"
        class="group add-to-cart bg-primary-200 sm:text-2xl text-lg size-10 sm:size-12 flex justify-center items-center text-white hover:font-bold border-2 border-primary-100 group rounded-xl ">
        <i class="fa hover:font-bold fa-cart-plus" aria-hidden="true"></i>
    </button>
    <div class=" justify-center items-center ">
    </div>
</div>
        <img class=" h-36 w-full object-cover rounded-t-lg" src="${'/storage/' + JSON.parse(item.img)[0]}" alt="product image" />
    <div class="px-5 pb-5">
        <br>
        
<div>
        <a href="${'/product/' + item.id}"  >
            <h5 data-swiper-parallax="-100" class="sm:text-lg text-base font-semibold tracking-tight text-gray-900 dark:text-white">${item.name}</h5>
        </a>
        </div>
        <a href="${'/product/' + item.id}"  >
        <div class=" relative mt-4 ">
        ${!item.off ?
        '<span class="sm:text-base -right-5 absolute text-sm font-bold scale-75  text-gray-900 dark:text-white">'+pricee(item.price)+'</span>'
:   '<span class="sm:text-base -right-5 top-1 font-bold absolute text-sm font-bold scale-75  text-gray-900 dark:text-white">'+pricee(item.price - (item.price / 100) * item.off )+'</span><span class="sm:text-base -top-6 -right-5  text-sm  font-bold scale-75 absolute opacity-[0.5]  before:h-1 before:absolute before:bg-gray-900 before:opacity-50 before:top-3 before:w-full   text-gray-900 dark:text-white">'+pricee(item.price)+'</span>'
    }
        </div>
        </a>
        <br>
    </div>
</div>
</div>`
                    }
                });             
                setTimeout(() => {
                    const swiper_similer = new Swiper(".swiper-similer", {
                        effect: 'free',
                        grabCursor: true,
                        loop: true,
                        pauseOnMouseEnter: true,
                        speed: 1000,
                        autoplay: {
                            delay: 0,
                        },
                        breakpoints: {
                            // when window width is >= 320px
                            320: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            640: {
                                slidesPerView: 3,
                                spaceBetween: 10
                            },
                            768: {
                                slidesPerView: 2,
                                spaceBetween: 10
                            },
                            // when window width is >= 640px
                            1280: {
                                slidesPerView: 3,
                                spaceBetween: 40
                            }
                        },
                        autoplay: {
                            delay: 2000,
                            disableOnInteraction: true,
                        },

                        navigation: {
                            nextEl: '.swiper-button-next-similer',
                            prevEl: '.swiper-button-prev-similer',
                        },
                    });
                }, 2000);

            }).catch(() => {}).then(() => {
                window.reload_button_add_cart_events()
            })
        })


        
    </script>
@endsection
