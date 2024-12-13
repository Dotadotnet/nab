@extends('admin.layout.main')
@section('main')
    <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
        integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin="" />
    <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"
        integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>
    <div class="div-all-map size-full fixed top-0 z-[1000] right-0">
        <div id="map" class="size-full rounded-md"></div>
    </div>
    <script type="module">
        var center_oromia = [37.5460719031975, 45.066947937011726];
        window.reloadMap = () => {
            let orders = @json($orders);
            let map_element = document.querySelector('div#map');
            const map = L.map('map').setView(center_oromia, 13);
            const tiles = L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
                attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
            }).addTo(map);
            orders.forEach(order => {
                const marker = L.marker([order.lat, order.lng]).addTo(map).on('click', () => {window.openOrder(order.id)});
            });
        }
        window.reloadMap()
    </script>
@endsection
