<?php

namespace App\Http\Controllers;

use App\Models\Events;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class EventController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('admin.edite_event', ["events" => Events::get()]);
        
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.event');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'image' => ['file','image','required'],
        ]);
        $path = $request->file('image')->storeAs(
            'img/categories', md5(time()) . '.' . $request->file('image')->extension()
        );
        $url_image = $path;
        $event = new Events();
        $event->link = isset($request->link) ? $request->link : ''  ;
        $event->caption = isset($request->caption) ? $request->caption : ''  ;
        $event->img = $url_image;
        $event->save();
        session()->flash('status', 'successful');
        return redirect()->back();
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $data = Events::find($id);
        return view('admin.event',['data' => $data]);
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
            'image' => ['file','image'],
        ]);
        $data_update = $request->all();
        unset($data_update['_token']);
        unset($data_update['_method']);
        unset($data_update['id']);
        if(isset($data_update['image'])){
            unset($data_update['image']);
        }
        
        $data_update['link'] = isset($request->link) ? $request->link : '';
        $data_update['caption'] = isset($request->caption) ? $request->caption : '';
        $this_admin = Events::find($id);
        if($request->hasFile('image')){
            Storage::delete($this_admin->img);
            $path = $request->file('image')->storeAs(
                'img/categories', md5(time()) . '.' . $request->file('image')->extension()
            );
            $url_image = $path;
            $data_update['img'] = $url_image;
        }
        Events::where('id',$this_admin->id)->update($data_update);
        session()->flash('status', 'successful');
        return redirect()->back();
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $data = Events::find($id);
        Storage::delete($data->img);
        Events::where('id', $id)->delete();
        return response('File Deleted', 200);
    }

    public function getAll(){
        return response(Events::all());
    }
}
