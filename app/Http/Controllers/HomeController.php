<?php

namespace App\Http\Controllers;


use App\Models\Category;
use App\Models\Events;
use App\Models\Product;
use App\notification\sms;
use Illuminate\Console\Scheduling\Event;
use Illuminate\Http\Request;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Contracts\Support\Renderable
     */
    public function index()
    {
        return view('user.home', [
            'events' => Events::all(),
            'categorys' => Category::all()->toArray(),
            'products' => Product::all()->toArray(),
        ]);
    }
    public function showAll()
    {
        
        return view('user.all_items', [
            'events' => Events::all(),
            'categorys' => Category::all(),
            'products' => Product::all(),
        ]);
    }
    public function call()
    {
        return view('user.call');
    }
    public function sendSms(){
        sms::send("سلام", '09999935106');
    }
}
