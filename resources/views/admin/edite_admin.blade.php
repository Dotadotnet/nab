@extends('admin.layout.main')
@section('title')
    حذف و تغییر ادمین ها
@endsection
@section('main')
    {{-- @foreach ($admins as $admin)
    {{$admin->name}}
@endforeach --}}
    @component('admin.components.table', [
        'data' => $admins,
        'column_name' => ['id' => 'آیدی','img' => "عکس",'name' => 'نام','last_name' => 'نام خانوادگی'],
        'table' => 'admin',
    ])
    @endcomponent
@endsection
