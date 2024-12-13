<?php

namespace App\Http\Controllers;

use App\Http\Requests\AdminRequest;
use App\Models\Admin;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\Session;
use Illuminate\Support\Facades\Storage;
use Stichoza\GoogleTranslate\GoogleTranslate;

class AdminController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        if (!Auth::guard('admin')->user()->is_super_admin) {
            return response('Unauthorized.', 401);
        }
        return view('admin.edite_admin', ["admins" => Admin::where('is_super_admin', 0)->get()]);
    }

    public function create()
    {
        if (!Auth::guard('admin')->user()->is_super_admin) {
            return response('Unauthorized.', 401);
        }
        return view('admin.admin');
    }
    /**
     * Store a newly created resource in storage.
     */
    public function store(AdminRequest $request)
    {
        if (!Auth::guard('admin')->user()->is_super_admin) {
            return response('Unauthorized.', 401);
        }
        if ($request->filled('password')) {
            $password = $request->password;
        } else {
            $password =  GoogleTranslate::trans($request->name, 'en', 'fa') . '_' . random_int(100, 999);
        }
        $path = $request->file('image')->storeAs(
            'img/admins',
            md5(time()) . '.' . $request->file('image')->extension()
        );
        $url_image = $path;
        $admin = new Admin();
        $admin->name = $request->name;
        $admin->last_name = $request->last_name;
        $admin->phone = $request->phone;
        $admin->meli_code = $request->meli_code;
        $admin->password = $password;
        $admin->img = $url_image;
        $admin->save();
        session()->flash('status', 'successful');
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show($admin)
    {
        if (!(Auth::guard('admin')->user()->is_super_admin || Auth::guard('admin')->user()->id == $admin)) {
            return response('Unauthorized.', 401);
        }
        $data = Admin::find($admin);
        return view('admin.admin', ['data' => $data]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(AdminRequest $request, $admin)
    {
        if (!(Auth::guard('admin')->user()->is_super_admin || Auth::guard('admin')->user()->id == $admin)) {
            return response('Unauthorized.', 401);
        }
        $data_update = $request->all();
        unset($data_update['_token']);
        unset($data_update['_method']);
        unset($data_update['id']);
        if (isset($data_update['image'])) {
            unset($data_update['image']);
        }
        if ($request->filled('password')) {
            $data_update['password'] = $request->password;
        } else {
            $data_update['password'] =  GoogleTranslate::trans($request->name, 'en', 'fa') . '_' . random_int(100, 999);
        }
        $this_admin = Admin::find($admin);
        if ($request->hasFile('image')) {
            Storage::delete($this_admin->img);
            $path = $request->file('image')->storeAs(
                'img/admins',
                md5(time()) . '.' . $request->file('image')->extension()
            );
            $url_image = $path;
            $data_update['img'] = $url_image;
        }
        Admin::where('id', $this_admin->id)->update($data_update);
        session()->flash('status', 'successful');
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($admin)
    {
        if (!Auth::guard('admin')->user()->is_super_admin) {
            return response('Unauthorized.', 401);
        }
        $admin_data = Admin::find($admin);
        Storage::delete($admin_data->img);
        Admin::where('id', $admin)->delete();
        return response('File Deleted', 200);
    }
}
