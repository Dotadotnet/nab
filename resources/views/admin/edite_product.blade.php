@extends('admin.layout.main')
@section('title')
    حذف و تغییر ادمین ها
@endsection
@section('main')
    {{-- @foreach ($admins as $admin)
    {{$admin->name}}
@endforeach --}}
@php
    for ($i=0; $i < count($products); $i++) { 
        $products[$i]['link'] = '/product/' . $products[$i]['id'];
    }
@endphp
    @component('admin.components.table', [
        'data' => $products,
        'column_name' => ['id' => 'آیدی','img' => "عکس",'name' => 'نام','price' => 'قیمت',"link" => 'دیدن صحفه'],
        'table' => 'product',
    ])
    @endcomponent
@endsection