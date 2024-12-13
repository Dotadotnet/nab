<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Session;

class AdminAuthController extends Controller
{
    public function getLogin()
    {
        return view('auth.admin.login');
    }

    public function postLogin(Request $request)
    {
        $admins = Admin::get();
        $credentials = $this->validate($request, [
            'meli_code' => 'required',
            'password' => 'required',
        ]);
        foreach ($admins as $admin) {
            if ($admin->password == trim($request->password)  && $admin->meli_code == trim($request->meli_code)) {
                Auth::guard('admin')->login($admin,true);
                return redirect()->route('dashbord')->with('success', 'You are Logged in sucessfully.');
            }
        }
        return back()->with('error', 'رمز و پسورد اشتباه است !!!');
    }

    public function adminLogout(Request $request)
    {
        auth()->guard('admin')->logout();
        Session::flush();
        Session::put('success', 'You are logout sucessfully');
        return redirect(route('admin_login'));
    }
}
