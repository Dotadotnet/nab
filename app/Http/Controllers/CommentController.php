<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Morilog\Jalali\Jalalian;

class CommentController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return view('admin.comments', ['data' => Comment::where(['status' => 0])->get()]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('admin.comments_accepted', ['data' => Comment::where(['status' => 1])->orderBy('id', 'DESC')->get()]);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request) {}

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
        
    }

    public function replay(string $id , string $value){
        if($value == 'null'){
            Comment::where(['id' => $id])->update(['replay' => null]);
        }else{
            Comment::where(['id' => $id])->update(['replay' => $value]);
        }
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        Comment::where(['id' => $id])->update(['status' => 1]);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        Comment::where(['id' => $id])->delete();
    }
    public function getComment($id)
    {
        $prev_url =  url()->previous();
        $page = str_contains($prev_url, '/blog/') ? 'blog' : 'product';
        if (str_contains($prev_url, 'about')) {
            $page = 'blog';
        }
        $comments = Comment::where(['page_id' => $id, 'page' => $page,'status' => 1])->get()->toArray();
        for ($i = 0; $i < count($comments); $i++) {
            if ($comments[$i]['user_id']) {
                $comments[$i]['img'] = User::find($comments[$i]['user_id'])->img;
            } else {
                $comments[$i]['img'] = env('APP_URL') . '/' .  env("USER_IMAGE");
            }
            $time_converted = explode(' ', Jalalian::forge($comments[$i]['time'])->format('%d %B %Y h:m:s'));
            $comments[$i]['time'] = ['clock' => $time_converted[3], 'year' => $time_converted[2], 'month' => $time_converted[1], 'day' => $time_converted[0],];
        }
        return response($comments);
    }
    public function add_comment_user(Request $request)
    {
        $prev_url =  url()->previous();
        if (empty($request->text)) {
            return response('بخش کامنت نمی توان خالی باشد !!!');
        }
        $user_id = 0;
        if (Auth::guard('user')->user()) {
            $user_id = Auth::guard('user')->user()->id;
        }
        $page = str_contains($prev_url, '/blog/') ? 'blog' : 'product';
        if (str_contains($prev_url, 'about')) {
            $page = 'blog';
        }
        $comment = new Comment();
        $comment->user_id = $user_id;
        $comment->page_id = $request->page_id;
        $comment->text = $request->text;
        $comment->page = $page;
        $comment->name = $request->name;
        $comment->status = 0;
        $comment->save();
        return response('کامنت شما با موفقیت ارسال شد و پس از تایید ادمین قرار میگیرد');
    }
}
