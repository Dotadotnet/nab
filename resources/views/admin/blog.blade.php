@extends('admin.layout.main')
@section('title')
    اضافه کردن دسته بندی
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



    <form enctype="multipart/form-data" method="POST"
        action="@if ($status == 'edite') {{ route('blog.update', ['blog' => $data->id]) }}@elseif($status == 'create'){{ route('blog.store') }} @endif"
        autocomplete="off">
        @csrf
        @if ($status == 'edite')
            @method('PUT')
        @endif
        @php
            $inputs = [['name' => 'title', 'text' => 'عنوان', 'type' => 'fa-num']];
        @endphp
        @if ($status == 'edite')
            <input name="id" value="{{ $data->id }}" class=" hidden">
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
            <div class="grid md:grid-cols-2 gap-1 grid-cols-1">
                @foreach ($inputs as $input)
                    @component('admin.components.input', $input)
                    @endcomponent
                @endforeach
                @if ($status == 'edite')
                    <div class="flex justify-end pb-1 items-end">
                        <a href="/blog/{{ $data->id }}"
                            class="focus:outline-none hover:text-white show-order-info text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-lg rounded-lg text-sm size-11 flex justify-center items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-900">
                            <i class="fa text-2xl fa-eye" aria-hidden="true"></i>
                        </a>
                    </div>
                @endif
            </div>

            <br>
            <br>
            <textarea class=" hidden" name="caption"></textarea>
            <div class="document-editor">
                <div class="document-editor__toolbar"></div>
                <div class="document-editor__editable-container">
                    <div class="document-editor__editable">
                        @if (isset($data->amount))
                            {!! $data->amount !!}
                        @else
                            <p>توضیحات ...</p>
                        @endif
                    </div>
                </div>
            </div>
            <br>

            <br>
            <button type="button" class="submit">
                @if ($status == 'edite')
                    ثبت تغییرات
                @elseif ($status == 'create')
                    ثبت بلاگ
                @endif

            </button>
        </div>
    </form>
@endsection
