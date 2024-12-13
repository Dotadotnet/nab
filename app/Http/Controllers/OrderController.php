<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Order;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Stevebauman\Location\Facades\Location;

class OrderController extends Controller
{
    public function orderAllMap()
    {
        $orders = Order::where(['postal_code' => null, 'invoice' => null])->get()->toArray();
        $orders_result = [];
        for ($i = 0; $i < count($orders); $i++) {
            if (!$orders[$i]['lat'] || !$orders[$i]['lng']) {
                unset($orders[$i]);
            }
        }
        foreach ($orders as $order) {
            array_push($orders_result, $order);
        }
        return view('admin.map', ['orders' => $orders_result]);
    }
    public function orderAll()
    {
        $orders = Order::all()->toArray();
        for ($i = 0; $i < count($orders); $i++) {
            $orders[$i]['price'] = Helper::price((int)$orders[$i]['price']);
            $user = User::find($orders[$i]['user_id'])->toArray();
            unset($user['id']);
            $orders[$i] = array_merge($orders[$i], $user);
        }
        return view('admin.orders', ['orders' => $orders]);
    }
    public function deleteOrder($id)
    {
        return response(Order::where(['id' => $id])->delete());
    }
    public function orderAllPost()
    {
        $orders = Order::where(['lat' => null, 'lng' => null])->get()->toArray();
        for ($i = 0; $i < count($orders); $i++) {
            $orders[$i]['price'] = Helper::price((int)$orders[$i]['price']);
            $user = User::find($orders[$i]['user_id'])->toArray();
            unset($user['id']);
            $orders[$i] = array_merge($orders[$i], $user);
        }
        return view('admin.orders', ['orders' => $orders]);
    }
    public function orderAllCourier()
    {
        $orders = Order::where(['postal_code' => null])->get()->toArray();
        for ($i = 0; $i < count($orders); $i++) {
            $orders[$i]['price'] = Helper::price((int)$orders[$i]['price']);
            $user = User::find($orders[$i]['user_id'])->toArray();
            unset($user['id']);
            $orders[$i] = array_merge($orders[$i], $user);
        }
        return view('admin.orders', ['orders' => $orders]);
    }
    public function set_location(Request $request)
    {
        $user = Auth::guard('user')->user();
        $order = new Order();
        if ($request->invoice) {
            $order->order = json_encode($request->data);
            $order->user_id = $user->id;
            $order->price = (int)Helper::analyzeData($request->data)['int_price'];
            $order->color = 'red';
            $order->invoice = 'none';
            $order->status = 'ثبت نشده';
            $order->caption = 'فاکتور و مکان خود را ارسال نکردید';
            $order->save();
        } else if ($request->wallet) {
            $user = Auth::guard('user')->user();
            $wallet_new = $user->wallet - (int)Helper::analyzeData($request->data)['int_price'];
            if ($wallet_new < 0) {
                return response('موجودی شما کافی نیست', 400);
            } else {
                User::where(['id' => $user->id])->update(['wallet' => $wallet_new]);
            }
            $order->order = json_encode($request->data);
            $order->user_id = $user->id;
            $order->price = (int)Helper::analyzeData($request->data)['int_price'];
            $order->color = 'red';
            $order->status = 'ثبت نشده';
            $order->caption = 'مکان ارسال را اضافه نکردید';
            $order->save();
        } else {
            $order->order = json_encode($request->data);
            $order->user_id = $user->id;
            $order->price = (int)Helper::analyzeData($request->data)['int_price'];
            $order->color = 'red';
            $order->status = 'ثبت نشده';
            $order->caption = 'مکان ارسال را اضافه نکردید';
            $order->save();
        }
        return response($order->id);
    }


