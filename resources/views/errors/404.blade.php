@extends('user.layout.main')
@section('style')
@endsection
@section('main')
    <h1 style="text-shadow: 10px 10px 20px green , -10px -10px 20px blue , 10px -10px 20px blue , -10px 10px 20px green  "
        class=" animate__animated  animate__bounceInRight text-9xl text-white sm:text-[300px] flex justify-center items-center">
        404
    </h1>
    <h2 class=" text-center text-2xl sm:text-3xl text animate__animated  animate__bounceInLeft">
        صحفه مورد نظر یافت نشد
    </h2>
    <br>
    <div class="flex sm:mt-4 justify-center items-center">
        <a href="/"
            class="text-white cursor-pointer sm:scale-150 scale-125 bg-gradient-to-r from-green-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">بازگشت
            به خانه</a>
    </div>
    <br><br>
@endsection
@section('script')
    <script>
        var scene = document.getElementById('scene');
        var parallax = new Parallax(scene);
    </script>
@endsection
