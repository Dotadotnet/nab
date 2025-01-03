<?php

namespace App\Http\Controllers;

use App\Models\BlockUsers;
use App\Models\User;
use App\Models\VerifyPhones;
use App\notification\sms;
use Illuminate\Http\Request;
use Illuminate\Routing\Route;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Validator;
use Melipayamak\Users;
use PDO;

class UserAuthController extends Controller
{
    public function save_phone(Request $request)
    {
        $data = [];
        $phone = null;
        $inputs = $request->all();
        foreach ($inputs as $input) {
            $data[$input['fild']] = $input['value'];
        }
        $data['phone'] = '09' . $data['phone'];
        $validator = Validator::make($data, [
            'phone' => 'required|max:11|min:11',
        ]);
        if ($validator->fails()) {
            return response($validator->errors());
        }
        $phone = $data['phone'];
        if (BlockUsers::where(['phone' => $phone])->count()) {
            return response(['phone' => ['این شماره توسط ادمین مسدود شده است']]);
        }
        $data = json_encode($data);
        VerifyPhones::where(['phone' => $phone])->delete();

        $code_ver = substr(md5(rand(10000, 99999)), -20);
        $link = route('verify_link', ['phone' => $phone, 'code' => $code_ver]);
        try {
            sms::send(". سلام لینک تایید شماره نقل ناب ، برای تایید شماره روی لینک زیر کیلیک بفرمایید \n $link", $phone);
        } catch (\Throwable $th) {
            return response(['phone' => ['شماره شما درست نمی باشد']]);
        }
        $verify_phones = new VerifyPhones();
        $verify_phones->phone = $phone;
        $verify_phones->data = $data;
        $verify_phones->code = $code_ver;
        $verify_phones->time = time();
        $verify_phones->save();
        return response('ok');
    }
    public function chack_verify($phone)
    {
        $phone_veri = VerifyPhones::where(['phone' => $phone, 'data' => 'accept'])->get();
        if (count($phone_veri) && time() - $phone_veri[0]->time < 200) {
            $user_now = User::where(['phone' => $phone_veri[0]->phone])->get();
            if (count($user_now)) {
                VerifyPhones::where(['phone' => $phone, 'data' => 'accept'])->delete();
                Auth::guard('user')->login($user_now[0], true);
                if ($user_now[0]->name) {
                    return response('cart');
                } else {
                    return response('profile');
                }
            } else {
                return response('no');
            }
        } else {
            return response('no');
        }
    }
    public function link_verify($phone, $code)
    {
        $phone_veri = VerifyPhones::where(['phone' => $phone, 'code' => $code])->get();
        if (count($phone_veri) && time() - $phone_veri[0]->time < 200) {
            $phone_veri = $phone_veri[0];
            $user_now = User::where(['phone' => $phone_veri->phone])->get();
            if (!count($user_now)) {
                $user = new User();
                $user->phone = $phone_veri->phone;
                $user->img = env('APP_URL') . '/' .  env("USER_IMAGE");
                $user->save();
                $user_now = User::where(['phone' => $phone_veri->phone])->get();
                Auth::guard('user')->login($user_now[0], true);
                VerifyPhones::where(['phone' => $phone, 'code' => $code])->update(['data' => 'accept']);
                return redirect('/profile');
            } else {
                Auth::guard('user')->login($user_now[0], true);
                VerifyPhones::where(['phone' => $phone, 'code' => $code])->update(['data' => 'accept']);
                return redirect('/cart');
            }
        } else {
            if (!count($phone_veri)) {
                return redirect('/login')->with('error', 'لینک درست نیست دوباره درخواست کنید');
            } else {
                return redirect('/login')->with('error', 'لینک منقضی شده است');
            }
        }
    }
    public function login(Request $request)
    {
        $phone = $request->phone ? '09' . $request->phone : '';
        $password = $request->password;
        $users = User::get();
        $all = ['phone' => $phone, 'password' => $password];
        $validator = Validator::make($all, [
            'phone' => 'required|max:11|min:11',
            'password' => 'required|min:8',
        ]);
        if ($validator->fails()) {
            return redirect('/login')->withErrors($validator)->withInput();
        }
        foreach ($users as $user) {
            if ($user->password == trim($password)  && $user->phone == trim($phone)) {
                Auth::guard('user')->login($user, true);
                $redirect  = isset($_COOKIE['redirect']) ? $_COOKIE['redirect'] : '/profile';
                return redirect($redirect)->with('success', 'You are Logged in sucessfully.');
            }
        }
        return back()->with('error_login', 'شماره موبایل یا رمز ورود نادرست است');
    }
    public function send_link_password($phone)
    {
        $data = ["phone" => "09" . $phone];
        $validator = Validator::make($data, [
            'phone' => 'required|max:11|min:11',
        ]);
        if ($validator->fails()) {
            return response($validator->errors());
        }
        $users = User::all();
        foreach ($users as $user) {
            $link = route('login');
            if ($user->phone === $data["phone"]) {
                sms::send("سلام $user->name.\nرمز عبور شما : $user->password\nبرای ورود به سایت به لینک زیر مراجعه کنید\n $link", $data["phone"]);
                return response('ok');
            }
        }
        return response('no', 200);
    }
    public function isLogin(Request $request)
    {
        if (Auth::guard('user')->user()) {
            return response(true);
        } else {
            return response(false);
        }
    }
    public function get_user()
    {
        $user = Auth::guard('user')->user();
        return response(User::find($user->id));
    }
}
