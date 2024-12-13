<!DOCTYPE html>
<html lang="en" dir="rtl">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> @section('title') پنل کاربر @show </title>
    <link rel="shortcut icon" href="{{ asset('media/img/custom/image/admin.png') }}" type="image/x-icon">
    <script src="https://kit.fontawesome.com/4fa9804fb1.js" crossorigin="anonymous"></script>
    <meta name="csrf-token" content="{{ csrf_token() }}">
    @vite('resources/css/panel.css')
    @section('style') @show
</head>

<body class="sm:px-3 px-2 xl:pr-56 pt-12 ">




    @yield('main')

    @php
        if (!isset($min)) {
            $price_send = 0;
            $min = 0;
        }

    @endphp

    @component('panel.layout.navbar',['min' => $min,'price_send' => $price_send])
    @endcomponent
    @php
        if ($errors->any()) {
            $errors = $errors->all();
        } elseif (Session::get('status') == 'successful') {
            $errors = 'successful';
        }
    @endphp
    <link rel="stylesheet" href="{{ asset('css/polipop.min.css') }}" />
    <script src="{{ asset('js/polipop.min.js') }}"></script>
    <script>
        var errors = @json($errors);
        var polipop = new Polipop('mypolipop', {
            layout: 'popups',
            pool: 2,
            life: 2000,
        });
    </script>
    <script type="text/javascript">
        window.$crisp = [];
        window.CRISP_WEBSITE_ID = "fb668e62-2aa3-4e8a-8c23-6bc77ce7e50e";
        (function() {
            d = document;
            s = d.createElement("script");
            s.src = "https://client.crisp.chat/l.js";
            s.async = 1;
            d.getElementsByTagName("head")[0].appendChild(s);
        })();
    </script>
    @vite('resources/js/panel.js')
    @section('script') @show
</body>

</html>
