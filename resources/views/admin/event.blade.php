@extends('admin.layout.main')
@section('title')
    اضافه کردن رویداد
@endsection
@section('main')
    <?php
    $current_url = url()->current();
    $array_current_url = explode('/', $current_url);
    unset($array_current_url[0]);
    unset($array_current_url[1]);
    unset($array_current_url[2]);
    if ($array_current_url[3] == 'panel' && $array_current_url[5] == 'create') {
        $status = 'create';
    } else {
        $status = 'edite';
    }
    ?>

    <style>
        .filepond--item {
            width: calc(100% - 0.5em);
        }
    </style>

    <form enctype="multipart/form-data" method="POST"
        action="@if($status == 'edite'){{route('event.update',["event" => $data->id])}}@elseif($status == 'create'){{route('event.store')}}@endif"
        autocomplete="off">
        @csrf
        @if ($status == 'edite')
        @method('PUT')
        @endif
        @php
            $inputs = [['name' => 'link', 'text' => 'لینک', 'type' => 'en-num']];
        @endphp
        @if ($status == 'edite')
        <input name="id" value="{{$data->id}}" class=" hidden" >
            @php
                for ($i = 0; $i < count($inputs); $i++) {
                    foreach ($data->getAttributes() as $item => $value) {
                        if ($inputs[$i]['name'] == $item) {
                            $inputs[$i]['value'] = $value;
                        }
                    }
                }
                

                // dd($inputs);
            @endphp
        @endif
        <div class=" flex flex-col">
            <div class=" grid grid-cols-1">
                @foreach ($inputs as $input)
                    @component('admin.components.input', $input)
                    @endcomponent
                @endforeach
            </div>
            <br>
            @if ($status == 'edite')
                <h4 class=" font-parastoo text-black dark:text-white text-xl">عکس قبلی که بارگزاری شده :</h4>
                <br>
                <div class=" flex justify-center items-center">
                    <img style="transition: 1s;"
                        class=" hover:scale-105 shadow-md dark:shadow-white shadow-dark-100 rounded-md border-[3px] border-solid size-100 border-adminprimary-100 "
                        src="{{ Storage::url($data->img) }}">
                </div>
            @endif
            <br>
            <br>
            <div class="en">
                <input type="file" class="filepond" name="image" data-allow-reorder="true" data-max-files="1">
            </div>
            <button type="button" class="submit">
                @if ($status == 'edite')
                    ثبت تغییرات
                @elseif ($status == 'create')
                    ثبت دسته بندی
                @endif

            </button>
        </div>
    </form>


    @if ($status == 'create')
        <script type="module">
            FilePond.create(
                document.querySelector('input[type~=file]'), {
                    labelIdle: "عکس مورد نظر را بارگزاری کنید",
                    storeAsFile: true,
                }
            );
        </script>
    @else
        <script type="module">
            FilePond.create(
                document.querySelector('input[type~=file]'), {
                    labelIdle: 'عکس جدید را بار گزاری کنید',
                    storeAsFile: true,
                }
            );
        </script>
    @endif
@endsection
