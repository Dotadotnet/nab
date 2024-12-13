<?php

namespace App\Http\Controllers;

use App\Helpers\Helper;
use App\Models\Blog;
use App\Models\Category;
use App\Models\Comment;
use App\Models\Config as ModelsConfig;
use DateTime;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Http\Request;
use Morilog\Jalali\Jalalian;
use App\Models\Config;
use App\Models\Product;

class ApiController extends Controller
{
    public function allCategory()
    {
        $categoies = Category::all();
        $products = Product::all();
        for ($i = 0; $i < count($categoies); $i++) {
            $categoies[$i]['count'] = 0;
            foreach ($products as $product) {
                if ($product->category == $categoies[$i]['id']) {
                    $categoies[$i]['count'] = $categoies[$i]['count'] + 1;
                }
            }
        }
        return response($categoies);
    }
    public function model_new(string $name_model)
    {
        if (ucfirst($name_model) == 'Admin' || ucfirst($name_model) == 'Order' || ucfirst($name_model) == 'User') {
            return response('دسترسی محدود است', 403);
        }
        $full_name_model = "App\Models\\" . ucfirst($name_model);
        try {
            $model_class = new $full_name_model();
        } catch (\Throwable $th) {
            http_response_code(400);
            echo $th->getMessage();
            die();
        }
        return $model_class;
    }

    public function all($model)
    {
        $model_class = $this->model_new($model);
        return response($model_class->get());
    }
    public function get($model, $key, $value)
    {
        $model_class = $this->model_new($model);
        return response($model_class::where([$key => $value])->get());
    }


    public function blogAllApi()
    {
        $blogs = Blog::all()->toArray();
        for ($i = 0; $i < count($blogs); $i++) {
            $blogs[$i]['link'] = '/blog/' . $blogs[$i]['id'];
            foreach (glob(storage_path('app\public\img\blog') . '\*.*') as $file) {
                $file_name = str_replace(storage_path('app\public\img\blog') . '\\', '', $file);
                if (str_contains($blogs[$i]['amount'],  $file_name)) {
                    $blogs[$i]['img'] = '/img/blog/' . $file_name;
                    $blogs[$i]['data'] = explode(' ', Jalalian::forge($blogs[$i]['created_at'])->format('%d %B %Y h:m:s'));
                }
            }
        }
        unset($blogs[0]);
        return response(array_reverse($blogs));
    }
}
