@extends('user.layout.main')
@section('style')
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css" />
@endsection
@section('main')
    <div class=" w-full   ">
        <div class="swiper-container relative swiper-one w-full h-[150px] sm:h-[200px] lg:h-[400px]   select-none	">
            <!-- Additional required wrapper -->
            <div class="swiper-wrapper select-none	 ">
                <!-- Slides -->
                @foreach ($events as $event)
                    <a href="{{ $event->link }}" class="swiper-slide size-12 select-none	  ">
                        <div class="size-full select-none	 flex items-center justify-center">
                            <img class=" select-none size-full object-cover " src="{{ '/storage/' . $event->img }}">
                        </div>
                    </a>
                @endforeach
            </div>
            <div class="absolute  flex items-center size-full top-0 right-0">
                <div class="w-full flex px-3  sm:px-5 md:px-7 lg:px-10 justify-between">
                    <div
                        class="swiper-event-button-prev cursor-pointer hover:scale-125  select-none rounded-full bg-primary-200 border-2 border-primary-100 size-8 flex justify-center items-center sm:size-14  z-20	">
                        <i class="fa  fa-caret-right text-[30px] sm:text-[40px] text-white" aria-hidden="true"></i>
                    </div>
                    <div
                        class="swiper-event-button-next cursor-pointer hover:scale-125 select-none rounded-full bg-primary-200 border-2 border-primary-100 size-8 flex justify-center items-center sm:size-14 z-20	">
                        <i class="fa fa-caret-left text-white text-[30px] sm:text-[40px]" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
        <br>
        <div class=" pagination-div flex justify-center items-center">
            @for ($i = 0; $i < count($events); $i++)
                <div data-slide="{{ $i }}" onclick="swich_to_slide({{ $i }},this)"
                    class=" border-2 border-primary-100 dark:border-primary-200 cursor-pointer
             size-16 mx-1 overflow-hidden 
            md:size-20 lg:size-24 rounded-md  ">
                    <img class="size-full object-cover " src="{{ '/storage/' . $events[$i]->img }}">
                </div>
            @endfor
        </div>

    </div>
    <div class="font-nastaliq text-center mt-5 text p-6 text-3xl sm:mt-9 text sm:p-12 sm:text-6xl">
        به قنادی ناب خوش آمدید
    </div>
    <div>
        @php
            for ($i = 0; $i < count($categorys); $i++) {
                $categorys[$i]['count'] = 0;
                foreach ($products as $product) {
                    if ($product['category'] == $categorys[$i]['id']) {
                        $categorys[$i]['count'] = $categorys[$i]['count'] + 1;
                    }
                }
            }
        @endphp


        <div class=" flex flex-wrap justify-center w-full ">
            @foreach ($categorys as $category)
                <a data-aos="fade-in" href="{{ '#category_' . $category['id'] }}">
                    <div
                        class="sm:size-64 border-2 border-primary-200 dark:border-white group overflow-hidden rounded-xl shadow-md relative dark:shadow-gray-400 m-2 sm:m-5   dark:bg-gray-800 bg-white size-40">
                        <img class="size-full group-hover:scale-125" src="{{ '/storage/' . $category['img'] }}"
                            alt="">
                        <div
                            class="absolute flex flex-col justify-center dark:bg-[rgba(0,0,0,0.5)] bg-[rgba(255,255,255,0.5)]  top-0 right-0 size-full">
                            <p class="text-lg font-bold text text-center sm:text-3xl">
                                {{ $category['name'] }}
                            </p>
                            <br>
                            <p class="text-base flex items-center justify-center  text-center text sm:text-lg">
                                <span style="text-shadow: 0px 0px 1px 2px #078c91 "
                                    class="font-bold text-lg sm:text-3xl">{{ $category['count'] }}</span>
                                <span class="mr-2 mb-0.5 sm:mb-1">محصول</span>
                            </p>
                        </div>
                    </div>
                </a>
            @endforeach
        </div>
    </div>

    {{-- <i class="fa fa-bullhorn" aria-hidden="true"></i> --}}
    <br>
    <div class=" flex mt-5 sm:mt-0 flex-col p-3 md:flex-row bg-primary-200 mx-3 sm:mx-8 rounded-lg  ">
        <div
            class="texts w-full md:w-48 bg-[#09adb3] z-20 relative rounded-lg shadow-[0px_0px_2px_1px_rgba(255,255,255,1)]">
            <div class="absolute flex justify-center w-full -top-10">
                <div class="bg-red-600 mx-1 sm:hidden  text-white text-nowrap rounded-t-3xl z-10 py-2   px-2 text-base">
                    تا <b class="max-offer">0</b> درصد تخفیف
                </div>
            </div>

            <div class="flex flex-row flex-wrap items-center sm:flex-col py-2 sm:py-5 h-full justify-around">
                <div class="flex justify-center">
                    <i class="fa fa-bullhorn text-5xl sm:text-8xl -scale-x-100 text-white" aria-hidden="true"></i>
                </div>
                <div class="flex text-white font-bold text-nowrap   justify-center">
                    تخفیف های ویژه
                </div>
                <div class="hidden sm:flex text-white font-bold   justify-center">
                    <div class="bg-red-600 mx-1 text-nowrap rounded-full py-2 px-2 text-base">
                        تا <b class="max-offer">0</b> درصد تخفیف
                    </div>
                </div>
            </div>

        </div>
        <div class="w-full sm:px-2 sm:pt-0 pt-4 justify-center  overflow-hidden flex items-center">
            <div class="swiper-offer   swiper -z-50 w-full relative">
                <!-- Parallax background element -->
                <div class="parallax-bg" style="background-image:url(path/to/image.jpg)" data-swiper-parallax="-23%">
                </div>
                <div class="swiper-wrapper">
                </div>
                <div class="swiper-button-prev swiper-button-prev-offer  	">
                    <i class="fa fa-caret-right text-[30px] sm:text-[40px] text-white" aria-hidden="true"></i>
                </div>
                <div class="swiper-button-next 	swiper-button-next-offer ">
                    <i class="fa fa-caret-left text-white text-[30px] sm:text-[40px]" aria-hidden="true"></i>
                </div>
            </div>
        </div>
    </div>
    <div data-aos="fade-in"
        class="font-nastaliq  sm:py-6 py-3 text-center mt-5 text mb-0 text-3xl sm:mt-9 text  sm:text-6xl">
        حالا چرا قنادی ناب ؟
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2">


        <main class="w-full bg-transparent p-5" data-aos="fade-left">
            <div class="card rounded-md mt-4 w-full bg-transparent  p-0 h-32 md:h-36 lg:h-52 flex justify-center">
                <div class="w-full cursor-default rounded-md bg-gray-300 p-2 md:p-3 dark:bg-gray-800 ">
                    <div class="flex flex-col h-full relative justify-around pt-0 md:pt-2  ">
                        <div class="flex flex-col h-full justify-around ">
                            <p class="text text-center z-20 lg:text-3xl md:text-xl  ">
                                مورد اطمینان و دارای مجوز
                            </p>
                            <div class="flex justify-center  ">

                                <a href="">
                                    <img class="size-16 md:size-28 mx-2 md:mx-4 border-2 border-primary-200 rounded-lg"
                                        src="{{ asset('image/enamad.png') }}" alt="">
                                </a>
                                <a href="">
                                    <img class="size-16 md:size-28 mx-2 border-2 border-primary-200 md:mx-4 rounded-lg mr-2"
                                        src="{{ asset('image/samandehi.jpg') }}" alt="">
                                </a>

                            </div>
                        </div>
                    </div>
                </div>
        </main>





        <main class="w-full bg-transparent p-5" data-aos="fade-right">
            <div class="card rounded-md mt-4 w-full bg-transparent  p-0 h-32 md:h-36 lg:h-52 flex justify-center">
                <div class="w-full rounded-md cursor-default bg-gray-300 p-2 md:p-4 dark:bg-gray-800 ">
                    <div class="flex flex-col h-full relative justify-around pt-0 md:pt-2  ">
                        <div class="absolute top-0  h-full justify-center items-center flex left-0">
                            <i class="fa opacity-15 text text-8xl lg:text-[190px] fa-truck"></i>
                        </div>
                        <p class="text z-20 lg:text-3xl md:text-xl text-base">
                            ارسال رایگان
                        </p>
                        <p class="text z-20   md:text-lg text-sm">
                            داری ارسال رایگان به سراسر کشور در اسرع وقت
                        </p>
                    </div>
                </div>
            </div>
        </main>

        <main class="w-full bg-transparent p-5" data-aos="fade-left">
            <div class="card rounded-md mt-4 w-full bg-transparent  p-0 h-32 md:h-36 lg:h-52 flex justify-center">
                <div class="w-full rounded-md  cursor-default bg-gray-300 p-2 md:p-4 dark:bg-gray-800 ">
                    <div class="flex flex-col h-full relative justify-around pt-0 md:pt-2  ">
                        <div class="absolute top-0  h-full justify-center items-center flex left-0">
                            <i class="fa opacity-15 text text-8xl lg:text-[190px] fa-bell"></i>
                        </div>
                        <p class="text z-20 lg:text-3xl md:text-xl text-base">
                            وضعیت سفارشات
                        </p>
                        <p class="text z-20   md:text-lg text-sm">
                            درصورت خرید ما شمارو 24 ساعته درمورد وضعیت سفارشتتون مطلع خواهیم کرد
                        </p>
                    </div>
                </div>
            </div>
        </main>


        <main class="w-full bg-transparent p-5" data-aos="fade-right">
            <div class="card rounded-md mt-4 w-full bg-transparent  p-0 h-32 md:h-36 lg:h-52 flex justify-center">
                <div class="w-full rounded-md cursor-default bg-gray-300 p-2 md:p-4 dark:bg-gray-800 ">
                    <div class="flex flex-col h-full relative justify-around pt-0 md:pt-2  ">
                        <div class="absolute top-0  h-full justify-center items-center flex left-0">
                            <i class="fa opacity-15 text text-9xl lg:text-[200px] fa-commenting"></i>
                        </div>

                        <p class="text z-20 lg:text-3xl md:text-xl text-base">

                            پشتیبانی مستمر

                        </p>
                        <p class="text z-20   md:text-lg text-sm">
                            ما از طریق شماره تلفن های قرار داده شده و چت وبسایت پاسخگو و همراه شما هستیم
                        </p>
                    </div>
                </div>
            </div>
        </main>
    </div>

   <p class="text-xl mt-3 sm:text-3xl pr-6 p-1 text sm:pr-12 ">
     وبلاگ ها
   </p>

    <div class="sm:p-5 p-3">
        <div class="swiper-blog  swiper -z-50 w-full relative">
            <!-- Parallax background element -->
            <div class="swiper-wrapper  ">
            </div>
            <div class="swiper-button-prev swiper-button-prev-blog   	">
                <i class="fa fa-caret-right text-[30px] sm:text-[40px] text-white" aria-hidden="true"></i>
            </div>
            <div class="swiper-button-next 	swiper-button-next-blog ">
                <i class="fa fa-caret-left text-white text-[30px] sm:text-[40px]" aria-hidden="true"></i>
            </div>
        </div>
    </div>
    <br>
    <br>

