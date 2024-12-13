@extends('user.layout.main')
@section('title')
    تماس با ما
@endsection
@section('main')
    <br>
    <h2 class="text font-bold text-xl sm:text-3xl mr-5 sm:mr-12">
        شماره تماس های ما :
    </h2>
    <br>
    <div class="flex md:flex-row flex-col justify-around items-center">
        <a href="tel:+989999935106">
            <div
                class="flex border-2 text border-primary-200 dark:border-black rounded-lg text-2xl justify-around text w-72 md:w-80 p-4 bg-slate-300  dark:bg-gray-700  items-center">
                09999935106
                <i class="fa  fa-phone text text-3xl" aria-hidden="true"></i>
            </div>
        </a>
        <a class="mt-3 md:mt-0" href="tel:+989917240849">
            <div
                class="flex border-2 text border-primary-200 w-72  dark:border-black rounded-lg text-2xl justify-around text md:w-80 p-4 bg-slate-300  dark:bg-gray-700  items-center">
                09917240849
                <i class="fa  fa-phone text text-3xl" aria-hidden="true"></i>
            </div>
        </a>
    </div>
    <br>
    <h2 class="text font-bold text-xl sm:text-3xl mr-5 sm:mr-12">
        ارتباط با ما از طریق :
    </h2>
    <br>
    <div class="flex md:flex-row flex-col justify-around items-center">
        <a href="">
            <div style="background-color: rgb(238, 125, 33)"
                class="flex text-white  rounded-lg text-2xl sm:text-3xl justify-around text w-72 md:w-80  items-center">
                <img src="/image/app/eitaa.jpg" class="size-16 sm:size-24" alt="">
                ایتا
            </div>
        </a>
        <a class="mt-3 md:mt-0" href="">
            <div style="background-color: rgb(41, 168, 235)"
                class="flex text-white  rounded-lg text-2xl sm:text-3xl justify-around text w-72 md:w-80  items-center">
                <img src="/image/app/telegram.jpg" class="size-16 sm:size-24" alt="">
                تلگرام
            </div>
        </a>
    </div>
    <br>
    <br>
    <div class="flex justify-center -z-50">
        <div id="map" class="sm:size-96 size-80  border-2 -z-0 border-primary-200 rounded-lg"></div>
    </div>
    <br><br>
@endsection
@section('script')
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    <script type="module">
        
        var our_shop = [37.5460719031975, 45.066947937011726];
        window.reloadMap = () => {
            let map_element = document.querySelector('div#map');
            const map = L.map('map').setView(our_shop, 13);
            const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            L.marker(our_shop).addTo(map)
                .bindPopup('مغازه ما')
                .openPopup();
        }

        //    marker..bindPopup('مغازه ما').openPopup();

        window.reloadMap()
    </script>  
@endsection
