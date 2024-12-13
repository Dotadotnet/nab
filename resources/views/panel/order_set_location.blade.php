@extends('panel.layout.main')
@section('title')
    سبد خرید
@endsection
@section('main')
    @php
        $user = Auth::guard('user')->user();
    @endphp

    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>




    @php
        $all_count = 0;
    @endphp
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-300 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3 rounded-s-lg">
                        نام محصول
                    </th>
                    <th scope="col" class="px-6 py-3">
                        تعداد
                    </th>
                    <th scope="col" class="px-6 py-3 rounded-e-lg">
                        قیمت
                    </th>
                </tr>
            </thead>
            <tbody>
                @foreach ($data as $item)
                    <tr
                        class="bg-white border-b rounded-lg dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <th scope="row"
                            class="px-6 rounded-s-lg  py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            {{ $item['name'] }}
                        </th>
                        <td class="px-6 py-4">
                            @php
                                $all_count++;
                            @endphp
                            {!! $item['count'] . ' ' . '<span class="pb-4">' . $item['type'] . '</span>' !!}
                        </td>
                        <td class="px-6 rounded-e-lg py-4">
                            {!! $item['price'] !!}
                        </td>
                    </tr>
                @endforeach
            </tbody>
            <tfoot>
                <tr class="font-semibold text-gray-900 dark:text-white">
                    <th scope="row" class="px-6 py-3 text-base">مجموع :</th>
                    <td class="px-6 py-3">
                        <b class="ml-1">
                            {{ $all_count }}
                        </b>
                        قلم کالا
                    </td>
                    <td class="px-6 text-green-600 py-3">{!! $result !!}</td>
                </tr>
            </tfoot>
        </table>
    </div>

    @if ($invoice)
      <div class="flex flex-wrap justify-center sm:justify-start">
        <span class="flex mt-3 items-center mr-0 sm:mr-5 p-2 bg-white rounded-lg dark:bg-gray-700">
            <i class="fa text-xl sm:text-2xl fa-credit-card-alt text-yellow-400" aria-hidden="true"></i>
            <b class="mr-2 text text-lg sm:text-xl">
                {{env('CART_OWER')}}
            </b>
        </span>
        <span class="flex mt-3 text-lg sm:text-xl text p-2 mr-2 items-center bg-white rounded-lg dark:bg-gray-700">
         <span> به نام </span><b class="mr-1">{{env('NAME_OWER')}}</b>
        </span>
      </div>
    @endif
    <br>

    @if ($invoice)
        <div class="en border-2 border-blue-600 rounded-lg">
            <input type="file" class="filepond" name="image" data-max-files="1">
        </div>
    @endif


    <br>
    <div class="w-full my-3">
        <p class="text text-lg sm:text-2xl">نحوه ارسال :</p>
        <br>
        <div class=" grid grid-cols-1 sm:grid-cols-2 gap-2 ">
            <div
                class="flex items-center send-courier cursor-pointer ps-4 border shadow-lg dark:shadow-gray-600  border-gray-200 rounded dark:border-gray-700">
                <input id="bordered-radio-1" type="radio" name="send" {{ !$postal_code && $lat ? 'checked' : '' }}
                    class="w-4 h-4 send-courier text-blue-600 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                <label for="bordered-radio-1"
                    class="w-full py-4 cursor-pointer ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ارسال با
                    پیک ( فقط در شهر
                    ارومیه )</label>
            </div>
            <div
                class="flex items-center send-post cursor-pointer  ps-4 border shadow-lg dark:shadow-gray-600 border-gray-200 rounded dark:border-gray-700">
                <input id="bordered-radio-2" type="radio" name="send" {{ $postal_code && !$lat ? 'checked' : '' }}
                    class="w-4 h-4 send-post text-blue-600 bg-gray-100 border-gray-30 dark:ring-offset-gray-800 dark:bg-gray-700 dark:border-gray-600">
                <label for="bordered-radio-2"
                    class="w-full cursor-pointer py-4 ms-2 text-sm font-medium text-gray-900 dark:text-gray-300">ارسال با
                    پست ( سراسر کشور
                    )</label>
            </div>
        </div>
    </div>

    <form autocomplete="off" method="post" class="send-courier mt-12  overflow-hidden h-0 transition"
        action="/send-by-courier">
        @csrf
        <div class="grid grid-cols-1 sm:grid-cols-2">
            <div class="flex justify-center items-center">
                <input type="text" class="hidden" name="location">
                <div class="disable-map div-all-map z-[40]">
                    <span class="absolute hidden accept-location z-[100000] top-3 right-3">
                        <button type="button"
                            class="focus:outline-none flex items-center font-bold text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800">
                            <i class="fa fa-check" aria-hidden="true"></i>
                            <span class="mr-1">تایید مقصد</span>
                        </button>
                    </span>
                    <a href="#map"
                        class="rounded-md bg-[rgba(0,0,0,0.7)] div-full z-[999] flex justify-center items-center cursor-pointer absolute size-full right-0 top-0">
                        <span class="text-lg text-white">{{ $text }}</span>
                    </a>
                    <div id="map" class="size-full rounded-md"></div>
                </div>
            </div>
            <div
                class=" grid sm:flex flex-col gap-2 sm:grid-cols-1 grid-cols-2  sm:mt-0 mt-7 sm:ml-7 ml-0 items-center justify-center">
                <div class="relative input-admin sm:w-full ">
                    <input value="{{ $plate }}" maxlength="3" name="plate" type="number" data-type="num"
                        id="floating_outlined"
                        class="block border-2 text border-blue-600  pl-12 pr-2.5 pb-2.5 pt-4 w-full text-md text-gray-900 bg-transparent rounded-lg border-1 border-blue-500 appearance-none focus:outline-0 focus:border-blue-600 peer"
                        placeholder=" " />
                    <label for="floating_outlined"
                        class="absolute text-[16px] dark:bg-dark-60 bg-light-60 text-blue-600 after:content-[':'] -translate-x-4 after:mr-1 after:font-bold duration-300 transform -translate-y-4 scale-[1] font-bold top-[0px] z-10 origin-[0] peer-placeholder-shown:-translate-x-0 peer-placeholder-shown:after:content-none peer-placeholder-shown:text-gray-500 peer-placeholder-shown:after:text-gray-500 px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100  peer-placeholder-shown:font-light  peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:font-bold peer-focus:top-[0px]   peer-focus:text-blue-600 peer-focus:after:content-[':'] peer-focus:-translate-x-4 peer-focus:after:mr-1 peer-focus:after:text-blue-600 peer-focus:after:font-bold peer-focus:scale-[1] peer-focus:-translate-y-4  rtl:peer-focus:left-auto start-1">
                        پلاک</label>
                </div>
                <div class="relative sm:mt-7 input-admin sm:w-full ">
                    <input value="{{ $unit }}" maxlength="2" name="unit" type="number" data-type="num"
                        id="floating_outlined"
                        class="block border-2 text border-blue-600  pl-12 pr-2.5 pb-2.5 pt-4 w-full text-md text-gray-900 bg-transparent rounded-lg border-1 border-blue-500 appearance-none focus:outline-0 focus:border-blue-600 peer"
                        placeholder=" " />
                    <label for="floating_outlined"
                        class="absolute text-[16px]  dark:bg-dark-60 bg-light-60 text-blue-600 after:content-[':'] -translate-x-4 after:mr-1 after:font-bold duration-300 transform -translate-y-4 scale-[1] font-bold top-[0px] z-10 origin-[0] peer-placeholder-shown:-translate-x-0 peer-placeholder-shown:after:content-none peer-placeholder-shown:text-gray-500 peer-placeholder-shown:after:text-gray-500 px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100  peer-placeholder-shown:font-light  peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:font-bold peer-focus:top-[0px]   peer-focus:text-blue-600 peer-focus:after:content-[':'] peer-focus:-translate-x-4 peer-focus:after:mr-1 peer-focus:after:text-blue-600 peer-focus:after:font-bold peer-focus:scale-[1] peer-focus:-translate-y-4  rtl:peer-focus:left-auto start-1">
                        واحد</label>
                </div>
            </div>
        </div>
        <br>
        <br>
        <div class=" flex justify-center ">
            <button type="button"
                class="text-white submit flex justify-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">ثبت
                اطلاعات</button>
        </div>
        <br>
    </form>

    <form autocomplete="off" method="post" class="send-post overflow-hidden h-0 transition" action="/send-by-post">
        @csrf
        <div class="relative input-admin sm:w-full mt-4 ">
            <input value="{{ $postal_code ? $postal_code : '' }}" maxlength="10" name="postal_code" type="number"
                data-type="num" id="floating_outlined"
                class="block border-2 text border-blue-600  pl-12 pr-2.5 pb-2.5 pt-4 w-full text-md text-gray-900 bg-transparent rounded-lg border-1 border-blue-500 appearance-none focus:outline-0 focus:border-blue-600 peer"
                placeholder=" " />
            <label for="floating_outlined"
                class="absolute text-[16px] dark:bg-dark-60 bg-light-60 text-blue-600 after:content-[':'] -translate-x-4 after:mr-1 after:font-bold duration-300 transform -translate-y-4 scale-[1] font-bold top-[0px] z-10 origin-[0] peer-placeholder-shown:-translate-x-0 peer-placeholder-shown:after:content-none peer-placeholder-shown:text-gray-500 peer-placeholder-shown:after:text-gray-500 px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100  peer-placeholder-shown:font-light  peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:font-bold peer-focus:top-[0px]   peer-focus:text-blue-600 peer-focus:after:content-[':'] peer-focus:-translate-x-4 peer-focus:after:mr-1 peer-focus:after:text-blue-600 peer-focus:after:font-bold peer-focus:scale-[1] peer-focus:-translate-y-4  rtl:peer-focus:left-auto start-1">
                کد پستی</label>
        </div>
        <br>
        <div class=" grid gap-2 grid-cols-2 ">
            <div class="relative input-admin sm:w-full ">
                <input value="{{ $plate }}" maxlength="3" name="plate" type="number" data-type="num"
                    id="floating_outlined"
                    class="block border-2 text border-blue-600  pl-12 pr-2.5 pb-2.5 pt-4 w-full text-md text-gray-900 bg-transparent rounded-lg border-1 border-blue-500 appearance-none focus:outline-0 focus:border-blue-600 peer"
                    placeholder=" " />
                <label for="floating_outlined"
                    class="absolute text-[16px] dark:bg-dark-60 bg-light-60 text-blue-600 after:content-[':'] -translate-x-4 after:mr-1 after:font-bold duration-300 transform -translate-y-4 scale-[1] font-bold top-[0px] z-10 origin-[0] peer-placeholder-shown:-translate-x-0 peer-placeholder-shown:after:content-none peer-placeholder-shown:text-gray-500 peer-placeholder-shown:after:text-gray-500 px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100  peer-placeholder-shown:font-light  peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:font-bold peer-focus:top-[0px]   peer-focus:text-blue-600 peer-focus:after:content-[':'] peer-focus:-translate-x-4 peer-focus:after:mr-1 peer-focus:after:text-blue-600 peer-focus:after:font-bold peer-focus:scale-[1] peer-focus:-translate-y-4  rtl:peer-focus:left-auto start-1">
                    پلاک</label>
            </div>
            <div class="relative  input-admin sm:w-full ">
                <input value="{{ $unit }}" maxlength="2" name="unit" type="number" data-type="num"
                    id="floating_outlined"
                    class="block border-2 text border-blue-600  pl-12 pr-2.5 pb-2.5 pt-4 w-full text-md text-gray-900 bg-transparent rounded-lg border-1 border-blue-500 appearance-none focus:outline-0 focus:border-blue-600 peer"
                    placeholder=" " />
                <label for="floating_outlined"
                    class="absolute text-[16px]  dark:bg-dark-60 bg-light-60 text-blue-600 after:content-[':'] -translate-x-4 after:mr-1 after:font-bold duration-300 transform -translate-y-4 scale-[1] font-bold top-[0px] z-10 origin-[0] peer-placeholder-shown:-translate-x-0 peer-placeholder-shown:after:content-none peer-placeholder-shown:text-gray-500 peer-placeholder-shown:after:text-gray-500 px-2 peer-focus:px-2 peer-focus:text-blue-600  peer-placeholder-shown:scale-100  peer-placeholder-shown:font-light  peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:font-bold peer-focus:top-[0px]   peer-focus:text-blue-600 peer-focus:after:content-[':'] peer-focus:-translate-x-4 peer-focus:after:mr-1 peer-focus:after:text-blue-600 peer-focus:after:font-bold peer-focus:scale-[1] peer-focus:-translate-y-4  rtl:peer-focus:left-auto start-1">
                    واحد</label>
            </div>
        </div>
        <br>
        <br>
        <div class=" flex justify-center ">
            <button type="button"
                class="text-white submit bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 flex justify-center font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">ثبت
                اطلاعات</button>
        </div>
        <br>
        <br>
    </form>
    <script type="module">
        window.postal_code = @json($postal_code);
        var area = 0.25023539733887;
        var oromia_location = [37.53859152732254, 45.17372131347657];
        var center_oromia = [37.5460719031975, 45.066947937011726];
        var user_data = @json($location);
        var id = @json($id);
        window.id = id;
        var local_location = [user_data.latitude, user_data.longitude];
        var zoom = @json($zoom);
        if (Math.abs(local_location[0] - oromia_location[0]) > area || Math.abs(local_location[1] - oromia_location[1]) >
            area) {
            local_location = center_oromia;
        }
        const input_location = document.querySelector('input[name~=location]');
        document.querySelector('input[name~=location]').value = JSON.stringify([user_data.latitude, user_data.longitude]);
        const accept_button_fn = () => {
            document.querySelector('a.div-full span').innerHTML = 'برای تغییر مقصد کلیک کنید';
            zoom = 30;
            window.location.hash = '';
            input_location.value = JSON.stringify(local_location);
            let url = window.location.protocol + "//" + window.location.host + '/change-location/' + id + '/' +
                local_location[0] + '/' + local_location[1];
            window.axios({
                method: 'post',
                url: url,
            }).then(function(response) {}).catch(function(error) {}).then(function() {});
        };
        window.reloadMap = (location) => {
            setTimeout(() => {
                let map_element = document.querySelector('div#map');
                if (map_element && map_element.innerHTML) {
                    map_element.remove();
                    document.querySelector('div.div-all-map').innerHTML +=
                        '<div id="map" class="size-full rounded-md"></div>';
                }
                if (!document.querySelector('div.div-all-map').classList.contains('show-map')) {
                    local_location = JSON.parse(input_location.value)
                    if (Math.abs(local_location[0] - oromia_location[0]) > area || Math.abs(local_location[1] -
                            oromia_location[1]) > area) {
                        local_location = center_oromia;
                    }
                }
                const map = L.map('map').setView(local_location, zoom);
                const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
                }).addTo(map);
                const marker = L.marker(map.getBounds().getCenter()).addTo(map);

                function onMapMove(e) {
                    let loc = map.getBounds().getCenter();
                    local_location = [loc.lat, loc.lng];
                    marker.setLatLng({
                        lat: local_location[0],
                        lng: local_location[1]
                    });
                    if (Math.abs(local_location[0] - oromia_location[0]) > area || Math.abs(local_location[1] -
                            oromia_location[1]) > area) {
                        let accept_location_span = document.querySelector('span.accept-location button span');
                        let accept_location_icon = document.querySelector('span.accept-location button i');
                        let accept_location = document.querySelector('span.accept-location button');
                        if (accept_location) {
                            accept_location_span.innerHTML = 'در این محدوده ما ارسال نداریم';
                            accept_location_icon.classList.add('hidden')
                            accept_location.classList.add('opacity-50')
                            accept_location.removeEventListener('click', accept_button_fn)

                        }
                    } else {
                        let accept_location_span = document.querySelector('span.accept-location button span');
                        let accept_location_icon = document.querySelector('span.accept-location button i');
                        let accept_location = document.querySelector('span.accept-location button');
                        if (accept_location) {
                            accept_location_span.innerHTML = 'ثبت مکان';
                            accept_location_icon.classList.remove('hidden')
                            accept_location.classList.remove('opacity-50')
                            accept_location.addEventListener('click', accept_button_fn)
                        }
                    }
                }
                if (Math.abs(local_location[0] - oromia_location[0]) > area || Math.abs(local_location[1] -
                        oromia_location[1]) > area) {
                    let accept_location_span = document.querySelector('span.accept-location button span');
                    let accept_location_icon = document.querySelector('span.accept-location button i');
                    let accept_location = document.querySelector('span.accept-location button');
                    if (accept_location) {
                        accept_location_span.innerHTML = 'در این محدوده ما ارسال نداریم';
                        accept_location_icon.classList.add('hidden')
                        accept_location.classList.add('opacity-50')
                        accept_location.removeEventListener('click', accept_button_fn)

                    }
                } else {
                    let accept_location_span = document.querySelector('span.accept-location button span');
                    let accept_location_icon = document.querySelector('span.accept-location button i');
                    let accept_location = document.querySelector('span.accept-location button');
                    if (accept_location) {
                        accept_location_span.innerHTML = 'ثبت مکان';
                        accept_location_icon.classList.remove('hidden')
                        accept_location.classList.remove('opacity-50')
                        accept_location.addEventListener('click', accept_button_fn)
                    }
                }
                map.on('move', onMapMove);
                let ukrine_map = document.querySelector('div.leaflet-bottom.leaflet-right')
                if (ukrine_map) {
                    ukrine_map.remove()
                }




            }, 1000);
        }
        window.reloadMap(local_location)
        var time = 0;
        window.onresize = () => {
            if (document.querySelector('div.div-all-map').classList.contains('show-map')) {
                let map_element = document.querySelector('div#map');
                if (map_element && map_element.innerHTML) {
                    map_element.remove();
                    document.querySelector('div.div-all-map').innerHTML +=
                        '<div id="map" class="size-full rounded-md"></div>';
                }
                clearTimeout(time)
                time = setTimeout(() => {
                    window.reloadMap(local_location)
                }, 100);
            }
        };
    </script>
    @if ($invoice)
        <script type="module">
            setTimeout(() => {
                let image_prev = @json($invoice);
                const file_upload = window.FilePond.create(
                    document.querySelector('input[type~=file]'), {
                        labelIdle: 'فاکتور خود را ارسال کنید',
                        storeAsFile: true,
                        allowFileTypeValidation: true,
                        acceptedFileTypes: ['image/*'],
                    });
                document.querySelector('div.filepond--root').style.margin = '0px'
                console.log(document.querySelector('div.filepond--root'))
                document.querySelector('a.filepond--credits').remove()

                if (image_prev !== 'none') {
                    file_upload.addFile(image_prev);
                }
                const csrfToken = document.querySelector('meta[name="csrf-token"]')?.getAttribute('content');
                file_upload.setOptions({
                    server: {

                        revert: (uniqueFileId, load, error) => {
                            window.axios({
                                method: 'delete',
                                url: "/remove-invoice/" + window.id,
                            }).then(function(response) {}).catch(function(error) {}).then(function() {});
                            load();
                        },


                        process: (fieldName, file, metadata, load, error, progress, abort, transfer,
                            options) => {

                            const formData = new FormData();
                            formData.append(fieldName, file, file.name);
                            const request = new XMLHttpRequest();
                            request.open('POST', '/add-invoice/' + window.id);
                            request.setRequestHeader('X-CSRF-TOKEN', csrfToken);
                            request.upload.onprogress = (e) => {
                                progress(e.lengthComputable, e.loaded, e.total);
                            };
                            request.onload = function() {
                                if (request.status >= 200 && request.status < 300) {
                                    load(request.responseText);
                                } else {
                                    error('oh no');
                                }
                            };
                            request.send(formData);
                            return {
                                abort: () => {
                                    request.abort();
                                    abort();
                                },
                            };
                        },




                    },
                });
            }, 1000);
        </script>
    @endif
@endsection
