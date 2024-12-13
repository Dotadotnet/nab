<?php

namespace App\Http\Controllers;

use App\Models\BlockUsers;
use App\Models\Order;
use App\Models\ShoppingCart;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class BlockUserController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('admin.block', ['users' => BlockUsers::all()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $id = $request->id;
        $validated = $request->validate([
            'id' => 'required',
        ]);
        $block = new BlockUsers();
        $block->phone = User::find($id)->phone;
        $block->save();
        ShoppingCart::where(['user_id' => $id])->delete();
        $orders = Order::where(['user_id' => $id])->get();
        foreach ($orders as $order) {
            $invoice = $order->invoice;
            if (str_contains($invoice, env('APP_URL') . '/storage/')) {
                $path = str_replace(env('APP_URL') . '/storage/', '', $invoice);
                Storage::delete($path);
            }
            Order::where(['id' => $order->id])->delete();
        }
        User::where(['id' => $id])->delete();
        session()->flash('status', 'successful');
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */

    public function destroy(string $id)
    {
        BlockUsers::where(['id' => $id])->delete();
        session()->flash('status', 'successful');
        return redirect()->back();
    }
    public function deletePhone(Request $request)
    {
        $id = $request->id;
        BlockUsers::where(['id' => $id])->delete();
        session()->flash('status', 'successful');
        return redirect()->back();
    }
}
