<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;


class ProfileController extends Controller
{
    function changeProfileImage(Request $request)
    {
        $path = $request->file('profile')->storeAs(
            'img/profile',
            md5(time()) . '.' . $request->file('profile')->extension()
        );
        $url = env("APP_URL") . '/storage/' . $path;
        $user = Auth::guard('user')->user();
        User::where(['id' => $user->id])->update(['img' => $url]);
        return response($url);
    }
    function changeInfoUse(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
        ]);
        $user = Auth::guard('user')->user();
        User::where(['id' => $user->id])->update(['name' => $request->name]);
        session()->flash('status', 'successful');
        return redirect()->back();
    }
    function inventoryIncrease(Request $request){
        $validated = $request->validate([
            'price' => 'numeric',
        ]);
        $user = Auth::guard('user')->user();
        $wallet = (int)User::find($user->id)->wallet + (int)$request->price ;
        User::where(['id' => $user->id])->update(['wallet' => $wallet]);
        session()->flash('status', 'successful');
        return redirect()->back();
    }
    function logout(Request $request)
    {
        auth()->guard('user')->logout();
        Session::flush();
        Session::put('success', 'You are logout sucessfully');
        return redirect(route('login'));
    }
    function getWallet(Request $request)
    {
        $user = Auth::guard('user')->user();
        return response(User::find($user->id)->wallet);
    }
}
