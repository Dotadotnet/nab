<?php

namespace App\Http\Controllers;

use App\Models\Admin;
use App\Models\BlockUsers;
use App\Models\Category;
use App\Models\Comment;
use App\Models\Config;
use App\Models\Order;
use App\Models\Product;
use App\Models\User;
use Illuminate\Http\Request;

class ConfigController extends Controller
{
    public function getConfig($key){
        response(Config::where(['key' => $key])->amount);
    }
    public function updateConfig($key,$value){
        response(Config::where(['key' => $key])->update(['amount' => $value]));
    }
    public function showDashbord(){
        // dd(Config::all());
        return view('admin.dashbord',[
            'configs' => Config::all(),
            'comments' => Comment::where(['status' => 0])->get(),
            'products' => Product::all(),
            'categorys' => Category::all(),
            'users' => User::all(),
            'admins' => Admin::all(),
            'blocks' => BlockUsers::all(),
            'orders' => Order::all(),
        ]);
    }
}
