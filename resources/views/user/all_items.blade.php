@extends('user.layout.main')
@section('style')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
@endsection
@section('main')
    <br><br>
    <br> <br class="hidden sm:block">
    <div class="w-full fixed top-0 z-20 sm:h-64 h-52 dark:bg-dark-60 bg-light-60">
    </div>
    <div class="w-full fixed sm:top-64 top-52 bg-gradient-to-t from-transparent z-20 h-2 dark:to-dark-60 to-light-60">
    </div>
    <div class=" w-full fixed top-24 dark:bg-dark-60 bg-light-60  z-30  ">
        <div class="swiper-container  swiper-two relative  select-none	">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper select-none	 ">
                <!-- Slides -->
                @foreach ($categorys as $category)
                    <div data-id="{{ $category->id }}"
                        class="swiper-slide group flex justify-center  size-24 sm:size-44  select-none	  ">
                        <div class="size-full flex justify-center items-center">
                            <div class=" select-none relative size-24 sm:size-36  	 flex items-center justify-center">
                                <div class="size-full flex justify-center absolute top-0 right-0">
                                    <div class="relative">
                                        <img class=" select-none border-2 border-primary-200 scale-95   size-full   object-cover rounded-full "
                                            src="{{ '/storage/' . $category->img }}">
                                        <div
                                            class="bg-black  scale-95 group-hover:hidden   justify-center items-center  size-full  absolute right-0 rounded-full  z-10 top-0   opacity-50">
                                        </div>
                                        <div
                                            class="flex text-white group-hover:hidden font-bold text-base  sm:text-3xl justify-center items-center  size-full scale-75 absolute right-0 rounded-full  z-10 top-0">
                                            <p class="text-center">
                                                {{ $category->name }}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div class="size-full hidden select rotate -z-10 justify-center absolute top-0 right-0">
                                    <img src="/image/select.png" class="size-full scale-125  " alt="">
                                </div>
                            </div>
                        </div>

                    </div>
                @endforeach

            </div>
            <div class="absolute  flex items-center size-full top-0 right-0">
                <div class="w-full flex px-3  sm:px-5 md:px-7 lg:px-10 justify-between">
                    <div
                        class="swiper-category-button-prev cursor-pointer hover:scale-125  select-none rounded-full bg-primary-200 border-2 border-primary-100 size-8 flex justify-center items-center sm:size-14  z-20	">
                        <i class="fa  fa-caret-right text-[30px] sm:text-[40px] text-white" aria-hidden="true"></i>
                    </div>
                    <div
                        class="swiper-category-button-next cursor-pointer hover:scale-125 select-none rounded-full bg-primary-200 border-2 border-primary-100 size-8 flex justify-center items-center sm:size-14 z-20	">
                        <i class="fa fa-caret-left text-white text-[30px] sm:text-[40px]" aria-hidden="true"></i>
                    </div>
                </div>
            </div>

        </div>


    </div>
    <br>
    <br>
    <div class=" box-product-scroll-slider sm:mx-10 mx-2 mt-6 sm:mt-10">
        @foreach ($categorys as $category)
            <div id="{{ $category->id }}"
                class=" category-bable  my-2 text text-center cursor-pointer bg-gradient-to-l  text-white from-transparent via-primary-200 to-transparent rounded-lg  relative p-2 hover:font-bold">
                <span class="mr-2 ">
                    {{ $category->name }}
                </span>
            </div>
            <div class=" sm:pt-8 pt-4 flex flex-wrap justify-around p-1 sm:p-4">
                @foreach ($products as $product)
                    @if ($product->category == $category->id)
                        <div
                            class=" sm:w-96 w-full relative shadow-md dark:shadow-gray-400 group mb-4 similar_item  p-2 flex bg-white border border-gray-200 rounded-lg  hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
                            @if ($product->off)
                                <div class='absolute z-10 sm:top-2 sm:right-2 top-1 right-1'><span
                                        class='text-white  flex items-center flex-row-reverse bg-red-600 px-1 sm:px-2 rounded-3xl'><span
                                            class="text-xs sm:text-sm font-bold flex  items-center mr-0.5">%</span><span
                                            class="flex text-sm sm:text-base items-center mt-0 sm:mt-[1.5px] font-bold">
                                            {{ $product->off }} </span></span></div>
                            @endif
                            <div class=" w-[100px] sm:w-[120px] flex-shrink-0 flex justify-center items-center  relative">
                                <a href="{{ '/products/' . $product->id }}">
                                    <img class="group-hover:rotate-180" src="http://nab.ir/image/similar_item.png"
                                        alt="">
                                    <div class="  absolute top-0 right-0 h-full w-full flex justify-center items-center">
                                        <span
                                            class="size-[70px] sm:size-[80px] rounded-full overflow-hidden border-[1px] border-white">
                                            <img data-src="{{ isset(json_decode($product->img)[1]) ? $product->img : '' }}"
                                                class=" h-full w-full  object-cover "
                                                src="{{ '/storage/' . json_decode($product->img)[0] }}" alt="">
                                        </span>
                                    </div>
                                </a>
                            </div>
                            <div class="p-1 flex flex-col w-full justify-between items-center">
                                <div class="flex justify-between items-center w-full">
                                    <span class=" text-base flex items-center sm:text-xl text  w-full font-bold ">
                                        {{ $product->name }}
                                    </span>

                                    <span>
                                        <button data-id="{{ $product->id }}"
                                            class="group add-to-cart bg-primary-200 sm:text-2xl text-lg size-10 sm:size-12 flex justify-center items-center text-white hover:font-bold border-2 border-primary-100 group rounded-xl ">
                                            <i class="fa hover:font-bold fa-cart-plus" aria-hidden="true"></i>
                                        </button>
                                        <div class=" justify-center items-center ">
                                        </div>
                                    </span>


                                </div>
                                <div class="flex justify-between items-center w-full">

                                    <span class=" text-xs mb-2 mr-2 flex items-center sm:text-base text  w-full font-bold ">
                                        @if ($product->off)
                                            <div class="flex flex-col justify-center items-center">
                                                <div class="line-through h-4 sm:h-5 inline-block opacity-50 scale-75">
                                                    <span class="line-through price opacity-50 scale-75">
                                                        {!! App\Helpers\Helper::price($product->price) !!}
                                                    </span>
                                                </div>
                                                <p class="price"> {!! App\Helpers\Helper::price($product->price - ($product->price / 100) * $product->off) !!} </p>
                                            </div>
                                        @else
                                            <span class="mb-2"> {!! App\Helpers\Helper::price($product->price) !!} </span>
                                        @endif
                                    </span>

                                    <span>

                                    </span>
                                </div>
                            </div>
                        </div>
                    @endif
                @endforeach
            </div>
        @endforeach
    </div>


    <br>
    <br>
