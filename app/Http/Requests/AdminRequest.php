<?php

namespace App\Http\Requests;

use App\Models\Admin;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Http\Request;

class AdminRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
     $phone = ['required','numeric','digits:11','unique:App\Models\Admin,phone'];
     $meli_code = ['required','numeric','digits:10','unique:App\Models\Admin,meli_code'];
     $image = ['file','image','required'];
     if(Request::isMethod('PUT')){
        array_pop($image);
        $admin = new Admin();
        $this_admin = $admin->find(Request::input('id'));
        if($this_admin->phone == Request::input('phone')){
            array_pop($phone);
        }
        if($this_admin->meli_code == Request::input('meli_code')){
            array_pop($meli_code);
        }
     }
        return [
            'name' => ['required'],
            'last_name' => ['required'],
            'phone' => $phone,
            'meli_code' => $meli_code,
            'image' => $image
        ];
    }
}
