<!DOCTYPE html>
<html lang="en" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> @section('title') لاگین @show </title>
    <!-- Custom styles -->
    <script src="https://kit.fontawesome.com/4fa9804fb1.js" crossorigin="anonymous"></script>
    @vite('resources/css/auth.css')
    
    <meta name="csrf-token" content="{{ csrf_token() }}">
</head>

<body>
    <!-- ! Body -->
    <img src="" style="filter: brightness(50%)"
        class=" object-cover backgrand-image fixed top-0 right-0 size-full" alt="">
    <div class="fixed top-0 right-0 size-full flex justify-center items-center p-4 z-20">
        <div class="w-full sm:w-3/4 rounded-lg border-2 border-white">
            <div class="w-full -z-30 bg-light-opacity-30 rounded-lg backdrop-blur  p-2">
                @yield('main')
            </div>
        </div>
    </div>
    @vite('resources/js/auth.js')
</body>

</html>