@endsection
@section('script')
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script>
        const scroll_bar_procuct = document.documentElement;
        const swiper_category = new Swiper(".swiper-container.swiper-two", {
            slidesPerView: 1,
            slidesNextView: 1,
            loop: true,
            slidesPerView: 3,
            grabCursor: true,
            pauseOnMouseEnter: true,
            speed: 1000,
        });
        var setimeout_slideer_category = 0;
        var setimeout_cancel_scrollor_event = 0;

        var mouseovered_on_slider = false;
        document.querySelector('.swiper-container.swiper-two').addEventListener('mouseover', () => {
            swiper_category.on('slideChange', slideChangeScrollToProducts);
            mouseovered_on_slider = true;
        })
        document.querySelector('.swiper-container.swiper-two').addEventListener('mouseout', () => {
            mouseovered_on_slider = false;
        })

        function scrolledOnCategory() {
            clearTimeout(setimeout_slideer_scroll_box)
            setimeout_slideer_scroll_box = setTimeout(() => {
                let category_bable_first = category_bables[0];
                let data_poss = [];
                let possition_box = scroll_bar_procuct.scrollTop;
                category_bables.forEach(category_bable => {
                    let poss = category_bable.offsetTop - category_bable_first.offsetTop;
                    let id = category_bable.id;
                    data_poss.push({
                        poss: poss,
                        id: id
                    });
                });
                data_poss.reverse()
                let id = 0;
                data_poss.forEach(poss => {
                    if (poss.poss - 10 < possition_box) {
                        if (!id)
                            id = poss.id;
                    }
                    if (possition_box == 0) {
                        id = '1'
                    }
                });



                for (let index = 0; index < slides_category.length; index++) {
                    let slide_category = slides_category[index];
                    if (slide_category.dataset.id == id) {
                        swiper_category.slideToLoop(index, 1000)
                    }

                }
            }, 100)
        }

        window.addEventListener('scrollend', scrolledOnCategory)

        function slideChangeScrollToProducts() {
            window.removeEventListener('scrollend', scrolledOnCategory)
            clearTimeout(setimeout_cancel_scrollor_event)
            setimeout_cancel_scrollor_event = setTimeout(() => {
                window.addEventListener('scrollend', scrolledOnCategory)
            }, 3000)
            clearTimeout(setimeout_slideer_category)
            setimeout_slideer_category = setTimeout(() => {
                let id_slide = document.querySelector(".swiper-two .swiper-slide-next").dataset.id;
                let item_view = document.getElementById(id_slide);
                if (id_slide) {
                    let first_top_pos = document.getElementById(1).offsetTop;
                    let topPos = item_view.offsetTop - first_top_pos;
                    scroll_bar_procuct.scrollTop = topPos;
                }
            }, 1000);
        }
        swiper_category.on('slideChange', slideChangeScrollToProducts);
        slideChangeScrollToProducts()

        swiper_category.on('slideChangeTransitionStart', () => {
            swiper_category.on('slideChange', slideChangeScrollToProducts);
        })

        swiper_category.on('tap', () => {
            swiper_category.on('slideChange', slideChangeScrollToProducts);
        })

        swiper_category.on('touchStart', () => {
            swiper_category.on('slideChange', slideChangeScrollToProducts);
        })
        document.querySelector('.swiper-category-button-next').addEventListener('click', () => {
            swiper_category.on('slideChange', slideChangeScrollToProducts);
            swiper_category.slideNext(1000)
        })
        document.querySelector('.swiper-category-button-prev').addEventListener('click', () => {
            swiper_category.on('slideChange', slideChangeScrollToProducts);
            swiper_category.slidePrev(1000)
        })
        const category_bables = document.querySelectorAll('div.category-bable');
        let slides_category_first = document.querySelectorAll('div.swiper-two div.swiper-slide');
        const slides_category = [];
        for (let index = 1; index < slides_category_first.length; index++) {
            const element = slides_category_first[index];
            slides_category.push(element)
        }
        slides_category.push(slides_category_first[0])
        var setimeout_slideer_scroll_box = 0;
        window.addEventListener('scroll', () => {
            swiper_category.off('slideChange', slideChangeScrollToProducts)
        })
        // const div_items_points = document.querySelectorAll('div.view');
        // window.addEventListener('scroll', () => {
        //     let doc = document.documentElement;
        //     let top = (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0);

        //     div_items_points.forEach(div_items_point => {
        //         let offset_top_el = div_items_point.offsetTop;
        //         if (Math.abs(offset_top_el - top) < 500) {
        //             div_items_point.classList.remove('w-0')
        //             div_items_point.classList.add('w-full')
        //         } else {
        //             div_items_point.classList.add('w-0')
        //             div_items_point.classList.remove('w-full')
        //         }
        //     });
        // })
    </script>
@endsection