    public function order_set_location($id)
    {
        $order = Order::find($id);
        $zoom = 12;
        $text_set_location = 'برای تنظیم مقصد کلیک کنید';
        $user = Auth::guard('user')->user();
        $user = User::find($user->id);
        if ($order->user_id == $user->id) {
            $curl = curl_init();
            curl_setopt_array($curl, array(
                CURLOPT_RETURNTRANSFER => 1,
                CURLOPT_URL => 'https://api64.ipify.org?format=json',
                CURLOPT_USERAGENT => 'Codular Sample cURL Request'
            ));
            $resp = curl_exec($curl);
            curl_close($curl);
            $ip = json_decode($resp)->ip;
            $data = Helper::analyzeData(json_decode($order->order));
            $data['location'] = Location::get($ip);
            $data['postal_code'] = null;
            $data['plate'] = '';
            $data['unit'] = '';
            if ($order->plate) {
                $data['plate'] = $order->plate;
            }
            if ($order->unit) {
                $data['unit'] = $order->unit;
            }
            if ($order->lat && $order->lng) {
                $data['location'] = ['latitude' => $order->lat, 'longitude' => $order->lng];
                $zoom = 30;
                $text_set_location = 'برای تغییر مقصد کلیک کنید';
            } else if ($user->lat && $user->lng) {
                $data['location'] = ['latitude' => $user->lat, 'longitude' => $user->lng];
                $zoom = 30;
                $text_set_location = 'برای تغییر مقصد کلیک کنید';
            }
            if ($order->postal_code) {
                $data['postal_code'] =  $order->postal_code;
            }
            return view('panel.order_set_location', array_merge($data, $order->toArray()), ['id' => $id, 'zoom' => $zoom, 'text' => $text_set_location]);
        } else {
            return response('شما به این قسمت دسترسی ندارید', 401);
        }
    }

    public function change_plate($id, $plate)
    {
        $order = Order::find($id);
        $user = Auth::guard('user')->user();
        if ($order->user_id == $user->id) {
            User::where(['id' => $user->id])->update(['plate' => (int)$plate]);
        }
    }

    public function change_unit($id, $unit)
    {
        $order = Order::find($id);
        $user = Auth::guard('user')->user();
        if ($order->user_id == $user->id) {
            User::where(['id' => $user->id])->update(['unit' => (int)$unit]);
        }
    }
    public function change_location($id, $lat, $lng)
    {
        $order = Order::find($id);
        $user = Auth::guard('user')->user();
        if ($order->user_id == $user->id) {
            User::where(['id' => $user->id])->update(['lat' => $lat, 'lng' => $lng]);
        }
    }

    public function change_postal_code($id, $code)
    {
        $order = Order::find($id);
        $user = Auth::guard('user')->user();
        if ($order->user_id == $user->id) {
            User::where(['id' => $user->id])->update(['postal_code' => $code]);
        }
    }
    public function send_by_courier(Request $request)
    {
        $validated = $request->validate([
            'location' => 'required',
            'plate' => 'required|integer',
            'unit' => 'required|integer',
        ]);
        $id_order = explode("/", url()->previous());
        $id_order = end($id_order);
        $location = json_decode($request->location);
        Order::where(['id' => $id_order])->update([
            'lat' => $location[0],
            'lng' => $location[1],
            'plate' => $request->plate,
            'unit' => $request->unit,
            'postal_code' => null,
        ]);
        if (Order::find($id_order)->invoice == 'none') {
            Order::where(['id' => $id_order])->update([
                'time_send' => null,
                'status' => 'ثبت نشده',
                'color' => 'red',
                'caption' => 'فاکتور خود را ارسال نکردید',
            ]);
        } else if (Order::find($id_order)->invoice) {
            Order::where(['id' => $id_order])->update([
                'caption' => 'فاکتور شما در حال برسی است و با تایید ادمین ثبت میگردد',
                'status' => 'درحال برسی',
                'time_send' => null,
                'color' => 'yellow'
            ]);
        } else {
            Order::where(['id' => $id_order])->update([
                'time_send' => 'ارسال در حداکثر دو روز',
                'status' => 'ثبت شده',
                'color' => 'green',
                'caption' => 'سفارش شما با موفقیت به ثبت رسیده ولی هنوز آماده سازی نشده است',
            ]);
        }
        session()->flash('status', 'successful');
        return redirect()->back();
    }
    public function send_by_post(Request $request)
    {
        $validated = $request->validate([
            'postal_code' => 'required|max:10|min:10',
            'plate' => 'required|integer',
            'unit' => 'required|integer',
        ]);
        $id_order = explode("/", url()->previous());
        $id_order = end($id_order);
        Order::where(['id' => $id_order])->update([
            'lat' => null,
            'lng' => null,
            'plate' => $request->plate,
            'unit' => $request->unit,
            'postal_code' => $request->postal_code,
        ]);
        if (Order::find($id_order)->invoice == 'none') {
            Order::where(['id' => $id_order])->update([
                'time_send' => null,
                'status' => 'ثبت نشده',
                'color' => 'red',
                'caption' => 'فاکتور خود را ارسال نکردید',
            ]);
        } else if (Order::find($id_order)->invoice) {
            Order::where(['id' => $id_order])->update([
                'caption' => 'فاکتور شما در حال برسی است و با تایید ادمین ثبت میگردد',
                'status' => 'درحال برسی',
                'time_send' => null,
                'color' => 'yellow'
            ]);
        } else {
            Order::where(['id' => $id_order])->update([
                'time_send' => 'ارسال در حداکثر یک هفته',
                'status' => 'ثبت شده',
                'color' => 'green',
                'caption' => 'سفارش شما با موفقیت به ثبت رسیده ولی هنوز آماده سازی نشده است',
            ]);
        }
        session()->flash('status', 'successful');
        return redirect()->back();
    }

