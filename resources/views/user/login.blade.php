<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>ورود</title>
    <link rel="shortcut icon" href="{{ asset('image/user.png') }}" type="image/x-icon">
    <script src="https://kit.fontawesome.com/4fa9804fb1.js" crossorigin="anonymous"></script>
    @vite('resources/css/auth.css')
    <meta name="csrf-token" content="{{ csrf_token() }}">
    <link rel="stylesheet" href="{{ asset('css/animate.css') }}">
</head>
<body class="p-10">
    <img src="" style="filter: brightness(50%)"
        class=" object-cover backgrand-image fixed top-0 right-0 size-full" alt="">

    <div class="fixed info-div    top-0 right-0 size-full flex justify-center items-center p-4 z-20">
        <div class="w-full sm:w-3/4 max-w-[500px] rounded-lg border-2 border-white">
            <div class="w-full -z-30 bg-light-opacity-30 rounded-lg backdrop-blur  p-2">
                <form action="/login-user" method="POST">
                    @csrf
                    <h3 class=" font-vazir text-primary-200 text-center font-bold pt-2 pb-4 text-xl ">فرم ورود</h3>
                    <div class="relative input-admin password-div">
                        <input id="password" value="{{ old('password') }}" name="password" type="password"
                            data-type="en-num" id="floating_outlined"
                            class="block bg-white pl-12 pr-2.5 pb-2.5 pt-4 w-full text-md text-gray-900 bg-transparent rounded-lg border-1 border-blue-500 appearance-none focus:outline-0 focus:border-blue-600 peer"
                            placeholder=" " />
                        <label for="floating_outlined"
                            class="absolute text-[16px] text-primary-200 after:content-[':'] after:mr-1 after:font-bold duration-300 transform -translate-y-4 scale-[1] font-bold top-[3px] z-10 origin-[0] peer-placeholder-shown:after:content-none peer-placeholder-shown:text-gray-500 peer-placeholder-shown:after:text-gray-500 px-2 peer-focus:px-2 peer-focus:text-primary-200  peer-placeholder-shown:scale-100  peer-placeholder-shown:font-light  peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:font-bold peer-focus:top-[3px] peer-focus:text-primary-200 peer-focus:after:content-[':'] peer-focus:after:mr-1 peer-focus:after:text-primary-200 peer-focus:after:font-bold peer-focus:scale-[1] peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">رمز
                            عبور</label>
                        <div class="absolute h-full flex justify-center items-center left-2 top-0 ">
                            <span
                                class="size-9 bg-primary-200 text-white rounded-md cursor-pointer group   flex justify-center items-center ">
                                <i class="fa fa-eye transition-[0.5s] group-hover:font-bold" aria-hidden="true"></i>
                                </sapn>
                        </div>
                    </div>
                    <br>
                    <div class="relative phone-div">
                        <div class="absolute hidden send-button h-full flex justify-center items-center right-2 top-0 ">
                            <span
                                class="h-9 px-1 send-button bg-primary-200 text-white rounded-md cursor-pointer group   flex justify-center items-center ">
                                <i class="fa ml-1 fa-paper-plane" aria-hidden="true"></i> ارسال کد تایید
                                </sapn>
                        </div>

                        <input id="phone" name="phone" onkeyup="typePhone(event,this)" type="number"
                            id="floating_outlined" value="{{ old('phone') }}"
                            class="block bg-white px-12 ltr text-left  pb-3 pt-4 w-full text-md text-gray-900 bg-transparent rounded-lg border-1 border-blue-500 appearance-none focus:outline-0 focus:border-blue-600 peer"
                            placeholder=" " />
                        <label for="floating_outlined"
                            class="absolute text-[16px] text-primary-200 after:mr-1 after:font-bold duration-300 transform scale-[1] font-bold top-[13px] z-10 origin-[0] peer-placeholder-shown:after:content-none peer-placeholder-shown:text-gray-500 peer-placeholder-shown:after:text-gray-500 px-2 peer-focus:px-2 peer-focus:text-primary-200  peer-placeholder-shown:scale-100  peer-placeholder-shown:font-light peer-focus:font-bold peer-focus:text-primary-200 peer-focus:after:mr-1 peer-focus:after:text-primary-200 peer-focus:after:font-bold peer-focus:scale-[1] rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1">شماره
                            تماس</label>
                        <div class="absolute h-full flex justify-center items-center left-2 top-0 ">
                            <span
                                class="size-9 text-white bg-primary-200 rounded-md cursor-default select-none group pt-1   flex justify-center items-center ">
                                09
                                </sapn>
                        </div>
                    </div>
                    <div class="text-center mt-4">
                        <button
                            class="text-white mute login text-md font-bold bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 rounded-lg px-5 py-2.5 text-center me-2 mb-2">
                            ورود
                        </button>
                    </div>
                </form>
                <a class="font-bold mr-2 inline-block redirect-link text-primary-200 hover:text-primary-100"
                    href="/register">آیا قبلا ثبت نام نکردید ؟</a>
                <br>
                <a class="font-bold mr-2 mt-1 inline-block redirect-link text-primary-200 hover:text-primary-100"
                    href="/forgot-password">آیا رمز عبور خود را فراموش کردید ؟</a>

            </div>
        </div>
    </div>


    <div>
        @php
            if ($errors->any()) {
                $errors = $errors->all();
            } elseif (Session::get('status') == 'successful') {
                $errors = 'successful';
            }
        @endphp
    </div>
    <link rel="stylesheet" href="{{ asset('css/polipop.min.css') }}" />
    <script src="{{ asset('js/polipop.min.js') }}"></script>
    <script>
        var old_value_phone_input = '';

        function typePhone(event, el) {
            var key = event.keyCode || event.charCode;
            if (key == 8 || key == 46) {
                old_value_phone_input = event.target.value;
                return false;
            }
            if (!el.value || el.value.length > 9) {
                el.value = old_value_phone_input;
            }
            old_value_phone_input = el.value;
        }
        var errors = @json($errors);
        var polipop = new Polipop('mypolipop', {
            layout: 'popups',
            pool: 2,
            life: 2000,
        });
    </script>

    @vite('resources/js/auth.js')
    @if (Session::get('error_login'))
        <script>
            var error = @json(Session::get('error_login'));
            polipop.add({
                content: error,
                title: 'مقادیر وارد شده صحیح نمی باشد !!!',
                type: 'error',
            });
        </script>
    @endif
    <script type="text/javascript">window.$crisp=[];window.CRISP_WEBSITE_ID="fb668e62-2aa3-4e8a-8c23-6bc77ce7e50e";(function(){d=document;s=d.createElement("script");s.src="https://client.crisp.chat/l.js";s.async=1;d.getElementsByTagName("head")[0].appendChild(s);})();</script>

</body>

</html>
