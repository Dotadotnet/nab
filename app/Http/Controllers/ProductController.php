<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Helpers\Helper;
use App\Models\Config;
use App\Models\ShoppingCart;

class ProductController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('admin.edite_product', ["products" => Product::get()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.product', ["categories" => Category::get()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // type
        $validated = $request->validate([
            'name' => 'required',
            'price' => 'required|numeric|min:4',
            'image.*' => ['file', 'image', 'required'],
            'category' => 'required',
            'type' => 'required',
        ]);
        $all_images = [];
        $images = $request->image;
        foreach ($images as $image) {
            $path = $image->storeAs(
                'img/products',
                md5(time() . $image->hashName() . rand(1, 9000000)) . '.' . $image->extension()
            );
            array_push($all_images, $path);
        }
        $product = new Product();
        $product->name = $request->name;
        $product->price = $request->price;
        $product->caption = $request->caption;
        $product->off = (int)$request->off ? $request->off : null;
        $product->category = $request->category;
        $product->type = $request->type;
        $product->img = json_encode($all_images);
        $product->save();
        session()->flash('status', 'successful');
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Product::find($id);
        return view('admin.product', ['data' => $data, 'categories' => Category::get()]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function shortLink(string $id)
    {
        $data = Product::find($id);
        $name = $data->name;
        return redirect(route('userShow', ['category' => str_replace(' ', '-', Category::find($data->category)->name), 'name' => str_replace(' ', '-', $name)]));
    }
    public function userShow($category, $name)
    {
        $id_category = Category::where(['name' => str_replace('-', ' ', $category)])->get()[0]->id;
        $data = ((Product::where(['category' => $id_category, 'name' => str_replace('-', ' ', $name)]))->get()[0]->toArray());
        $data['category'] = [(Category::find($data['category']))->name, $data['category']];
        $data['imgs'] = [];
        foreach (json_decode($data['img']) as $img) {
            array_push($data['imgs'], Storage::url($img));
        };
        $data['type'] = Helper::type_sell($data['type']);
        unset($data['img']);
        return view('user.show_product', $data);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'name' => 'required',
            'price' => 'required|numeric|min:4',
            'image.*' => ['file', 'required'],
            'category' => 'required',
            'type' => 'required',
        ]);
        $data_update = $request->all();
        unset($data_update['_token']);
        unset($data_update['_method']);
        unset($data_update['id']);
        if (isset($data_update['image'])) {
            unset($data_update['image']);
        }
        $data_update['off'] = (int)$data_update['off'] ? $data_update['off'] : null;
        $this_product = Product::find($id);
        if ($request->hasFile('image')) {
            foreach (json_decode($this_product->img) as $img) {
                Storage::delete($img);
            }
            $all_images = [];
            $images = $request->image;
            foreach ($images as $image) {
                $path = $image->storeAs(
                    'img/products',
                    md5(time() . $image->hashName() . rand(1, 9000000)) . '.' . $image->extension()
                );
                array_push($all_images, $path);
            }
            $data_update['img'] = json_encode($all_images);
        }
        Product::where('id', $this_product->id)->update($data_update);
        session()->flash('status', 'successful');
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = Product::find($id);
        foreach (json_decode($data->img) as $img) {
            Storage::delete($img);
        }
        ShoppingCart::where('product_id', $id)->delete();
        Product::where('id', $id)->delete();
        return response('File Deleted', 200);
    }

    public function selectedProductsView()
    {
        $selected = json_decode(Config::where(['key' => 'favorites'])->get()[0]->amount);
        $product = Product::all();

        return view('admin.selected_products', ['products' => $product, 'selecteds' => $selected]);
    }
    public function selectedItemsApi()
    {
        $ids = json_decode(Config::where(['key' => 'favorites'])->get()[0]->amount);
        $result = [];
        foreach ($ids as $id) {
            array_push($result, Product::find($id));
        }
        return response($result);
    }
}
