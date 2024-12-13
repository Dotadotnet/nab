<?php

namespace App\Http\Controllers;

use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('admin.edite_category', ["categories" => Category::get()]);
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.category');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'name' => 'required',
            'image' => ['file','image','required'],
        ]);
        $path = $request->file('image')->storeAs(
            'img/categories', md5(time()) . '.' . $request->file('image')->extension()
        );
        $url_image = $path;
        $category = new Category();
        $category->name = $request->name;
        $category->img = $url_image;
        $category->save();
        session()->flash('status', 'successful');
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Category::find($id);
        return view('admin.category',['data' => $data]);
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
        $validated = $request->validate([
            'name' => 'required',
            'image' => ['file','image'],
        ]);
        $data_update = $request->all();
        unset($data_update['_token']);
        unset($data_update['_method']);
        unset($data_update['id']);
        if(isset($data_update['image'])){
            unset($data_update['image']);
        }
        $this_admin = Category::find($id);
        if($request->hasFile('image')){
            Storage::delete($this_admin->img);
            $path = $request->file('image')->storeAs(
                'img/categories', md5(time()) . '.' . $request->file('image')->extension()
            );
            $url_image = $path;
            $data_update['img'] = $url_image;
        }
        Category::where('id',$this_admin->id)->update($data_update);
        session()->flash('status', 'successful');
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = Category::find($id);
        Storage::delete($data->img);
        Category::where('id', $id)->delete();
        return response('File Deleted', 200);
    }
}