    public function add_invoice(Request $request, $id)
    {
        $order =  Order::find($id);
        $path = $request->file('image')->storeAs(
            'img/invoice',
            md5($id . time()) . '.' . $request->file('image')->extension()
        );
        $url = env("APP_URL") . '/storage/' . $path;
        if ($order->lat || $order->postal_code) {
            Order::where(['id' => $id])->update([
                'invoice' => $url,
                'caption' => 'فاکتور شما در حال برسی است و با تایید ادمین ثبت میگردد',
                'status' => 'درحال برسی',
                'time_send' => null,
                'color' => 'yellow'
            ]);
        } else {
            Order::where(['id' => $id])->update(['invoice' => $url, 'caption' => 'مکان ارسال را اضافه نکردید']);
        }
    }
    public function remove_invoice(Request $request, $id)
    {
        $order = new Order();
        Storage::delete(str_replace(env("APP_URL") . '/storage/', '',  $order->find($id)->invoice));
        if ($order->find($id)->lat || $order->find($id)->postal_code) {
            $order->where(['id' => $id])->update([
                'invoice' => 'none',
                'time_send' => null,
                'caption' => 'فاکتور خود را ارسال نکردید',
                'color' => 'red',
                'status' => 'ثبت نشده'
            ]);
        } else {
            $order->where(['id' => $id])->update([
                'invoice' => 'none',
                'time_send' => null,
                'caption' => 'فاکتور و مکان خود را ارسال نکردید',
                'color' => 'red',
                'status' => 'ثبت نشده'
            ]);
        }
    }
    public function show()
    {

        $data = [];
        $user = Auth::guard('user')->user();
        $my_orders = Order::where(['user_id' => $user->id])->get();
        foreach ($my_orders as $order) {
            $item = Helper::analyzeData(json_decode($order->order));
            $item = array_merge($order->toArray(), $item);
            array_push($data, $item);
        }
        return view('panel.orders', ['orders' => $data]);
    }
    public function orderChange($id, $item, $value, Request $request)
    {
        if ($value == 'null') {
            $value = null;
        }
        if ($request->ajax()) {
            return response(Order::where(['id' => $id])->update([$item => $value]));
        } else {
            Order::where(['id' => $id])->update([$item => $value]);
            return redirect()->back();
        }
    }
    public function getDataOrder($id)
    {
        $order = Order::find($id);
        $user = User::find($order->user_id)->toArray();
        foreach ($user as $key => $value) {
            if (!($key == 'phone' || $key == 'name')) {
                unset($user[$key]);
            }
        }
        $data = Helper::analyzeData(json_decode($order->order));
        return response(array_merge($data, $order->toArray(), $user));
    }
    public function rejectOrder($id)
    {
        $order = Order::find($id);
        $user = Auth::guard('user')->user();
        if ($order->user_id == $user->id) {
            $wallet = (int)$user->wallet + (int)$order->price;
            User::where(['id' => $user->id])->update(['wallet' => $wallet]);
            Order::where(['id' => $id])->delete();
        }
        return response('ok');
    }

    public function cancelOrder($id) {
        $order = Order::find($id);
        $user = Auth::guard('user')->user();
        if ($order->user_id == $user->id) {
            Order::where(['id' => $id])->delete();
        }
        return response('ok');
    }
}