@endsection
@section('script')
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-element-bundle.min.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script>
        const pagination_divs = document.querySelectorAll('div.pagination-div div');
        const swiper = new Swiper(".swiper-container.swiper-one", {
            effect: "fade",
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
        });
        document.querySelector('.swiper-event-button-next').addEventListener('click', () => {
            swiper.slideNext(1000)
        })
        document.querySelector('.swiper-event-button-prev').addEventListener('click', () => {
            swiper.slidePrev(1000)
        })

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
                swiper.slideToLoop(id, 1000)
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


        var max_offer = 0;
        window.addEventListener('load', () => {
            window.axios({
                method: 'get',
                url: '/api/product/all',
            }).then(function(response) {
                let data = response.data;
                data.forEach(item => {
                    if (item.off) {

                        if (parseInt(item.off) > parseInt(document.querySelectorAll('b.max-offer')[
                                0].innerHTML)) {
                            document.querySelectorAll('b.max-offer').forEach(offer_div => {
                                offer_div.innerHTML = item.off;
                            })
                        }
                        document.querySelector('div.swiper-offer div.swiper-wrapper').innerHTML += `    
<div class="swiper-slide   ">
    <div class="flex justify-center">
<div class=" bg-white border relative w-48 overflow-hidden border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
   ${item.off ? "<div class='absolute z-10 top-4 '><span class='text-white  flex items-center w-12 justify-center flex-row-reverse bg-red-600 px-1 sm:px-2 rounded-e-3xl '><span class='text-xs sm:text-sm font-bold flex  items-center mr-0.5'>%</span><span class='flex text-sm sm:text-base items-center mt-0 sm:mt-[1.5px] font-bold'>" + item.off + "</span></span></div>" : ''}
    <div class="absolute top-2 left-2">
    
    <div class=" justify-center items-center ">
    </div>
</div>
 <a href="${'/product/' + item.id}"  >
        <img class="  size-40 m-4 object-cover rounded-lg" src="${'/storage/' + JSON.parse(item.img)[0]}" alt="product image" />
        </a>
    <div class="px-5 pb-4">        
        <a href="${'/product/' + item.id}"  >
            <h5 data-swiper-parallax="-100" class="sm:text-lg text-base font-semibold tracking-tight text-gray-900 dark:text-white">${item.name}</h5>
        </a>
        <span class="scale-75 mt-2 opacity-[0.4] w-full  justify-center flex items-center text-sm font-bold   text-gray-900 dark:text-white">${pricee(item.price)}</span></span></span>
        <span class=" mt-1 w-full font-bold w-full  justify-center flex items-center text-sm font-bold   text-gray-900 dark:text-white">${pricee(item.price - (item.price / 100) * item.off )}</span></span></span>        
        <button data-id="${ item.id }"
        class="group mt-4 add-to-cart bg-primary-200 sm:text-2xl w-full text-lg h-10 sm:h-12 flex justify-center items-center text-white hover:font-bold  group rounded-lg ">
        <i class="fa hover:font-bold fa-cart-plus" aria-hidden="true"></i> 
    </button>
    </div>
</div>
</div>
</div>`
                    }
                });
                setTimeout(() => {
                    const swiper_offer = new Swiper(".swiper-offer", {
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
                            400: {
                                slidesPerView: 2,
                                spaceBetween: 5
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
                                slidesPerView: 4,
                                spaceBetween: 40
                            }
                        },
                        autoplay: {
                            delay: 2000,
                            disableOnInteraction: true,
                        },

                        navigation: {
                            nextEl: '.swiper-button-next-offer',
                            prevEl: '.swiper-button-prev-offer',
                        },
                    });
                }, 2000);

            }).catch(() => {}).then(() => {
                window.reload_button_add_cart_events()
            })









            window.axios({
                method: 'get',
                url: '/api/all/blog',
            }).then(function(response) {
                let data = response.data;
                console.log(document.querySelector('div.swiper-blog div.swiper-wrapper').innerHTML = 22222);

                data.forEach(item => {

                    document.querySelector('div.swiper-blog div.swiper-wrapper').innerHTML += `    
<div class="swiper-slide   ">
<div class="flex w-full flex-col justify-center items-center">
    <a href="${item.link}" class=" group ">
    <div class="sm:w-96 w-72 h-40   sm:h-48 overflow-hidden rounded-2xl border-2 border-primary-200 relative">
        <div class="absolute flex flex-col justify-between top-1 right-0 size-full">
            <div></div>
            <div class="w-full flex justify-center" >
                <span class="bg-primary-200 text-sm sm:text-base p-2 w-36 flex justify-center items-center font-bold rounded-t-2xl text-white">
                    ${ '<span class="mt-0 ml-2">' + item.data[0] +  '</span>' + ' ' + item.data[1] + ' ' + '<span class="mt-0.5 mr-2">' + item.data[2] +  '</span>'  }
                </span>
            </div>
        </div>
          <img class=" group-hover:scale-125 object-cover size-full" src="${ '/storage/' + item.img}">
        </div>

     <div class="w-full flex justify-center">
        <div class="bg-primary-200 text-sm sm:text-base p-2 w-60 sm:w-80 flex justify-center items-center font-bold rounded-b-2xl text-white">
          ${item.title}
            </div>
        </div>
        </a>

</div>
</div>`

                });
                setTimeout(() => {
                    const swiper_blog = new Swiper(".swiper-blog", {
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
                            400: {
                                slidesPerView: 1,
                                spaceBetween: 5
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
                            nextEl: '.swiper-button-next-blog',
                            prevEl: '.swiper-button-prev-blog',
                        },
                    });
                }, 3000);

            }).catch(() => {}).then(() => {
            })










        })





        window.addEventListener('load', () => {
         
        })
    </script>
@endsection
