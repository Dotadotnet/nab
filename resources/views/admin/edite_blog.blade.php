@extends('admin.layout.main')
@section('title')
    حذف و تغییر ادمین ها
@endsection
@section('main')
    {{-- @foreach ($admins as $admin)
    {{$admin->name}}
@endforeach --}}
    @component('admin.components.table', [
        'data' => $blogs,
        'column_name' => ['id' => 'آیدی','img' => "عکس",'title' => 'عنوان',"link" => 'دیدن صحفه'],
        'table' => 'blog',
    ])


    @endcomponent
@endsection
