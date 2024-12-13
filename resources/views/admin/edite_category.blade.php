@extends('admin.layout.main')
@section('title')
    حذف و تغییر ادمین ها
@endsection
@section('main')
    {{-- @foreach ($admins as $admin)
    {{$admin->name}}
@endforeach --}}
    @component('admin.components.table', [
        'data' => $categories,
        'column_name' => ['id' => 'آیدی','img' => "عکس",'name' => 'نام'],
        'table' => 'category',
    ])
    @endcomponent
@endsection
