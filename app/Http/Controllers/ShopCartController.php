<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Config;
use App\Models\Product;
use App\Models\ShoppingCart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use LDAP\Result;
use Stevebauman\Location\Facades\Location;

class ShopCartController extends Controller
{
  public function add_remove_cart($id)
  {
    $user = Auth::guard('user')->user();
    if (!$user) {
      return response(false);
    } else {
      if (ShoppingCart::where(['user_id' => $user->id, 'product_id' => $id])->count()) {
        ShoppingCart::where(['user_id' => $user->id, 'product_id' => $id])->delete();
        return response('removed');
      } else {
        $cart = new ShoppingCart();
        $cart->user_id = $user->id;
        $cart->product_id = $id;
        $cart->save();
        return response('added');
      }
    }
  }
  public function is_added($id)
  {
    $user = Auth::guard('user')->user();
    if (ShoppingCart::where(['user_id' => $user->id, 'product_id' => $id])->count()) {
      return response(true);
    } else {
      return response(false);
    }
  }
  public function show(Request $request)
  {
    $user = Auth::guard('user')->user();



    $configs = Config::all();
    return view('panel.cart', ['min' => $configs[0]->amount, 'price_send' => $configs[1]->amount]);
  }

  public function userItemCart($id)
  {
    $items = ShoppingCart::where(['user_id' => $id])->get();
    for ($i = 0; $i < count($items); $i++) {
      $items[$i]['data'] = Product::find($items[$i]['product_id']);
    }
    return response($items);
  }
  public function remove_cart($id)
  {
    $user = Auth::guard('user')->user();
    ShoppingCart::where(['user_id' => $user->id, 'product_id' => $id])->delete();
    response('ok');
  }
  public function analyzeData($data)
  {
    return response(Helper::analyzeData($data));
  }

  public function ShopCartsUser()
  {
    $user = Auth::guard('user')->user();
    return response(ShoppingCart::where(['user_id' => $user->id])->get());
  }

  public function mergeDataCart(Request $request)
  {
    $user = Auth::guard('user')->user();
    ShoppingCart::where(['user_id' => $user->id])->delete();
    foreach ($request->data as $cart) {
      $cart_shop = new ShoppingCart();
      $cart_shop->user_id = $user->id;
      $cart_shop->product_id = $cart['id'];
      $cart_shop->save();
    }
    return response('ok');
  }
  public function translateData(Request $request){
    $all = [];
    foreach($request['data'] as $item){
      if(Product::find($item['id'])){
        $product = Product::find($item['id'])->toArray();
        $product['count'] = $item['count'];
        array_push($all,$product);
      }
    }
    return response($all);
  }
}
