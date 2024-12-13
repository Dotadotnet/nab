@extends('user.layout.main')
@section('title')
    {{ $title }}
@endsection
@section('main')
    <div class="flex min-h-[50vh]  md:flex-row flex-col-reverse justify-end px-2 md:px-5">
        <div class="w-full md:w-3/5 blog-main">
            <h1 class=" text-2xl text sm:text-4xl ">
                {{ $title }}
            </h1>
            <br>
            <div class="document-editor">
                <div class="document-editor__toolbar"></div>
                <div class="document-editor__editable-container">
                    <div class="document-editor__editable blog text ck-content p-1">
                        {!! str_replace(['<h2>&nbsp;</h2>', '<h1>&nbsp;</h1>', '<h3>&nbsp;</h3>'], [], $amount) !!}
                    </div>
                </div>
            </div>
            <br>
            <div class="text opacity-50 mr-7 flex text-xl items-center">
                <i class="fa fa-clock-o mb-1" aria-hidden="true"></i>
                <span class="mr-2 text-lg">
                    {{ (string) (int) $data[0] . ' ' . $data[1] . ' ' . $data[2] . ' ' . $data[3] }}
                </span>
            </div>
            {{-- {{
                dd(env('DB_DATABASE'))
            }} --}}
            <br>
            <div class=" w-full md:hidden  ">
                <div class="bg-gray-200 dark:bg-gray-700 pb-8 pt-5 sm:pt-2  md:pt-5 lg:pt-5 xl:pt-2 px-5 rounded-lg w-full">

                    <div class=" flex flex-col sm:flex-row  md:flex-col lg:flex-col xl:flex-row   w-full  ">
                        <h3 class=" flex items-center  flex-grow text-nowrap m-1 text-xl sm:text-lg text">اشتراک گزاری در
                            :</h3>
                        <ul class=" w-full mx-1 mt-2 lg:mt-4 mb-4 flex items-center share-box ">

                        </ul>
                    </div>
                    <div class="shareLink">
                        <div class="permalink ">
                            <input class="textLink text" id="text" type="text" name="shortlink"
                                value="{{ env('APP_URL') }}{{ $id === 1 ? '/about' : '/blog/' . $id }}" id="copy-link"
                                readonly="">
                            <span class="copyLink text-primary-200 copy" tooltip="Copy to clipboard">
                                <i class="fa-regular fa-copy"></i>
                            </span>
                        </div>
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
        <div class="w-full md:w-2/5 md:absolute nav-blog md:h-full left-0 text-2xl sm:text-3xl text top-32 ">
            عناوین :
            <br>
            <div class="sticky mt-3 top-24">
                <div class="titles pr-4">

                </div>
                <p class="w-full h-4">&nbsp;</p>
                <div class=" w-full md:pl-12 md:inline-block hidden   ">
                    <div
                        class="bg-gray-200 dark:bg-gray-700 pb-8 pt-5 sm:pt-2  md:pt-5 lg:pt-5 xl:pt-2 px-5 rounded-lg w-full">

                        <div class=" flex flex-col sm:flex-row  md:flex-col lg:flex-col xl:flex-row   w-full  ">
                            <h3 class=" flex items-center  flex-grow text-nowrap m-1 text-xl sm:text-lg text">اشتراک گزاری
                                در
                                :</h3>
                            <ul class=" w-full mx-1 mt-2 lg:mt-4 mb-4 flex items-center share-box ">

                            </ul>
                        </div>
                        <div class="shareLink">
                            <div class="permalink ">
                                <input class="textLink text" id="text" type="text" name="shortlink"
                                    value="{{ env('APP_URL') }}{{ $id === 1 ? '/about' : '/blog/' . $id }}" id="copy-link"
                                    readonly="">
                                <span class="copyLink text-primary-200 copy" tooltip="Copy to clipboard">
                                    <i class="fa-regular fa-copy"></i>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        <div class="w-full md:w-2/5 hidden md:flex"></div>
    </div>

    {{-- <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
@endsection
@section('main')
    <div class=" flex flex-col-reverse md:flex-row-reverse  ">
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
                @component('user.components.share_box')
                @endcomponent
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
        
        <div class=" md:w-1/2 w-full ">
            <div class="swiper xl:size-96 lg:size-80 md:size-72 size-64 select-none	">
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
                <div class="swiper-button-prev 	">
                    <i class="fa fa-caret-right text-[30px] sm:text-[40px] text-white" aria-hidden="true"></i>
                </div>
                <div class="swiper-button-next 	">
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
            <div  class=" fixed top-20 z-50  left-3 animate__animated animate__pulse animate__delay-3s  animate__infinite inline-block">
                @component('user.components.add_card', ['id' => $id])
                @endcomponent
            </div>
        </div>
    </div>
    
@endsection
@section('script')
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
<script>
    const pagination_divs = document.querySelectorAll('div.pagination-div div');
    const swiper = new Swiper(".swiper", {
        effect: "cube",
        grabCursor: true,
        loop: true,
        pauseOnMouseEnter: true,
        speed: 2000,
        autoplay: {
            delay: 2000,
            disableOnInteraction: true,
        },
        cubeEffect: {
            shadow: false,
            slideShadows: false,
            shadowOffset: 20,
            shadowScale: 0.94,
        },
        pagination: {
            el: ".swiper-pagination",
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
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
    const page_id = @json($id);
    window.page_id = page_id;
</script> --}}
@endsection
@section('script')
    <script>
        window.page_id = @json($id)
    </script>
@endsection
