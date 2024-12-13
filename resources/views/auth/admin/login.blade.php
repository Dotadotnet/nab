<html lang="fa">

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- CSRF Token -->
    <meta name="csrf-token" content="1KBmdwxBV3GAIcyNLftCfy6dEvmKiFGqYJmLPl1S">

    <title>ورود به پنل ادمین</title>

    <!-- Fonts -->
    <link rel="dns-prefetch" href="//fonts.bunny.net">
    <link href="https://fonts.bunny.net/css?family=Nunito" rel="stylesheet">

    <!-- Scripts -->
    @vite('resources/sass/app.scss')

<body>
    <div id="app">
        <main class="py-4">
            <div class="container">
                <div class="row justify-content-center">
                    <div class="col-md-8">
                        <div class="card">
                            <div class="card-header" style="text-align: right;">ورود به پنل ادمین</div>
                            
                            <div class="card-body">
                                @if(Session::get('error'))
                                <div class="alert alert-danger" role="alert">
                                    {{Session::get('error')}}
                                </div>
                                @endif
                                <form method="POST" action="{{ route('adminLoginPost') }}">
                                    @csrf
                                    <div class="row m-3" dir="rtl">
                                        <label for="meli_code" class="col-md-4 col-form-label text-md-end">کد ملی
                                            :</label>
                                        <div class="col-md-6">
                                            <input id="meli_code" type="text" class="form-control " name="meli_code"
                                                value="{{old('meli_code')}}" required="" autofocus="">

                                        </div>
                                    </div>

                                    <div class="row m-3" dir="rtl">
                                        <label for="password" class="col-md-4 col-form-label text-md-end">رمز ورود
                                            :</label>

                                        <div class="col-md-6">
                                            <input id="password" type="text" class="form-control " name="password"
                                                value="{{old('password')}}" autocomplete="current-password">

                                        </div>
                                    </div>

                                    <div class="row mb-3">

                                    </div>

                                    <div class="row mb-0">
                                        <div class="col-md-8 offset-md-4">
                                            <button type="submit" class="btn btn-primary">
                                                ورود
                                            </button>


                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </div>


</body>

</html>
