@extends('admin.layout.main')
@section('title')
    حذف و تغییر ادمین ها
@endsection
@section('main')
    {{-- @foreach ($admins as $admin)
    {{$admin->name}}
@endforeach --}}
    @component('admin.components.table', [
        'data' => $events,
        'column_name' => ['id' => 'آیدی', 'img' => 'عکس' , 'link' => "لینک"],
        'table' => 'event',
    ])
    @endcomponent
@endsection
